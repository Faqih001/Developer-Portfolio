
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

interface LoadingScreenProps {
  onFinishLoading: () => void;
}

export function LoadingScreen({ onFinishLoading }: LoadingScreenProps) {
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinishLoading();
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
  }, [toast, onFinishLoading]);

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
