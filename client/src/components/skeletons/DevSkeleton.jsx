import React from "react";
import { Skeleton } from "@mui/material";
const DevSkeleton = () => {
	return (
		<div className="p-7 flex flex-col gap-5">
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#191919'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%"  height={"280px"} sx={{ bgcolor : '#191919'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#191919'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#191919'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#191919'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
	
	
		</div>
	);
};

export default DevSkeleton;
