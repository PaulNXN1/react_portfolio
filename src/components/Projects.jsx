/* import */

import React from 'react'
import food_focus from "../assets/food_focus.png"
import JATE from "../assets/JATE.jpg"
import svg from "../assets/svg.png"
import noteTaker from "../assets/noteTaker.png"
import password from "../assets/password.png"
import weather from "../assets/weather.png"
import knowonthegoimage from "../assets/knowonthegoimage.jpg"

/* Project Component*/

const Projects = () => {
  return (
    <div name="projects" className='w-full h-screen'>

      {/* Main Container */}
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-3xl text-white'>Projects</p>
          <p className='text-white'> Enjoy reviewing my current projects!</p>
          
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-4'>
          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://paulnxn1.github.io/food_Focus/"> <img className='w-250 mx-auto'  src={food_focus} alt="food focus" /></a>
            <p className='text-2xl text-white'>Food Focus</p>
            <br></br>
            
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
            <a href="https://github.com/PaulNXN1/textEditor" > <img className='w-250 mx-auto'  src={JATE} alt="JATE"  /> </a>
            <p className='text-2xl text-white'>Just Another Text Editor</p>
            <br></br>
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://github.com/PaulNXN1/design_SVGLogo">  <img className='w-250 mx-auto'  src={svg} alt="svg"/> </a>
            <p className='text-2xl text-white'>Creating SVGs</p>
            <br></br>
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://note-taker-nixon.herokuapp.com/">  <img className='w-250 mx-auto '  src={noteTaker} alt="noteTaker" /> </a>
            <p className='text-2xl text-white'>Note Taker Application</p>
            <br></br>
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://paulnxn1.github.io/passwordCoder/"><img className='w-250 mx-auto'  src={password} alt="password"/> </a>
            <p className='text-2xl text-white'>Password Generator</p>
            <br></br>
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://paulnxn1.github.io/weather_Application/"><img className='w-250 mx-auto'  src={weather} alt="weatherapp" /> </a>
            <p className='text-2xl text-white'>Weather API Application</p>
            <br></br>
          </div>

          <div className='shadow-md shadow-[#c6eaea] hover:scale-150 duration-700'>
          <a href="https://childs-play-207b603b0a7d.herokuapp.com/"><img className='w-250 mx-auto'  src={knowonthegoimage} alt="project3" /> </a>
            <p className='text-2xl text-white'>Know on the Go!</p>
            <br></br>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects;