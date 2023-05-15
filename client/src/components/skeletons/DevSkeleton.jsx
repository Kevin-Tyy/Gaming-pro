import React from 'react'
import {Skeleton} from '@mui/material'
const DevSkeleton = () => {
  return (
    <div className='p-2'>
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        
        <Skeleton sx={{ bgcolor : '#222' , width : '100%' , height : '200px', m:0}} animation="wave"/>        

    </div>
  )
}

export default DevSkeleton