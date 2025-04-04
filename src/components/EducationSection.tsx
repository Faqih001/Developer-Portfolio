
import { GraduationCap, Award, BookOpen, Globe, Code, Palette, Database, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function EducationSection() {
  const education = [
    {
      institution: "Kabarak University – Nakuru, Kenya",
      years: "2018 - 2021",
      degree: "Bachelor Degree In Information Technology (B.Sc. In I.T)",
      honors: "Second Class Upper Honors",
      icon: GraduationCap
    },
    {
      institution: "Moi Forces Academy – Mombasa, Kenya",
      years: "2014 - 2017",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      honors: "",
      icon: BookOpen
    },
  ];

  const certificates = [
    {
      title: "React JS Certified",
      provider: "Udemy",
      icon: Code,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
    },
    {
      title: "Flutter & Dart Development",
      provider: "Udemy",
      icon: Code,
      color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600"
    },
    {
      title: "UX & UI Design",
      provider: "IBM SkillsBuild",
      icon: Palette,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
    },
    {
      title: "Software Testing (ISTQB Certified V4.0)",
      provider: "Simplilearn",
      icon: Award,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600"
    },
    {
      title: "Web Development Essentials",
      provider: "Udemy",
      icon: Globe,
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
    },
    {
      title: "TypeScript Fundamentals",
      provider: "Udemy",
      icon: Code,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
    },
    {
      title: "Intro to Artificial Intelligence",
      provider: "IBM SkillsBuild",
      icon: Database,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600"
    },
    {
      title: "Tech for Business (Microsoft Office & Google Suite)",
      provider: "Udemy",
      icon: CreditCard,
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">My academic background and ongoing learning journey</p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.institution}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.years}</p>
                      <p className="mt-2 font-medium">{item.degree}</p>
                      {item.honors && <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">{item.honors}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${cert.color} mb-3`}>
                      <cert.icon size={22} />
                    </div>
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.provider}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
