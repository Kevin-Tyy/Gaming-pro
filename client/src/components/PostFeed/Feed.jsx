import React, { useEffect, useState } from "react";
import axios from "axios";
import placeholder from "../../pages/images/placeholder.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@mui/material";
import {
	CommentOutlined,
	EmojiEmotionsOutlined,
	SendOutlined,
	Reply,
	ThumbUpAltSharp,
} from "@mui/icons-material";

const Feed = () => {
	const [posts, setPosts] = useState();
	
	const options = { year: "numeric", month: "long", day: "numeric" };
	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get("http://localhost:4000/api/getposts");
			setPosts(data);
			console.log(data);
		};
		fetchPosts();
	}, []);
	return (
		<div className="flex flex-col w-full mt-14">
			<Typography
				variant="h5"
				sx={{ fontFamily: "fantasy" }}
				className="text-neutral-300 underline text-center">
				Find friends
			</Typography>
			<div className="w-full flex justify-center">
				{posts ? (
					<div>
						{posts.map((post) => (
							<div
								key={post._id}
								className=" border border-neutral-700 my-5 rounded-lg bg-neutral-950">
								<div className="flex items-center justify-between w-full p-4 border-b border-neutral-700">
									<div className="flex items-center justify-between gap-2">
										<img
											src={
												post.creatorImgUrl ? post.creatorImgUrl : placeholder
											}
											className="w-14 h-14 object-cover rounded-full"
										/>
										<div>
											<Typography className="text-white capitalize">
												{post.creatorName}
											</Typography>
											<Typography className="text-gray-500">
												{new Date(post.createdAt).toLocaleDateString(
													undefined,
													options
												)}
											</Typography>
										</div>
									</div>
									<MoreVertIcon
										fontSize="large"
										className="text-gray-300 cursor-pointer rounded-full hover:bg-neutral-800 p-1"
									/>
								</div>
								<Typography sx={{ m: 2 }} className="text-white">
									{post.postText}
								</Typography>
								<div className="max-w-lg">
									<img
										src={post.postImage}
										className="w-full h-96 object-cover"
									/>
								</div>
								<div className="flex justify-between px-4 pt-2">
									<div className="flex gap-3">
										<ThumbUpAltSharp className="text-white cursor-pointer" />
										<CommentOutlined className="text-white cursor-pointer" />
									</div>
									<Reply className="text-white cursor-pointer" />
								</div>
								<div className="px-4 py-3">
									<form>
										<div className="w-full h-14 flex items-center bg-neutral-900 p-3 rounded-full gap-2">
											<EmojiEmotionsOutlined
												fontSize="large"
												className="text-white cursor-pointer rounded-full hover:bg-neutral-800 p-1"
											/>
											<input
												type="text"
												className="bg-transparent resize-none h-full w-full text-white outline-none"
												placeholder="Add a comment"></input>
											<SendOutlined
												fontSize="large"
												className="text-white cursor-pointer rounded-full hover:bg-neutral-800 p-1"
											/>
										</div>
									</form>
								</div>
							</div>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Feed;
