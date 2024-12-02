"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const majors = [
  {
    name: "Computer Science",
    courses: [
      {
        title: "Introduction to Algorithms",
        description: "Learn fundamental algorithmic techniques",
      },
      {
        title: "Database Systems",
        description: "Understand the principles of database management",
      },
      {
        title: "Web Development",
        description: "Build modern web applications",
      },
    ],
  },
  {
    name: "Business",
    courses: [
      {
        title: "Principles of Marketing",
        description: "Understand key marketing concepts and strategies",
      },
      {
        title: "Financial Accounting",
        description: "Learn the basics of financial reporting",
      },
      {
        title: "Business Ethics",
        description: "Explore ethical issues in business",
      },
    ],
  },
  {
    name: "Engineering",
    courses: [
      {
        title: "Thermodynamics",
        description: "Study heat and energy transfer",
      },
      { title: "Circuit Analysis", description: "Analyze electrical circuits" },
      {
        title: "Fluid Mechanics",
        description: "Understand the behavior of fluids",
      },
    ],
  },
];

export function MajorBasedCourses() {
  const [activeTab, setActiveTab] = useState(majors[0].name);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Explore Courses by Major</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          {majors.map((major) => (
            <TabsTrigger key={major.name} value={major.name}>
              {major.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {majors.map((major) => (
          <TabsContent key={major.name} value={major.name}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {major.courses.map((course, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      href={`/courses/${course.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="mt-auto"
                    >
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-8 text-center">
        <Link href="/majors">
          <Button variant="link">Explore All Majors</Button>
        </Link>
      </div>
    </section>
  );
}
