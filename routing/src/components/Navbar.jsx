import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-blue-500 text-white justify-center gap-10 p-4 text-xl '>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/service">Service</NavLink>
    <NavLink to="/products">Products</NavLink>
    </div>
  )
}

export default Navbar
