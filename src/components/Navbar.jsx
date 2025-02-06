import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiGmail } from 'react-icons/si'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#060312] text-gray-800 shadow-md px-4">  
      <div className="text-2xl font-bold text-white">Portfolio</div>
      
      {/* \Menu */}

        {/* Desktop View */}
  
      <ul className="hidden md:flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Skills</li>
            <li className="text-white">Experience</li>
            <li className="text-white">Projects</li>
            <li className="text-white">Contact</li>
        </ul>
        
        {/* Desktop View */}

        <div onClick={handleClick} className = "md:hidden z-10">
          {nav ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile View */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#060312] text-white items-center flex flex-col justify-center'}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Experience</li>
            <li className="py-6 text-4xl">Projects</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* Mobile View */}
        {/* Socials */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[0px] bg-[#060312] duration-300">
            <a className='flex justify-between items-center w-full text-gray-600' href="/">Github<FaGithub size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[0px] bg-[#060312] duration-300">
            <a className='flex justify-between items-center w-full text-gray-600' href="/">Linkedin<FaLinkedin size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[0px] bg-[#060312] duration-300">
            <a className='flex justify-between items-center w-full text-gray-600' href="/">Mail<HiOutlineMail size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[0px] bg-[#060312] duration-300">
            <a className='flex justify-between items-center w-full text-gray-600' href="/">Resume<BsFillPersonLinesFill size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[0px] bg-[#060312] duration-300">
            <a className='flex justify-between items-center w-full text-gray-600' href="/">Gmail<SiGmail size={30}/></a>
            </li>
          </ul>
        </div>

    </div>

  )
}

export default Navbar
