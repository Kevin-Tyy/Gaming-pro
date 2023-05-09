import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CustomCard = ({imagePosterObj}) => {
	return (
		<div>
			{imagePosterObj.map((posterObj, index) => (
				<div
					className="relative flex flex-col items-center w-full p-4 rounded-md"
					key={index}>
					<img
						src={posterObj.poster}
						alt="Loading..."
						className="h-72 w-full object-cover rounded-2xl block"
					/>
					<div className="absolute -bottom-1  backdrop-blur-md w-full h-16 flex items-center px-2 justify-between rounded-b-2xl py-10">
						<Typography
							sx={{ fontWeight: "cursive" }}
							variant="body2"
							className="text-white/90 ">
							{posterObj.title}
						</Typography>
						<Link to={`/games/search/${posterObj.title}`}>
							<button className="bg-black/60 text-white py-3 px-3 whitespace-nowrap transition duration-100 hover:bg-black/30-950 ml-10">
								View Game
							</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default CustomCard;
