import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='text-white absolute top-3 left-8'>
      <Link to="/">
        <Typography variant='h4' sx={{ fontFamily: "cursive", fontWeight : "bold"}}>
          Logo

        </Typography>
      </Link>
    </div>
  )
}

export default Logo