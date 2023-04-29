import React from "react";
import { Skeleton } from "@mui/material";
const SkeletonComponent = ({ width, height , className}) => {
	return (
		<div>
			<Skeleton
				sx={{ width: {width}, height: {height}, bgcolor: "#222222" }}
				animation="wave"
				className={className}
			/>
		</div>
	);
};

export default SkeletonComponent;
