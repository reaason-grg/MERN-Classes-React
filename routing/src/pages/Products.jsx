import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div  className='flex bg-black text-white h-screen justify-center text-6xl uppercase'>
        <nav>
            <Link to="/products/men">Men</Link>
            <Link to="/products/women">Women</Link>
        </nav>
        <div className='flex bg-black test-white justify-center items-center h-screen text-6xl uppercase'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Products
