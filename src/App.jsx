import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes}  from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  const [sidebar,setSideBar]=useState(true);


  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element ={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categotyId/:videooId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
