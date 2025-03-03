import React from 'react';
import { Bike, Book, Gamepad, Globe, Music, Camera } from 'lucide-react';
import SectionTitle from './SectionTitle';

const interests = [
  { title: 'Photography', icon: <Camera />, description: 'Capturing urban landscapes and street photography.' },
  { title: 'Cycling', icon: <Bike />, description: 'Weekend trail rides and city exploration.' },
  { title: 'Reading', icon: <Book />, description: 'Science fiction, technical books, and biographies.' },
  { title: 'Gaming', icon: <Gamepad />, description: 'Strategy games and indie titles.' },
  { title: 'Travel', icon: <Globe />, description: 'Exploring new cultures and cuisines.' },
  { title: 'Music', icon: <Music />, description: 'Playing guitar and attending live concerts.' }
];

export default function Interests() {
  return (
    <section id="interests" className="w-full bg-[#060312] text-gray-400 flex justify-center items-center">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center">
        
        {/* Title Section */}
        <div className="w-full max-w-[900px] mb-8">
          <SectionTitle title="Interests & Hobbies" icon={<Bike />} />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {interests.map((interest) => (
            <div 
              key={interest.title} 
              className="bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300 flex flex-col items-center"
            >
              <div className="bg-[#1d1836] p-4 rounded-full mb-4 text-[#FFD700]">{interest.icon}</div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-3">{interest.title}</h3>
              <p className="text-gray-300 text-center">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
