import React from "react";
import placeholderImage from "../../pages/images/placeholder.jpg";
import { EmojiEmotionsOutlined, Image, VideoCall } from '@mui/icons-material'
const PostButton = ({ handlePostToggle, userInfo }) => {
	return (
		<div className="w-full lg:w-8/12 mx-auto">
			<div className="p-3 flex flex-col gap-3 bg-neutral-900">
				<div className=" flex gap-2 items-center border-b border-neutral-700 pb-3 ">
					<img
						src={userInfo.uploadImage ? userInfo.uploadImage : placeholderImage}
						className="w-10 h-10 object-cover rounded-full"
					/>
					<div className="flex-1">
						<div
							onClick={handlePostToggle}
							className="text-neutral-500 bg-neutral-950/40 py-3 px-5 rounded-full w-full cursor-pointer transition duration-300 hover:bg-neutral-800">
							What's on your mind, {userInfo.username}?
						</div>
					</div>
				</div>
				<div className="flex gap-3">
					<div onClick={handlePostToggle} className="text-white hover:bg-neutral-800 w-1/3 py-3 flex justify-center rounded-md gap-3 cursor-pointer">
						<Image className="text-green-500 "/> Photo
					</div>
					<div onClick={handlePostToggle} className="text-white hover:bg-neutral-800 w-1/3 py-3 flex justify-center rounded-md gap-3 cursor-pointer">
						<VideoCall className="text-violet-600 "/> Live video
					</div>
					<div onClick={handlePostToggle} className="text-white hover:bg-neutral-800 w-1/3 py-3 flex justify-center rounded-md gap-3 cursor-pointer">
						<EmojiEmotionsOutlined className="text-yellow-500"/> Feeling
					</div>	
				</div>
			</div>

		</div>
	);
};

export default PostButton;
