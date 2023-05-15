import React from "react";
import { Skeleton } from "@mui/material";
const DevSkeleton = () => {
	return (
		<div className="p-5 flex flex-col gap-4">
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#222'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%"  height={"280px"} sx={{ bgcolor : '#222'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#222'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#222'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#222'}} animation="wave">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
	
	
		</div>
	);
};

export default DevSkeleton;
