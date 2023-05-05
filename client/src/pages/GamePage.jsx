import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import GameCard from "../components/cards/GameCard";
import { categoryBtns } from "../utils/UtilityObjects";
import { CircularProgress, Typography } from "@mui/material";
import SkeletonComponent from "../components/skeletons/SkeletonComponent";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";

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
	console.log(isNextPage);
	console.log(isPrevPage);

	const handlePrevPageClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		if (page > 1) {
			setPage(page - 1);
		}
		setLoading(true);
	};

	const handleNextPageClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		if (isNextPage) {
			setPage(page + 1);
		}
		setLoading(true);
	};

	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
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
										<div className="xl:m-16">
											<div className="overflow-x-scroll md:overflow-x-auto">
												<ul className="flex m-3 justify-center">
													{categoryBtns.map((name, index) => (
														<li
															className="text-white capitalize m-2 bg-transparent border border-neutral-500 px-6  py-1 rounded-sm cursor-pointer transition duration-300 hover:bg-neutral-800  "
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
											<div className="flex justify-center items-center mb-14">
												<div className="w-full bg-black p-4 rounded-md flex justify-center mt-9">
													<button
														onClick={handlePrevPageClick}
														className="border border-white py-2 px-7 text-white rounded-sm mr-1 hover:bg-neutral-900 active:scale-95">
														Prev
													</button>
													<button
														onClick={handleNextPageClick}
														className="border border-white py-2 px-7 text-white rounded-sm hover:bg-neutral-900 ml-1 active:scale-95">
														Next
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
							) : (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center justify-center pl-10 ">
									{Array(20)
										.fill()
										.map((_, index) => (
											<div key={index} className="w-11/12 p-0">
												<SkeletonComponent width={"100%"} height={"300px"} />
											</div>
										))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
