import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/apiFetch";
import { imagePosterObj, sliderImages } from "../utils/posters";
import { Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link, useNavigate } from "react-router-dom";
import GameCard from "../components/cards/GameCard";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import UserComponent from "../components/User/UserComponent";
import CustomCard from "../components/Cards/CustomCard";
import PostButton from "../components/Buttons/PostButton";
import PostPopUp from "../components/Popups/PostPopUp.jsx";
import Feed from '../components/PostFeed/Feed'
import axios from "axios";

const Home = () => {
	const [games, setGames] = useState([]);
	const [gamesArray, setGamesArray] = useState([]);
	const [postToggle, setPostToggle] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [currentSlide, setCurrentSlide] = useState(sliderImages[0]);
	const [token, setToken] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = sliderImages.indexOf(currentSlide);
			const nextIndex = (currentIndex + 1) % sliderImages.length;
			setCurrentSlide(sliderImages[nextIndex]);
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide, sliderImages]);

	useEffect(() => {
		fetchFromAPI("games", 1).then((data) => {
			console.log(data);
			setGamesArray(data.results.slice(0, 6));
		});

		const token = localStorage.getItem("access_token");
		setToken(token);
		if (token) {
			populateProfile(token);
			setIsLoggedIn(true);
		}
		
	}, []);

	const populateProfile = async (token) => {
		const { data } = await axios.get("http://localhost:4000/api/getuser", {
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
			<div className="h-full bg-black w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<img
						src={currentSlide}
						alt="Loading"
						className="w-full h-full object-cover absolute top-0 bottom-0 right-0 left-0"
					/>
					<div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black via-black/60 to-black/0"></div>
					<div className="absolute w-full h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/0"></div>
					<div className="h-14 md:h-screen  fixed bottom-0 w-full md:w-20  md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar userInfo={userInfo} isLoggedIn={isLoggedIn} />

						<div>
							<div className="lg:p-10">
								<div className="h-screen flex flex-col lg:flex-row justify-center items-start gap-4">
									<div className="h-96  lg:h-700 w-4/5 relative flex items-start md:items-center justify-center">
										<div className="w-full h-3/5 max-w-5xl rounded-3xl p-10">
											<Typography variant="h2" sx={{ fontFamily: "fantasy" }}>
												<span className="text-transparent  text-center bg-gradient-to-r from-blue-800 via-sky-700 to-violet-950 bg-clip-text">
													Games, unnecessary obstacles that we volunteer to
													tackle.
												</span>
												🎮
											</Typography>

											<Typography
												sx={{ py: 5 }}
												className="text-white border-b-2 pb-3 border-white ">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Inventore, cum vel. Blanditiis labore vel quaerat
												repellat ipsam voluptate molestiae sapiente nesciunt,
												corporis repudiandae aperiam odit aliquid. Illo maiores
												recusandae veniam.
											</Typography>
											<button className="bg-transparent border border-white text-white flex gap-4 px-7 py-3 mt-10  transition duration-500 hover:bg-violet-950 hover:border-violet-900">
												Discover Games 🎮
											</button>
										</div>
									</div>
									<div className="w-full max-w-sm px-5 pb-5 pt-2 rounded-xl  border-gradient-to-r hidden lg:block">
										<Typography
											variant="body1"
											sx={{ color: "white", ml: 2 }}
											className="border-b-4 border-black/30-700 w-32 ">
											Popular games
										</Typography>
										<div className=" flex flex-row lg:flex-col gap-3">
											<CustomCard imagePosterObj={imagePosterObj} />
										</div>
									</div>
								</div>
								<div>
									<Typography
										sx={{
											fontSize: "30px",
											fontFamily: "fantasy",
											marginLeft: "20px",
										}}
										className=" text-transparent w-80 border-l-4 px-4 border-sky-500 bg-gradient-to-r from-sky-600 to-violet-700 bg-clip-text ">
										Play Games online
									</Typography>
									<GameCard games={gamesArray} />
								</div>
								<div className="w-full flex justify-center">
									<PostButton handlePostToggle={handlePostToggle} />
									{postToggle && (
										<PostPopUp
											handlePostToggle={handlePostToggle}
											userInfo={userInfo}
											token={token}
										/>
									)}
								</div>
								<div className="w-full flex justify-between mt-16">
									<Feed/>
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

export default Home;
