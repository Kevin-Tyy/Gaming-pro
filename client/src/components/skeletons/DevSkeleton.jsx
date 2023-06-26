import React from "react";
import { Skeleton } from "@mui/material";
const DevSkeleton = () => {
	const loaderCount = 5;
	const loaderArray = Array(loaderCount).fill(null);
	return (
		<div className="p-7 flex flex-col  gap-5 bg-neutra-900">
			<div className="flex items-center justify-center">
				<Skeleton
					variant="text"
					sx={{ bgcolor: "#202020", textAlign: "center", maxWidth: "500px" }}
					width={"100%"}
					height={'40px'}
					animation="wave"
				/>
			</div>
			{loaderArray.map((_, index) => (
				<div className="bg-neutral-900 p-5 flex gap-3">
					<div className="w-full max-w-[400px]">
						<Skeleton
							variant="rectangular"
							width="100%"
							height={"280px"}
							sx={{ bgcolor: "#202020" }}
							animation="wave">
							<div style={{ paddingTop: "10%" }} />
						</Skeleton>
					</div>
					<div className="w-full flex flex-col justify-between">
						<div>
							<Skeleton
								variant="text"
								height={"50px"}
								sx={{ bgcolor: "#202020" }}
								animation="wave"
							/>
							<Skeleton
								variant="text"
								height={"50px"}
								sx={{ bgcolor: "#202020" }}
								animation="wave"
							/>
							<Skeleton
								variant="text"
								height={"50px"}
								sx={{ bgcolor: "#202020", maxWidth: "500px" }}
								animation="wave"
							/>
						</div>
						<div className="flex gap-3 w-full">
							<Skeleton
								variant="text"
								width={"100%"}
								sx={{ maxWidth: "300px", bgcolor: "#202020" }}
								height={"60px"}
								animation="wave"
							/>
							<Skeleton
								variant="text"
								width={"100%"}
								sx={{ maxWidth: "300px", bgcolor: "#202020" }}
								height={"60px"}
								animation="wave"
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default DevSkeleton;
