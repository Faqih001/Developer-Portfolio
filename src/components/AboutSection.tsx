
import { Code, Server, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. 
              I specialize in JavaScript/TypeScript and have expertise in React for frontend development and 
              Node.js for backend services.
            </p>
            <p className="text-lg mb-6">
              My journey in software development began when I built my first website in college. 
              Since then, I've worked with startups and established companies to deliver high-quality, 
              scalable, and maintainable code.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading technical blogs, or contributing to 
              open-source projects. I believe in continuous learning and staying updated with the latest 
              technologies and best practices.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-4">
                    <Code size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building responsive UIs with React, Next.js, and modern CSS frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 mb-4">
                    <Server size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating robust APIs with Node.js, Express, and serverless architectures.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-4">
                    <Database size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Database</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Managing data with SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 mb-4">
                    <Globe size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Deploying applications with CI/CD, Docker, and cloud platforms like AWS and Vercel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
