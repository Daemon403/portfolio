import React from 'react';
import { Building } from "lucide-react";
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Engineer Intern',
      company: 'EdTech Startup',
      period: 'Jan 2024 - Present',
      description: [
        'Designed and optimized database architecture using PostgreSQL and Firebase.',
        'Developed ETL pipelines to process and analyze large datasets efficiently.',
        'Implemented data caching strategies to improve API response times.',
        'Worked on data security and compliance measures for user information storage.'
      ],
      technologies: ['PostgreSQL', 'Firebase', 'GCP', 'Node.js', 'ETL']
    },
    {
      title: 'Backend Developer',
      company: 'EduTecX',
      period: 'Sep 2023 - Present',
      description: [
        'Developed RESTful APIs using Node.js and Express to support education platforms.',
        'Integrated Firebase Firestore for real-time data synchronization.',
        'Implemented authentication and authorization using Firebase Authentication.',
        'Optimized backend performance, reducing API latency by 30%.'
      ],
      technologies: ['Node.js', 'Express', 'Firebase', 'GCP', 'Docker']
    },
    {
      title: 'Founder & Tech Lead',
      company: 'Ongea-SpeakUp',
      period: 'Jun 2022 - Present',
      description: [
        'Designed and built a web platform to enhance youth development and engagement.',
        'Led a team of developers in implementing scalable cloud-based solutions.',
        'Deployed and managed cloud infrastructure on Google Cloud Platform.',
        'Integrated AI-driven features for personalized content recommendations.'
      ],
      technologies: ['React', 'Node.js', 'GCP', 'Machine Learning', 'Firebase']
    }
  ];

  return (
    <section 
      id="experience" 
      className="w-full bg-[#060312] text-gray-400 flex justify-center items-center py-16 relative"
    >
      <div className="max-w-[90%] w-full flex flex-col justify-center items-center">
        
        {/* Title Section */}   
        <div className="w-full max-w-[900px] mb-8">
          <SectionTitle icon={<Building />} title="Work Experience" />
        </div>

        {/* Experience Section */}
        <div className="w-full max-w-[900px] relative">
          <div className="relative border-l-2 border-yellow-400 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-yellow-400 border-4 border-[#060312] z-10"></div>

                <div className="bg-gray-800 p-6 dark:bg-gray-700 rounded-lg shadow-md border border-yellow-400 transition-colors duration-300 z-10 relative">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                    <span className="text-yellow-300 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-300 mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-yellow-400 text-[#060312] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
