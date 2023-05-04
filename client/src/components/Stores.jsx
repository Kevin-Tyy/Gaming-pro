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
							<span className="pl-1 whitespace-nowrap bg-neutral-800">
								{platform.platform.name},
							</span>
					))}
				</div>
			)}
			{gameDetails.tags && (
				<div className=" flex flex-wrap text-white">
					<Typography sx={{ fontWeight: "bold" }}>Tags :</Typography>
					{gameDetails.tags.map((tag) => (
							<span className="pl-2 underline bg-neutral-800">{tag.name},</span>
					))}
				</div>
			)}
		</div>
	);
};

export default Stores;
