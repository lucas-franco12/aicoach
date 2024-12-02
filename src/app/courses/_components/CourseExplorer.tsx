"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface Course {
  title: string;
  description: string;
}

const goals = ["Career Advancement", "Personal Growth", "Skill Development", "Academic Progress"]
const backgrounds = ["Beginner", "Intermediate", "Advanced"]
const interests = ["Technology", "Business", "Science", "Arts", "Humanities"]

export function CourseExplorer() {
  const [selectedGoal, setSelectedGoal] = useState("")
  const [selectedBackground, setSelectedBackground] = useState("")
  const [selectedInterest, setSelectedInterest] = useState("")
  const [recommendations, setRecommendations] = useState<Course[]>([])

  const handleExplore = () => {
    // In a real application, this would call an API to get personalized recommendations
    // For now, we'll just set some dummy data
    setRecommendations([
      { title: "Introduction to Programming", description: "Learn the basics of coding" },
      { title: "Data Science Fundamentals", description: "Get started with data analysis" },
      { title: "Business Strategy", description: "Develop your strategic thinking skills" },
    ])
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Course Explorer</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select value={selectedGoal} onValueChange={setSelectedGoal}>
              <SelectTrigger>
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                {goals.map((goal) => (
                  <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBackground} onValueChange={setSelectedBackground}>
              <SelectTrigger>
                <SelectValue placeholder="Select your background" />
              </SelectTrigger>
              <SelectContent>
                {backgrounds.map((background) => (
                  <SelectItem key={background} value={background}>{background}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedInterest} onValueChange={setSelectedInterest}>
              <SelectTrigger>
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                {interests.map((interest) => (
                  <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleExplore} className="w-full">Explore Courses</Button>
        </CardContent>
      </Card>
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Recommended Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((course, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h4 className="text-lg font-medium mb-2">{course.title}</h4>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}