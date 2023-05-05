import { CloseRounded } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
const RatingPopup = ({ handleToggle, bgimage }) => {
	//   const navigate = useNavigate()

	return (
		<div className="z-40">
			<div
				className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed bg-neutral-900/90 flex items-center justify-center"
				onClick={handleToggle}>
				<div className="flex " onClick={(e)=> e.stopPropagation()}>
					<img src={bgimage} alt="loading" className="w-80 h-80 object-cover rounded-l-2xl" />
					<div className="bg-neutral-800 relative rounded-r-2xl" >
						<CloseRounded className="absolute right-2 top-2 text-white hover:bg-neutral-600 rounded-full cursor-pointer" onClick={handleToggle}/>
						<Paper component="form" sx={{ backgroundColor: "transparent" }} className="flex flex-col gap-6 w-full h-full p-10">
						<Typography className="text-neutral-400">Add your review about this game</Typography>
							<input
								type="text"
								className="w-full bg-transparent border-b border-white appearance-none outline-0 text-white"
							/>
							<button className="py-2 w-40 mx-auto bg-black/30 transition duration hover:bg-black/80 text-white border border-white">Add your comment</button>
						</Paper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RatingPopup;
