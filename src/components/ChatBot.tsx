
import { useState, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { generateResponse } from "@/utils/customChatResponses";

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  isLoading?: boolean;
}

interface ChatBotProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatBot({ open, onOpenChange }: ChatBotProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm your virtual assistant. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage
    };
    
    const loadingMessage: ChatMessage = {
      role: 'assistant',
      content: '',
      isLoading: true
    };
    
    setChatMessages(prev => [...prev, userMessage, loadingMessage]);
    setInputMessage('');
    setIsSendingMessage(true);

    try {
      // Simulate a slight delay for the response to appear more natural
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
      
      // Generate a response using our custom function
      const assistantResponse = generateResponse(userMessage.content);

      setChatMessages(prev => 
        prev.map((msg, index) => {
          if (index === prev.length - 1 && msg.isLoading) {
            return {
              role: 'assistant' as const,
              content: assistantResponse
            };
          }
          return msg;
        })
      );
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages(prev => 
        prev.map((msg, index) => {
          if (index === prev.length - 1 && msg.isLoading) {
            return {
              role: 'assistant' as const,
              content: "I'm sorry, I encountered an error processing your request. Please try again."
            };
          }
          return msg;
        })
      );
      
      toast({
        title: "Chat Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSendingMessage(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-500 bg-clip-text text-transparent">
            Chat Assistant
          </DialogTitle>
          <DialogDescription>
            Ask me anything about Fakii's skills, projects, or experience!
          </DialogDescription>
        </DialogHeader>
        <div id="chat-container" className="bg-gray-50 dark:bg-gray-800/50 rounded-md p-4 h-64 overflow-y-auto mb-4">
          <div className="flex flex-col gap-3">
            {chatMessages.map((message, index) => (
              message.role === 'assistant' ? (
                <div key={index} className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  {message.isLoading ? (
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-800 dark:text-gray-200">{message.content}</p>
                  )}
                </div>
              ) : (
                <div key={index} className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                  <p className="text-sm text-gray-800 dark:text-gray-200">{message.content}</p>
                </div>
              )
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full h-10 px-4 py-2 border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSendingMessage}
            />
          </div>
          <Button 
            className="rounded-full h-10 w-10 p-0 bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-600 hover:to-indigo-600"
            onClick={sendMessage}
            disabled={isSendingMessage || !inputMessage.trim()}
          >
            <Send className="w-4 h-4 text-white" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
