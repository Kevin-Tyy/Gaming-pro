import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { imagePosterObj, sliderImages } from "../utils/posters";
import { Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link, useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Home = () => {
	const [games, setGames] = useState([]);
	const [gamesArray, setGamesArray] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(sliderImages[0]);
	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = sliderImages.indexOf(currentSlide);
			const nextIndex = (currentIndex + 1) % sliderImages.length;
			setCurrentSlide(sliderImages[nextIndex]);
		}, 10000);

		return () => clearInterval(interval);
	}, [currentSlide, sliderImages]);

	useEffect(() => {
		fetchFromAPI("games").then((data) => {
			console.log(data);
			setGamesArray(data.results.slice(0, 10));
		});
	}, []);

	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div>
							<div className="lg:p-10">
								<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
									<div className="h-96  lg:h-700 w-4/5 relative">
										<img
											src={currentSlide}
											alt="Loading"
											className="w-full h-full object-cover rounded-lg "
										/>
										<div className="hidden lg:block h-3/5 w-1/3 absolute bottom-28 left-14 bg-white/10 backdrop-blur-md rounded-3xl p-10">
											<Typography variant="h4" className="text-black/30-500 ">
												Lorem ipsum dolor sit amet.
											</Typography>
											<Typography className="text-white border-b-2 pb-3 border-white">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Inventore, cum vel. Blanditiis labore vel quaerat
												repellat ipsam voluptate molestiae sapiente nesciunt,
												corporis repudiandae aperiam odit aliquid. Illo maiores
												recusandae veniam.
											</Typography>
											<button className="bg-black/30-700/90 text-white flex gap-4 px-7 py-3 mt-10 rounded-xl backdrop-blur-3xl transition duration-500 hover:bg-black/30-900 shadow-black/30-800 shadow-sm">
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
									<div className="w-full lg:w-1/5 bg-neutral-800/50 px-5 pb-5 pt-2 rounded-xl  border-gradient-to-r">
										<Typography
											variant="body1"
											sx={{ color: "white", ml: 2 }}
											className="border-b-4 border-black/30-700 w-32 ">
											Popular games
										</Typography>
										<div className=" flex flex-row lg:flex-col gap-3">
											{imagePosterObj.map((posterObj, index) => (
												<div
													className="relative flex flex-col items-center h-1/3 w-full"
													key={index}>
													<img
														src={posterObj.poster}
														alt="Loading..."
														className="h-52 w-full object-cover rounded-lg block"
													/>
													<div className="absolute -bottom-1 bg-black/10 backdrop-blur-md w-full h-16 flex items-center px-2 justify-between rounded-b-lg">
														<Typography
															sx={{ fontWeight: "cursive" }}
															variant="body2"
															className="text-white/90 ">
															{posterObj.title}
														</Typography>
														<button className="bg-black/60 text-white p-2 whitespace-nowrap rounded-lg transition duration-100 hover:bg-black/30-950 ml-10">
															View Game
														</button>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="mt-5">
									<Typography className="text-white border-b-4 border-black/30-700 w-40">
										Play Games online
									</Typography>
									<GameCard games={gamesArray} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
