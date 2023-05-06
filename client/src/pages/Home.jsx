import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { imagePosterObj, sliderImages } from "../utils/posters";
import { Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link, useNavigate } from "react-router-dom";
import GameCard from "../components/cards/GameCard";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";

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
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide, sliderImages]);

	useEffect(() => {
		fetchFromAPI("games", 1).then((data) => {
			console.log(data);
			setGamesArray(data.results.slice(0, 10));
		});
	}, []);

	return (
		<div>
			<div className="h-full bg-black w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<img
						src={currentSlide}
						alt="Loading"
						className="w-full h-full object-cover absolute top-0 bottom-0 right-0 left-0"
					/>
					<div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black via-black/60 to-black/0"></div>
					<div className="absolute w-full h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/0"></div>
					<div className="h-14 md:h-screen  fixed bottom-0 w-full md:w-20  md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div>
							<div className="lg:p-10">
								<div className="h-screen flex flex-col lg:flex-row justify-center items-start gap-4">
									<div className="h-96  lg:h-700 w-4/5 relative flex items-start md:items-center justify-center">
										<div className="w-full h-3/5 max-w-5xl rounded-3xl p-10">
											<Typography
												variant="h2"
												sx={{ fontFamily: "fantasy" }}
												className="text-white  text-center">
												Games, unnecessary obstacles that we volunteer to
												tackle.🎮
											</Typography>
											<Typography
												sx={{ py: 5 }}
												className="text-white border-b-2 pb-3 border-white">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Inventore, cum vel. Blanditiis labore vel quaerat
												repellat ipsam voluptate molestiae sapiente nesciunt,
												corporis repudiandae aperiam odit aliquid. Illo maiores
												recusandae veniam.
											</Typography>
											<button className="bg-blue-950 text-white flex gap-4 px-7 py-3 mt-10 rounded-md transition duration-500 hover:bg-black hover:outline outline-1 outline-gray-800 shadow-black/30-800 shadow-sm">
												Discover Games 🎮
											</button>
										</div>
									</div>
									<div className="w-full max-w-sm px-5 pb-5 pt-2 rounded-xl  border-gradient-to-r hidden lg:block">
										<Typography
											variant="body1"
											sx={{ color: "white", ml: 2 }}
											className="border-b-4 border-black/30-700 w-32 ">
											Popular games
										</Typography>
										<div className=" flex flex-row lg:flex-col gap-3">
											{imagePosterObj.map((posterObj, index) => (
												<div
													className="relative flex flex-col items-center w-full bg-black p-4 rounded-md"
													key={index}>
													<img
														src={posterObj.poster}
														alt="Loading..."
														className="h-72 w-full object-cover rounded-2xl block"
													/>
													<div className="absolute -bottom-1 bg-black  backdrop-blur-md w-full h-16 flex items-center px-2 justify-between rounded-b-2xl py-10">
														<Typography
															sx={{ fontWeight: "cursive" }}
															variant="body2"
															className="text-white/90 ">
															{posterObj.title}
														</Typography>
														<Link to={`/games`}>
															<button className="bg-black/60 text-white py-3 px-3 whitespace-nowrap transition duration-100 hover:bg-black/30-950 ml-10">
																View Game
															</button>
														</Link>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								<div>
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
