import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import RedditIcon from '@mui/icons-material/Reddit';
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SkeletonComponent from "../components/SkeletonComponent";

const GameDetails = () => {
	const [gameDetails, setGameDetails] = useState([]);
	const [suggested, setSuggested] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`games/${id}`).then((data) => {
			console.log(data);
			setGameDetails(data);
		});

		fetchFromAPI(`games/${id}/suggested`).then((data) => {
			console.log(data);
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
							<div
								className={`bg-[url(${GameDetails.background_image_additional})] bg-cover`}>
								<div className="w-full flex flex-col xl:flex-row items-center justify-center gap-10 p-2">
									{gameDetails.background_image ? (
										<img
											src={gameDetails.background_image}
											className="w-full object-fill rounded-2xl md:min-w-md max-w-3xl"
										/>
									) : (
										<Skeleton
											sx={{ width: 850, height: 750, bgcolor: "#222222" }}
											className="relative bottom-40"
											animation="wave"
										/>
									)}
									{gameDetails.name ? (
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
												Released :{" "}
												<span className="pl-1">{gameDetails.released}</span>
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
												<button className="bg-violet-900 py-3 px-3 flex items-center gap-3 rounded-lg transition duration-150 hover:bg-violet-800 shadow-violet-600 shadow-sm">
													<SportsEsportsIcon />
													<Typography variant="caption">
														Add to your games
													</Typography>
												</button>
												<Link
													to={gameDetails.website}
													target="_blank"
													rel="noopener noreferrer">
													<button className="border-2 border-violet-900 py-3 px-8 flex items-center gap-3 rounded-lg transition duration-300 hover:bg-neutral-800/40">
														<SportsEsportsIcon />
														<Typography variant="caption">
															Play the game
														</Typography>
													</button>
												</Link>
											</div>
										</div>
									) : (
										<div>
											<SkeletonComponent
												width={500}
												height={60}
												className={""}
											/>
											<SkeletonComponent
												width={500}
												height={60}
												className={""}
											/>
											<SkeletonComponent
												width={500}
												height={60}
												className={""}
											/>
											<SkeletonComponent
												width={500}
												height={60}
												className={""}
											/>
											<SkeletonComponent
												width={500}
												height={60}
												className={""}
											/>
										</div>
									)}
								</div>

								{gameDetails.description_raw ? (
									<div className="p-6 ">
										<div className=" bg-neutral-800/40 rounded-3xl flex justify-center">
											<Typography
												sx={{ mb: 2 }}
												className="text-white absolute p-2 border-b-4 border-violet-700">
												Game Description
											</Typography>
											<Typography
												variant="caption"
												sx={{ mt: 2, lineHeight: 2 }}
												className="text-white p-10">
												{gameDetails.description_raw}
											</Typography>
										</div>
									</div>
								) : (
									<div className="pl-2">
										<SkeletonComponent
											width={""}
											height={150}
											className={"relative bottom-72 w-11/12"}
										/>
										<SkeletonComponent
											width={""}
											height={70}
											className={"relative bottom-80 w-11/12"}
										/>
									</div>
								)}
								<div className="">
									{gameDetails.genres ? (
										<div className="flex justify-center mt-3">
											<Typography className="text-white text-center border-b-4 border-violet-800 absolute pb-2">
												Posters
											</Typography>
											<div className="mt-20">
												<img
													src={gameDetails.background_image_additional}
													className="w-80 "
												/>
											</div>
										</div>
									) : (
										<div className="flex justify-center">
											<SkeletonComponent
												width={350}
												height={80}
												className={"relative bottom-72 "}
											/>
										</div>
									)}
								</div>
								<div className="w-full p-10 flex flex-col gap-10">
									{gameDetails.stores && (
										<div className="flex text-white flex-wrap">
											<Typography sx={{ fontWeight: "bold" }}>
												Buy the game on :
											</Typography>
											{gameDetails.stores.map((store) => (
												<div className="bg-neutral-800">
													<span className="pl-1">{store.store.name},</span>
												</div>
											))}
										</div>
									)}
									{gameDetails.publishers && (
										<div className="flex text-white flex-wrap">
											<Typography sx={{ fontWeight: "bold" }}>
												Play the game on :
											</Typography>
											{gameDetails.platforms.map((platform) => (
												<div className="bg-neutral-800">
													<span className="pl-1 whitespace-nowrap">
														{platform.platform.name},
													</span>
												</div>
											))}
										</div>
									)}

									{gameDetails.tags && (
										<div className=" flex flex-wrap text-white">
											<Typography sx={{ fontWeight: "bold" }}>
												Tags :
											</Typography>
											{gameDetails.tags.map((tag) => (
												<div className="bg-neutral-800">
													<span className="pl-1 underline">{tag.name},</span>
												</div>
											))}
										</div>
									)}
									<div>{/* <RedditIcon className="text-white "/> */}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetails;
