"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap, Clock, Star } from "lucide-react";

export function AchievementsMilestones() {
  const achievements = [
    { id: 1, name: "Quick Learner", icon: <Zap className="h-4 w-4" /> },
    { id: 2, name: "Consistent", icon: <Trophy className="h-4 w-4" /> },
  ];
  const streak = 7;
  const totalXP = 1250;
  const totalHours = 24;
  const nextBadge = 2000;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements & Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="flex flex-col items-center gap-2 mb-6">
          <Award className="h-12 w-12 text-yellow-500" />
          <span className="font-medium text-lg">{streak} Day Streak!</span>
        </div>
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <Star className="h-4 w-4 text-primary" />
            <span>{totalXP} XP Earned</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{totalHours} Hours Practiced</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {nextBadge - totalXP} XP until next badge
          </div>
        </div>
      </CardContent>
    </Card>
  );
}