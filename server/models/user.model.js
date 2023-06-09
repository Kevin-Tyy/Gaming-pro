const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		uploadImage : {
			type: String,
			trim: true,
			required : false
		}
	},
	{timestamps : true}
);

const userModel = mongoose.model("Users", UserSchema);

module.exports = userModel;
