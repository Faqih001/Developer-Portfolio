
import { useState, useEffect } from 'react';
import { Menu, X, MoonStar, Sun, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const resumeLink = "https://drive.google.com/file/d/1C5S6ESA6jC6l3UlYOevEP21dzQukBOdR/view?usp=sharing";

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur group-hover:opacity-100 transition duration-300"></div>
                <div className="relative text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  FM
                </div>
              </div>
              <span className="ml-3 font-semibold text-lg text-black dark:text-white">Dev Portfolio</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-purple-600 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-purple-600 transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-purple-600 transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors duration-300">Projects</a>
              <a href="#education" className="hover:text-purple-600 transition-colors duration-300">Education</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors duration-300">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full" 
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Sun size={20} /> : <MoonStar size={20} />}
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-emerald-600 to-indigo-500 hover:from-emerald-700 hover:to-indigo-600 transition-all duration-300 text-white"
              >
                <a 
                  href={resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                  title="Download Resume"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <MoonStar size={20} />}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-5 space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <a href="#home" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>About</a>
          <a href="#skills" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>Projects</a>
          <a href="#education" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>Education</a>
          <a href="#contact" className="block py-2 hover:text-purple-600 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-gradient-to-r from-emerald-600 to-indigo-500 hover:from-emerald-700 hover:to-indigo-600 transition-all duration-300 text-white"
            >
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Download size={20} />
                <span>Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
