import React, { useEffect } from "react";
import { Close, Edit, Feed, Logout, PersonOutlined, SettingsOutlined } from "@mui/icons-material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link, useNavigate } from "react-router-dom";
import placeholderImage from '../../pages/images/placeholder.jpg'
const popupdata = [
	{ icon: <Feed />, title: "Go to feed", link: "/user/news" },
	{
		icon: <SportsEsportsIcon />,
		title: "Your games",
		link: "/user/collections",
	},
	{ icon: <PersonOutlined />, title: "Your profile", link: "/user/profile" },
	{
		icon: <Logout />,
		title: "Logout",
		link: "/home",
	},
	{
		icon: <SettingsOutlined />,
		title: "Settings",
		link: "/user/profile",
	},
];
const ProfilePopup = ({ handlePopUpShow , userInfo}) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("access_token");
        localStorage.setItem('logged_in', false);
		navigate("/home");
	};
	return (
		<div className="fixed right-0 md:right-6 top-14 bg-slate-950 p-2 text-white rounded-b-2xl rounded-tl-2xl">
			<Close
				fontSize="large"
				onClick={handlePopUpShow}
				className="cursor-pointer absolute top-0 right-0 p-1 hover:bg-slate-800 rounded-full m-1"
			/>
			<div className="flex gap-3 p-2 pr-10 items-center">
				<div className="bg-gradient-to-r from-sky-600 to-violet-950 p-0.5 rounded-full">
					<div className="bg-black p-0.5 rounded-full">
						<img src={userInfo?.uploadImage || placeholderImage} className="w-10 h-10 rounded-full object-cover"/>

					</div>
				</div>
				<div className="flex flex-col">
					<span>{userInfo.username}</span>
					<span className="text-slate-600">{userInfo.email}</span>
				</div>

			</div>
			<ul className="mt-4">
				<li className="py-3 px-7 hover:bg-slate-900 rounded-md cursor-pointer">
					<Link to={popupdata[0].link} className="flex gap-3 ">
						<span>{popupdata[0].icon}</span>
						<span>{popupdata[0].title}</span>
					</Link>
				</li>
				<li className="py-3 px-7 hover:bg-slate-900 rounded-md cursor-pointer">
					<Link to={popupdata[1].link} className="flex gap-3">
						<span>{popupdata[1].icon}</span>
						<span>{popupdata[1].title}</span>
					</Link>
				</li>{" "}
				<li className="py-3 px-7 hover:bg-slate-900 rounded-md cursor-pointer">
					<Link to={popupdata[2].link} className="flex gap-3">
						<span>{popupdata[2].icon}</span>
						<span>{popupdata[2].title}</span>
					</Link>
				</li>{" "}
				<li className="py-3 px-7 hover:bg-slate-900 rounded-md cursor-pointer" onClick={handleLogout}>
					<Link to={popupdata[3].link} className="flex gap-3">
						<span>{popupdata[3].icon}</span>
						<span>{popupdata[3].title}</span>
					</Link>
				</li>
				<li className="py-3 px-7 hover:bg-slate-900 rounded-md cursor-pointer" onClick={handleLogout}>
					<Link to={popupdata[4].link} className="flex gap-4">
						<span>{popupdata[4].icon}</span>
						<span>{popupdata[4].title}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProfilePopup;
