import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";
const Home = () => {
	const [games, setgames] = useState([]);
	const [url, setUrl] = useState("games");

	useEffect(() => {
		fetchFromAPI(url).then((data) => {
			setgames(data);
		});
	}, [url]);

	console.log(games);

	return (
		<div className="">
			<div className="">
				<ul className="flex m-3 justify-center">
					<li className="text-white capitalize m-2 bg-transparent border border-violet-700 px-6 rounded-3xl cursor-pointer transition duration-300 hover:bg-violet-800 shadow-violet-600 shadow-sm">
						<button>
							<FilterAltIcon />
						</button>
					</li>
					{categoryBtns.map((name, index) => (
						<li className="text-white capitalize m-2 bg-transparent border border-violet-700 px-6  py-1 rounded-3xl cursor-pointer transition duration-300 hover:bg-violet-800 shadow-violet-600 shadow-sm" key={index}>
							<button onClick={() => setUrl(`games?category=${name}`)}>
								<Typography variant="caption">{name}</Typography>
							</button>
						</li>
					))}
				</ul>
			</div>
			<GameCard games={games} />
		</div>
	);
};

export default Home;
