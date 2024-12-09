"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export function ActiveCourses() {
  const conversations = [
    {
      id: 1,
      title: "Grocery Shopping in Germany",
      coach: "Hannah",
      timeSpent: 3.0,
      avatar: "/coaches/hannah.jpg"
      
    },
    {
      id: 2,
      title: "Things to do in Berlin",
      coach: "Hannah",
      timeSpent: 1.5,
      avatar: "/coaches/hannah.jpg"
    },
    {
      id: 3,
      title: "Discussing French Cuisine and Culture",
      coach: "Pierre",
      timeSpent: 1,
      avatar: "/coaches/pierre.jpg"
    },
    
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Active Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.map((convo) => (
            <Card key={convo.id} className="p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={convo.avatar}
                    alt={`Coach ${convo.coach}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{convo.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {convo.timeSpent}h
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Chat with {convo.coach}
                  </span>
                  <Button variant="outline" size="sm">
                    Resume
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
