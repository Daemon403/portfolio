import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Ashesi University',
      period: '2021 - 2025 (Expected)',
      gpa: '3.8/4.0',
      description: 'Specialising in Cybersecurity, Software Development and Artificial Intelligence',
      courses: [
        'Data Structures and Algorithms',
        'Machine Learning',
        'Database Systems',
        'Web Development',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Artificial Intelligence'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      year: '2021-2022',
      description: 'Recognized for academic excellence for 4 consecutive semesters'
    },
    {
      title: 'Hackathon Winner',
      year: '2022',
      description: 'First place at Ashesi D-Lab Hackathon for developing an AI-powered education accessibility tool'
    },
    {
      title: 'Mastercard Foundation Scholarship',
      year: '2021-2025',
      description: 'Full-tuition scholarship awarded based on academic achievement'
    },
    {
      title: 'Best Student Project',
      year: '2022',
      description: 'Awarded for the development of an innovative smart home energy management system'
    }
  ];

  return (
    <section id="education" className="w-full bg-[#060312] text-gray-400 flex justify-center items-center">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center">
        {/* Title Section */}
        <div className="w-full max-w-[900px] mb-8">
          <SectionTitle icon={<Code2 />} title="Education & Achievements" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 dark:text-yellow-400 mb-6">Education</h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h4 className="text-xl font-semibold text-white-400 dark:text-gray-400">{edu.degree}</h4>
                  <span className="text-yellow-400 dark:text-blue-400 font-medium">{edu.period}</span>
                </div>
                <p className="text-lg font-medium text-white-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-yellow-400 dark:text-yellow-400 mb-4">GPA: {edu.gpa}</p>
                <p className="text-white-600 dark:text-gray-400 mb-4">{edu.description}</p>
                
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.courses.map((course, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-white-600 dark:text-gray-400">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 dark:text-yellow-400 mb-6">Achievements & Awards</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800 p-6 dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-yellow-400 dark:text-white">{achievement.title}</h4>
                    <span className="px-3 py-1 text-sm font-medium bg-yellow-400 text-gray-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-white-600 dark:text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-yellow-400 dark:text-white mb-4">Extracurricular Activities</h3>
              <ul className="space-y-3 text-white-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                  <span>Public Relation Officer, Code4All Initiative (2022-2023)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                  <span>Mentor, First-Year Student Programming Workshop (2021-Present)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                  <span>Volunteer, Code4All (2022)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                  <span>Member, GDG Ashesi (2022-Present)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;