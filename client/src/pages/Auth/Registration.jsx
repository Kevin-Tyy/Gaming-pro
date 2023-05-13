import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
	EmailOutlined,
	KeyOutlined,
	PersonOutline,
	VisibilityOutlined,
	VisibilityOffOutlined,
	CheckCircleOutlineTwoTone,
} from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import gmail from "./gmail.png";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { auth , provider } from "../../config/firebase"
import { signInWithPopup } from "firebase/auth";
import { fetchAPI } from "../../utils/apiFetch";
import UploadModal from './UploadModal'

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [uploadImage , setUploadImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [ isModalVisible , setIsModalVisible ] = useState(false);
	const [errorMessage , setErrorMessage] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const response = await axios.post(`${fetchAPI}/api/register`, {
			username,
			email,
			password,
			uploadImage
		});
		const data = response.data;
		
		if (data?.message) {
			setLoading(false);
		}
		console.log(data)
		console.log(data.message)
		console.log(data.status)
		if (data.status === "ok") {
			setErrorMessage(data.message)
			const token = data.token;
			if (data.token) {
				localStorage.setItem("access_token", token);
				localStorage.setItem("logged_in", true);
			}
			toast.success(data.message, {
				position: toast.POSITION.TOP_RIGHT,
			});
			setTimeout(() => {
				navigate("/home");
			}, 2000);
		} else if (data.status === "bad") {
			toast.error(data.message, {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}
	if (passwordVisible) {
		setTimeout(() => {
			setPasswordVisible(false);
		}, 1000);
	}
	const signinAuth = (e) => {
		e.preventDefault()
		signInWithPopup(auth , provider).then((data)=> {
			const user = data?.user;
			const googleName = user.displayName
			const googlemail = user.email;
			setUsername(googleName);
			setEmail(googlemail);
			
		})
	}
	const handleToggle = (e) => {
		e.preventDefault();
		setIsModalVisible(!isModalVisible)
	}
	
	return (
		<div className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-600 to-black">
			<form
				onSubmit={handleSubmit}
				className="w-400  bg-neutral-900/70 px-3 py-8 rounded-md md:rounded-xl">
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
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required={true}
						className="block bg-transparent text-white outline-0 w-full "
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
						type={passwordVisible ? "text" : "password"}
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required={true}
						className="block bg-transparent text-white outline-0 w-full"
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
				<div className="p-3">
					<button onClick={handleToggle} disabled={loading} className="	bg-neutral-950/50 outline-dashed outline-1 outline-neutral-700 text-white w-full py-3 rounded-md flex gap-2 items-center justify-center">
						{ uploadImage && <CheckCircleOutlineTwoTone className="text-green-500"/>}
						{ uploadImage ? 'Image Uploaded' : 'Upload a photo' }
						 
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
					Already have an account?{" "}
					<Link to="/login">
						<span className="text-gray-400 underline hover:no-underline">
							Login here
						</span>
					</Link>
				</Typography>
			</form>
			{isModalVisible && <UploadModal handleToggle={handleToggle} setUploadImage={setUploadImage}/>}
			<ToastContainer toastStyle={{ backgroundColor: "#222", color : '#fff', fontFamily : 'revert', borderRadius : '10px' }} />
			

		</div>
	);
};

export default Login;
