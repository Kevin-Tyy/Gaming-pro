import React from "react";
import { Close, Edit, Feed, Logout, PersonOutlined } from "@mui/icons-material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link, useNavigate } from "react-router-dom";

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
		link: "/user/profile",
		onclick: () => {
			handleLogout;
		},
	},
];
const ProfilePopup = ({ handlePopUpShow }) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("access_token");
        localStorage.setItem('logged_in', false);
		navigate("/home");
	};
	return (
		<div className="fixed right-16 top-14 bg-neutral-950 p-2 text-white rounded-b-2xl rounded-tl-2xl">
			<Close
				fontSize="large"
				onClick={handlePopUpShow}
				className="cursor-pointer absolute top-0 right-0 p-1 hover:bg-neutral-800 rounded-full m-1"
			/>
			<ul className="mt-4">
				<li className="py-3 px-7 hover:bg-neutral-900 rounded-md cursor-pointer">
					<Link to={popupdata[0].link} className="flex gap-3 ">
						<span>{popupdata[0].icon}</span>
						<span>{popupdata[0].title}</span>
					</Link>
				</li>
				<li className="py-3 px-7 hover:bg-neutral-900 rounded-md cursor-pointer">
					<Link to={popupdata[1].link} className="flex gap-3">
						<span>{popupdata[1].icon}</span>
						<span>{popupdata[1].title}</span>
					</Link>
				</li>{" "}
				<li className="py-3 px-7 hover:bg-neutral-900 rounded-md cursor-pointer">
					<Link to={popupdata[2].link} className="flex gap-3">
						<span>{popupdata[2].icon}</span>
						<span>{popupdata[2].title}</span>
					</Link>
				</li>{" "}
				<li className="py-3 px-7 hover:bg-neutral-900 rounded-md cursor-pointer" onClick={handleLogout}>
					<Link to={popupdata[3].link} className="flex gap-3">
						<span>{popupdata[3].icon}</span>
						<span>{popupdata[3].title}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProfilePopup;
