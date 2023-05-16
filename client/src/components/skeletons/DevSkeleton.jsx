import React from "react";
import { Skeleton } from "@mui/material";
const DevSkeleton = () => {
	return (
		<div className="p-5 flex flex-col gap-4">
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#0D0D1F'}} animation="pulse">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%"  height={"280px"} sx={{ bgcolor : '#0D0D1F'}} animation="pulse">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#0D0D1F'}} animation="pulse">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#0D0D1F'}} animation="pulse">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
			<Skeleton variant="rectangular" width="100%" height={"280px"} sx={{ bgcolor : '#0D0D1F'}} animation="pulse">
				<div style={{ paddingTop: "10%" }} />
			</Skeleton>{" "}
	
	
		</div>
	);
};

export default DevSkeleton;
