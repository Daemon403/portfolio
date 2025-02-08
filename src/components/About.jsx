import React from 'react'

const About = () => {
  return (
    <div name='about' className = 'w-full h-screen bg-blue-400 text-gray-400'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[90%] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p>
            I am a passionate tech enthusiast with a deep curiosity 
            for various aspects of technology. From data engineering 
            and machine learning to backend development and cloud architecture, 
            I enjoy exploring and building innovative solutions. Currently, I’m 
            focused on developing the backend for my edtech startup using Node.js 
            and JavaScript, while leveraging Google Cloud for database 
            architecture. I thrive on solving complex problems, optimizing 
            systems, and staying up-to-date with the latest advancements in tech.
            </p>
          </div>
        
        </div>

      </div>
      
    </div>
  )
}

export default About
