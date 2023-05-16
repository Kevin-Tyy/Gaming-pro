import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchAPI } from "../utils/apiFetch";
import GameCard from "../components/cards/GameCard";
import Sidebar from "../components/Fixed/Sidebar";
import Navbar from "../components/Fixed/Navbar";
import SkeletonComponent from "../components/skeletons/SkeletonComponent";
import { Typography } from "@mui/material";
const SearchPage = () => {
	const [loading, setLoading] = useState(false);
	const [games, setGames] = useState([]);
	const [isNextPage, setIsNextPage] = useState(null);
	const [isPrevPage, setIsPrevPage] = useState(null);
	const { searchQuery } = useParams();

	const url = "games";

	useEffect(() => {
		searchAPI(url, searchQuery).then((data) => {
			setGames(data.results);
			setIsNextPage(data.next);
			setIsPrevPage(data.previous);
			setLoading(false);
		});
	}, [searchQuery]);
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
											<div className="flex justify-center">
												<Typography variant="h6" sx={{ fontFamily : 'fantasy'}} className="text-white text-center">
													Search results for {" "}
													<span className="text-violet-900 font-light ">
														{searchQuery}
													</span>
												</Typography>

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
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center justify-center pl-10 ">
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

export default SearchPage;
