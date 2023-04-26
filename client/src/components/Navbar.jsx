import { Avatar, Paper , Skeleton} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Send } from "@mui/icons-material";


const Navbar = () => {
  const [loading , setLoading] = useState(false);
  setTimeout(()=>{
    setLoading(true);
  }, 10000)
	return (

    <React.Fragment>
      {loading ?
      		<div className="w-full flex bg-transparent text-white h-16 rounded-2xl justify-around">
          <div className="flex items-center">
            <Paper
              component="form"
              sx={{
                bgcolor: "#3333334d",
                border: "none",
                shadow: "none",
                width: "450px",
                fontSize : '10px',
                display: "flex",
                alignItems: "center",
                borderRadius: "50px",
                px: 2,
                py: "12px",
              }}>
              <SearchIcon className="text-white" />
              <input
                className="bg-transparent w-full oultine outline-0 text-white pl-2 "
                placeholder="Search for your favorite games"
              />
            </Paper>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full cursor-pointer transition hover:from-neutral-600">
              <NotificationsNoneIcon sx={{ fontSize : 38}} className="text-white p-2"/>
            </span>
            <span className="bg-gradient-to-b from-blue-800 to-indigo-950/20 rounded-full cursor-pointer hover:from-blue-700">
              <Send sx={{ fontSize : 38}} className="text-white p-2"/>
            </span>
            <Avatar className="cursor-pointer">
              J
            </Avatar>
          </div>
        </div>
      :
      <Skeleton width={"99%"} height={100} sx={{ bgcolor: '#424242' , mx: 1, mt: '-13px'}}/>
     }

    </React.Fragment>


	);
};

export default Navbar;
