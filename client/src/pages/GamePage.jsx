import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
import { Typography } from "@mui/material";
import SkeletonComponent from "../components/SkeletonComponent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
	const [games, setgames] = useState([]);
	const [nextPageUrl, setNextPageUrl] = useState("");
	const [prevPageUrl, setprevPageUrl] = useState("");
	 
	const [url, setUrl] = useState("games");

	useEffect(() => {
		fetchFromAPI(url).then((data) => {
			setgames(data.results);
			console.log(data);
			setprevPageUrl(data.next);
			setprevPageUrl(data.previous);
		});
	}, [url]);

	const fetchNextPage =() => {
		setUrl(nextPageUrl)
	}
	const fetchPrevPage = () => {
		setUrl(prevPageUrl)
	} 

	if (!games.length) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center pl-10 ">
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
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div>
							<div className="xl:m-16">
								<div className="">
									<ul className="flex m-3 justify-center">
										{categoryBtns.map((name, index) => (
											<li
												className="text-white capitalize m-2 bg-transparent border border-violet-700 px-6  py-1 rounded-3xl cursor-pointer transition duration-300 hover:bg-violet-800 shadow-violet-600 shadow-sm"
												key={index}>
												<button
													onClick={() => setUrl(`games?category=${name}`)}>
													<Typography variant="caption">{name}</Typography>
												</button>
											</li>
										))}
									</ul>
								</div>
								<GameCard games={games} />
								<div className="flex justify-center items-center mb-20">
									<div className="w-full bg-black p-4 rounded-lg flex justify-center mt-9">
										<button
											onClick={() => {
												fetchPrevPage();
											}}
												className="border border-white py-2 px-7 text-white rounded-lg mr-1">
											Prev
										</button>
										{/* <ul className="flex text-white">{pageNumbers}</ul> */}
										<button
											onClick={() => {
												fetchNextPage();
											}}
											className="border border-white py-2 px-7 text-white rounded-lg ml-1">
											Next
										</button>
									</div>
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
