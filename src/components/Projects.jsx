import React from 'react'
const Projects = () => {
    return (
        <div className='' name='projects'>
            <div className='w-full h-screen bg-[#060312] text-gray-400'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[90%] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                        Projects
                        </p>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-5 md:grid-cols-4 gap-10">
                    {[
                    { name: 'Portfolio', description: 'Portfolio website built using React and Tailwind CSS', link: 'github.com/daemon403/portfolio-react-app' }
                    ].map((project) => (
                        <div key={project.name} className="bg-yellow-400 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            <p className="font-semibold text-gray-800 mb-2">{project.name}</p>
                            <p className="text-gray-800 mb-2">{project.description}</p>
                            <a href={project.link} className="text-blue-800">View on Github</a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects