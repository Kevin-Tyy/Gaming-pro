import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Community from "./pages/Community";
import Collections from "./pages/Collections";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Skeleton } from "@mui/material";
function App() {
	return (
		<div>
			<div className="h-full bg-neutral-900 w-full">
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
								<Route path="/contacts" element={<Contacts />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
