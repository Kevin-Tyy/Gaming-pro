import React from "react";
import { Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const Gamedesc = ({gameDetails}) => {
	return (
		<div className="text-white">
			<Typography variant="h5" sx={{ mb: 2 }}>
				{gameDetails.name}
			</Typography>
			<Typography className="flex gap-2 p-1">
				genres :{" "}
				{gameDetails.genres.map((genre) => (
					<span className="pl-1">{genre.name}</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1">
				developers :{" "}
				{gameDetails.developers.map((developer) => (
					<span>{developer.name}</span>
				))}
			</Typography>

			<Typography className="flex gap-2 p-1">
				Publisher :{" "}
				{gameDetails.publishers.map((publisher) => (
					<span className="pl-1">{publisher.name}</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1">
				Platforms :{" "}
				{gameDetails.platforms.map((platform) => (
					<span className="pl-1">{platform.platform.name}</span>
				))}
			</Typography>
			<Typography className="flex gap-2 p-1">
				Released : <span className="pl-1">{gameDetails.released}</span>
			</Typography>
			<Typography className="flex gap-2 p-1">
				Rating :{" "}
				<span className="pl-1">
					{gameDetails.rating}/{gameDetails.rating_top}
				</span>
			</Typography>
			<Typography className="flex gap-3 p-1">
				Game Website
				<span>
					Click here to view Game Profile&nbsp;
					<Link
						to={gameDetails.website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-500 border-b-2 border-neutral-500">
						FreeToGame
					</Link>
				</span>
			</Typography>
			<div className="flex gap-4 mt-10 items-center">
				<button className="bg-gradient-to-b py-3 px-3 flex items-center gap-3 rounded-lg transition duration-150 from-indigo-950 to-blue-600 ">
					<SportsEsportsIcon />
					<Typography variant="caption">Add to your games</Typography>
				</button>
				<Link
					to={gameDetails.website}
					target="_blank"
					rel="noopener noreferrer">
					<button className="py-3 px-8 flex items-center gap-3 rounded-lg transition duration-300 hover:bg-neutral-800/40 shadow-indigo-600 shadow-sm">
						<SportsEsportsIcon />
						<Typography variant="caption">Play the game</Typography>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Gamedesc;
