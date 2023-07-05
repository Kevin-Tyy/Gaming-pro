import React, { useEffect, useState } from "react";
import { fetchDetail, fetchFromAPI } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import RedditIcon from "@mui/icons-material/Reddit";
import SkeletonComponent from "../components/Skeletons/SkeletonComponent";
import PosterSlider from "../components/sliders/posterSlider";
import Stores from "../components/DetailComponents/Stores";
import Gamedesc from "../components/DetailComponents/GameDesc";
import Rating from "../components/DetailComponents/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import RatingPopup from "../components/Popups/RatingPopup";
import Comments from "../components/DetailComponents/Comments";

const GameDetails = () => {
	const [gameDetails, setGameDetails] = useState([]);
	const [token, setToken] = useState([]);
	const [loading, setLoading] = useState(false);
	const [screenShots, setScreenShots] = useState([]);
	const [toggleModal, setToggleModal] = useState(false);
	const { id } = useParams();
	const page = 1;
	useEffect(() => {
		setLoading(true);
		fetchFromAPI(`games/${id}`).then((data) => {
			console.log(data);
			setGameDetails(data);
		});
		fetchDetail(`games/${id}/screenshots`).then((data) => {
			setScreenShots(data.results);
		});
		const access_token = localStorage.getItem("access_token");
		setToken(access_token);
	}, []);

	const handleToggle = () => {
		setToggleModal(!toggleModal);
	};
	return (
		<div>
			<div className="h-full bg-black w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20  md:sticky md:top-0 xl:w-full z-40">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />
						{loading ? (
							<p>Loading....</p>
						) : (
							<div>
								<img
									src={gameDetails.background_image_additional}
									className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
								/>
								<div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/10  backdrop-blur-sm"></div>
								<div className="bg-gradient-to-t from-black black-950/0 absolute top-0 bottom-0 left-0 right-0 w-full h-full"></div>
								<div className="w-full flex flex-col xl:flex-row items-start  gap-10 p-6  mt-6 ">
									<img
										src={gameDetails.background_image}
										className="w-full object-fill rounded-2xl md:min-w-md max-w-3xl z-20"
									/>

									<Gamedesc gameDetails={gameDetails} token={token} />
								</div>

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
											className="text-white pt-10 p-4 md:p-10 z-20">
											{gameDetails.description_raw}
										</Typography>
									</div>
								</div>

								<div className="">
									<div className="flex justify-center mt-3">
										<Typography className="text-white text-center border-b-4 border-violet-800 absolute pb-2">
											Posters
										</Typography>

										<PosterSlider screenShots={screenShots} />
									</div>
								</div>
								<div className="w-full bg-neutral-950/30  p-4 lg:p-10 flex flex-col gap-10">
									<Stores gameDetails={gameDetails} />
									{gameDetails.reddit_url && (
										<div className="text-white">
											<Typography>View the game on reddit</Typography>
											<Link
												to={gameDetails.reddit_url}
												target="blank"
												className="flex gap-3 bg-neutral-950/40 absolute p-1 ">
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
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetails;
