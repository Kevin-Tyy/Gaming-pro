import React, { useEffect, useState } from "react";
import poster1 from "./images/callofduty.jpg";
import poster2 from "./images/destiny.jpg";
import poster3 from "./images/modernwar.jpeg";
import { fetchFromAPI } from "../utils/apiFetch";
import slider1 from "./images/download.jpg";
import slider2 from "./images/4k-zavod-graveyard-shift-night-operations-battlefield-4-wallpaper-preview.jpg";
import slider3 from "./images/best-racing-games-f1-22.jpg";
import slider4 from "./images/545935.jpg";
import { Typography } from "@mui/material";

const Home = () => {
	const options = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnVisisbility: true,
	};
	const sliderImages = [slider1, slider2, slider3, slider4];

	const [gamesArray, setGamesArray] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(sliderImages[0]);

	const imagePosterObj = [
		{poster : poster1 , title : "Battle Field 4"},
		{poster : poster2 , title : "Destiny 2 Forsaken"},
		{poster : poster3 , title : "Call of Duty: Modern Warfare2 "},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = sliderImages.indexOf(currentSlide);
			const nextIndex = (currentIndex + 1) % sliderImages.length;
			setCurrentSlide(sliderImages[nextIndex]);
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide, sliderImages]);

	useEffect(() => {
		fetchFromAPI("games").then((data) => setGamesArray(data));
	}, []);
	const games = gamesArray.slice(35, 45);

	return (
		<div className="p-10">
			<div className="flex justify-center items-center gap-4">
				<div className="h-700 w-4/5 ">
					<img
						src={currentSlide}
						alt="Loading"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="w-1/5 flex flex-col gap-3 bg-neutral-800/50 px-5 pb-5 pt-2 rounded-xl">
					<Typography variant="body1" sx={{ color : 'white', ml: 2 }} className="border-b-2  border-blue-700 w-32 ">
						Popular games
					</Typography>
					{imagePosterObj.map((posterObj, index) => (
						<div className="relative flex flex-col items-center">
							<img
								src={posterObj.poster}
								alt="Loading..."
								className="h-52 w-full object-cover rounded-lg block"
							/>
							<Typography sx={{fontWeight : 'cursive'}} variant="body2" className="text-white/90 absolute top-36 bg-black/10 backdrop-blur-md w-full h-16 flex items-center justify-center rounded-b-lg">
								{posterObj.title}
							</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
