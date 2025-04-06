
import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingActions } from "@/components/FloatingActions";
import { ChatBot } from "@/components/ChatBot";
import { TodoModal } from "@/components/TodoModal";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  const openTodoDemo = () => {
    setShowTodoModal(true);
  };

  const openChatbot = () => {
    setShowChatbot(true);
  };

  if (isLoading) {
    return <LoadingScreen onFinishLoading={handleFinishLoading} />;
  }

  return (
    <div className="relative">
      <ChatBot open={showChatbot} onOpenChange={setShowChatbot} />
      <TodoModal open={showTodoModal} onClose={() => setShowTodoModal(false)} />
      
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      
      <FloatingActions 
        onOpenChatbot={openChatbot} 
        onOpenTodoDemo={openTodoDemo} 
      />
    </div>
  );
};

export default Index;
