"use client";

import React from "react";

interface TranscriptContentProps {
  lessonId: string;
}

const TranscriptContent: React.FC<TranscriptContentProps> = ({ lessonId }) => {
  const transcript = `This is a transcript for lesson ${lessonId}. It can contain multiple lines and paragraphs.`;

  return (
    <div className="h-[60vh] overflow-y-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lesson Transcript</h2>
      <p className="whitespace-pre-wrap">{transcript}</p>
    </div>
  );
};

export default TranscriptContent;
