"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, HelpCircle } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      id: 1,
      title: "Join Next Live Session",
      icon: <Video className="h-4 w-4" />,
    },
    {
      id: 2,
      title: "Take a Practice Quiz",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: 3,
      title: "Ask a Question",
      icon: <HelpCircle className="h-4 w-4" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((action) => (
            <Button key={action.id} variant="outline" className="h-20 w-full">
              <div className="flex flex-col items-center justify-center space-y-2">
                {action.icon}
                <span className="text-xs">{action.title}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
