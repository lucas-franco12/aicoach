"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgressOverview() {
  const overallProgress = 68;
  const learningHours = 12.5;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="w-32 h-32">
            <CircularProgressbar
              value={overallProgress}
              text={`${overallProgress}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: `hsl(var(--primary))`,
                textColor: "hsl(var(--primary))",
                trailColor: "hsl(var(--muted))",
              })}
            />
          </div>
        </div>
        <p className="text-center mt-4">Overall course completion</p>
        <p className="text-center text-2xl font-bold mt-2">
          {learningHours} hours
        </p>
        <p className="text-center text-muted-foreground">
          Total learning this week
        </p>
      </CardContent>
    </Card>
  );
}
