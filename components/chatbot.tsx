"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const websiteData = {
  hospital: {
    name: "MediClinic",
    sections: {
      departments: [
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "Hepatology",
        "Eye Care",
      ],
      doctors: [
        { name: "Dr. Walter White", specialization: "Chief Medical Officer" },
        { name: "Dr. Sarah Johnson", specialization: "Anesthesiologist" },
        { name: "Dr. William Anderson", specialization: "Cardiologist" },
        { name: "Dr. Amanda Jepson", specialization: "Neurosurgeon" },
      ],
      services: [
        {
          name: "Cardiology",
          desc: "Advanced heart care with expert diagnostics.",
        },
        { name: "Pharmacy", desc: "In-house pharmacy with genuine medicines." },
        {
          name: "Outpatient Services",
          desc: "Diagnosis and care without admission.",
        },
        { name: "Diagnostics & Lab", desc: "Accurate lab tests and imaging." },
        {
          name: "Rehabilitation",
          desc: "Physical therapy for better recovery.",
        },
        {
          name: "Health Checkups",
          desc: "Regular screenings for early detection.",
        },
      ],
      faq: [
        { q: "How to book appointment?", a: "Call, walk in, or use website." },
        { q: "Do you accept insurance?", a: "Yes, most providers." },
        {
          q: "What to bring for first visit?",
          a: "ID, reports, meds, insurance.",
        },
        { q: "Do you offer emergency services?", a: "No, visit nearest ER." },
        { q: "Consult without referral?", a: "Yes, but insurance may vary." },
        { q: "How to get lab reports?", a: "Via portal or in person." },
      ],
      testimonials: [
        {
          name: "Anita Sharma",
          profession: "Teacher",
          review: "Staff was kind, treatment smooth.",
        },
        {
          name: "Ravi Mehta",
          profession: "Engineer",
          review: "Quick service, satisfied overall.",
        },
      ],
      contact: {
        location: "123 Wellness Street, Health City, NY",
        phone: "+91 00000 00000",
        email: "contact@mediclinic.com",
        timings: {
          "mon-fri": "9:00 AM - 7:00 PM",
          sat: "9:00 AM - 4:00 PM",
          sun: "Closed",
        },
      },
    },
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const server_url = process.env.NEXT_PUBLIC_SERVER_URL;
  console.log("url", server_url);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          text: "Hi there! 👋 How can I assist you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    console.log("messages", messages);

    try {
      const response = await fetch(`${server_url}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              sender: m.sender,
              text: m.text,
              timestamp: m.timestamp,
            })),
            { sender: "user", text: inputMessage, timestamp: new Date() },
          ],
          note: "These are previous conversation messages. Take context from them if needed.",
          websiteData: JSON.stringify(websiteData),
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: Date.now(),
        text: data.reply || "No reply received.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage: Message = {
        id: Date.now(),
        text: "Sorry, something went wrong.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-bg hover:bg-blue-700 text-white shadow-lg z-50 animate-pulse-slow"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] max-w-80 h-80 sm:h-96 shadow-2xl z-50 bg-white animate-slide-in-right">
          <CardHeader className="gradient-bg text-white rounded-t-lg p-3 sm:p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm sm:text-lg">
                Quality Guard MSO Chat
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 p-1 h-6 w-6 sm:h-8 sm:w-8"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-64 sm:h-80">
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-1 px-3 py-2 rounded-lg rounded-bl-none bg-gray-100">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:.1s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:.2s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:.3s]"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-2 sm:p-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="gradient-bg hover:bg-blue-700 text-white px-2 sm:px-3"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
