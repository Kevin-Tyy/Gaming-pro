import React, { useEffect, useState } from "react";
import poster1 from "./images/callofduty.jpg";
import poster2 from "./images/destiny.jpg";
import poster3 from "./images/modernwar.jpeg";
import { fetchFromAPI } from "../utils/apiFetch";
import slider1 from "./images/download.jpg";
import slider2 from "./images/4k-zavod-graveyard-shift-night-operations-battlefield-4-wallpaper-preview.jpg";
import slider3 from "./images/best-racing-games-f1-22.jpg";
import slider4 from "./images/545935.jpg";
import { Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

const Home = () => {
	const sliderImages = [slider1, slider2, slider3, slider4];

	const [gamesArray, setGamesArray] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(sliderImages[0]);

	const imagePosterObj = [
		{ poster: poster1, title: "Battle Field 4" },
		{ poster: poster2, title: "Destiny 2 Forsaken" },
		{ poster: poster3, title: "Call of Duty: Modern Warfare 2 " },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = sliderImages.indexOf(currentSlide);
			const nextIndex = (currentIndex + 1) % sliderImages.length;
			setCurrentSlide(sliderImages[nextIndex]);
		}, 10000);

		return () => clearInterval(interval);
	}, [currentSlide, sliderImages]);

	useEffect(() => {
		fetchFromAPI("games").then((data) => setGamesArray(data));
	}, []);
	const games = gamesArray.slice(35, 45);

	return (
		<div className="p-10">
			<div className="flex justify-center items-center gap-4">
				<div className="h-700 w-4/5 relative">
					<img
						src={currentSlide}
						alt="Loading"
						className="w-full h-full object-cover rounded-lg "
					/>
					<div className="h-3/5 w-1/3 absolute bottom-28 left-14 bg-white/10 backdrop-blur-md rounded-3xl p-10">
						<Typography variant="h4" className="text-violet-500 ">
							Lorem ipsum dolor sit amet.
						</Typography>
						<Typography className="text-white border-b-2 pb-3 border-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, cum vel. Blanditiis labore vel quaerat repellat ipsam
							voluptate molestiae sapiente nesciunt, corporis repudiandae
							aperiam odit aliquid. Illo maiores recusandae veniam.
						</Typography>
						<button className="bg-violet-700/90 text-white flex gap-4 px-7 py-3 mt-10 rounded-xl backdrop-blur-3xl transition duration-500 hover:bg-violet-900 shadow-violet-800 shadow-sm">
							Play Now
							<PlayCircleOutlineIcon />
						</button>
					</div>
					{/* <div className="h-40 w-3/5 absolute bottom-3 left-80 bg-white/0 backdrop-blur-md p-10 rounded-xl ">
						<Typography className="text-white">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam facilis harum eligendi cum, ab incidunt accusamus sit assumenda beatae quia aspernatur porro rem hic, iusto autem at aliquam quam facere. Velit ad expedita neque dolorem. Modi aut magni eveniet quasi.
						</Typography>
					</div> */}
				</div>
				<div className="w-1/5 flex flex-col gap-3 bg-neutral-800/50 px-5 pb-5 pt-2 rounded-xl h-700  border-gradient-to-r">
					<Typography
						variant="body1"
						sx={{ color: "white", ml: 2 }}
						className="border-b-4 border-violet-700 w-32 ">
						Popular games
					</Typography>
					{imagePosterObj.map((posterObj, index) => (
						<div
							className="relative flex flex-col items-center h-1/3"
							key={index}>
							<img
								src={posterObj.poster}
								alt="Loading..."
								className="h-52 w-full object-cover rounded-lg block"
							/>
							<div className="absolute top-36 bg-black/10 backdrop-blur-md w-full h-16 flex items-center px-2 justify-between rounded-b-lg">
								<Typography
									sx={{ fontWeight: "cursive" }}
									variant="body2"
									className="text-white/90 ">
									{posterObj.title}
								</Typography>
								<button className="bg-violet-700 text-white p-2 whitespace-nowrap rounded-lg transition duration-100 hover:bg-violet-950 ml-10">
									View Game
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-5">
				<Typography className="text-white border-b-4 border-violet-700 w-40">
					Play Games online
				</Typography>
				<div className="grid grid-cols-5 gap-3 mt-10">
					{games.map((game) => (
						<div className="relative" key={game.id}>
							<img
								src={game.thumbnail}
								alt={game.title}
								className="h-52 object-cover rounded-lg"
							/>
							<div className="p-2 absolute top-36 bg-black/60 backdrop-blur-lg w-full h-16 flex items-center justify-between rounded-b-lg">
								<Typography className="text-white/90 ">
									{game.title}
								</Typography>
								<Link to={`game/${game.id}`}>
									<button className="bg-violet-900 text-white p-2 whitespace-nowrap rounded-lg transition duration-100 hover:bg-violet-950 ml-10">
										View Game
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
