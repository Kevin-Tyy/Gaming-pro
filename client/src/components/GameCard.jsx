import { Skeleton, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

const GameCard = ({ games }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [laoding, setLoading] = useState(false);

	if (!games.length) {
		return (
			<div className="grid grid-cols-4 items-center justify-center">
				{Array(20)
					.fill()
					.map((_, index) => (
						<div key={index}>
							<Skeleton width={"400px"} height={"350px"} />
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

	return (
		<div>
			<div className="grid grid-cols-4 items-center justify-center text-white font-extrabold">
				{currentArray.map((item) => (
					<div key={item.id} className="">
						<img src={item.thumbnail} alt={item.title} />
						<Typography className="text-white">
							{item.title}
						</Typography>
					</div>
				))}
			</div>
			<div className="flex justify-center items-center">
                <div className="bg-black p-4 rounded-lg">
                    <button onClick={() => {currentPage > 1 && setCurrentPage(currentPage - 1)}} className="bg-gradient-to-b from-indigo-950 to-blue-600 py-2 px-7 text-white rounded-lg">
                        Prev
                    </button>
                    <span className="text-white px-2">
                        {currentPage} / {numberOfPages}
                    </span>
                    <button onClick={() => {currentPage<=numberOfPages-1 && setCurrentPage(currentPage + 1)}} className="bg-gradient-to-b from-indigo-950 to-blue-600 py-2 px-7 text-white rounded-lg">
                        Next
                    </button>

                </div>
			</div>
		</div>
	);
};

export default GameCard;
