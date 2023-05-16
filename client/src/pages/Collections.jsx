import React, { useEffect, useState } from "react";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import AuthPopUp from "../components/Popups/AuthenticationPopup";
import { fetchAPI } from "../utils/apiFetch";
import axios from "axios";
import { CircularProgress, Rating, Typography } from "@mui/material";
import { SportsEsportsOutlined } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import DevSkeleton from "../components/Skeletons/devSkeleton";
const Collections = () => {
	const navigate = useNavigate();
	const [token, setToken] = useState("");
	const [gameId, setGameId] = useState("");
	const [savedGames, setSavedGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const populatePage = async () => {
		setLoading(true);
		const { data } = await axios.get(`${fetchAPI}/game/fetchsavedgames`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		console.log(data);
		setSavedGames(data.games);
		setGameId(data.games[0]?.gameId);
		setLoading(false);
	};

	const handleRemove = async () => {
		const { data } = await axios.post(
			`${fetchAPI}/game/removegame`,
			{ gameId },
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		populatePage();
		if (data.status == "ok") {
			toast.success(data.msg, {
				position: toast.POSITION.TOP_RIGHT,
			});

			localStorage.removeItem("savedGameId");
			localStorage.setItem("savedGame", false);
		} else if (data.status == "warning") {
			toast.warning(data.msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else {
			toast.error(data.msg, {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};
	useEffect(() => {
		const access_token = localStorage.getItem("access_token");
		setToken(access_token);

		if (token) {
			populatePage();
		}
	}, [token]);

	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-light md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />
						{loading ? (
							<DevSkeleton />
						) : (
							<div>
								<div className="p-6">
									{savedGames.length < 1 ? (
										<div className="text-center text-white text-2xl">
											No games found in your collection! 😟
										</div>
									) : (
										<div>
											{savedGames.map((game) => (
												<div
													key={game._id}
													className="h-80 p-5 my-5 bg-slate-800 flex justify-between items-center rounded-lg">
													<img
														src={game.gameImgUrl}
														alt="image"
														className="h-full w-96 object-cover"
													/>
													<div>
														<Typography className="text-white">
															Name :{" "}
															<span className="text-slate-400">
																{game.gameName}
															</span>
														</Typography>
														<Typography className="text-white">
															Developers :{" "}
															{game.developers.map((dev, index) => (
																<span key={index} className="text-slate-400">
																	{dev}
																</span>
															))}
														</Typography>
														<Typography className="text-white">
															Released at :{" "}
															<span className="text-slate-400">
																{game.releaseDate}
															</span>
														</Typography>
														<Typography className="text-white">
															Rating :{" "}
															<span className="text-slate-400">
																{game.gameRating}/5
															</span>
														</Typography>
														<Rating value={parseInt(game.gameRating)} />
													</div>
													<div className="flex flex-col gap-3">
														<button
															onClick={handleRemove}
															className="bg-red-500 text-white p-3 ">
															Remove from your saved Games
														</button>
														<Link to={`/games/${game.gameId}`}>
															<button className="py-3 bg-slate-950/50 w-full text-white flex gap-2 justify-center transition duration-500 hover:bg-slate-950">
																<SportsEsportsOutlined />
																View game
															</button>
														</Link>
														<a href={game.website} target="blank">
															<button className="py-3 bg-slate-950/50 w-full text-white flex gap-2 justify-center transition duration-500 hover:bg-slate-950">
																<SportsEsportsOutlined />
																Play game
															</button>
														</a>
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						)}
					</div>
					<ToastContainer
						toastStyle={{
							backgroundColor: "#222",
							color: "#fff",
							fontFamily: "revert",
							borderRadius: "6px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AuthPopUp(Collections);
