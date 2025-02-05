import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#060312] text-gray-800 shadow-md px-4">  
      <div className="text-2xl font-bold text-white">Portfolio</div>
      
      {/* \Menu */}
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Skills</li>
            <li className="text-white">Experience</li>
            <li className="text-white">Projects</li>
            <li className="text-white">Contact</li>
        </ul>
        </div>

        <div className = "hidden">
            <FaBars /> 
        </div>

        {/* Mobile View */}
        <ul className="hidden">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Skills</li>
            <li className="text-white">Experience</li>
            <li className="text-white">Projects</li>
            <li className="text-white">Contact</li>
        </ul>

    </div>

  )
}

export default Navbar
