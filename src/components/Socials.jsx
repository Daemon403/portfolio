import React from 'react';
import { Github, Linkedin, Mail, Twitter, Dribbble, Instagram } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Github size={20} />, url: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Dribbble size={20} />, url: '#', label: 'Dribbble' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto:contact@example.com', label: 'Email' }
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          className="p-2 bg-gray-800/80 hover:bg-yellow-500 text-gray-400 hover:text-gray-900 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}