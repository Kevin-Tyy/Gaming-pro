import { Rating, Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {	
	
	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center text-white font-extrabold gap-10">
				{games.map((item) => (
					<div key={item.id} className="relative shadow-2xl">
						<img src={item.background_image} alt={item.name} className=" h-72 object-cover w-full rounded-xl"/>
						<div className=" absolute bottom-0 bg-black/20 w-full h-24 flex justify-between p-2 items-center backdrop-blur-md rounded-b-lg">
							<div>
						 		<Typography className="text-white">{item.name}</Typography>
								<Rating value={item.rating} precision={0.5} readOnly/>
								{/* {console.log(item.rating_count)} */}
								<Typography className="text-neutral-400">
									{item.ratings_count} Rating Count
								</Typography>
							</div>
							<Link to={`/games/${item.id}`}>
								<button className="bg-black py-4 shadow-2xl shadow-blue-800 px-5 rounded-md text-xs font-normal transition duration-100 hover:bg-neutral-900/70 whitespace-nowrap">
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

export default GameCard;
