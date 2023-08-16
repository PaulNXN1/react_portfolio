import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    useEffect(() => {
        console.log(document.getElementById('nav').style.display, '********************')
    })

    return (
        <div id = 'nav' className=' w-full h-[100px] flex justify-between items-center px-4 bg-[#2b5390] text-gray-300'>

            <div> <img src={logo} alt="Logo" style={{ width: '75px' }} />

            </div>

            {/* Navbar menu */}

            <div className='hidden md:flex' >

                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li> 
                </ul>

            </div>

            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10' > 
                
                {!nav ? <FaBars /> : <FaTimes /> }

            </div>

            {/* Mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b5390] flex flex-col justify-center items-center'}>
                <li className='py-5 text-3xl'>Home</li>
                <li className='py-5 text-3xl'>About</li>
                <li className='py-5 text-3xl'>Projects</li>
                <li className='py-5 text-3xl'>Contact</li>
            </ul>

            {/* Icon menu */}

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

                <ul>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8BA4A3] '>
                        <a className='flex justify-between items-center w-full text-black'
                        href='/'>
                             GitHub <FaGithub size={40} />                
                        </a>
                    </li>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#65CEFF]'>
                        <a className='flex justify-between items-center w-full text-black'
                        href='/'>
                             LinkedIn <FaLinkedin size={40} />                
                        </a>
                    </li>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFA533]'>
                        <a className='flex justify-between items-center w-full text-black'
                        href='/'>
                             Email <HiOutlineMail size={40} />                
                        </a>
                    </li>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33FFF3]'>
                        <a className='flex justify-between items-center w-full text-black'
                        href='/'>
                             Resume <BsFillPersonLinesFill size={40} />                
                        </a>
                    </li>
                </ul>



            </div>

        </div>
    )
}

export default Navbar