import { Avatar, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { SettingsOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import placeholderimage from "../../pages/images/placeholder.jpg";
import axios from "axios";
import ProfilePopup from "../Popups/ProfilePopup";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { fetchAPI } from "../../utils/apiFetch";
import MenuIcon from "@mui/icons-material/Menu";
import Skeleton from "react-loading-skeleton";
const Navbar = () => {
	const [loading, setLoading] = useState(false);
	const [searchString, setSearchString] = useState("");
	const [profileImgUrl, setprofileImgUrl] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState("");
	const [profilePopup, setprofilePopup] = useState();
	const [isNotificationSelected, setIsNotificationSelected] = useState(false);
	const [userInfo, setUseInfo] = useState({});

	const populateProfile = async (token) => {
		const { data } = await axios.get(`${fetchAPI}/user/getuser`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		setUseInfo(data);
		setprofileImgUrl(data.uploadImage);
	};

	useEffect(() => {
		const token = localStorage.getItem("access_token");
		setToken(token);
		if (token) {
			populateProfile(token);
			setIsLoggedIn(true);
		}
	}, []);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchString) {
			navigate(`/games/search/${searchString}`);
		}
	};
	const handlePopUpShow = () => {
		setprofilePopup(!profilePopup);
	};
	const handleNotificationSelected = () => {
		setIsNotificationSelected(!isNotificationSelected);
	};

	return (
		<React.Fragment>
			<div className="w-full flex bg-gradient-to-l from-black via-black/80 to-black/0 backdrop-blur-md text-white p-2  justify-between md:px-10 sticky top-0 z-40">
				{profilePopup && (
					<ProfilePopup handlePopUpShow={handlePopUpShow} userInfo={userInfo} />
				)}

				<div className="flex items-center ">
					<span className="block sm:hidden hover:bg-neutral-700 rounded-full">
						<IconButton>
							<MenuIcon className="text-white"  />
						</IconButton>
					</span>
					<Paper
						component="form"
						onSubmit={handleSubmit}
						sx={{
							bgcolor: "#3333334d",
							border: "none",
							shadow: "none",
							width: {
								sx: "250px",
								md: "450px",
							},
							fontSize: "10px",
							display: "flex",
							alignItems: "center",
							borderRadius: "60px",
							pl: 3,
							pr: "2px",
							py: "1px",
						}}>
						<input
							className="bg-transparent w-full oultine outline-0 text-white pl-2 mr-2.5"
							placeholder="Search for your favorite games"
							onChange={(e) => setSearchString(e.target.value)}
						/>
						<IconButton sx={{ color: "white" }} type="submit">
							<SearchIcon />
						</IconButton>
					</Paper>
				</div>

				<div className="flex items-center">
					{isLoggedIn ? (
						<div className=" flex gap-4">
							<span
								onClick={handleNotificationSelected}
								className="bg-neutral-800 rounded-full cursor-pointer transition hover:bg-neutral-700 w-10 h-10 hidden sm:flex items-center justify-center ">
								{isNotificationSelected ? (
									<NotificationsIcon /> 
								) : (
									<NotificationsNoneIcon />
								)}
							</span>
							<span className="bg-violet-800 rounded-full cursor-pointer hover:bg-violet-700  w-10 h-10  items-center justify-center hidden sm:flex">
								<SettingsOutlined
									sx={{ fontSize: 38 }}
									className="text-white px-2"
								/>
							</span>
							<div
								onClick={handlePopUpShow}
								className="bg-gradient-to-r from-sky-600 via-blue-700 to-violet-800 rounded-full p-2px cursor-pointer">
								<div className="bg-black rounded-full p-0.5">
									<img
										src={profileImgUrl ? profileImgUrl : placeholderimage}
										className="w-8 h-8 object-cover rounded-full"
									/>
								</div>
							</div>
						</div>
					) : (
						<div className="flex items-center  gap-2 md:gap-3">
							<Link to="/login">
								<button className="px-5 py-2 bg-gradient-to-b shadow-sm shadow-neutral-700 rounded-sm text-sm transititon duration-300 hover:bg-neutral-900">
									Login
								</button>
							</Link>
							<Link to="/register">
								<button className="px-5 py-2 bg-neutral-900 rounded-sm text-sm duration-300 transition hover:bg-neutral-800 shadow-sm shadow-neutral-700">
									Sign Up
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
