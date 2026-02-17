import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='flex items-center h-screen justify-center relative gap-40'>
      <div>
        <h3 className='text-[#6B788E]'>RESTAURANT</h3>
        <h1 className='text-[61px] font bold '>The <span className='bg-[url(/image/vector.png)] bg-contain bg-no-repeat 
        bg-center text-white'>#One</span> <br/> Momo Resturant</h1>
        <p className='text-[#252D43] text-xl font-semibold'>
            More than <span className='text-[#D95103] font-bold text-[25px]'>20+ Varieties</span> of momo available for you</p>
        <button className='bg-[#0C6967] text-white flex items-center py-5 px-10 gap-2 rounded-full mt-10'>
            Explore food Menu <FaArrowRight/></button>
      </div>
      <div>
        <img src="/image/momos.png" alt="" className='w-150 relative z-2'/>
        <img src="/image/halfcircle.png" alt="" className='w-80 absolute -top-3 right-0 z-1' />
      </div>
    </div>
  )
}

export default Hero
