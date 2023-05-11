import React, { useState, useEffect } from "react";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import coverImage from "../pages/images/cover.jpg";
import PostButton from "../components/Buttons/PostButton";
import PostPopUp from "../components/Popups/PostPopUp";
import EditProfilePopup from "../components/Popups/EditProfilePopup";
import axios from "axios";
import { Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import placeholderImage from '../pages/images/placeholder.jpg'
const Profile = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPhoto, setUserPhoto] = useState("");
	const [userInfo, setUserInfo] = useState([]);
	const [postToggle, setPostToggle] = useState(false);
	const [profileToggle, setProfileToggle] = useState(false);
	const [token , setToken] = useState("")

	const populateProfile = async (token) => {
		const { data } = await axios.get("http://localhost:4000/api/getuser", {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		setUserInfo(data);
		setUserPhoto(data.uploadImage);
		setUserName(data.username);
		setUserEmail(data.email);
	};

	useEffect(() => {
		const token = localStorage.getItem("access_token");
		setToken(token);
		if (token) {
			populateProfile(token);
		}
	}, []);

	const handlePostToggle = () => {
		setPostToggle(!postToggle);
	};
	const handleProfileToggle = () => {
		setProfileToggle(!profileToggle);

	}
 
	return (
		<div>
			<div className="h-full bg-black w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="absolute bg-gradient-to-r from-black to-black/30 top-0 bottom-0 left-0 right-0 w-full h-700 z-10"></div>
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-transparent md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div className="h-screen">
							<img
								src={coverImage}
								className="top-0 left-0 right-0 min-h-300 h-40vh object-cover w-full"
							/>
							<div className="relative ">
								<div className="absolute -top-32 mx-auto w-full flex flex-col justify-center items-center">
									<div className={`flex flex-col items-center  justify-center ${ postToggle ? 'z-20' : 'z-30' }`}>
										<div className="bg-gradient-to-r from-sky-400 via-blue-900  to-purple-900 rounded-full p-1">
											<div className="bg-black rounded-full p-1">
												<img
													src={userPhoto || placeholderImage}
													className="rounded-full h-44 w-44 object-cover"
												/>
											</div>
										</div>
										<Typography variant="h6" className="text-white capitalize">
											{userName}
										</Typography>
										<Typography variant="body1" className="text-neutral-500">
											{userEmail}
										</Typography>
									</div>
								</div>
								<div className="flex justify-center">
									<div className="absolute bg-neutral-900 h-48 w-full z-20 flex justify-center">
										<div onClick={handleProfileToggle} className="text-white absolute rounded-md p-2 top-2 right-2 cursor-pointer flex gap-2 transition duration-100 hover:bg-neutral-800 ">
											<Edit />
											Edit profile
										</div>
										
										<div className="absolute bottom-0 flex gap-7">
											<div className=" mx-auto text-white border-b-4 border-violet-800 pb-2">
												Your posts <span className="text-violet-600 font-black">0</span>
											</div>
											<div className=" mx-auto text-white ">
												Your friends
											</div>
											<div className=" mx-auto text-white ">
												Your games 
											</div>

										</div>
									</div>
									<div className="w-4/5 z-20 mt-52">
										<PostButton
											handlePostToggle={handlePostToggle}
											userInfo={userInfo}
										/>
										{postToggle && (
											<PostPopUp
												handlePostToggle={handlePostToggle}
												userInfo={userInfo}
												token={token}
											/>
										)}
									</div>
								</div>
								{profileToggle && <EditProfilePopup userInfo={userInfo} handleProfileToggle={handleProfileToggle} token={token}/>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
