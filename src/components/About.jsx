import React from 'react';
import { User, Globe, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section className='h-screen bg-[#060312] text-white W-full flex flex-col justify-center items-center>
      <SectionTitle icon={<User />} title="About Me" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Globe className="mr-2 text-yellow-400" /> Background
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with 5 years of experience building web applications.
            I specialize in React, Node.js, and modern web technologies.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-yellow-400" /> Achievements
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Led development of 3 major enterprise applications</li>
            <li>• Open source contributor to popular React libraries</li>
            <li>• Speaker at tech conferences</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
