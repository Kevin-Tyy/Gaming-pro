import React from "react";
import { Skeleton } from "@mui/material";
const SkeletonComponent = ({ width, height , className}) => {
	return (
		<div>
			<Skeleton variant="rectangular" width="100%" height={'300px'} sx={{ bgcolor : '#2B38564d'}} animation="wave" className={className}/>
			<div className="flex gap-2 pt-2">
				<Skeleton variant="circular" width={'60px'} height={'50px'} sx={{bgcolor : '#2B38564d'}} animation="wave"/>
				<p className="w-full">
					<Skeleton variant="text" width={"100%"} sx={{ bgcolor : '#2B38564d'}} animation="wave"/>
					<Skeleton variant="text" width={"100%"} sx={{ bgcolor : '#2B38564d'}} animation="wave"/>

				</p>
				

			</div>
		</div>
	);
};

export default SkeletonComponent;
