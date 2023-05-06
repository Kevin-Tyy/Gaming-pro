import React, { useState } from "react";
import Navbar from "./components/Fixed/Navbar";
import Sidebar from "./components/Fixed/Sidebar";
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
import UploadModal from "./pages/Auth/UploadModal";
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
				<Route path="/community" element={<Community />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/news" element={<News />} />
				<Route path="/games" element={<GamePage />} />
				<Route path="/games/:id" element={<GameDetails />} />
				<Route path="/games/search/:searchQuery" element={<SearchPage />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/uploads" element={<UploadModal/>} />
			</Routes>
		</div>
	);
}

export default App;
