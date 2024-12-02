'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap } from "lucide-react"

interface CourseModule {
  number: number
  title: string
  description: string
  lessons: number
  practices: number
}

interface CourseOutlineProps {
  modules: CourseModule[];
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ modules }) => {
  const [visibleModules, setVisibleModules] = useState(3);
  
  const toggleModules = () => {
    if (visibleModules === 3) {
      setVisibleModules(modules.length);
    } else {
      setVisibleModules(3);
    }
  };

  return (
    <div className="space-y-8">
      {modules.slice(0, visibleModules).map((module) => (
        <Card key={module.number} className="bg-white shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                {module.number}
              </div>
              <CardTitle className="text-2xl">{module.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              {module.description}
            </CardDescription>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{module.practices} practices</span>
                </div>
              </div>
              <Button variant="outline">See details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {modules.length > 3 && (
        <div className="text-center">
          <Button onClick={toggleModules}>
            {visibleModules === 3 ? `Show ${modules.length - 3} more` : 'Show less'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseOutline;