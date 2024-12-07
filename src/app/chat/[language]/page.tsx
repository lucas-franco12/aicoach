// src/app/chat/[language]/page.tsx
"use client";

import { useParams } from "next/navigation";
import AIChat from "@/app/_components/AIChat";

export default function LanguageChatPage() {
    const { language } = useParams();
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Chat with your {language} AI Coach
        </h1>
        <AIChat 
          language={language as string} 
        />
      </div>
    );
  }