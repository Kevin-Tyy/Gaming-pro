import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import FeedIcon from "@mui/icons-material/Feed";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Typography, Skeleton } from "@mui/material";
import Logo from "../Logo/Logo";
import "./activeClass.css";

const SidebarContent = [
	{ icon: <HomeIcon fontSize="small" />, title: "Home", link: "/home" },
	{
		icon: <PeopleIcon fontSize="small" />,
		title: "Developers",
		link: "/user/developers",
	},
	{
		icon: <FeedIcon fontSize="small" />,
		title: "Feed",
		link: "/user/news",
	},
	{
		icon: <CollectionsIcon fontSize="small" />,
		title: "Collection",
		link: "/user/collections",
	},
	{
		icon: <SportsEsportsIcon />,
		title: "Games",
		link: "/games",
	},
];

const Sidebar = () => {
	const [loading, setLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("access_token");
	}, []);

	setTimeout(() => {
		setLoading(true);
	}, 0);

	return (
		<>
			<div className="w-full h-full flex flex-row md:flex-col justify-center bg-black md:bg-transparent mx-auto shadow-2xl ">
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
					<div className="md:mb-60 flex items-center md:block ">
						{SidebarContent.map((content) => (
							<NavLink to={content.link} key={content.link}>
								<div className="flex gap-2 my-3 items-center md:py-2 md:pl-2 mx-3 rounded-lg transition duration-300 hover:bg-slate-800/60 shadow-slate-900 shadow-sm">
									<span className="span text-white py-3 px-4 md:p-2 rounded-md">
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
