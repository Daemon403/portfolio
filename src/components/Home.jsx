import React from 'react'
import { HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name = 'home' className='h-screen bg-[#060312] text-white W-full flex flex-col justify-center items-center'>
      <div className='text-4xl font-bold max-w-[90%] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <p>
          Hi, I'm <span className='text-[#FFD700]'>403</span>
        </p>
        <h1 className='text-4xl font-bold sm:text-7xl'>I'm a Software Developer</h1>
        <h2 className='text-xl mt-4'>I build things for the web</h2>
        <div>
        <button className='bg-[#FFD700] text-black px-4 py-2 mt-4 flex items-center justify-center rounded-md hover:bg-[#FFD700] hover:text-pink-900'>
          Get In Touch <HiArrowNarrowRight className='ml-2'/>
        </button>
        </div>
      </div>
        
    </div>
  )
}

export default Home
