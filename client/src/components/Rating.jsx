import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Rating = ({ gameDetails }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-3 bg-neutral-950 p-4 justify-center rounded-md">
			{gameDetails?.ratings.map((rating) => (
				<div key={rating.id} className="flex gap-2 bg-black/40 p-3 rounded-md shadow-sm shadow-neutral-600">
					<span>
						<InsertEmoticonIcon className="text-orange-700" />
						{rating.title}:
					</span>
					<span className="text-indigo-600">{rating.count} votes</span>
					<span>{rating.percent}%</span>
				</div>
			))}
			<button className="bg-black/40 p-3 rounded-lg shadow-sm shadow-neutral-600 transition duration-500 hover:bg-neutral-900">
				Add your vote
			</button>
		</div>
	);
};

export default Rating;
