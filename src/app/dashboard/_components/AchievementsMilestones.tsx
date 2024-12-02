"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap } from "lucide-react";

export function AchievementsMilestones() {
  const achievements = [
    { id: 1, name: "Quick Learner", icon: <Zap className="h-4 w-4" /> },
    { id: 2, name: "Consistent", icon: <Trophy className="h-4 w-4" /> },
  ];
  const streak = 7;
  const nextMilestone = "Complete 5 quizzes";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements & Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {achievements.map((achievement) => (
            <Badge
              key={achievement.id}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {achievement.icon}
              {achievement.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">{streak} day streak!</span>
        </div>
        <div>
          <h4 className="font-medium mb-2">Next Milestone:</h4>
          <p className="text-sm text-muted-foreground">{nextMilestone}</p>
        </div>
      </CardContent>
    </Card>
  );
}
