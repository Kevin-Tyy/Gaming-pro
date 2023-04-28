import { Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const GameCard = ({ games }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [laoding, setLoading] = useState(false);

	if (!games.length) {
		return (
			<div className="grid grid-cols-5 w-full items-center justify-center p-5">
				{Array(20)
					.fill()
					.map((_, index) => (
						<div key={index} className="w-11/12 p-0">
							<Skeleton
								sx={{ bgcolor: "#292929", width: "100%", height: "300px" }}
								animation="wave"
							/>
						</div>
					))}
			</div>
		);
	}
	const gameCardPerPage = 20;
	const gamesArray = games;
	const numberOfPages = Math.ceil(gamesArray.length / gameCardPerPage);
	const indexOfLastItem = currentPage * gameCardPerPage;
	const indexOfFirstItem = indexOfLastItem - gameCardPerPage;
	const currentArray = gamesArray.slice(indexOfFirstItem, indexOfLastItem);

	const pageNumbers = [];

	function handlePageChange(pageNumber) {
		setCurrentPage(pageNumber);
	}

	for (let i = 1; i <= numberOfPages; i++) {
		const isActive = i === currentPage;
		const pageClass = isActive
			? "from-violet-900 to-indigo-600"
			: "from-neutral-800 to-neutral-950 hover:to-neutral-600 active:to-neutral-500";
		pageNumbers.push(
			<li
				key={i}
				className={`p-1 bg-gradient-to-b rounded-md flex items-center justify-center m-1 w-10  transition duration-500  cursor-pointer ${pageClass}`}
				onClick={() => handlePageChange(i)}>
				<NavLink to="">{i}</NavLink>
			</li>
		);
	}

	return (
		<div className="m-6">
			<div className="grid grid-cols-5 items-center justify-center text-white font-extrabold gap-7">
				{currentArray.map((item) => (
					<div key={item.id} className="text relative rounded-lg">
						<img src={item.thumbnail} alt={item.title} className=" h-60 object-contain"/>
						<div className=" absolute bottom-0 bg-white/10 w-full h-20 flex justify-between p-2 items-center backdrop-blur-md rounded-b-lg">
							<Typography className="text-white">{item.title}</Typography>
							<Link to={`/game/${item.id}`}>
								<button className="bg-violet-800 py-2 shadow-violet-700 shadow-md px-4 rounded-md text-xs font-normal transition duration-300 hover:bg-violet-900 whitespace-nowrap">
									View Game
								</button>
							</Link>

						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center items-center">
				<div className="bg-black p-4 rounded-lg flex mt-9">
					<button
						onClick={() => {
							currentPage > 1 && setCurrentPage(currentPage - 1);
						}}
						className="bg-gradient-to-b from-violet-950 to-indigo-600 py-2 px-7 text-white rounded-lg mr-1">
						Prev
					</button>
					<ul className="flex text-white">{pageNumbers}</ul>
					<button
						onClick={() => {
							currentPage <= numberOfPages - 1 &&
								setCurrentPage(currentPage + 1);
						}}
						className="bg-gradient-to-b from-violet-950 to-indigo-600 py-2 px-7 text-white rounded-lg ml-1">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
