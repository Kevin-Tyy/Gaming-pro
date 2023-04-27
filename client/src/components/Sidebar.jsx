import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import CallIcon from "@mui/icons-material/Call";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Typography, Skeleton } from "@mui/material";
import Logo from "./Logo";
import "./activeClass.css";

const SidebarContent = [
	{ icon: <HomeIcon fontSize="small" />, title: "Home", link: "/home" },
	{
		icon: <PeopleIcon fontSize="small" />,
		title: "Community",
		link: "/community",
	},
	{
		icon: <CallIcon fontSize="small" />,
		title: "Contact",
		link: "/contacts",
	},
	{
		icon: <CollectionsIcon fontSize="small" />,
		title: "Collection",
		link: "/collections",
	},
	{
		icon : <SportsEsportsIcon/>,
		title : "Games",
		link : "/games"
	}
];

const Sidebar = () => {
	const [loading, setLoading] = useState(false);

	setTimeout(() => {
		setLoading(true);
	}, 0);

	return (
		<>
			<div className="w-full h-full flex flex-row md:flex-col justify-center mx-auto shadow-2xl ">
				{loading ? (
					<div className="hidden md:block">
						<Logo />
					</div>
				) : (
					<Skeleton
						variant="rectangular"
						width={"98%"}
						height={"6%"}
						sx={{
							bgcolor: "#424242",
							mx: 1,
							borderRadius: "5px",
							
						}}
						animation="wave"
					/>
				)}

				{loading ? (
					<div className="md:mb-80 flex items-center md:block"> 
						{SidebarContent.map((content) => (
							<NavLink to={content.link} key={content.link}>
								<div className="flex gap-2 my-3 items-center md:py-2 md:pl-2 mx-3 rounded-lg hover:bg-neutral-800/60 ">
									<span className="span text-white py-2 px-3 md:p-2 rounded-lg">
										{content.icon}
									</span>
									<Typography
										variant="caption"
										sx={{ mt: "5px" }}
										className="text-white hidden xl:block">
										{content.title}
									</Typography>
								</div>
							</NavLink>
						))}
					</div>
				) : (
					<Skeleton
						variant="rectangular"
						height="90%"
						width="97% "
						sx={{
							bgcolor: "#424242",
							m: 1,
							borderRadius: "5px",
						}}
						animation="wave"
					/>
				)}
			</div>
		</>
	);
};

export default Sidebar;
