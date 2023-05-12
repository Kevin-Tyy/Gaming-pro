import React, { useEffect, useState } from "react";
import { PersonOutline, EmailOutlined, Close } from "@mui/icons-material";
import axios from "axios";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { CircularProgress, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import placeholderImage from '../../pages/images/placeholder.jpg'
const EditProfilePopup = ({ userInfo, handleProfileToggle , token}) => {
	
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPhoto, setUserPhoto] = useState("");
	const [newUsername, setNewUsername] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newProfileImage ,setNewProfileImage] = useState("");
	const [loading , setLoading]= useState(false)
	
	useEffect(() => {
		setUserName(userInfo.username);
		setUserEmail(userInfo.email);
		setUserPhoto(userInfo.uploadImage);
	}, [userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true);
		console.log('submitting..')
		const { data } = await axios.put('http://localhost:4000/api/updateprofile' ,
		 { newUsername, newEmail , newProfileImage},
		 {
			headers : {
				Authorization : 'Bearer ' + token
			}	
		})
		if(data.status === 'bad'){
			toast.error(data.msg , {
				position : toast.POSITION.TOP_RIGHT
			})
		}
		else{
			toast.success(data.msg , {
				position : toast.POSITION.TOP_RIGHT
			})
		}
		setLoading(false)
		
	}
	const handleFileInput = (e) => {
		const files = e.target.files[0];
		const reader = new FileReader()
		reader.readAsDataURL(files);
		reader.onloadend= () => {
			setNewProfileImage (reader.result)
			console.log(reader.result)
		}
	}
	
	return (
		<div onClick={handleProfileToggle} className=" fixed top-0 bottom-0 right-0 left-0 h-screen w-full bg-neutral-950/70 z-50 flex items-center justify-center">
			<div onClick={(e)=> e.stopPropagation()} className="bg-neutral-800 w-full max-w-sm rounded-md">
				<div className="relative flex flex-col items-center">
					<Close onClick={handleProfileToggle} fontSize="large" className="text-white absolute top-2 right-2 p-1 hover:bg-neutral-700 cursor-pointer rounded-full z-20 "/>

					<form onSubmit={handleSubmit} className="relative py-10 flex flex-col items-center w-full px-9 ">
						<Typography sx={{ pb : '20px', mb: '20px' , fontWeight : 900}} className="text-neutral-400 border-b border-neutral-600 w-full text-center ">
							Update your profile
						</Typography>
						<img
							src={ newProfileImage ? newProfileImage : userPhoto || placeholderImage }
							className="w-44 h-44 object-cover rounded-full"
						/>
						<label htmlFor="file" className="cursor-pointer">
							<AddAPhotoIcon fontSize="large" className="text-white absolute top-60 right-28" />
						</label>
						<div className="w-full">
							<input
								type="file"
								accept="image/png, image/jpeg"
								id="file"
								className="hidden"
								onChange={handleFileInput}
							/>
							<div className="flex border-2 gap-4 border-white p-2  my-5 rounded-md w-full">
								<PersonOutline className="text-white " />
								<input
									type="text"
									placeholder={userName}
									onChange={(e) => setNewUsername(e.target.value)}
									required={true}
									className="block bg-transparent text-white outline-0 w-full "
								/>
							</div>
							<div className="flex border-2 gap-4 border-white p-2 rounded-md w-full">
								<EmailOutlined className="text-white" />
								<input
									type="email"
									placeholder={userEmail}
									onChange={(e) => setNewEmail(e.target.value)}
									className="block bg-transparent text-white outline-0 w-full"
									required={true}
								/>
							</div>
							<button type="submit" disabled={ !newEmail && !newUsername && loading} className="p-2 my-5 bg-violet-950 text-white rounded-md cursor-pointer w-full transition duration-200 hover:bg-violet-900">
								{loading ? <p className="text-neutral-400">Submitting...</p> : "Save"}
							</button>
							<p className="text-neutral-500 underline cursor-pointer text-center" onClick={handleProfileToggle}>Cancel</p>
						</div>
					</form>
					<ToastContainer toastStyle={{ backgroundColor: "#222", color : '#fff', fontFamily : 'revert', borderRadius : '10px' }}/>
				</div>
			</div>
		</div>
	);
};

export default EditProfilePopup;
