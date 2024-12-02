import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LessonContentProps {
  title: string;
  content: {
    type: string;
    text?: string;
    level?: number;
    items?: string[];
  }[];
}

const LessonContent: React.FC<LessonContentProps> = ({ title, content }) => {
  return (
    <Card className="lesson-content">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {content.map((item, index) => {
            switch (item.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-gray-700">
                    {item.text}
                  </p>
                );
              case "heading":
                const HeadingTag =
                  `h${item.level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag key={index} className="font-semibold mt-6 mb-2">
                    {item.text}
                  </HeadingTag>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc pl-6">
                    {item.items?.map((listItem, listIndex) => (
                      <li key={listIndex} className="text-gray-700">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonContent;
