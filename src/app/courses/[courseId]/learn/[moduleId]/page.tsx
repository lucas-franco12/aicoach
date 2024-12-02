import React from "react";
import Link from "next/link";
import { ChevronLeft, BookOpen, FileText, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dummyLessonData } from "@/app/courses/_data/dummyLessonData";

export default function ModulePage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link
            href={`/courses/${params.courseId}/learn`}
            className="flex items-center text-primary"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Course Overview
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Python Fundamentals</h1>
      <p className="text-lg text-gray-600 mb-8">
        Learn the basics of Python programming language
      </p>
      <div className="grid gap-4">
        {dummyLessonData.map((lesson, index) => (
          <Card key={lesson.id} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {lesson.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{lesson.subtitle}</p>
              <div className="flex space-x-4 mb-4">
                <Badge variant="secondary" className="flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  {lesson.lessons} {lesson.lessons === 1 ? "Lesson" : "Lessons"}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <PenTool className="w-4 h-4 mr-1" />
                  {lesson.practices}{" "}
                  {lesson.practices === 1 ? "Practice" : "Practices"}
                </Badge>
              </div>
              <Button asChild className="w-full">
                <Link
                  href={`/courses/${params.courseId}/learn/${params.moduleId}/${lesson.id}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Lesson
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
