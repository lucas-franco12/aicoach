"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

interface AIChatProps {
  lessonId: string;
}

const AIChat: React.FC<AIChatProps> = ({ lessonId }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  console.log("lessonId", lessonId);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          body: JSON.stringify({ messages: formattedMessages }),
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
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isUser ? "bg-primary" : "bg-secondary"
                }`}
              >
                {message.isUser ? (
                  <User className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <Bot className="w-5 h-5 text-secondary-foreground" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg max-w-[80%] break-words ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {message.isUser ? (
                  message.text
                ) : (
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {message.text}
                  </ReactMarkdown>
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
