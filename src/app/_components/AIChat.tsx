"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, MessageSquare, CheckCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import "highlight.js/styles/github.css";

interface MessageControlsProps {
  onTranslate: () => void;
  onCorrect: () => void;
}

function MessageControls({ onTranslate, onCorrect }: MessageControlsProps) {
  return (
    <div className="flex gap-2 mt-1">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onTranslate}
        className="text-xs hover:bg-transparent flex items-center gap-1 p-0 group"
      >
        <MessageSquare className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-muted-foreground group-hover:text-primary transition-colors">Translate</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onCorrect}
        className="text-xs hover:bg-transparent flex items-center gap-1 p-0 group"
      >
        <CheckCircle className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-muted-foreground group-hover:text-primary transition-colors">Correct</span>
      </Button>
    </div>
  );
}
type SupportedLanguage = 'german' | 'french' | 'spanish' | 'japanese' | 'korean';

interface Coach {
  name: string;
  language: string;
  avatar: string;
  greeting: {
    [key: string]: string;
  };
}

interface AIChatProps {
  coach: Coach;
}

const COACH_GREETINGS = {
  german: "Hallo! Ich bin Hannah, deine KI-Sprachlehrerin. Ich freue mich darauf, dir beim Deutschlernen zu helfen. Womit möchtest du anfangen?",
  french: "Bonjour! Je suis Pierre, votre professeur d'IA. Je suis ravi de vous aider à apprendre le français. Par où voulez-vous commencer?",
  spanish: "¡Hola! Soy María, tu profesora de IA. Estoy emocionada de ayudarte a aprender español. ¿Por dónde quieres empezar?",
  japanese: "こんにちは！ユキです。AIの日本語教師として、お手伝いができることを嬉しく思います。どこから始めましょうか？",
  korean: "안녕하세요! 저는 민입니다. AI 한국어 선생님으로서 도와드리게 되어 기쁩니다. 어디서부터 시작하고 싶으신가요?"
};

const AIChat: React.FC<AIChatProps> = ({ coach }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: COACH_GREETINGS[coach.language],
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleTranslate = async (text: string) => {
    // Translation logic will be added later
  };

  const handleCorrect = async (text: string) => {
    // Correction logic will be added later
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage = { text: inputMessage, isUser: true };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInputMessage("");

      const formattedMessages = updatedMessages.map((message) => ({
        role: message.isUser ? "user" : "assistant",
        content: message.text,
      }));

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            messages: formattedMessages,
            language: coach.language 
          }),
        });

        if (!response.ok) {
          console.error("Error:", response.statusText);
          return;
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let assistantText = "";

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "", isUser: false },
        ]);

        while (!done) {
          const { value, done: doneReading } = await reader!.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          assistantText += chunkValue;

          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = {
              text: assistantText,
              isUser: false,
            };
            return updatedMessages;
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="h-[60vh] flex flex-col">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 ${
                message.isUser ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center ${
                  message.isUser ? "bg-primary" : "bg-secondary"
                }`}
              >
                {message.isUser ? (
                  <User className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <div className="w-full h-full relative">
                    <Image
                      src={coach.avatar}
                      alt={coach.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <div className={`p-3 rounded-lg max-w-[80%] break-words ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {message.isUser ? (
                    message.text
                  ) : (
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                      {message.text}
                    </ReactMarkdown>
                  )}
                </div>
                {message.isUser ? (
                  <MessageControls
                    onTranslate={() => handleTranslate(message.text)}
                    onCorrect={() => handleCorrect(message.text)}
                  />
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleTranslate(message.text)}
                    className="text-xs hover:bg-transparent flex items-center gap-1 p-0 group w-fit"
                  >
                    <MessageSquare className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">Translate</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
