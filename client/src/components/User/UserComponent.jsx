import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import placeholderImage from '../../pages/images/placeholder.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const UserComponent = () => {
	const [userArr, setUserArr] = useState([]);
	const [minUserArr, setMinUserArr] = useState([]);
	const fetchUser = async () => {
		const response = await axios.get("http://localhost:4000/api/fetchUsers");
		const { data } = response;
		setUserArr(data);
		setMinUserArr(data.slice(0, 10));
	};
	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<div className="hidden xl:block">
			<div className="min-w-md sticky top-0 pt-16">
				<Typography variant="h5" sx={{ fontFamily : 'fantasy'}} className="text-neutral-300 underline">
					Find friends
				</Typography>
				<div className="mt-10">

					{minUserArr.map((user) => (
						<div className="flex items-center justify-between pl-2 pt-2 pr-10 transition duration-400 hover:bg-neutral-800/20">
							<div className="flex items-center gap-4 mb-2" key={user._id}>
							
								<img src={user.uploadImage ? user.uploadImage : placeholderImage} alt={user.username} className="w-16 h-16 object-cover rounded-full"/>
								<div>
									<Typography className="text-white capitalize">
										{user.username}
									</Typography>
									<Typography className="text-gray-400">
										{user.email}
									</Typography>
								</div>
							</div>
							<PersonAddIcon fontSize="large" className="text-violet-900 hover:bg-neutral-900 p-1 rounded-full cursor-pointer "/>

						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserComponent;
