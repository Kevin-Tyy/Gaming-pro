import React from 'react'
import { Button, TextField } from "@mui/material";
// import CircularProgress from '@mui/material/CircularProgress';
const Login = () => {
  return (
    <div className="h-screen flex items-center">
			<form
				className="w-96 mx-auto mb-60 p-5 rounded-lg h-96 shadow-2xl">
				<h1 className="text-center text-blue-500 mb-6 text-lg ">
					Login
				</h1>

				<TextField
					label="Username"
					variant="outlined"
					required={true}
					type="text"
					className="text-field  block w-full rounded-md p-2 mb-2 !important"
					
				/>

				<TextField
					label="Password"
					variant="outlined"
					type="password"
					className="text-field  block w-full rounded-md p-2 "

				/>

				<Button className="button" type="submit" >
					{/* {loading ? <CircularProgress sx= {{color :'#fff' }} size={20}/> : 'Submit'} */}
                    submit
				</Button>

				{/* <p className="text-center mt-4">
					Don't have an account?&nbsp;
					<Link to="/register" className="text-blue-500">
						Sign Up
					</Link>
				</p> */}
			</form>
		</div>
  )
}

export default Login