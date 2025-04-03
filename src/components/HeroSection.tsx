
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fade-in-up">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 text-emerald-600 text-sm font-medium mb-6 inline-block">
                Full Stack Developer
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter">
                <span className="block">I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-500">
                  Fakii Mohammed
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                I build user-friendly, accessible, and high-performance web applications
                with expertise in React, TypeScript, Flutter, and modern frontend technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-emerald-600 to-indigo-500 hover:from-emerald-700 hover:to-indigo-600 transition-all duration-300">
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Faqih001" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/fakii-mohammed-a96a84213" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:fakiiahmad001@gmail.com" className="text-gray-600 hover:text-teal-500 transition-colors">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative animate-fade-in-left">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/30 to-indigo-500/30 rounded-full blur-2xl opacity-70"></div>
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full overflow-hidden relative z-10 border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/lovable-uploads/2da04a07-0259-4a94-bf76-8851c8ab2d94.png" 
                  alt="Fakii Mohammed Profile" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="block p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
