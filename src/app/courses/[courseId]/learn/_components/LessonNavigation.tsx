// components/LessonNavigation.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LessonNavigationProps {
  currentModule: number;
  currentLesson: number;
  totalModules: number;
  totalLessons: number;
  courseId: string;
  moduleId: string;
  lessonIds: string[];
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({
  currentModule,
  currentLesson,
  totalModules,
  totalLessons,
  courseId,
  moduleId,
  lessonIds,
}) => {
  const prevLessonId = lessonIds[currentLesson - 2];
  const nextLessonId = lessonIds[currentLesson];

  return (
    <nav className="flex justify-between items-center py-4">
      <Button variant="outline" asChild disabled={currentLesson === 1}>
        <Link href={`/courses/${courseId}/learn/${moduleId}/${prevLessonId}`}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous Lesson
        </Link>
      </Button>
      <span className="text-sm font-medium">
        Module {currentModule} / {totalModules}, Lesson {currentLesson} /{" "}
        {totalLessons}
      </span>
      <Button
        variant="outline"
        asChild
        disabled={currentLesson === totalLessons}
      >
        <Link href={`/courses/${courseId}/learn/${moduleId}/${nextLessonId}`}>
          Next Lesson <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
};

export default LessonNavigation;
