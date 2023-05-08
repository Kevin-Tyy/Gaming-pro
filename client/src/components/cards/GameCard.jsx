import { Rating, Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {
	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center text-white font-extrabold gap-10">
				{games.map((item) => (
					<div key={item.id} className="relative shadow-lg shadow-neutral-950">
						<img
							src={item.background_image}
							alt={item.name}
							className=" h-72 object-cover w-full rounded-xl"
						/>
						<div className=" bg-neutral-900/20 w-full flex justify-between p-3 items-center backdrop-blur-md rounded-b-lg">
							<div>
								<Typography className="text-white">{item.name}</Typography>
								<Rating value={item.rating} precision={0.5} readOnly />
								<Typography className="text-neutral-400">
									<span className="text-blue-600 font-black">
										{item.ratings_count}{" "}
									</span>
									Rating Count
								</Typography>
							</div>
							<Link to={`/games/${item.id}`}>
								<button className="bg-black py-2 border font-sans text-md border-neutral-700  px-2 rounded-sm  font-normal transition duration-100 active:scale-95 whitespace-nowrap">
									<Typography sx={{fontFamily : 'fantasy' }}>View Game</Typography>
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GameCard;
