const PostModel = require("../models/post.model");
const { cloudinary } = require("../utils/cloudinary");


const createPost = async (req, res) => {
	const { postTextData, userId, previewSource, profileImgUrl, profileName } =
		req.body;
	try {
		let imagepUloadResponse;
		if (previewSource) {
			imagepUloadResponse = await cloudinary.v2.uploader.upload(previewSource, {
				folder: "user_posts",
			});
		}
		if (imagepUloadResponse) {
			const newPost = new PostModel({
				creatorId: userId,
				postText: postTextData,
				postImage: imagepUloadResponse?.secure_url,
				creatorImgUrl: profileImgUrl,
				creatorName: profileName,
			});
			await newPost.save();
			res.send({ msg: "Post added successfully", status: "ok" });
		} else {
			const newPost = new PostModel({
				creatorId: userId,
				postText: postTextData,
				creatorImgUrl: profileImgUrl,
				creatorName: profileName,
			});
			await newPost.save();
			res.send({ msg: "Post added successfully", status: "ok" });
		}
	} catch (error) {
		res.send({
			msg: "Something went wrong. Please try again later",
			status: "bad",
		});
		console.log(error);
	}
};

const fetchPosts = async (req, res) => {
	const data = await PostModel.find().sort({ createdAt: -1 });
	res.send(data);
};


const fetchUserPosts = async (req, res) => {
	console.log(req.data);
	const { userId } = req.data;
	const data = await PostModel.find({ creatorId: userId }).sort({
		createdAt: -1,
	});
	res.send(data);
};
module.exports = {

	createPost,
	fetchPosts,
	fetchUserPosts,
};