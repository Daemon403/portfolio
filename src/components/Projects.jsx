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
    <section id="projects" className="w-full bg-[#060312] text-gray-400 flex justify-center items-center py-20">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center">
        
        {/* Title Section */}
        <div className="w-full max-w-[900px] mb-8">
          <SectionTitle icon={<Briefcase />} title="Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg flex flex-col items-center p-6"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{project.title}</h3>
              <p className="text-gray-300 text-center text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs border border-yellow-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-400 hover:text-yellow-300 flex items-center"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
