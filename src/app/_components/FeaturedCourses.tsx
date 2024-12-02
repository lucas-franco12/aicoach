'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe2,
  GraduationCap,
  Languages,
  Music,
  Coffee,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedCourses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const languageCoaches = [
    {
      title: "Spanish Coach María",
      icon: Languages,
      description:
        "Native Spanish expert with interactive conversation practice",
      language: "Spanish",
      avatar: "/coaches/maria.jpg",
      specialty: "Conversational Spanish, Business Spanish",
    },
    {
      title: "Japanese Coach Yuki",
      icon: GraduationCap,
      description: "Learn Japanese naturally with cultural insights",
      language: "Japanese",
      avatar: "/coaches/yuki.jpg",
      specialty: "JLPT Preparation, Manga & Anime Japanese",
    },
    {
      title: "French Coach Pierre",
      icon: Globe2,
      description: "Master French pronunciation and daily conversation",
      language: "French",
      avatar: "/coaches/pierre.jpg",
      specialty: "French Culture, Business French",
    },
    {
      title: "Korean Coach Min",
      icon: Music,
      description: "Learn Korean through K-pop and drama contexts",
      language: "Korean",
      avatar: "/coaches/min.jpg",
      specialty: "K-pop Korean, Daily Conversation",
    },
    {
      title: "Italian Coach Marco",
      icon: Coffee,
      description: "Experience Italian language through culture and cuisine",
      language: "Italian",
      avatar: "/coaches/marco.jpg",
      specialty: "Culinary Italian, Travel Italian",
    },
    {
      title: "German Coach Hannah",
      icon: Music,
      description: "Structured approach to mastering German",
      language: "German",
      avatar: "/coaches/hannah.jpg",
      specialty: "Business German, Technical German",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const itemHeight = container.clientHeight / 3; // Show 3 items at a time
      const newIndex = Math.round(scrollPosition / itemHeight);
      setActiveIndex(Math.min(newIndex, languageCoaches.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [languageCoaches.length]);

  return (
    <section
      id="coaches"
      className="py-20 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Language Coach
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

          {/* Coaches container */}
          <div
            ref={containerRef}
            className="relative h-[600px] overflow-y-auto hide-scrollbar"
            style={{ scrollSnapType: "y mandatory" }}
          >
            <div className="space-y-6 py-32">
              {languageCoaches.map((coach, index) => {
                const isActive = index === activeIndex;
                const scale = isActive ? 1 : 0.85;
                const opacity = isActive ? 1 : 0.6;

                return (
                  <div
                    key={index}
                    className="transition-all duration-300 ease-out"
                    style={{
                      scrollSnapAlign: "center",
                      transform: `scale(${scale})`,
                      opacity,
                    }}
                  >
                    <Card className="p-6 flex items-center space-x-6 hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                          <Image
                            src={coach.avatar}
                            alt={coach.title}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">
                          {coach.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {coach.description}
                        </p>
                        <p className="text-sm font-medium text-primary mb-4">
                          Specialties: {coach.specialty}
                        </p>
                        <Link href="/courses/123asd/learn/1/1" passHref>
                          <Button
                            variant={isActive ? "default" : "outline"}
                            className="w-full"
                          >
                            Start Learning {coach.language}
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
