import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CustomCard = ({ imagePosterObj }) => {
	return (
		<div className="flex flex-col mt-20">
			<Typography
				sx={{
					fontSize: "30px",
					fontFamily: "fantasy",
					marginLeft: "20px",
				}}
				className=" text-transparent w-40 border-l-4 px-4 border-sky-500 bg-gradient-to-r from-sky-600 to-violet-700 bg-clip-text z-20">
				Featured
			</Typography>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-7 mb-40 p-10">
				{imagePosterObj.map((posterObj, index) => (
					<div
						className="relative flex flex-col items-center w-full rounded-md transition duration-300 hover:scale-110 "
						key={index}>
						<img
							src={posterObj.poster}
							alt="Loading..."
							className="h-72 rounded-lg block w-full object-cover"
						/>
						<div className="absolute h-full w-full flex flex-col items-center justify-end bg-gradient-to-t from-black via-black/70 to-black/0 rounded-b-lg py-10">
							<Typography
								sx={{ fontWeight: "cursive" }}
								variant="body2"
								className="text-white/90 ">
								{posterObj.title}
							</Typography>
							<Link to={`/games/search/${posterObj.title}`}>
								<button className="bg-black/60 text-white py-3 px-3 whitespace-nowrap transition duration-100 hover:bg-black/30-950">
									View Game
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomCard;
