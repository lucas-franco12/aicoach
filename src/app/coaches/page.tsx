'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoachesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const coaches = [
    {
      title: "Korean Coach Min",
      description: "Learn Korean through K-pop and drama contexts",
      language: "Korean",
      avatar: "/coaches/min.jpg",
      specialty: "K-pop Korean, Daily Conversation",
    },
    {
      title: "Japanese Coach Yuki",
      description: "Learn Japanese naturally with cultural insights",
      language: "Japanese",
      avatar: "/coaches/yuki.jpg",
      specialty: "JLPT Preparation, Manga & Anime Japanese",
    },
    {
      title: "French Coach Pierre",
      description: "Master French pronunciation and daily conversation",
      language: "French",
      avatar: "/coaches/pierre.jpg",
      specialty: "French Culture, Business French",
    },
    {
      title: "Spanish Coach María",
      description:
        "Native Spanish expert with interactive conversation practice",
      language: "Spanish",
      avatar: "/coaches/maria.jpg",
      specialty: "Conversational Spanish, Business Spanish",
    },
    {
      title: "German Coach Hannah",
      description: "Structured approach to mastering German",
      language: "German",
      avatar: "/coaches/hannah.jpg",
      specialty: "Business German, Technical German",
    },
    {
      title: "Italian Coach Marco",
      description: "Experience Italian language through culture and cuisine",
      language: "Italian",
      avatar: "/coaches/marco.jpg",
      specialty: "Culinary Italian, Travel Italian",
    }
  ];

  const filteredCoaches = coaches.filter(coach => 
    coach.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coach.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coach.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Language Coaches</h1>
      
      <Input
        type="search"
        placeholder="Search coaches by name, language, or specialty..."
        className="mb-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="space-y-6">
        {filteredCoaches.map((coach, index) => (
          <Card key={index} className="p-6 flex items-center gap-6 hover:shadow-lg transition-shadow">
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={coach.avatar}
                  alt={coach.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2">{coach.title}</h2>
              <p className="text-muted-foreground mb-2">{coach.description}</p>
              <p className="text-sm font-medium text-primary mb-4">
                Specialties: {coach.specialty}
              </p>
              <Link href={`/chat/${coach.language.toLowerCase()}`}>
                <Button className="w-full sm:w-auto">
                  Chat with {coach.language} Coach
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}