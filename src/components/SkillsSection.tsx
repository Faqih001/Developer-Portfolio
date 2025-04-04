
import { useState, useEffect } from 'react';
import { Code2, Server, Database, PencilRuler } from 'lucide-react';

export default function SkillsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    }
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "Authentication", level: 85 },
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ]
    },
    {
      title: "Tools & Design",
      icon: <PencilRuler className="w-8 h-8" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 70 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">My technical expertise and proficiency levels</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: animate ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
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
