
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo_url: string;
  github_url: string;
};

// Colors for the technology badges
const techColors = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
  'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
  'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching projects:', error);
        } else if (data) {
          setProjects(data as Project[]);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Get a color for a technology based on its name
  const getTechColor = (tech: string, index: number) => {
    // Use a deterministic way to assign colors based on the tech name and position
    const colorIndex = (tech.length + index) % techColors.length;
    return techColors[colorIndex];
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-indigo-500 mx-auto rounded"></div>
            <p className="text-lg mt-6 max-w-3xl mx-auto">Loading projects...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 w-16"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-indigo-500 mx-auto rounded"></div>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Explore my latest projects showcasing my skills in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-tr from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      className={`${getTechColor(tech, index)} border-0 font-medium px-3 py-1`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between gap-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300"
                  asChild
                >
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  asChild
                >
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
