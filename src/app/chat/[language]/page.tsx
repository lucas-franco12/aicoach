// src/app/chat/[language]/page.tsx
"use client";

import { useParams } from "next/navigation";
import AIChat from "@/app/_components/AIChat";

const COACHES = {
  german: {
    name: "Hannah",
    language: "german",
    avatar: "/coaches/hannah.jpg",
    greeting: "Hallo! Ich bin Hannah, deine KI-Sprachlehrerin."
  },
  french: {
    name: "Pierre",
    language: "french",
    avatar: "/coaches/pierre.jpg",
    greeting: "Bonjour! Je suis Pierre, votre professeur d'IA."
  },
  spanish: {
    name: "María",
    language: "spanish",
    avatar: "/coaches/maria.jpg",
    greeting: "¡Hola! Soy María, tu profesora de IA."
  },
  japanese: {
    name: "Yuki",
    language: "japanese",
    avatar: "/coaches/yuki.jpg",
    greeting: "こんにちは！ユキです。"
  },
  korean: {
    name: "Min",
    language: "korean",
    avatar: "/coaches/min.jpg",
    greeting: "안녕하세요! 저는 민입니다."
  }
};

export default function ChatPage() {
  const { language } = useParams();
  const languageKey = typeof language === 'string' ? language.toLowerCase() : 'german';
  const coach = COACHES[languageKey as keyof typeof COACHES];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Chat with {coach.name}, your {languageKey.charAt(0).toUpperCase() + languageKey.slice(1)} AI Coach
      </h1>
      <AIChat coach={coach} />
    </div>
  );
}