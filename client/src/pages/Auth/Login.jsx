import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
	EmailOutlined,
	KeyOutlined,
	PersonOutline,
	VisibilityOffOutlined,
	VisibilityOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import gmail from "./gmail.png";
import axios from "axios";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { fetchAPI } from "../../utils/apiFetch";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const response = await axios.post(`${fetchAPI}/user/login`, {
			username,
			password,
		});
		const data = response.data;
		if (data?.message) {
			setLoading(false);
		}
		if (data.status === "ok") {
			const token = data.token;
			if (data.token) {
				localStorage.setItem("access_token", token);
				localStorage.setItem("logged_in", true);
			}
			toast.success(data.message, {
				position: toast.POSITION.TOP_CENTER,
			});
			navigate("/home");
		} else if (data.status === "bad") {
			toast.error(data.message, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};
	if (passwordVisible) {
		setTimeout(() => {
			setPasswordVisible(false);
		}, 1000);
	}

	const signinAuth = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider).then((data) => {
			const user = data?.user;
			const googleName = user.displayName;
			setUsername(googleName);
			setEmail(googlemail);
		});
	};

	return (
		<div className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-600 to-black">
			<form
				className="w-400 bg-neutral-900/70 px-3 py-8 rounded-md  md:rounded-xl"
				onSubmit={handleSubmit}>
				<div>
					<Typography
						variant="h4"
						sx={{ fontFamily: "cursive", fontWeight: "bold" }}
						className="text-white text-center">
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
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div className="flex gap-4 border-2  border-white p-2 mx-3 my-5 rounded-md">
					<KeyOutlined className="text-white " />
					<input
						type={passwordVisible ? "text" : "password"}
						placeholder="Password"
						className="block bg-transparent text-white outline-0 w-full"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							setPasswordVisible(!passwordVisible);
						}}
						className="text-white">
						{passwordVisible ? (
							<VisibilityOffOutlined />
						) : (
							<VisibilityOutlined />
						)}
					</button>
				</div>
				<div className="p-3 flex flex-col gap-3">
					<button
						type="submit"
						className="bg-gradient-to-b from-indigo-800 to-blue-700 text-white w-full py-3 rounded-md"
						disabled={loading}>
						{loading ? (
							<CircularProgress sx={{ color: "#fff" }} size={20} />
						) : (
							"Submit"
						)}
					</button>
					<Typography className="text-white text-center">Or</Typography>
					<button
						onClick={signinAuth}
						className="flex gap-2 w-full bg-neutral-900/70 text-white p-3 justify-center rounded-md transition duration-500  hover:bg-neutral-800"
						disabled={loading}>
						<img src={gmail} className="w-6" />
						Continue with Google
					</button>
				</div>
				<Typography className="text-center text-white">
					Don't have an account?{" "}
					<Link to="/register">
						<span className="text-gray-400 underline hover:no-underline">
							Sign up
						</span>
					</Link>
				</Typography>
			</form>
			<ToastContainer
				toastStyle={{
					backgroundColor: "#222",
					color: "#fff",
					fontFamily: "revert",
					borderRadius: "10px",
				}}
			/>
		</div>
	);
};

export default Login;
