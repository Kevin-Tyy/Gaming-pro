const {
	registerValidationSchema,
	loginValidationSchema,
} = require("../validation/validationSchema");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SCECRET;
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
	const { error } = loginValidationSchema.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message
		return res.status(200).send({message : errorMessage});
	}
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username: username });

	if (user) {
		const hashedPassword = user.password;
		const userId = user._id;
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
							res
								.status(200)
								.send({ message: "Login successful" , token: token });
						}
					);

				} else {
					res.send({ message: "Password do not match" });
				}
				
			})
			.catch((err) => {
				console.log(err);
				res.send({ message: "Oops ! Something went wrong" });
			});
	} else {
		res.send({ message: "User does not exist" });
	}
};

const registerController = async (req, res) => {
	const { error } = registerValidationSchema.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message
		return res.status(200).send({ message : errorMessage });
	}

	const { username, password, email } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await UserModel.findOne({ username: username });
	if (user) {
		res.send({ message: `Username ${username} not available` });
	} else {
		const user = await UserModel.findOne({ email: email });
		if (user) {
			res.send({ message: `Email ${email} already in use` });
		} else {
			const createdUser = new UserModel({
				email: email,
				password: hashedPassword,
				username: username,
			});
			await createdUser
				.save()
				.then(
					jwt.sign(
						{ userId: createdUser._id, username: username, password: password },
						jwtSecret,
						(err, token) => {
							if (err) {
								throw err;
							} else {
								res
									.status(200)
									.send({ message: "Registration successful" , token : token });
							}
						}
					)
				)
				.catch((err) => console.log(err));
		}
		
	}
	
};

const test = (req, res) => {
	res.send("Test successful");
};
const protectedroute = (req, res) => {
		

}
module.exports = {
	loginController,
	registerController,
	test,
	protectedroute
};