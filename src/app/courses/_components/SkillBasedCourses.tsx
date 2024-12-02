"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

const skills = [
  { name: "Programming", courses: ["Python Fundamentals", "Java for Beginners", "Advanced C++"] },
  { name: "Data Analysis", courses: ["Introduction to R", "Data Visualization with Tableau", "Statistical Analysis"] },
  { name: "Project Management", courses: ["Agile Methodologies", "Scrum Master Certification", "Project Planning Essentials"] },
  { name: "Digital Marketing", courses: ["Social Media Marketing", "SEO Optimization", "Content Marketing Strategies"] },
]

export function SkillBasedCourses() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const handleSkillChange = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const filteredCourses = skills
    .filter(skill => selectedSkills.includes(skill.name))
    .flatMap(skill => skill.courses)

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Courses to Build Your Skills</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {skills.map((skill) => (
          <label key={skill.name} className="flex items-center space-x-2">
            <Checkbox
              checked={selectedSkills.includes(skill.name)}
              onCheckedChange={() => handleSkillChange(skill.name)}
            />
            <span>{skill.name}</span>
          </label>
        ))}
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">{course}</h3>
                <Link href={`/courses/${course.toLowerCase().replace(/ /g, "-")}`}>
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">Select skills to see relevant courses</p>
      )}
      <div className="mt-6 text-center">
        <Link href="/skills">
          <Button variant="link">Explore All Skill-based Courses</Button>
        </Link>
      </div>
    </section>
  )
}