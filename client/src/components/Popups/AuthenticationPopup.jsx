import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function AuthPopUp(Component) {
	return function ProtectedComponent(props) {
	  const accessToken = localStorage.getItem('access_token');
  
	  if (!accessToken) {
		alert('Please login to continue');
		
	  }
  
	  return <Component {...props} />;
	};
  }

export default AuthPopUp;
