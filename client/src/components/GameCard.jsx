import { Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {



	if (!games.length) {
		return (
			<div className="grid grid-cols-5 w-full items-center justify-center p-5">
				{Array(20)
					.fill()
					.map((_, index) => (
						<div key={index} className="w-11/12 p-0">
							<Skeleton
								sx={{ bgcolor: "#292929", width: "100%", height: "300px" }}
								animation="wave"
							/>
						</div>
					))}
			</div>
		);
	}


	return (
		<div className="m-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center justify-center text-white font-extrabold gap-7">
				{games.map((item) => (
					<div key={item.id} className="text relative rounded-lg">
						<img src={item.background_image} alt={item.name} className=" h-60 object-cover w-full"/>
						<div className=" absolute bottom-0 bg-white/10 w-full h-20 flex justify-between p-2 items-center backdrop-blur-md rounded-b-lg">
							<Typography className="text-white">{item.name}</Typography>
							<Link to={`/game/${item.id}`}>
								<button className="bg-neutral-900/50 py-4  px-5 rounded-md text-xs font-normal transition duration-100 hover:bg-neutral-900/70 whitespace-nowrap">
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
