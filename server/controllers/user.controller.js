const {
	registerValidationSchema,
	loginValidationSchema,
} = require("../validation/validationSchema");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const PostModel = require("../models/post.model");
const { cloudinary } = require("../utils/cloudinary");

const loginController = async (req, res) => {
	const { error } = loginValidationSchema.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(200).send({ message: errorMessage, status: "bad" });
	}
	const { username, password } = req.body;

	try {
		const user = await UserModel.findOne({ username: username });

		if (user) {
			const hashedPassword = user.password;
			bcrypt
				.compare(password, hashedPassword)
				.then((isMatch) => {
					if (isMatch) {
						jwt.sign(
							{
								userId: user._id,
								username: user.username,
								password: user.password,
							},
							jwtSecret,
							(err, token) => {
								if (err) throw err;
								res.status(200).send({
									message: "Login successful",
									token: token,
									status: "ok",
								});
							}
						);
					} else {
						res.send({ message: "Incorrect Password", status: "bad" });
					}
				})
				.catch((err) => {
					console.log(err);
					res.send({ message: "Oops ! Something went wrong", status: "bad" });
				});
		} else {
			res.send({ message: "User not found", status: "bad" });
		}
	} catch (error) {
		console.log(error);
		res.send({ message: "Something went wrong", status: "bad" });
	}
};

const registerController = async (req, res) => {
	const { error } = registerValidationSchema.validate(req.body);

	if (error) {
		const errorMessage = error.details[0].message;
		res.status(200).send({ message: errorMessage, status: "bad" });
	}

	const { username, password, email, uploadImage } = req.body;

	try {
		let uploadedResponse;

		if (uploadImage) {
			const fileStr = uploadImage;
			uploadedResponse = await cloudinary.v2.uploader.upload(fileStr, {
				folder: "user_profiles",
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await UserModel.findOne({ username: username });

		if (user) {
			res.send({
				message: `Username ${username} not available`,
				status: "bad",
			});
		} else {
			try {
				const user = await UserModel.findOne({ email: email });
				if (user) {
					res.send({ message: `Email ${email} already in use`, status: "bad" });
				} else {
					const createdUser = new UserModel({
						email: email,
						password: hashedPassword,
						username: username,
						uploadImage: uploadedResponse?.secure_url,
					});

					createdUser
						.save()
						.then(
							jwt.sign(
								{
									userId: createdUser._id,
									username: username,
									password: password,
								},
								jwtSecret,
								(err, token) => {
									if (err) {
										throw err;
									} else {
										res.status(200).send({
											message: "Registration successful",
											token: token,
											status: "ok",
										});
									}
								}
							)
						)
						.catch((err) => {
							res.send({ msg: "Something went wrong", status: "bad" });
							console.log(err);
						});
				}
			} catch (error) {
				console.log(error);
				res.send({ message: "Something went wrong", status: "bad" });
			}
		}
	} catch (error) {
		console.log(error);
		res.send({ message: "Something went wrong, Check your intenet connection and try again", status: "bad" });
	}
};

const getUserInfo = async (req, res) => {
	const { userId } = req.data;
	const user = await UserModel.findOne({ _id: userId });
	const { username, email, uploadImage, _id } = user;
	res.send({
		_id: _id,
		username: username,
		email: email,
		uploadImage: uploadImage,
	});
};

const protectedroute = (req, res) => {};

const fetchUsers = async (req, res) => {
	const data = await UserModel.find();
	res.send(data);
};

const updateProfile = async (req, res) => {
	const { newProfileImage, newUsername, newEmail } = req.body;
	const { userId } = req.data;
	try {
		let uploadedResponse;

		if (newProfileImage) {
			const fileStr = newProfileImage;
			uploadedResponse = await cloudinary.v2.uploader.upload(fileStr, {
				folder: "user_profiles",
			});
		}
		const user = await UserModel.findOne({ username: newUsername });
		if (user) {
			res.send({
				msg: `Username ${newUsername} is not available`,
				status: "bad",
			});
		} else {
			const user = await UserModel.findOne({ email: newEmail });
			if (user) {
				res.send({ msg: `Email ${newEmail} is already in use`, status: "bad" });
			} else {
				const newUser = await UserModel.findByIdAndUpdate(
					{ _id: userId },
					{
						username: newUsername,
						email: newEmail,
						uploadImage: uploadedResponse?.secure_url,
					}
				);
				const user_posts = await PostModel.find({ creatorId: userId });

				const updatePosts = await PostModel.updateMany(
					{ creatorId: userId },
					{
						$set: {
							creatorName: newUsername,
							creatorImgUrl: uploadedResponse?.secure_url,
						},
					}
				);

				res.send({
					msg: "Profile updated successfully",
					status: "ok",
					user: newUser,
				});
			}
		}
	} catch (error) {
		res.send({
			msg: "Something went wrong, Check your internet connection or try again later.",
			status: "bad",
		});
		console.log(error);
	}
};
module.exports = {
	loginController,
	registerController,
	protectedroute,
	getUserInfo,
	fetchUsers,
	updateProfile,

};
