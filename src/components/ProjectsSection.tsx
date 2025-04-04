import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo_url: string;
  github_url: string;
};

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
            <div key={project.id} className="rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
