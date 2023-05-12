import React, { useEffect, useState } from "react";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import PostButton from "../components/Buttons/PostButton";
import PostPopUp from "../components/Popups/PostPopUp.jsx";
import Feed from '../components/PostFeed/Feed'
import UserComponent from "../components/User/UserComponent";


import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchAPI } from "../utils/apiFetch";
const News = () => {
	const [postToggle, setPostToggle] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	// const [currentSlide, setCurrentSlide] = useState(sliderImages[0]);
	const [token, setToken] = useState("");
	useEffect(() => {
		const token = localStorage.getItem("access_token");
		setToken(token);
		if (token) {
			populateProfile(token);
			setIsLoggedIn(true);
		}
		
	}, []);
	const populateProfile = async (token) => {
		const { data } = await axios.get(`${fetchAPI}/user/getuser`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		setUserInfo(data);
	};

	
	const handlePostToggle = () => {
		setPostToggle(!postToggle);
	};
	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div>
							<div className="mt-10">
								<div className="w-full ">
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
								<div className="w-full flex gap-3 justify-between mt-1">
									<Feed />
									<UserComponent />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
