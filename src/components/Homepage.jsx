/* import */

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll';

import { Link } from 'react-router-dom';

const Homepage = () => {

  return (
    <div name='home' className=' h-screen bg-[#2b5390]'>

      {/* Main content */}

      <div className='max-w-[750px] mx-auto px-20 flex flex-col justify-center h-full'>

        <h1 className='text-white font-bold text-7xl sm:text-7xl'>Paul Nixon</h1>
        <h2 className='text-white font-bold'>Full Stack Developer</h2>
        <p className='text-white font-bold'>Currently in a Boot Camp for UPENN</p>
        <Link to="/projects">
          <button className='text-white group border-2 px-1 py-3 my-3 flex justify-center hover:bg-[#8BB7CC] hover:border-black'> View Projects  <span className='group-hover:rotate-90 duration-8000'>

         
            <HiArrowNarrowRight className='ml-4' />
        

        </span>

        </button>  </Link>
      </div>


    </div>
  )
}

export default Homepage