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
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>Resume</li> 
                </ul>

            </div>

            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10' > 
                
                {!nav ? <FaBars /> : <FaTimes /> }

            </div>

            {/* Mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7299d2] flex flex-col justify-center items-center'}>
                <li className='py-5 text-3xl'>About Me</li>
                <li className='py-5 text-3xl'>Portfolio</li>
                <li className='py-5 text-3xl'>Contact</li>
                <li className='py-5 text-3xl'>Resume</li>
            </ul>

            {/* Icon menu */}

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

                <ul>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8BA4A3] '>
                        <a className='flex justify-between items-center w-full text-black'
                        href='https://github.com/PaulNXN1'>
                             GitHub <FaGithub size={40} />                
                        </a>
                    </li>
                    <li className='w-[180px] h-[75px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#65CEFF]'>
                        <a className='flex justify-between items-center w-full text-black'
                        href='https://www.linkedin.com/'>
                             LinkedIn - NO ACCOUNT YET <FaLinkedin size={65} />                
                        </a>
                    </li>
                    <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFA533]'>
                        <a className='flex justify-between items-center w-full text-black'
                        href='mailto:paulnxn1@gmail.com'>
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