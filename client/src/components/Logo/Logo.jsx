import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='text-white absolute top-3 left-8'>
      <Link to="/">
        <Typography variant='h5' sx={{ fontFamily: "cursive", fontWeight : "bold" }}>
          <span>Game</span>
          <span className='text-violet-950'>Geekz</span>

        </Typography>
      </Link>
    </div>
  )
}

export default Logo