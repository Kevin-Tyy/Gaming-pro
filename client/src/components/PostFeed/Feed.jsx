import React, { useEffect, useState } from "react";
import axios from "axios";
import placeholder from "../../pages/images/placeholder.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgress, Typography } from "@mui/material";
import {
	CommentOutlined,
	EmojiEmotionsOutlined,
	SendOutlined,
	Reply,
	ThumbUpAltSharp,
} from "@mui/icons-material";
import { fetchAPI } from "../../utils/apiFetch";
import { ToastContainer, toast } from "react-toastify";
const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [netWorkError , setNetworkError] = useState(false);
	const options = { year: "numeric", month: "long", day: "numeric" };
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			
			const { data } = await axios.get(`${fetchAPI}/post/getposts`);
			setPosts(data);
			console.log(data);
			setTimeout(()=> {
				{!data
					&&
					setNetworkError(true);

				}
			} , 10000)
			setLoading(false);
			
		};
		fetchPosts();

	}, []);
	{netWorkError ? 
		toast.error("Chech your network connection")
		
		: null}
	return (
		<div className="flex flex-col w-full my-14">
			<Typography
				variant="h5"
				sx={{ fontFamily: "fantasy" }}
				className="text-neutral-300 underline text-center">
				Your Feed
			</Typography>
			{loading ? (
				<CircularProgress />
			) : (
				<div className="w-full flex justify-center">
					{posts.length > 1 ? (
						<div>
							{posts.map((post) => (
								<div
									key={post._id}
									className=" border border-neutral-700 my-5 rounded-lg bg-neutral-900 md:min-w-[550px]">
									<div className="flex items-center justify-between w-full p-4 border-b border-neutral-700">
										<div className="flex items-center justify-between gap-2">
											<div className="bg-gradient-to-r from-sky-500 to-violet-800 rounded-full p-0.5">
												<div className="bg-neutral-900 rounded-full p-0.5">
													<img
														src={
															post.creatorImgUrl
																? post.creatorImgUrl
																: placeholder
														}
														className="w-14 h-14 object-cover rounded-full"
													/>
												</div>
											</div>
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
										{post.postImage && (
											<img
												src={post.postImage}
												className="w-full h-96 object-cover"
											/>
										)}
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
											<div className="w-full h-14 flex items-center bg-neutral-950 p-3 rounded-full gap-2">
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
													className="text-white cursor-pointer rounded-full hover:bg-neutral-800 p-2"
												/>
											</div>
										</form>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-center text-white text-2xl">
							No games found in your collection! 😟
						</div>
					)}
				</div>
			)}
			<ToastContainer toastStyle={{ backgroundColor : '#222' , color : 'white '}}/>
		</div>
	);
};

export default Feed;
