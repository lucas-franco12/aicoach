"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LessonContent from "../../_components/LessonContent";
import LessonNavigation from "../../_components/LessonNavigation";
import AIChat from "../../_components/AIChat";
import VideoPlayer from "../../_components/VideoPlayer";
import TranscriptContent from "../../_components/TranscriptContent";
import { dummyLessonData } from "@/app/courses/_data/dummyLessonData";

const lessonData = dummyLessonData;

const moduleData = {
  id: "1",
  title: "Introduction to Python",
  totalLessons: lessonData.length,
};

export default function LessonPage({
  params,
}: {
  params: { courseId: string; moduleId: string; lessonId: string };
}) {
  const { courseId, moduleId, lessonId } = params;

  const currentLessonIndex = lessonData.findIndex(
    (lesson) => lesson.id === lessonId
  );
  const currentLesson = lessonData[currentLessonIndex];

  if (!currentLesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link
            href={`/courses/${courseId}/learn/${moduleId}`}
            className="flex items-center text-primary"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Module: {moduleData.title}
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">{currentLesson.title}</h1>

      {/* Video Player */}
      <div className="mb-8">
        <VideoPlayer videoUrl={`https://www.w3schools.com/html/mov_bbb.mp4`} />
      </div>

      {/* Tabs for Lesson Content, AI Chat, Transcript */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Lesson Content</TabsTrigger>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <LessonContent
            title={currentLesson.title}
            content={currentLesson.content}
          />
        </TabsContent>
        <TabsContent value="chat">
          <AIChat lessonId={lessonId} />
        </TabsContent>
        <TabsContent value="transcript">
          <TranscriptContent lessonId={lessonId} />
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <LessonNavigation
          currentModule={Number(moduleId)}
          currentLesson={currentLessonIndex + 1}
          totalModules={1}
          totalLessons={moduleData.totalLessons}
          courseId={courseId}
          moduleId={moduleId}
          lessonIds={lessonData.map((lesson) => lesson.id)}
        />
      </div>
    </div>
  );
}
