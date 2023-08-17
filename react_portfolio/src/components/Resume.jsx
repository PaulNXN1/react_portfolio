import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'

/* Project Component*/

const Resume = () => {


  return (
    <div name="resume" className='text-white'>
      <p style = {{textAlign: 'center'}}>
        Please click on the resume link to your left.
        I currently specialize in HTML, CSS, JavaScript, React.JS, and Node.js
      </p>
      



      {/* Main Container */}
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-4'>
          <div className='flex justify-center flex-col shadow-md shadow-[#c6eaea]'>
            <img src= {html} alt='html'/>
            <p className='text-2xl text-white'>HTML</p>
            <br></br>
          </div>

          <div className='flex justify-center flex-col shadow-md shadow-[#c6eaea]'>
            <img src={css} alt='css'/>
            <p className='text-2xl text-white'>CSS</p>
            <br></br>
          </div>

          <div className='flex justify-center flex-col shadow-md shadow-[#c6eaea]'>
            <img src={javascript} alt='js'/>
            <p className='text-2xl text-white'>JavaScript</p>
            <br></br>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Resume