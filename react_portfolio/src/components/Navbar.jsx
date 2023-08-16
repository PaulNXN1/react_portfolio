import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2b5390] text-gray-300'>

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

            <div className='hidden'></div>

        </div>
    )
}

export default Navbar