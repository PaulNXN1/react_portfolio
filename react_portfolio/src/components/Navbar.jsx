import React from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2b5390] text-gray-300'>

<div> <img src={logo} alt= "Logo Image" style={{width: '75px'}}/>

</div>

    </div>
  )
}

export default Navbar