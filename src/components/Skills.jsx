import React from 'react'

const Skills = () => {
  return (
    <div className='' name='skills'>
        <div className='w-full h-screen bg-[#060312] text-gray-400'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[90%] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                    Skills
                    </p>
                    </div>
                    
                </div>
                <div className="grid grid-cols-5 md:grid-cols-4 gap-10">
            {[
              { name: 'React', level: '95%' },
              { name: 'Node.js', level: '90%' },
              { name: 'TypeScript', level: '85%' },
              { name: 'Python', level: '80%' },
              { name: 'AWS', level: '75%' },
              { name: 'Docker', level: '85%' }
            ].map((skill) => (
              <div key={skill.name} className="bg-yellow-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <p className="font-semibold text-gray-800 mb-2">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills
