import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Community from "./pages/Community";
import Collections from "./pages/Collections";
import News from "./pages/News";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Skeleton } from "@mui/material";
import GameDetails from "./pages/GameDetails";
function App() {
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
							<Routes>
								<Route path="/" element={<Navigate to="/home" />} />
								<Route path="/home" element={<Home />} />
								<Route path="/community" element={<Community />} />
								<Route path="/collections" element={<Collections />} />
								<Route path="/news" element={<News />} />
								<Route path="/games" element={<GamePage />} />
								<Route path="/game/:id" element={<GameDetails/>}/>
								<Route path="/home/game/:id" element=
								{<GameDetails/>}/>

							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
