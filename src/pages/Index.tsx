
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome toast
      toast({
        title: "Welcome to Fakii's portfolio!",
        description: "Explore my projects, skills, and experience.",
        action: (
          <div className="h-8 w-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
          </div>
        ),
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);

  const openTodoDemo = () => {
    setShowTodoModal(true);
    toast({
      title: "Todo App Demo Opened",
      description: "Try adding, completing, and deleting tasks!",
      variant: "default",
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="animate-blob absolute -inset-20 rounded-full bg-gradient-to-r from-emerald-600 to-indigo-500 opacity-20 blur-xl"></div>
            <div className="relative flex items-center justify-center h-24 w-24">
              <div className="absolute h-16 w-16 rounded-full border-4 border-t-emerald-500 border-r-transparent border-b-indigo-500 border-l-transparent animate-spin"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-500 text-transparent bg-clip-text">FM</div>
            </div>
          </div>
          <h2 className="mt-8 text-xl font-medium bg-gradient-to-r from-emerald-600 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            Loading Portfolio...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Todo App Modal */}
      {showTodoModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md animate-fade-in-up">
            <Card className="relative border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="absolute right-4 top-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setShowTodoModal(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Todo Demo App</h3>
                <TodoList />
              </div>
            </Card>
          </div>
        </div>
      )}

      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Demo Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={openTodoDemo}
          className="rounded-full shadow-lg bg-gradient-to-r from-emerald-600 to-indigo-500 hover:from-emerald-700 hover:to-indigo-600 transition-all duration-300 px-6 py-6"
        >
          <span className="flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Try Todo App Demo
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
