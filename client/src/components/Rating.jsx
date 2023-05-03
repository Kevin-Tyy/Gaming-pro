import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Rating = ({gameDetails}) => {
	return (
		<div className="flex gap-3 bg-neutral-700 p-6 justify-center">
			{gameDetails?.ratings.map((rating) => (
				<div key={rating.id} className="flex gap-2">
					<span>
						<InsertEmoticonIcon />
						{rating.title}
					</span>
					<span>{rating.count}</span>
					<span>{rating.percent}%</span>
				</div>
			))}
		</div>
	);
};

export default Rating;
