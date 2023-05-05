import React from "react";
import { Rating, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const Gamedesc = ({ gameDetails }) => {
	return (
		<div className="text-white flex flex-col gap-1">
			<Typography variant="h5" sx={{ mb: 2 }}>
				{gameDetails.name}
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold"> genres :</span>
				{gameDetails.genres.map((genre) => (
					<span className="pl-1 text-gray-400 whitespace-nowrap ">
						{genre.name}
					</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap ">
				<span className="font-bold">developers :</span>
				{gameDetails.developers.map((developer) => (
					<span className="text-gray-400 whitespace-nowrap text-gray">
						{developer.name}
					</span>
				))}
			</Typography>

			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Publisher : </span>

				{gameDetails.publishers.map((publisher) => (
					<span className="pl-1 text-gray-400 whitespace-nowrap flex flex-wrap">
						{publisher.name}
					</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Platforms :</span>

				{gameDetails.platforms.map((platform) => (
					<span className="pl-1 text-gray-400 whitespace-nowrap">
						{platform.platform.name}
					</span>
				))}
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Released :</span>

				<span className="pl-1 text-gray-400 whitespace-nowrap">
					{gameDetails.released}
				</span>
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Rating :</span>

				<span className="pl-1 text-gray-400 whitespace-nowrap">
					{gameDetails.rating}/{gameDetails.rating_top}
				</span>
			</Typography>
			<Rating value={gameDetails.rating} readOnly />
			<Typography className="flex  p-1">
				<span>
					<Link
						to={gameDetails.website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-500 border-b-2 border-neutral-500">
						Click here to view Game Website
					</Link>
				</span>
			</Typography>
			<div className="flex gap-4 mt-10 items-center">
				<button className="bg-gradient-to-b py-3 px-2 md:px-3 flex items-center gap-3 rounded-sm transition duration-150 from-indigo-950 to-blue-600 ">
					<SportsEsportsIcon />
					<Typography variant="caption" className="whitespace-nowrap">
						Add to your games
					</Typography>
				</button>
				<Link
					to={gameDetails.website}
					target="_blank"
					rel="noopener noreferrer">
					<button className="py-3 px-4 md:px-8 flex items-center gap-3 rounded-sm transition duration-300 hover:bg-neutral-800/40 shadow-blue-600 shadow-sm">
						<SportsEsportsIcon />
						<Typography variant="caption" className="whitespace-nowrap">
							Play the game
						</Typography>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Gamedesc;
