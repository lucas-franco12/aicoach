"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MessageSquare, BookOpen } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "lesson",
      title: 'Completed "Introduction to React Hooks"',
      time: "2 hours ago",
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
      id: 2,
      type: "forum",
      title: 'Posted in "JavaScript Q&A" forum',
      time: "1 day ago",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      id: 3,
      type: "quiz",
      title: 'Scored 90% on "CSS Flexbox Quiz"',
      time: "2 days ago",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className="mt-1">{activity.icon}</div>
              <div>
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
