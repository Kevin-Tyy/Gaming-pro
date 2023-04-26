import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import CallIcon from "@mui/icons-material/Call";
import { Typography, Skeleton } from "@mui/material";
import Logo from "./Logo";
import './activeClass.css'




const SidebarContent = [
	{ icon: <HomeIcon fontSize="small"/>, title: "Home", link: "/home" },
	{ icon: <PeopleIcon fontSize="small"/>, title: "Community", link: "/community" },
	{ icon: <CallIcon fontSize="small"/>, title: "Contact", link: "/contacts" },
	{ icon: <CollectionsIcon fontSize="small" />, title: "Collection", link: "/collections" },
];

const Sidebar = () => {
	const [loading , setLoading ] = useState(false);

	setTimeout(()=>{
		setLoading(true);
	}, 10000)

	return (
		<>
			{loading ?
				<div className="w-full h-full bg-dark flex flex-col justify-center  shadow-2xl text-black">
				<Logo />
				<div className="mb-44">
					{SidebarContent.map((content) => (
						<NavLink to={content.link} >
							<div className="flex gap-2 my-4 items-center py-2 pl-2 mx-3 rounded-3xl">
								<span className="span text-white p-2 rounded-2xl">
									{content.icon}
	
								</span>
								<Typography
									variant="caption"
									sx={{ mt: "5px"}}
									className="text-white">
									{content.title}
								</Typography>
							</div>
						</NavLink>
					))}
				</div>
			</div>
				: 
				<Skeleton variant="rectangular" height="98%" width="97% " sx={{ bgcolor : '#424242' , m : 1, borderRadius: '5px'}}/>
				}
		
		
		</>
	);
};

export default Sidebar;
