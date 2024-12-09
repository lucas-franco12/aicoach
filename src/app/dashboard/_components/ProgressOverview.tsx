"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgressOverview() {
  const weeklyGoal = 6; // 5 hours per week
  const hoursCompleted = 5;
  const progressPercentage = (hoursCompleted / weeklyGoal) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Goal Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="w-32 h-32">
            <CircularProgressbar
              value={progressPercentage}
              text={`${Math.round(progressPercentage)}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: `hsl(var(--primary))`,
                textColor: "hsl(var(--primary))",
                trailColor: "hsl(var(--muted))",
              })}
            />
          </div>
        </div>
        <p className="text-center mt-4">Weekly goal completion</p>
        <p className="text-center text-2xl font-bold mt-2">
          {hoursCompleted} hours
        </p>
        <p className="text-center text-muted-foreground">
          Hours completed this week
        </p>
      </CardContent>
    </Card>
  );
}
