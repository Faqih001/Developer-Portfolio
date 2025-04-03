
import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Server, Database, Terminal } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type Skill = {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops';
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .order('category');
        
        if (error) {
          console.error('Error fetching skills:', error);
        } else if (data) {
          setSkills(data as Skill[]);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSkills();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('[role="progressbar"]');
            if (progressBar) {
              const value = progressBar.getAttribute('data-value');
              if (value) {
                progressBar.setAttribute('aria-valuenow', value);
                (progressBar as HTMLElement).style.width = `${value}%`;
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [skills]);

  const categories = ['frontend', 'backend', 'database', 'devops'];
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps & Tools'
  };

  const categoryIcons = {
    frontend: <Code className="text-emerald-500" />,
    backend: <Server className="text-indigo-500" />,
    database: <Database className="text-teal-500" />,
    devops: <Terminal className="text-blue-500" />
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-indigo-500 mx-auto rounded"></div>
            <p className="text-lg mt-6 max-w-3xl mx-auto">Loading skills...</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {categories.map((category) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-l-emerald-500 animate-pulse">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="mr-3">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-500">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </span>
                </h3>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2 mb-6">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-indigo-500 mx-auto rounded"></div>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            My expertise spans across various technologies in frontend and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-l-emerald-500 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="mr-3">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-500">
                  {categoryNames[category as keyof typeof categoryNames]}
                </span>
                <span className="ml-3">
                  <Badge variant="outline" className="font-normal bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300">
                    {skills.filter(skill => skill.category === category).length} skills
                  </Badge>
                </span>
              </h3>

              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.id} 
                      className="space-y-2"
                      ref={el => {
                        progressRefs.current[skills.findIndex(s => s.id === skill.id)] = el;
                      }}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        className="h-2 bg-gray-200 dark:bg-gray-700" 
                        value={0} 
                        data-value={skill.level}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
