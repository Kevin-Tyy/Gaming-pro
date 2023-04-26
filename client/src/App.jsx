import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Community from './pages/Community'
import Collections from './pages/Collections'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Register from './pages/signin'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Skeleton } from '@mui/material'
function App() {

  const [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 10000);
  return (

    <div>
        <div className='h-screen bg-light z-50 w-full'>
          <div className='grid grid-cols-7'>
            <div className='h-screen'>
              <Sidebar/>

            </div>
            <div className='col-span-6 '>
              <Navbar/>
            
              <div>
                {
                  loading ? 
                <Routes>
                  <Route path="/" element={<Navigate to="/"/>}/>
                  <Route path='/home' element={<Home/>} />
                  <Route path="/community" element={<Community/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/collections" element={<Collections/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
                  
                  :
               <Skeleton width={"99%"} height={700} sx={{ bgcolor: '#424242' , mx: 1, mt: '-160px'}} animation="wave"/>

                }

              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default App
