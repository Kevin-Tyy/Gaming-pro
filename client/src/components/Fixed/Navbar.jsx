import { Avatar, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";
import placeholderimage from '../../pages/images/placeholder.jpg'

const Navbar = ({ isLoggedIn , userInfo}) => {
	const [loading, setLoading] = useState(true);
	const [searchString, setSearchString] = useState("");
	const [profileImgUrl , setprofileImgUrl] = useState("");
	useEffect(()=> {
		setprofileImgUrl(userInfo.uploadImage)
		
	}, [userInfo])

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault()
		if(searchString){

			navigate(`/games/search/${searchString}`);
		}
			
	};

	return (
		<React.Fragment>
			<div className="w-full flex bg-gradient-to-l from-black via-black/80 to-black/0 backdrop-blur-md text-white p-2  justify-between md:px-10 sticky top-0 z-40">
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
							<span className="bg-neutral-800 rounded-full cursor-pointer transition hover:bg-neutral-700 w-10 h-10 flex items-center justify-center">
								<NotificationsNoneIcon
									sx={{ fontSize: 38 }}
									className="text-white px-2"
								/>
							</span>

							<span className="bg-blue-800 rounded-full cursor-pointer hover:bg-blue-700  w-10 h-10 flex items-center justify-center">
								<Settings sx={{ fontSize: 38 }} className="text-white px-2"/>
							</span>
							<div className="border-2 border-white rounded-full p-1">
								<img 
									src={profileImgUrl ? profileImgUrl : placeholderimage}
									className="w-8 h-8 object-cover rounded-full"
								/>

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
