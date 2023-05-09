import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import placeholderImage from '../../pages/images/placeholder.jpg'
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
		<div>
			<div>
				{minUserArr.map((user) => (
					<div className="flex items-center gap-4 mb-5" key={user._id}>
						<img src={user.uploadImage ? user.uploadImage : placeholderImage} alt={user.username} className="w-16 h-16 object-cover rounded-full"/>
						<div>
                            <Typography className="text-white">
                                {user.username}
                            </Typography>
                            <Typography className="text-gray-400">
                                {user.email}
                            </Typography>
                        </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserComponent;
