
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TodoList from "@/components/TodoList";

interface TodoModalProps {
  open: boolean;
  onClose: () => void;
}

export function TodoModal({ open, onClose }: TodoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="relative border border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="absolute right-4 top-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={onClose}
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
  );
}
