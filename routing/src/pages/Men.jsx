import React from 'react'
import { useNavigate } from 'react-router-dom'

const Men = () => {
    const navigate = useNavigate()
  return (
     <div  className='flex flec-col bg-black gap-4'>
        <div className='w-80 br-red-200 p-2' onClick={()=>{
            navigate("/product/1")
        }}>
            <h1>Product 1</h1>
        </div>
        <div className='w-80 br-red-200 p-2' onClick={()=>{
            navigate("/product/2")
        }}>
            <h1>Product 2</h1>
        </div>
    </div>
  )
}

export default Men
