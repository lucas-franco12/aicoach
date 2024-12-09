"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function LearningStats() {
  const data = [
    { day: "Mon", hours: 1 },
    { day: "Tue", hours: 1.5 },
    { day: "Wed", hours: .75 },
    { day: "Thu", hours: 2},
    { day: "Fri", hours: 1.25 },
    { day: "Sat", hours: 1.75 },
    { day: "Sun", hours: 1},
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Learning Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 2]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Total this week: 5 hours</p>
          <p>15% increase from last week</p>
        </div>
      </CardContent>
    </Card>
  );
}