import React, {useEffect} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Homepage = () => {

  return (
    <div name='home' className=' bg-[#2b5390]'>

        {/* Main content */}

        <div className='max-w-[750px] mx-auto px-20 flex flex-col justify-center h-full'>
            
            <h1 className='text-white font-bold text-7xl sm:text-7xl'>Paul Nixon</h1>
            <h2 className='text-white font-bold'>Full Stack Developer</h2>
            <p className='text-white font-bold'>Currently in a Boot Camp for UPENN</p>
            <button className='text-white group border-2 px-1 py-3 my-3 flex justify-center hover:bg-[#8BB7CC] hover:border-black'> View Projects  <span className='group-hover:rotate-90 duration-8000'>

            <HiArrowNarrowRight className='ml-4'/> 
                
            </span>
            
            </button>
        </div>


    </div>
  )
}

export default Homepage