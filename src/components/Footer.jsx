import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05010d] text-gray-300 py-12">
      <div className="container max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Cicada403</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Data Engineer & Backend Developer passionate about scalable systems, cloud solutions, and building impactful technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/daemon403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/nicholasmutsaka2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:contact@cicada403.dev"
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://twitter.com/truthhkd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Education", "Interests", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Accra, Ghana</li>
              <li>contact@cicada403.dev</li>
              <li>+233 (205) 552-761</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cicada403. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & built with <span className="text-red-500">❤</span> by Cicada403
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
