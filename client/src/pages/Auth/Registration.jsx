import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { EmailOutlined, KeyOutlined, PersonOutline } from "@mui/icons-material";
import CircularProgress from '@mui/material/CircularProgress';
import gmail from "./gmail.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(false);

	
	const handleSubmit = (e) => {
		e.preventDefault()
		const {data} = axios.post('http://localhost:4000/api/register', {username, email, password})	
	}

	
	return (
		<div className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-600 to-black">
			<form onSubmit={handleSubmit} className="w-400 mb-40 bg-neutral-900/70 px-3 py-8 rounded-xl">
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
						value={username}
						onChange={(e)=> setUsername(e.target.value)}
						required={true}
						className="block bg-transparent text-white outline-0 "
					/>
				</div>
				<div className="flex border-2 gap-4 border-white p-2 mx-3 my-5 rounded-md">
					<EmailOutlined className="text-white" />
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="block bg-transparent text-white outline-0 w-full"
						required={true}
					/>
				</div>
				<div className="flex gap-4 border-2  border-white p-2 mx-3 my-5 rounded-md">
					<KeyOutlined className="text-white " />
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required={true}
						className="block bg-transparent text-white outline-0 w-full"
					/>
				</div>
				<div className="p-3 flex flex-col gap-3">
					<button className="bg-gradient-to-b from-indigo-800 to-blue-700 text-white w-full py-3 rounded-md" disabled={loading}>
						{loading ? <CircularProgress sx= {{color :'#fff' }} size={20}/> : 'Submit'}
					</button>
					<Typography className="text-white text-center">
						Or
					</Typography>
					<button className="flex gap-2 w-full bg-neutral-900/70 text-white p-3 justify-center rounded-md transition duration-500  hover:bg-neutral-800" disabled={loading}>
						<img src={gmail} className="w-6" />
						Continue with Google
					</button>
				</div>
				<Typography className="text-center text-white">
					Already have an account? {" "}
					<Link to="/login">
						<span className="text-gray-400 underline hover:no-underline">Login here</span>
					</Link>
				</Typography>
			</form>
		</div>
	);
};

export default Login;
