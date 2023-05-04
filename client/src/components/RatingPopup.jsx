import React from "react";
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom"
const RatingPopup = () => {
  const navigate = useNavigate()
  function onLoginClick (){
    navigate('/login');
  }
  
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>Please log in to access this page</h2>
			<button onClick={onLoginClick}>Log In</button>
		</Modal>
	);
};

export default RatingPopup;
