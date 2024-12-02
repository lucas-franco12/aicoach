import React from "react";
import Link from "next/link";
import { Book, Clock, Award } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

async function getCourseData(courseId: string) {
  return {
    id: courseId,
    title: "Mastering Algorithms and Data Structures in Python",
    description:
      "This path will teach you some of the key foundational skills in computer programming often required in technical interviews. It will focus on understanding how to choose optimal algorithms and data structures for different problems, how to apply them, and how to explain their reasoning.",
    totalLessons: 24,
    estimatedHours: 40,
    modules: [
      {
        id: "1",
        title: "Hashing, Dictionaries, and Sets in Python",
        description:
          "Dive into Hashing, Dictionaries, and Sets in Python with this focused course, covering implementation, real-world applications, and algorithmic problem-solving.",
        lessons: 7,
        completed: 4,
      },
      {
        id: "2",
        title: "Sorting and Searching Algorithms in Python",
        description:
          "This is an in-depth course designed to instill foundational and advanced knowledge of sorting and searching algorithms.",
        lessons: 8,
        completed: 2,
      },
      {
        id: "3",
        title: "Linked Lists, Stacks, and Queues in Python",
        description:
          "This course dives into the understanding and application of basic data structures including Linked Lists, Stacks, and Queues.",
        lessons: 7,
        completed: 0,
      },
    ],
  };
}

export default async function CourseOverviewPage({
  params,
}: {
  params: { courseId: string };
}) {
  const { courseId } = params;
  const courseData = await getCourseData(courseId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
      <p className="text-gray-600 mb-6">{courseData.description}</p>

      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Book className="w-5 h-5 mr-2 text-primary" />
            <span>{courseData.totalLessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            <span>{courseData.estimatedHours} hours</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
      <div className="space-y-4">
        {courseData.modules.map((module, index) => (
          <Card key={module.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {module.title}
              </CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span>{module.lessons} lessons</span>
                <span>
                  {module.completed} / {module.lessons} completed
                </span>
              </div>
              <Progress
                value={(module.completed / module.lessons) * 100}
                className="mb-4"
              />
              <Link href={`/courses/${courseId}/learn/${module.id}`}>
                <Button variant="outline" className="w-full">
                  {module.completed === 0 ? "Start Module" : "Continue Module"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Award className="w-16 h-16 mx-auto text-primary mb-4" />
        <p className="text-lg font-semibold">
          Complete all modules to earn your certificate!
        </p>
      </div>
    </div>
  );
}
