
import { Github, Linkedin, Twitter, Mail, PhoneCall, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Fakii Mohammed</h2>
            <p className="text-gray-300">Full Stack Developer</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <p className="text-sm">Nakuru, Kenya</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <PhoneCall size={16} />
              <p className="text-sm">0741140250</p>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-4">
              Passionate and detail-oriented Web Frontend Engineer with expertise in JavaScript, TypeScript, React, Flutter, and more.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Faqih001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/fakii-mohammed-a96a84213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:fakiiahmad001@gmail.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-teal-500 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Let's collaborate on your next project!</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fakii Mohammed. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
