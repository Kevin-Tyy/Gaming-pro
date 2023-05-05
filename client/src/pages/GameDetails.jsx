import React, { useEffect, useState } from "react";
import { fetchDetail, fetchFromAPI } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import RedditIcon from "@mui/icons-material/Reddit";
import SkeletonComponent from "../components/skeletons/SkeletonComponent";
import PosterSlider from "../components/sliders/posterSlider";
import Stores from "../components/DetailComponents/Stores";
import Gamedesc from "../components/DetailComponents/GameDesc";
import Rating from "../components/DetailComponents/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import RatingPopup from "../components/Popups/RatingPopup";
import Comments from "../components/DetailComponents/Comments";

const GameDetails = () => {
	const [gameDetails, setGameDetails] = useState([]);
	const [suggested, setSuggested] = useState([]);
	const [screenShots, setScreenShots] = useState([]);
	const [toggleModal, setToggleModal] = useState(false);
	const { id } = useParams();
	const page = 1;
	useEffect(() => {
		fetchFromAPI(`games/${id}`).then((data) => {
			console.log(data);
			setGameDetails(data);
		});
		fetchDetail(`games/${id}/screenshots`).then((data) => {
			setScreenShots(data.results);
		});
	}, []);
	const token = localStorage.getItem("access_token");

	const handleToggle = () => {
		setToggleModal(!toggleModal);
	};
	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-40">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div
							className={`bg-[url(${gameDetails.background_image_additional})] bg-cover`}>
							<div className="w-full flex flex-col xl:flex-row items-start  gap-10 p-6  mt-6  ">
								{gameDetails.background_image ? (
									<img
										src={gameDetails.background_image}
										className="w-full object-fill rounded-2xl md:min-w-md max-w-3xl"
									/>
								) : (
									<Skeleton
										sx={{ width: "100%", height: 750, bgcolor: "#222222" }}
										className="relative bottom-40"
										animation="wave"
									/>
								)}
								{gameDetails.name ? (
									<Gamedesc gameDetails={gameDetails} />
								) : (
									<div style={{ marginTop: "-200px" }}>
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
										<SkeletonComponent width={500} height={60} className={""} />
									</div>
								)}
							</div>

							{gameDetails.description_raw ? (
								<div className=" p-2 md:p-4 lg:p-6 ">
									<div className=" bg-neutral-800/40 rounded-3xl flex justify-center p-0">
										<Typography
											sx={{ mb: 2 }}
											className="text-white absolute p-2 border-b-4 border-violet-700">
											Game Description
										</Typography>
										<Typography
											variant="caption"
											sx={{ mt: 2, lineHeight: 2 }}
											className="text-white pt-10 p-4 md:p-10">
											{gameDetails.description_raw}
										</Typography>
									</div>
								</div>
							) : (
								<div className="pl-2">
									<SkeletonComponent
										width={""}
										height={150}
										className={"relative w-full"}
									/>
									<SkeletonComponent
										width={""}
										height={70}
										className={"relative  w-full"}
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
											className={"relative"}
										/>
									</div>
								)}
							</div>
							<div className="w-full bg-black/30  p-4 lg:p-10 flex flex-col gap-10">
								<Stores gameDetails={gameDetails} />
								{gameDetails.reddit_url && (
									<div className="text-white">
										<Typography>View the game on reddit</Typography>
										<Link
											to={gameDetails.reddit_url}
											target="blank"
											className="flex gap-3 bg-black/40 absolute p-1 ">
											<RedditIcon className="text-white " />#
											{gameDetails.reddit_name}
										</Link>
									</div>
								)}
								{gameDetails.ratings && (
									<div className="text-white md:p-3 pb-10">
										<Typography className="flex items-start pb-2 gap-2 text-gray-400">
											<StarOutlineIcon className="text-yellow-600" />
											<StarOutlineIcon className="text-yellow-600" />
											Ratings: (
											<span className="text-purple-600 font-extrabold">
												{gameDetails.ratings_count}
											</span>{" "}
											total ratings)
										</Typography>
										<Rating
											gameDetails={gameDetails}
											handleToggle={handleToggle}
										/>
									</div>
								)}
								<Comments />
								{toggleModal && (
									<RatingPopup
										handleToggle={handleToggle}
										bgimage={gameDetails.background_image}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetails;
