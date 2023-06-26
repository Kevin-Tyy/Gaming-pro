import React, { useState } from "react";
import Profile from "./pages/Profile";
import Developers from "./pages/Developers";
import Collections from "./pages/Collections";
import News from "./pages/News";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import { Navigate, Route, Routes } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import SearchPage from "./pages/SearchPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
function App() {
	console.info(
		"%c Hello developer,👋👋👋 Welcome to GameGeekz🎮",
		"color:white;font-size:1.5em;background:indigo"
	);
	return (
		<div className="h-full">
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="user/developers" element={<Developers />} />
					<Route path="user/collections" element={<Collections />} />
					<Route path="user/news" element={<News />} />
					<Route path="/games" element={<GamePage />} />
					<Route path="/games/:id" element={<GameDetails />} />
					<Route path="/games/search/:searchQuery" element={<SearchPage />} />
					<Route path="/user/profile" element={<Profile />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				
				<ToastContainer
					toastStyle={{
						backgroundColor: "#222",
						color: "#fff",
						fontFamily: "revert",
						borderRadius: "10px",

					}}
				/>
			</SkeletonTheme>
		</div>
	);
}

export default App;
