import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='text-white absolute top-3 left-8'>
      <Link to="/">
        <Typography variant='h4' sx={{ fontFamily: "cursive", fontWeight : "bold" , textShadow: '0px 0px 20px #1164D4'}}>
          Logo

        </Typography>
      </Link>
    </div>
  )
}

export default Logo