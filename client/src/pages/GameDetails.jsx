import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RedditIcon from "@mui/icons-material/Reddit";
import SkeletonComponent from "../components/SkeletonComponent";
import PosterSlider from "../components/posterSlider";
import Stores from '../components/Stores'
import Gamedesc from "../components/gameDesc";
import Rating from "../components/Rating";

const GameDetails = () => {
	const [gameDetails, setGameDetails] = useState([]);
	const [suggested, setSuggested] = useState([]);
	const [screenShots, setScreenShots] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		fetchFromAPI(`games/${id}`).then((data) => {
			console.log(data);
			setGameDetails(data);
		});
		fetchFromAPI(`games/${id}/screenshots`).then((data) => {
			setScreenShots(data.results);
			console.log(data);
			console.log(screenShots);
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
									<Gamedesc gameDetails={gameDetails}/>
								) : (
									<div>
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
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

										<PosterSlider screenShots={screenShots} />
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
								<Stores gameDetails={gameDetails}/>
							
								<div>
									<Link to={gameDetails.reddit_url} target="blank">
										<RedditIcon className="text-white " />
									</Link>
								</div>
								<div className="text-white">
									<Typography>
										Ratings: ({gameDetails.ratings_count} total)
									</Typography>
									{gameDetails.ratings && (
										<Rating gameDetails={gameDetails}/>
									)}
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
