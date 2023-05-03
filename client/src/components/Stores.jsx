import React from "react";
import { Typography } from "@mui/material";
const Stores = ({ gameDetails }) => {
	return (
		<div className="flex flex-col gap-4">
			{gameDetails.stores && (
				<div className="flex text-white flex-wrap">
					<Typography sx={{ fontWeight: "bold" }}>Buy the game on :</Typography>
					{gameDetails.stores.map((store) => (
						<div className="bg-neutral-800">
							<span className="pl-1">{store.store.name},</span>
						</div>
					))}
				</div>
			)}
			{gameDetails.publishers && (
				<div className="flex text-white flex-wrap">
					<Typography sx={{ fontWeight: "bold" }}>
						Play the game on :
					</Typography>
					{gameDetails.platforms.map((platform) => (
						<div className="bg-neutral-800">
							<span className="pl-1 whitespace-nowrap">
								{platform.platform.name},
							</span>
						</div>
					))}
				</div>
			)}
			{gameDetails.tags && (
				<div className=" flex flex-wrap text-white">
					<Typography sx={{ fontWeight: "bold" }}>Tags :</Typography>
					{gameDetails.tags.map((tag) => (
						<div className="bg-neutral-800">
							<span className="pl-1 underline">{tag.name},</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Stores;
