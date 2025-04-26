"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    {role: "bot", content: "Hello! I'm QuantBot. Ask me anything about quantum computing or the Symbiosis Quantum Club!"}
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setChatHistory([...chatHistory, {role: "user", content: message}]);
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      let response = "I'm still learning about quantum computing. Can you ask something else?";
      
      if (message.toLowerCase().includes("quantum")) {
        response = "Quantum computing uses quantum mechanics to perform calculations exponentially faster than classical computers for certain problems.";
      } else if (message.toLowerCase().includes("club") || message.toLowerCase().includes("symbiosis")) {
        response = "Symbiosis Quantum Club was founded in 2023 to explore quantum computing and related technologies.";
      }
      
      setChatHistory(prev => [...prev, {role: "bot", content: response}]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-blue-600 p-0 shadow-lg hover:bg-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-gray-800 bg-gray-950 text-white">
          <DialogHeader>
            <DialogTitle>Quantum Chatbot</DialogTitle>
            <DialogDescription className="text-gray-400">
              Ask me anything about quantum computing or the club!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col h-[300px] overflow-y-auto p-4 bg-gray-900 rounded border border-gray-800 my-4">
            {chatHistory.map((msg, i) => (
              <div 
                key={i}
                className={`${
                  msg.role === "user" ? "ml-auto bg-blue-600" : "mr-auto bg-gray-800"
                } rounded-lg p-3 mb-2 max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}