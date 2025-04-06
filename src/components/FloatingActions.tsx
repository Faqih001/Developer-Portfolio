
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FloatingActionsProps {
  onOpenChatbot: () => void;
  onOpenTodoDemo: () => void;
}

export function FloatingActions({ onOpenChatbot, onOpenTodoDemo }: FloatingActionsProps) {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254741140250", "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Connecting you to my WhatsApp chat.",
      variant: "default",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <Button
        onClick={onOpenChatbot}
        className="rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">Open Chat Assistant</span>
      </Button>
      
      <Button
        onClick={handleWhatsAppClick}
        className="rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300"
        size="icon"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9 14a5 5 0 0 0 6 0" />
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </Button>
      
      <Button
        onClick={onOpenTodoDemo}
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
  );
}
