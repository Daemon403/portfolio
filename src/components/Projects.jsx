import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio showcasing my projects, skills, and experience. Built using React and Tailwind CSS for a clean and modern UI.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://github.com/daemon403'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, secure payments, and an admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A task management tool with real-time updates, task assignment, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    tags: ['React', 'Firebase', 'TypeScript'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section name="projects" className="w-full min-h-screen bg-[#060312] text-gray-400 flex justify-center items-center z-10">
      <div className="max-w-[90%] w-full h-full flex flex-col justify-center items-center">
        
        {/* Title Section */}
        <div className="w-full max-w-[900px]">
          <SectionTitle icon={<Briefcase />} title="Projects" />
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-[900px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 relative border border-gray-700"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-sm border border-yellow-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>

              {/* Hover Description Overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-400 hover:text-yellow-300 flex items-center"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
