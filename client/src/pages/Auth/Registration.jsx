import React from 'react'
import { Button, TextField } from "@mui/material";
// import CircularProgress from '@mui/material/CircularProgress';

const Registration = () => {

  return (
    <div className="h-screen flex items-center">
    <form
        className="w-96 mx-auto mb-60 p-5 rounded-lg h-96 shadow-2xl">
        <h1 className="text-center text-blue-500 mb-6 text-lg ">
            Register
        </h1>

        <TextField
            label="Username"
            variant="outlined"
            required={true}
            type="text"
            className="text-field block w-full rounded-md p-2 mb-2 !important"
    
        />

        <TextField
            label="Password"
            variant="outlined"
            required={true}
            type="password"
            className="text-field  block w-full rounded-md p-2 "

        />

        <Button className="button" type="submit" >
            {/* {loading ? <CircularProgress sx= {{color :'#fff' }} size={20}/> : 'Submit'} */}
            Submit
        </Button>
{/* 
        <p className="text-center mt-4">
            Already have an account?&nbsp;
            <Link to="/login" className="text-blue-500">
                Login here
            </Link>
        </p> */}
    </form>
</div>
  )
}

export default Registration