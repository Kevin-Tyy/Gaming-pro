import { Rating, Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {
	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center justify-center text-white font-extrabold gap-5">
				{games.map((item) => (
					<div key={item.id} className="relative">
						<img
							src={item.background_image}
							alt={item.name}
							className=" h-80 object-cover w-full"
						/>
						<div className="w-full flex flex-col gap-4 py-3 px-6 justify-center items-start backdrop-blur-md rounded-b-lg">
							<div>
								<Typography className="text-white whitespace-nowrap ">{item.name}</Typography>
								<Rating value={item.rating} precision={0.5} readOnly size='small'/>
								<Typography className="text-neutral-400">
									<span className="text-blue-600 font-black">
										{item.ratings_count}{" "}
									</span>
									Rating Count
								</Typography>
							</div>
							<Link to={`/games/${item.id}`} className="w-full">
								<button className="bg-violet-950 py-2 font-sans text-md  w-full transition duration-100 active:scale-95 whitespace-nowrap">
									<Typography>View Game</Typography>
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
