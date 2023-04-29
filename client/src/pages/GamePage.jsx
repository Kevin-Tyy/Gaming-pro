import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
import { Typography } from "@mui/material";
import SkeletonComponent from "../components/SkeletonComponent";
const Home = () => {
	const [games, setgames] = useState([]);
	const [url, setUrl] = useState("games");

	useEffect(() => {
		fetchFromAPI(url).then((data) => {
			setgames(data.results);
			console.log(data);
		});
	}, [url]);
	if (!games.length) {
		return (
			<div className="grid grid-cols-5 w-full items-center justify-center p-5">
				{Array(20)
					.fill()
					.map((_, index) => (
						<div key={index} className="w-11/12 p-0">
							<SkeletonComponent width={"100%"} height={"300px"} />
						</div>
					))}
			</div>
		);
	}

	return (
		<div className="xl:m-16">
			<div className="">
				<ul className="flex m-3 justify-center">
					{categoryBtns.map((name, index) => (
						<li
							className="text-white capitalize m-2 bg-transparent border border-violet-700 px-6  py-1 rounded-3xl cursor-pointer transition duration-300 hover:bg-violet-800 shadow-violet-600 shadow-sm"
							key={index}>
							<button onClick={() => setUrl(`games?category=${name}`)}>
								<Typography variant="caption">{name}</Typography>
							</button>
						</li>
					))}
				</ul>
			</div>
			<GameCard games={games} />
			<div className="flex justify-center items-center">
				<div className="bg-black p-4 rounded-lg flex mt-9">
					<button
						onClick={() => {
							fetchPrevPage();
						}}
						className="bg-gradient-to-b from-violet-950 to-indigo-600 py-2 px-7 text-white rounded-lg mr-1">
						Prev
					</button>
					{/* <ul className="flex text-white">{pageNumbers}</ul> */}
					<button
						onClick={() => {
							fetchNextPage();
						}}
						className="bg-gradient-to-b from-violet-950 to-indigo-600 py-2 px-7 text-white rounded-lg ml-1">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
