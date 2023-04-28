import { Avatar, Paper , Skeleton} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [loading , setLoading] = useState(false);
  const [searchString , setSearchString] = useState("")
  setTimeout(()=>{
    setLoading(true);
  }, 0)
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`search/${searchString}`);
    setSearchString("");
  }

	return (
    <React.Fragment>
      		<div className="w-full flex bg-neutral-950 text-white h-16  justify-between px-10 sticky top-0 z-50">
      {loading ?
          <div className="flex items-center">
            <Paper
              component="form"
              onSubmit={handleSubmit}
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
                py: "9px",
              }}>
              <SearchIcon className="text-white" />
              <input
                className="bg-transparent w-full oultine outline-0 text-white pl-2 "
                placeholder="Search for your favorite games"
                onChange={(e)=> setSearchString(e.target.value)}
              />
            </Paper>
          </div>
            :
            <Skeleton width={"99%"} height={100} sx={{ bgcolor: '#424242' , mx: 1, mt: '-13px'}} animation="wave"/>
           }

          <div className="flex items-center gap-4">

            {loading ?    <span className="bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full cursor-pointer transition hover:from-neutral-600">
              <NotificationsNoneIcon sx={{ fontSize : 38}} className="text-white p-2"/>
            </span> :  <Skeleton animation="wave" variant="circular" width={40} height={40} sx={{
							bgcolor: "#424242",
							

						}}/>}

            {loading ?  <span className="bg-gradient-to-b from-blue-800 to-indigo-950/20 rounded-full cursor-pointer hover:from-blue-700">
              <Send sx={{ fontSize : 38}} className="text-white p-2"/>
            </span> :  <Skeleton animation="wave" variant="circular" width={40} height={40} sx={{
							bgcolor: "#424242",
							
							
						}}/>  }

            {loading ? 
            <Avatar sx={{ bgcolor : "purple"}}className="cursor-pointe">
              J
            </Avatar>
            :
            <Skeleton animation="wave" variant="circular" width={40} height={40} sx={{
							bgcolor: "#424242",
							
							
						}}/> }
            
          </div>
        </div>

    </React.Fragment>


	);
};

export default Navbar;
