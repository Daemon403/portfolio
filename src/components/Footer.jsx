import React from "react";
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
const Projects = () => {
          {/* Footer */}
          <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 mt-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
              <p className="text-blue-200 mb-6">Open for freelance opportunities and collaborations</p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Daemon403" className="hover:text-blue-300 transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/nicholasmutsaka2025/" className="hover:text-blue-300 transition-colors"><FaLinkedin size={24} /></a>
                <a href="mailto:nicholasmutsaka@gmail.com" className="hover:text-blue-300 transition-colors"><SiGmail size={24} /></a>
              </div>
            </div>
          </div>
        </footer>
}
export default Projects
// Compare this snippet from portfolio-react-app/src/components/Experience.jsx: