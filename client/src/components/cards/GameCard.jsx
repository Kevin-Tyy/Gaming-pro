import { Rating, Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {
	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center justify-center text-white font-extrabold gap-7">
				{games.map((item) => (
					<div key={item.id} className="relative transition duration-300 hover:scale-110 cursor-pointer">
						<img
							src={item.background_image}
							alt={item.name}
							className=" h-96 object-cover w-full"
						/>
						<div className="absolute bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30 h-full w-full flex flex-col gap-4 py-3 px-6 justify-end items-start">
							<div>
								<Typography className="text-white whitespace-nowrap " sx={{ fontSize : '14px'}}>{item.name}</Typography>
								{/* <Rating value={parseInt(item.rating)} precision={0.5} readOnly size='small'/> */}
								<Typography className="text-neutral-400  " sx={{ fontSize : '13px'}} >
									<span className="text-blue-600 font-bold">
										{item.ratings_count}{" "}
									</span>
									Rating Count
								</Typography>
								<p className="font-light text-sm text-slate-400">Released on {item.released}</p>
							</div>
							<Link to={`/games/${item.id}`} className="w-full">
								<button className="bg-transparent border border-gray-500 py-2  w-full transition duration-100 active:scale-95 whitespace-nowrap hover:bg-slate-700/20">
									<Typography sx={{ fontSize : '13px'}}>View Game</Typography>
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
