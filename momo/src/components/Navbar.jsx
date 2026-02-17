import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF,FaTiktok,FaInstagram  } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav className='flex items-center py-4 px-39 justify-between shadow-2xl fixed w-full z-999 bg-white'>
       <div className='flex items-center gap-16'>
            <div className='flex items-center gap-2 py-4 hover:cursor-pointer'
            onClick={()=>{
                navigate("/");
            }}>
                <img src="/image/logo.png" alt="logo" className='w-8 h-8' />
            <h2 className='text-[#0C6967] font-bold text-[25px] '>momos</h2>
        </div>
        <div className='flex gap-2 text=[#6B788E]'>
            <NavLink className="py-2 px-3  mt-2" to="/about">About Us</NavLink>
            <NavLink className="py-2 px-3  mt-2" to="/menu">Menu</NavLink>
            <NavLink className="py-2 px-3  mt-2" to="/service">Our Services</NavLink>
            <NavLink className="py-2 px-3  mt-2" to="/allergy-advice">Allergy Advice</NavLink>
            <NavLink className="py-2 px-3  mt-2" to="/cart">Cart</NavLink>
        </div>
       </div>
        <div className='flex items-center gap-8'>
            <div className='flex gap-8'>
                <FaFacebookF size={32} className='text-[#A6AEBB] rounded-full'/>
                <FaTiktok size={32} className='bg-[#A6AEBB] text-white p-1.5 rounded-full'/>
                <FaInstagram size={32} className='bg-[#A6AEBB] text-white p-1.5 rounded-full'/>
            </div>
            <NavLink to="/contact" className="bg-[#D95103] py-3 px-5.5 text-white rounded-[100px]">Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
