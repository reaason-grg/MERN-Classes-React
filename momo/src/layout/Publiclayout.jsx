import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'

const Publiclayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Fotter/>
    </div>
  )
}

export default Publiclayout
