import React, { useEffect, useState } from "react";
import { Rating, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";
import { fetchAPI } from "../../utils/apiFetch";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Gamedesc = ({ gameDetails, token }) => {
	const [addGame, setAddGame] = useState(false);
	const gameId = gameDetails.id
	const handleAddGames = async () => {
		if (addGame) {
			const { data } = await axios.post(
				`${fetchAPI}/game/removegame`,
				{ gameId },
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			if(data.status == 'ok'){
				toast.success( data.msg , {
					position : toast.POSITION.TOP_RIGHT
				})
				
				setAddGame(false);
				localStorage.removeItem("savedGameId");
				localStorage.setItem("savedGame", false);
			}
			else if (data.status == 'warning'){
				toast.warning( data.msg , {
					position : toast.POSITION.TOP_RIGHT
				})
			}
			else{
				toast.error( data.msg , {
					position : toast.POSITION.TOP_RIGHT
				})
			}
		} else {
			const { data } = await axios.post(
				`${fetchAPI}/game/addgame`,
				{ gameDetails },
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			if (data.status == "ok") {
				toast.success(data.msg, {
					position: toast.POSITION.TOP_RIGHT,
				});
				setAddGame(true);
				localStorage.setItem("savedGame" , true)
				localStorage.setItem("savedGameId" , gameId)
			} else if (data.status == "warning") {
				toast.warning(data.msg, {
					position: toast.POSITION.TOP_RIGHT,
				});
			} else {
				toast.error(data.msg, {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		}
	};
	useEffect(()=> {
		const savedGameId = localStorage.getItem('savedGameId');
		if(savedGameId == gameId) {
			setAddGame(true)
		}
		else{
			setAddGame(false)

		}

	}, [])

	return (
		<div className="text-white flex flex-col gap-1 ">
			<Typography variant="h5" sx={{ mb: 2 }}>
				{gameDetails.name}
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold"> genres :</span>
				{gameDetails.genres.map((genre, index) => (
					<span key={index} className="pl-1 text-gray-400 whitespace-nowrap ">
						{genre.name}
					</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap ">
				<span className="font-bold">developers :</span>
				{gameDetails.developers.map((developer, index) => (
					<span
						key={index}
						className="text-gray-400 whitespace-nowrap text-gray">
						{developer.name}
					</span>
				))}
			</Typography>

			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Publisher : </span>

				{gameDetails.publishers.map((publisher, index) => (
					<span
						key={index}
						className="pl-1 text-gray-400 whitespace-nowrap flex flex-wrap">
						{publisher.name}
					</span>
				))}
			</Typography>
			<Typography className="flex flex-wrap gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Platforms :</span>

				{gameDetails.platforms.map((platform, index) => (
					<span key={index} className="pl-1 text-gray-400 whitespace-nowrap">
						{platform.platform.name}
					</span>
				))}
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Released :</span>

				<span className="pl-1 text-gray-400 whitespace-nowrap">
					{gameDetails.released}
				</span>
			</Typography>
			<Typography className="flex gap-2 p-1 whitespace-nowrap">
				<span className="font-bold">Rating :</span>

				<span className="pl-1 text-gray-400 whitespace-nowrap">
					{gameDetails.rating}/{gameDetails.rating_top}
				</span>
			</Typography>
			<Rating value={gameDetails.rating} readOnly size="small" />
			<Typography className="flex  p-1">
				<span>
					<Link
						to={gameDetails.website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-500 border-b-2 border-neutral-500">
						Click here to view Game Website
					</Link>
				</span>
			</Typography>
			<div className="flex gap-4 mt-10 items-center">
				<button
					onClick={handleAddGames}
					className="bg-gradient-to-r py-3 px-1 md:px-2 flex items-center gap-1 transition duration-150 from-sky-800 to-violet-800 ">
					<SportsEsportsIcon fontSize="small" />
					<Typography variant="caption" className="whitespace-nowrap">
						{addGame ? "Remove from your games" : "Add to your games"}
					</Typography>
				</button>
				<Link
					to={gameDetails.website}
					target="_blank"
					rel="noopener noreferrer">
					<div className="bg-gradient-to-r from-sky-500 to-violet-900 p-0.5 ">
						<button className="py-3 px-3 md:px-4 flex items-center gap-1 transition bg-neutral-900 duration-300 hover:bg-neutral-800">
							<SportsEsportsIcon fontSize="small"/>
							<Typography variant="caption" className="whitespace-nowrap">
								Play the game
							</Typography>
						</button>
					</div>
				</Link>
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
	);
};

export default Gamedesc;
