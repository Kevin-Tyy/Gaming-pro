import React, { useEffect, useState } from "react";
import placeholderImage from "../../pages/images/placeholder.jpg";
import { CircularProgress, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ToastContainer , toast } from "react-toastify";
import {
	CloseSharp,
	EmojiEmotionsOutlined,
	GifBoxRounded,
	Image,
	More,
	PeopleAlt,
} from "@mui/icons-material";
import axios from "axios";
import { fetchAPI } from '../../utils/apiFetch'

const PostPopUp = ({ handlePostToggle, userInfo, token }) => {
	const [profileImgUrl, setprofileImgUrl] = useState("");
	const [profileName, setprofileName] = useState("");
	const [ userId , setUserId ] = useState("");
	const [postTextData, setPostTextData] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	const [loading , setLoading] = useState(false)
	useEffect(() => {
		setprofileImgUrl(userInfo.uploadImage);
		setprofileName(userInfo.username);
		setUserId(userInfo._id)
	}, [userInfo]);

	const handlePostSubmit = async (e) => {
		e.preventDefault();
		console.log('submitting')
		// if (!previewSource) return;
		setLoading(true);
		const { data } = await axios.post(
			`${fetchAPI}/post/createpost`,
			{ postTextData, userId, previewSource,profileImgUrl,profileName},	
			{
				headers : {
					Authorization : 'Bearer ' + token
				}
			}
		);
		console.log(data)
		if(data.status === "bad"){
			toast.error(data.msg, {
				position : toast.POSITION.TOP_RIGHT
			})
		}
		else{
			toast.success(data.msg , {
				position : toast.POSITION.TOP_RIGHT
			})
		}
		
		setLoading(false);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	return (
		<div
			onClick={handlePostToggle}
			className="h-screen w-full fixed top-0 bottom-0 right-0 left-0 bg-neutral-950/90  flex justify-center items-center z-50">
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-neutral-800 w-full max-w-lg h-auto rounded-xl border border-neutral-700 px-5">
				<div className="py-4  w-full relative border-b border-neutral-700">
					<Typography
						variant="h6"
						sx={{ fontWeight: "bold" }}
						className="text-white text-center">
						Create a post
					</Typography>
					<CloseSharp
						fontSize="large"
						onClick={handlePostToggle}
						className="absolute top-2 right-0 p-1 text-white bg-neutral-700 hover:bg-neutral-600 rounded-full cursor-pointer"
					/>
				</div>
				<div className="flex items-center gap-3 py-4">
					<img
						src={profileImgUrl ? profileImgUrl : placeholderImage}
						alt=""
						className="w-14 h-14 object-cover rounded-full"
					/>
					<div>
						<Typography sx={{ fontWeight: "bold" }} className="text-white">
							{profileName}
						</Typography>
						<div className="bg-neutral-600 text-white px-2 flex gap-1  items-center rounded-md">
							<PeopleAlt fontSize="small" />
							Public
						</div>
					</div>
				</div>
				<form onSubmit={handlePostSubmit}>
					<div>
						<textarea
							required="true"
							placeholder={`What's on your mind, ${profileName ? profileName : ''}?`}
							onChange={(e) => setPostTextData(e.target.value)}
							className={`resize-none w-full bg-transparent outline-none text-white text-xl ${
								previewSource ? "h-10" : "h-40"
							}`}></textarea>
						{previewSource && (
							<img
								src={previewSource}
								className="my-3 w-1/2 h-60 object-cover mx-auto rounded-lg"
							/>
						)}
					</div>
					<div className="w-full border border-neutral-700 py-1 rounded-md flex items-center justify-between px-4">
						<Typography className="text-white">Add to your post</Typography>
						<div className="flex gap-2">
							<label htmlFor="imagepost">
								<Image
									className="text-green-500  cursor-pointer"
									fontSize="large"
								/>
							</label>
							<input
								id="imagepost"
								type="file"
								accept="image/png, image/jpeg"
								className="hidden"
								onChange={handleFileChange}
							/>
							<EmojiEmotionsOutlined
								className="text-yellow-400 cursor-pointer"
								fontSize="large"
							/>
							<GifBoxRounded
								className="text-sky-800 cursor-pointer"
								fontSize="large"
							/>
							<MoreHorizIcon
								className="text-neutral-600 cursor-pointer"
								fontSize="large"
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={!postTextData}
						className="w-full bg-gradient-to-r from-sky-800 to-violet-800 py-3 my-4 text-white rounded-md transtition duration-75">
						{loading ? <CircularProgress sx={{color : 'white'}} size={20} /> : 'Post'}
					</button>
				</form>
			</div>
			<ToastContainer toastStyle={{ backgroundColor : '#222' , color : '#fff', fontFamily : 'revert', borderRadius : '10px' }}/>
		</div>
	);
};

export default PostPopUp;
