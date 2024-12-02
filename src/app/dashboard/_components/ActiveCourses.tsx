"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ActiveCourses() {
  const courses = [
    {
      id: 1,
      name: "Introduction to React",
      progress: 75,
      nextLesson: "Hooks in Depth",
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      progress: 40,
      nextLesson: "Promises and Async/Await",
    },
    {
      id: 3,
      name: "UI/UX Fundamentals",
      progress: 90,
      nextLesson: "Final Project",
    },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Active Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{course.name}</span>
                <span className="text-sm text-muted-foreground">
                  {course.progress}%
                </span>
              </div>
              <Progress value={course.progress} />
              <div className="flex justify-between items-center text-sm">
                <span>Next: {course.nextLesson}</span>
                <Button variant="outline" size="sm">
                  Resume
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
