import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const GameDetails = () => {
	const [gameDetails, setGameDetails] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const { id } = useParams();

	const url = `game?id=${id}`;
	useEffect(() => {
		fetchFromAPI(url).then((data) => {
			console.log(data);
			setGameDetails(data);
		});
	}, []);
	const handleAccordionChange = () => {
		setExpanded(!expanded);
	};
	return (
		<div>
			<div className="w-full grid grid-cols-2 gap-10 p-10">
				{gameDetails.thumbnail ? (
					<img src={gameDetails.thumbnail} className="w-full object-fill rounded-2xl" />
				) : (
					<Skeleton
						sx={{ width: 850, height: 750, bgcolor: "#222222" }}
						className="relative bottom-40"
						animation="wave"
					/>
				)}
				{gameDetails.title ? (
					<div className="text-white">
						<Typography variant="h5" sx={{ mb: 2 }}>
							{gameDetails.title}
						</Typography>
						<Typography className="flex gap-24 p-1">
							genres : <span className="pl-1">{gameDetails.genre}</span>
						</Typography>
						<Typography className="flex gap-20 p-1">
							developer : <span>{gameDetails.developer}</span>
						</Typography>
						<Typography className="flex gap-14 p-1">
							Release date : <span>{gameDetails.release_date}</span>
						</Typography>
						<Typography className="flex gap-24 p-1">
							Status : <span className="pl-3">{gameDetails.status}</span>
						</Typography>
						<Typography className="flex gap-8 p-1">
							<span className="whitespace-nowrap">Short description :</span>{" "}
							<span>{gameDetails.short_description}</span>
						</Typography>
						<Typography className="flex gap-20 p-1">
							Publisher : <span className="pl-1">{gameDetails.publisher}</span>
						</Typography>
						<Typography className="flex gap-20 p-1">
							Platforms : <span className="pl-1">{gameDetails.platform}</span>
						</Typography>
						<Typography className="flex gap-3 p-1">
							FreeTogame Profile:
							<span>
								Click here to view game profile at&nbsp;
								<Link
									to={gameDetails.freetogame_profile_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-neutral-500 border-b-2 border-neutral-500">
									FreeToGame
								</Link>
							</span>
						</Typography>
						<div className="flex gap-4 mt-10 items-center">
							<button className="bg-violet-900 py-3 px-3 flex items-center gap-3 rounded-lg transition duration-150 hover:bg-violet-800 shadow-violet-600 shadow-sm">
								<SportsEsportsIcon  />
								<Typography variant="caption">Add to your games</Typography>
							</button>
							<Link
								to={gameDetails.game_url}
								target="_blank"
								rel="noopener noreferrer">
								<button className="border-2 border-violet-900 py-3 px-8 flex items-center gap-3 rounded-lg transition duration-300 hover:bg-neutral-800/40">
									<SportsEsportsIcon />
									<Typography variant="caption">Play the game</Typography>
								</button>
							</Link>
						</div>
					</div>
				) : (
					<div>
						<Skeleton
							sx={{ width: 500, height: 60, bgcolor: "#222222" }}
							animation="wave"
						/>
						<Skeleton
							sx={{ width: 500, height: 60, bgcolor: "#222222" }}
							animation="wave"
						/>
						<Skeleton
							sx={{ width: 500, height: 60, bgcolor: "#222222" }}
							animation="wave"
						/>
						<Skeleton
							sx={{ width: 500, height: 60, bgcolor: "#222222" }}
							animation="wave"
						/>
						<Skeleton
							sx={{ width: 500, height: 100, bgcolor: "#222222" }}
							animation="wave"
							className="relative top-10"
						/>
					</div>
				)}
			</div>
			{gameDetails.description ? (
				<div className="p-6 ">
					<div className=" bg-neutral-800/40 rounded-3xl flex justify-center">
						<Typography sx={{mb: 2}} className="text-white absolute p-2 border-b-4 border-violet-700">Game Description</Typography>
						<Typography variant="caption" sx={{ mt: 2, lineHeight: 2}} className="text-white p-10">
							{gameDetails.description}
						</Typography>

					</div>

				</div>
			) : (
				<div>
					<Skeleton
						sx={{ width: 1700, height: 150, bgcolor: "#222222" }}
						className="relative bottom-72 left-10"
						animation="wave"
					/>
					<Skeleton
						sx={{ width: 1700, height: 70, bgcolor: "#222222" }}
						className="relative bottom-80 left-10"
						animation="wave"
					/>
				</div>
			)}
			<div className="">
				{gameDetails.screenshots ? (
					<div className="flex justify-center mt-3">
						<Typography
							className="text-white text-center border-b-4 border-violet-800 absolute pb-2">
							Posters
						</Typography>
					</div>
				) : (
					<div className="flex just	ify-center">
						<Skeleton
							sx={{ width: 350, height: 80, bgcolor: "#222222" }}
							animation="wave"
							className="relative bottom-72 "
						/>
					</div>
				)}

				<div className="mt-20">
					{gameDetails.screenshots ? (
						<div className="flex justify-center gap-10 ">
							{gameDetails.screenshots.map((imagePoster) => (
								<img src={imagePoster.image} className="w-96" />
							))}
						</div>
					) : (
						<div className="flex justify-center gap-5 relative bottom-96 ">
							<Skeleton
								sx={{ width: 500, height: 500, bgcolor: "#222222" }}
								animation="wave"
							/>
							<Skeleton
								sx={{ width: 500, height: 500, bgcolor: "#222222" }}
								animation="wave"
							/>
							<Skeleton
								sx={{ width: 500, height: 500, bgcolor: "#222222" }}
								animation="wave"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default GameDetails;

// new Promise((resolve, reject) => {});
//
// :
// "Dark Knight is a browser-based fantasy MMOARPG wherein players take on the role of a devil hunter descended from the gods battling a dark force and attempting to overthrow seven kingdoms currently run by devils.\r\n\r\nThe game features a total of three professions for players to choose from: Slayer, Sorcerer, and Destroyer. However, Destroyer will not be available as a first choice. Rather, the player must reach a certain level in either of the other two professions and then transfer that progress to the Destroyer profession.\r\n\r\nTo help players along the way, the game provides them with goddesses that may accompany them in their journey. In order to acquire a goddess, players must collect corresponding pieces and summon them. Once summoned they will assist the Dark Knight in battle.\r\n\r\nOf course, this being an MMOARPG, there are plenty of other features to be found in Dark Knight. These include a variety of systems designed to improve the players’ power, such as a relic system, the blood system, mounts, wings, and more."
//

// game_url
// :
// "https://www.freetogame.com/open/dark-knight"

//

// screenshots
// :
// Array(0)
