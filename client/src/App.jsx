import React, { useState } from "react";
import Profile from './pages/Profile'
import Community from "./pages/Community";
import Collections from "./pages/Collections";
import News from "./pages/News";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import { Navigate, Route, Routes } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import SearchPage from "./pages/SearchPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";

function App() {
	console.info(
		"%c Hello developer,👋👋👋 Welcome to GameGeekz🎮",	
		"color:white;font-size:1.5em;background:indigo"
	);
	return (
		<div className="h-full">
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="user/developers" element={<Community />} />
				<Route path="user/collections" element={<Collections />} />
				<Route path="user/news" element={<News />} />
				<Route path="/games" element={<GamePage />} />
				<Route path="/games/:id" element={<GameDetails />} />
				<Route path="/games/search/:searchQuery" element={<SearchPage />} />
				<Route path="/user/profile" element={<Profile />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
