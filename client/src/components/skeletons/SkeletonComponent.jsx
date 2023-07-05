import React from "react";
import { Skeleton } from "@mui/material";
const SkeletonComponent = () => {
	return (
		<div className="flex flex-col gap-2 bg-neutral-900 p-3">
			<Skeleton
				variant="rectangular"
				width="100%"
				height={"200px"}
				sx={{ bgcolor: "#202020" }}
				animation="wave"
			/>
			<div className="flex gap-2 pt-2">
				<Skeleton
					variant="circular"
					width={"60px"}
					height={"50px"}
					sx={{ bgcolor: "#202020" }}
					animation="wave"
				/>
				<p className="w-full">
					<Skeleton
						variant="text"
						width={"100%"}
						sx={{ bgcolor: "#202020" }}
						animation="wave"
					/>
					<Skeleton
						variant="text"
						width={"100%"}
						sx={{ bgcolor: "#202020" }}
						animation="wave"
					/>
				</p>
			</div>
		</div>
	);
};

export default SkeletonComponent;
