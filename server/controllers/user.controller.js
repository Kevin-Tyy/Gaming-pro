const {
	registerValidationSchema,
	loginValidationSchema,
} = require("../validation/validationSchema");
const { cloudinary } = require("../utils/cloudinary");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const PostModel = require("../models/post.model");
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
			res.send({ message: "User does not exist", status: "bad" });
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

	const fileStr = uploadImage;

	const uploadedResponse = await cloudinary.v2.uploader.upload(fileStr, {
		folder: "user_profiles",
	});

	const hashedPassword = await bcrypt.hash(password, 10);
	try {
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
						uploadImage: uploadedResponse.secure_url,
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
						.catch((err) => console.log(err));
				}
			} catch (error) {
				console.log(error);
				res.send({ message: "Something went wrong", status: "bad" });
			}
		}
	} catch (error) {
		console.log(error);
		res.send({ message: "Something went wrong", status: "bad" });
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
	const data = await userModel.find();
	res.send(data);
};
const createPost = async (req, res) => {
	const { postTextData, userId, previewSource , profileImgUrl, profileName} = req.body;
	try {
		
		const imagepUloadResponse = await cloudinary.v2.uploader.upload(
			previewSource,
			{ folder: "user_posts" }
		);
	
		const newPost = new PostModel({
			creatorId: userId,
			postText: postTextData,
			postImage: imagepUloadResponse.secure_url,
			creatorImgUrl : profileImgUrl,
			creatorName : profileName
		});
		newPost
			.save()
			.then((savedData) => {
				res.send({ msg: "Post added successfully" });
			})
			.catch((err) => {
				console.error(err);
			});
	} catch (error) {
		res.send({ msg : 'Internal server error, please try again later' });
		console.log(error);
	}

};
const fetchPosts = async (req, res) => {
	const data = await PostModel.find().sort({ createdAt : -1});
	res.send(data)
}
const updateProfile = async (req, res) => {
	res.send('request received')
	const { newUsername , newEmail } = req.body
	const { userId } = req.data;
	const oldUser = await UserModel.find({ _id : userId})
	console.log(oldUser);
}
module.exports = {
	loginController,
	registerController,
	protectedroute,
	getUserInfo,
	fetchUsers,
	createPost,
	fetchPosts,
	updateProfile
};
