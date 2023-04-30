import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { EmailOutlined, KeyOutlined, PersonOutline } from "@mui/icons-material";
// import CircularProgress from '@mui/material/CircularProgress';
import gmail from "./gmail.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {

	const [username, setUsername ] = useState("");
	const [password, setPassword] = useState("");
	console.log(username, password);

	const handleSubmit = (e) => {
		e.preventDefault()
		const {data} = axios.post("http://localhost:4000/api/login", {username, password});
			
	}
	return (
		<div className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-950">
			<form className="w-400 mb-40 bg-neutral-950/70 px-3 py-8 rounded-xl" onSubmit={handleSubmit}>
				<div>
					<Typography
						variant="h4"
						sx={{ fontFamily: "cursive", fontWeight: "bold" }}
						className="text-white text-center"
						>
						Logo
					</Typography>
				</div>
				<div className="flex border-2 gap-4 border-white p-2 mx-3 my-5 rounded-md">
					<PersonOutline className="text-white" />
					<input
						type="text"
						placeholder="Username"
						className="block bg-transparent text-white outline-0 w-full "
						value={username}
						onChange={(e)=> setUsername(e.target.value)}
					/>
				</div>

				<div className="flex gap-4 border-2  border-white p-2 mx-3 my-5 rounded-md">
					<KeyOutlined className="text-white " />
					<input
						type="password"
						placeholder="Password"
						className="block bg-transparent text-white outline-0 w-full"
						value={password}
						onChange={(e)=> setPassword(e.target.value)}
					/>
				</div>
				<div className="p-3 flex flex-col gap-3">
					<button type="submit" className="bg-gradient-to-b from-indigo-800 to-blue-700 text-white w-full py-3 rounded-md">
						Login
					</button>
					<Typography className="text-white text-center">
						Or
					</Typography>
					<button className="flex gap-2 w-full bg-neutral-900/70 text-white p-3 justify-center rounded-md transition duration-500  hover:bg-neutral-800">
						<img src={gmail} className="w-6" />
						Continue with Google
					</button>
				</div>
				<Typography className="text-center text-white">
					Don't have an account? {" "}
					<Link to="/register">
						<span className="text-gray-400 underline hover:no-underline">Sign up</span>
					</Link>
				</Typography>
			</form>
		</div>
	);
};

export default Login;
