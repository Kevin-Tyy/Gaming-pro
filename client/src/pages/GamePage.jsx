import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/cards/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
import { CircularProgress, Typography } from "@mui/material";
import SkeletonComponent from "../components/skeletons/SkeletonComponent";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import NextPrevBtns from "../components/Buttons/NextPrevBtns";

const Home = () => {
	const [games, setgames] = useState([]);
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState("games");
	const [isNextPage, setIsNextPage] = useState(null);
	const [isPrevPage, setIsPrevPage] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchFromAPI(url, page)
			.then((data) => {
				setgames(data.results);
				console.log(data);
				setIsNextPage(data.next);
				setIsPrevPage(data.previous);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [page]);



	return (
		<div>
			<div className="h-full bg-dark w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-dark md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full ">
						<Navbar />

						<div>
							{games.length ? (
								<div>
									{loading ? (
										<div className="flex items-center justify-center h-screen">
											<CircularProgress sx={{ color: "gray", mb: 40 }} />
										</div>
									) : (
										<div className="xl:mx-1 mt-10">
											<div className="overflow-x-scroll md:overflow-x-auto">
												<ul className="flex justify-center">
													{categoryBtns.map((name, index) => (
														<li
															className="text-white capitalize m-2 bg-transparent border border-slate-500 px-6  py-1 rounded-sm cursor-pointer transition duration-300 hover:bg-slate-800  "
															key={index}>
															<button
																onClick={() =>
																	setUrl(`games?category=${name}`)
																}>
																<Typography variant="caption">
																	{name}
																</Typography>
															</button>
														</li>
													))}
												</ul>
											</div>
											<GameCard games={games} />
											<NextPrevBtns page={page} setPage={setPage} isNextPage={isNextPage} isPrevPage={isPrevPage} setLoading={setLoading}/>
										</div>
									)}
								</div>
							) : (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center justify-center p-10 gap-5">
									{Array(20)
										.fill()
										.map((_ , index) => (
											<div key={index} className="">
												<SkeletonComponent/>
											</div>
										))}
								</div>
							)}
						</div>r
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
