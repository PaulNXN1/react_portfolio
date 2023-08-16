import React, {useEffect} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Homepage = () => {

 

  return (
    <div name='home' className=' bg-[#2b5390]'>

        {/* Main content */}

        <div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full'>
            
            <h1 className='text-white font-bold text-7xl sm:text-7xl'>Hi! I'm Paul Nixon</h1>
            <h2 className='text-white font-bold'>Full Stack Developer</h2>
            <p className='text-white font-bold'>Currently in a Boot Camp for UPENN.  The goal is to master full stack web development</p>
        </div>
        <br></br>

        <div>
            <button className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full'> View Projects <HiArrowNarrowRight/> </button>
        </div>


    </div>
  )
}

export default Homepage