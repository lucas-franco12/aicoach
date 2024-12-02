"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RecommendedCourses() {
  const courses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description: "Learn the basics of ML algorithms and applications.",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      description: "Master modern CSS layouts and animations.",
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps with React.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border-b pb-4 last:border-b-0 last:pb-0"
            >
              <h3 className="font-medium mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {course.description}
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="link" className="w-full">
            Explore More Courses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
