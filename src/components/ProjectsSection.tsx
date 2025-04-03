
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Layout, Server } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo_url: string;
  github_url: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const projectsPerPage = 3;
  const { toast } = useToast();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');
        
        if (error) {
          console.error('Error fetching projects:', error);
        } else if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const displayedProjects = projects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  // Function to get a project type icon
  const getProjectIcon = (title: string) => {
    if (title.includes("FinTech") || title.includes("Finance")) {
      return <Layout className="text-emerald-500" />;
    } else if (title.includes("IT") || title.includes("Dashboard")) {
      return <Server className="text-indigo-500" />;
    } else {
      return <Code className="text-teal-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-indigo-500 mx-auto rounded"></div>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Explore my recent projects showcasing my expertise in frontend and full-stack development.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white dark:bg-gray-800 overflow-hidden h-[450px] animate-pulse">
                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-t-emerald-500 hover:-translate-y-2 rounded-xl"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-md">
                      {getProjectIcon(project.title)}
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-1 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                        onClick={() => {
                          toast({
                            title: "Opening Demo",
                            description: `Opening demo for ${project.title}`,
                          });
                          window.open(project.demo_url, '_blank');
                        }}
                      >
                        <ExternalLink size={16} /> Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-1 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                        onClick={() => {
                          toast({
                            title: "Opening Code",
                            description: `Opening GitHub repository for ${project.title}`,
                          });
                          window.open(project.github_url, '_blank');
                        }}
                      >
                        <Github size={16} /> Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {pageCount > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={goToPreviousPage}
                  className="h-10 w-10 rounded-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm">
                  Page {currentPage + 1} of {pageCount}
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={goToNextPage}
                  className="h-10 w-10 rounded-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
