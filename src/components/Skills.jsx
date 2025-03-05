import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const skills = [
  { name: 'React', level: '95%' },
  { name: 'Node.js', level: '90%' },
  { name: 'TypeScript', level: '85%' },
  { name: 'Python', level: '80%' },
  { name: 'AWS', level: '75%' },
  { name: 'Docker', level: '85%' }
];

export default function Skills() {
  return (
    <section name="skills" className="w-full bg-[#060312] text-gray-400 flex justify-center items-center">
      <div className="max-w-[90%] w-full flex flex-col justify-center items-center">
        
        {/* Title Section */}
        <div className="w-full max-w-[900px] mb-8">
          <SectionTitle icon={<Code2 />} title="Skills" />
        </div>

        {/* Skills Grid */}
        <div className="w-full max-w-[900px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-700"
            >
              <p className="font-semibold text-gray-100 mb-2">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-yellow-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1 }}
                  aria-label={`${skill.name} proficiency at ${skill.level}`}
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
