import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const 	Rating = ({ gameDetails, handleToggle }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-3 bg-neutral-900 p-4  md:p-10	 justify-center rounded-md">
			{gameDetails?.ratings.map((rating) => (
				<div key={rating.id} className="flex gap-2 bg-neutral-950/40 p-3 rounded-md shadow-sm shadow-neutral-600">
					<span>
						<InsertEmoticonIcon className="text-purple-700" />{" "}
						{rating.title}:
					</span>
					<span className="text-blue-600 font-extrabold">{rating.count} votes</span>
					<span className="text-gray-500">{rating.percent}%</span>
				</div>
			))}
			<button onClick={handleToggle} className="bg-neutral-950 border border-gray-500 p-3 rounded-lg  transition duration-500 hover:bg-neutral-950">
				Add your vote
			</button>
		</div>
	);
};

export default Rating;
