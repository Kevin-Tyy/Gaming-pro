import { CloseRounded } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const RatingPopup = ({ handleToggle, bgimage }) => {
	//   const navigate = useNavigate()

	return (
		<div className="z-40">
			<div
				className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed bg-neutral-900/50 backdrop-blur-sm flex  items-center justify-center"
				onClick={handleToggle}>
				<div className="flex flex-col md:flex-row" onClick={(e)=> e.stopPropagation()}>
					<img src={bgimage} alt="loading" className="w-80 h-80 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
					<div className="bg-neutral-800 relative rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none" >
						<CloseRounded className="absolute right-2 top-2 text-white hover:bg-neutral-600 rounded-full cursor-pointer" onClick={handleToggle}/>
						<Paper component="form" sx={{ backgroundColor: "transparent" }} className="flex flex-col gap-6 w-full h-full p-10 ">
						<Typography className="text-neutral-400">Add your review about this game</Typography>
							<input
								type="text"
								className="w-full bg-transparent border-b border-white appearance-none outline-0 text-white"
							/>
							<button onClick={(e)=> {e.preventDefault(); handleToggle()}} className="py-2 w-40 mx-auto bg-neutral-950/30 transition duration hover:bg-neutral-950/80 text-white border border-white">Add your comment</button>
						</Paper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RatingPopup;
