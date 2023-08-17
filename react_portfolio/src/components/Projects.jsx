import React from 'react'
import food_focus from "../assets/food_focus.png"
import JATE from "../assets/JATE.jpg"
import svg from "../assets/svg.png"
import noteTaker from "../assets/noteTaker.png"
import password from "../assets/password.png"
import weather from "../assets/weather.png"


const Projects = () => {
  return (
    <div name="projects">

      {/* Main Container */}
      <div>

        <div>
          <p className='text-white'>Projects</p>
          <p className='text-white'> Enjoy reviewing my current projects!</p>
        </div>

        <div>
          <div>
            <img src={food_focus} alt="food focus" width={500} />
            <p className='text-white' >Food Focus</p>
          </div>

          <div>
            <img src={JATE} alt="JATE" width={500} />
            <p className='text-white'>Just Another Text Editor</p>
          </div>

          <div>
            <img src={svg} alt="svg" width={500}/>
            <p className='text-white'>Creating SVGs</p>
          </div>

          <div>
            <img src={noteTaker} alt="noteTaker" width={500}/>
            <p className='text-white'>Note Taker Application</p>
          </div>

          <div>
            <img src={password} alt="password" width={500}/>
            <p className='text-white'>Password Generator</p>
          </div>

          <div>
            <img src={weather} alt="weatherapp" width={500}/>
            <p className='text-white'>Weather API Application</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects;