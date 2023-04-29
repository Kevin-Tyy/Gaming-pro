import { Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {



	
	
	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center justify-center text-white font-extrabold gap-14">
				{games.map((item) => (
					<div key={item.id} className="relative">
						<img src={item.background_image} alt={item.name} className=" h-80 object-cover w-full rounded-3xl"/>
						<div className=" absolute bottom-0 bg-black/50 w-full h-28 flex justify-between p-2 items-center backdrop-blur-md rounded-b-lg">
							<Typography className="text-white">{item.name}</Typography>
							<Link to={`/games/${item.id}`}>
								<button className="bg-neutral-900/50 py-4  px-5 rounded-md text-xs font-normal transition duration-100 hover:bg-neutral-900/70 whitespace-nowrap shadow-md shadow-neutral-700">
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
