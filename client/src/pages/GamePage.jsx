import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
const Home = () => {
	const [games, setgames] = useState([]);
  const [url, setUrl] = useState("games");

	useEffect(() => {
		fetchFromAPI(url).then((data) => {
			setgames(data);
		});

	}, [url]);

	console.log(url + games);

	return (
		<div className="">
			<div className="">
        <ul className="flex m-3 bg-black justify-center">
          {categoryBtns.map((name)=>(
            <li className="text-white capitalize m-2">
              <button onClick={()=> setUrl(`games?category=${name}`)}>{name}</button>
              
            </li>
          ))}
        </ul>
      </div>
			<GameCard games={games} />
		</div>
	);
};

export default Home;
