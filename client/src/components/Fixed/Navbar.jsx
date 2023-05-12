import { Avatar, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";
import placeholderimage from '../../pages/images/placeholder.jpg'
import { data } from "autoprefixer";
import axios from "axios";
import ProfilePopup from "../Popups/ProfilePopup";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
	const [loading, setLoading] = useState(true);
	const [searchString, setSearchString] = useState("");
	const [profileImgUrl , setprofileImgUrl] = useState("");
	const [isLoggedIn , setIsLoggedIn] = useState(false);
	const [token , setToken] = useState("");
	const [profilePopup, setprofilePopup] = useState();
	const [isNotificationSelected , setIsNotificationSelected ] = useState(false)

	const populateProfile = async (token) => {
		const { data } = await axios.get("http://localhost:4000/api/getuser", {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		setprofileImgUrl(data.uploadImage)

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
		e.preventDefault()
		if(searchString){

			navigate(`/games/search/${searchString}`);
		}
			
	};
	const handlePopUpShow = () => {
		setprofilePopup(!profilePopup);
	}
	const handleNotificationSelected = () => {
		setIsNotificationSelected(!isNotificationSelected)
	}

	return (
		<React.Fragment>
			<div className="w-full flex bg-gradient-to-l from-black via-black/80 to-black/0 backdrop-blur-md text-white p-2  justify-between md:px-10 sticky top-0 z-40">
			
			{profilePopup && <ProfilePopup handlePopUpShow={handlePopUpShow}/>}
				{loading ? (
					<div className="flex items-center">
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
								pr: '2px',
								py: "3px",
							}}>
								


							<input
								className="bg-transparent w-full oultine outline-0 text-white pl-2 mr-2.5"
								placeholder="Search for your favorite games"
								onChange={(e) => setSearchString(e.target.value)}
							/>
								<IconButton sx={{ color: 'white'}} type="submit">
									<SearchIcon/>
								</IconButton>
							
						</Paper>
					</div>
				) : (
					<Skeleton
						width={"99%"}
						height={100}
						sx={{ bgcolor: "#424242", mx: 1, mt: "-13px" }}
						animation="wave"
					/>
				)}

				<div className="flex items-center">
					{isLoggedIn ? (
						<div className="flex gap-4">
							<span onClick={handleNotificationSelected} className="bg-neutral-800 rounded-full cursor-pointer transition hover:bg-neutral-700 w-10 h-10 flex items-center justify-center">
						{isNotificationSelected ? <NotificationsIcon/> : <NotificationsNoneIcon/>}
							</span>

							<span className="bg-violet-800 rounded-full cursor-pointer hover:bg-violet-700  w-10 h-10 flex items-center justify-center">
								<Settings sx={{ fontSize: 38 }} className="text-white px-2"/>
							</span>
							<div onClick={handlePopUpShow} className="bg-gradient-to-r from-sky-600 via-blue-700 to-violet-800 rounded-full p-2px cursor-pointer">
								<div className="bg-black rounded-full p-1">
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
