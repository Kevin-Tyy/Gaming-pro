import React, { useEffect } from "react";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import { useNavigate } from "react-router-dom";
import AuthPopUp from "../components/Popups/AuthenticationPopup";
import { fetchAPI } from "../utils/apiFetch";
const Collections = (props) => {
	const navigate = useNavigate();
	const populateDashboard = async () => {
		const token = localStorage.getItem("token");
		const data = await axios.get(`${fetchAPI}/user/protectedroute`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
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

						<div>Collections</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPopUp(Collections);
