import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const learningPaths = [
  {
    title: "Data Science Specialization",
    description: "Master the skills to become a data scientist",
    courses: 5,
    duration: "6 months",
    skills: ["Python", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Full Stack Web Development",
    description: "Build modern web applications from front to back",
    courses: 6,
    duration: "8 months",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "AI for Business",
    description: "Apply AI techniques to solve business problems",
    courses: 4,
    duration: "5 months",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Business Strategy",
    ],
  },
];

const MAX_SKILLS_DISPLAY = 3;

export function FeaturedLearningPaths() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Featured Learning Paths</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningPaths.map((path) => (
          <Card key={path.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-medium mb-2">{path.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {path.description}
              </p>
              <div className="flex justify-between mb-4 text-sm text-muted-foreground">
                <span>{path.courses} courses</span>
                <span>{path.duration}</span>
              </div>
              <div className="mb-4">
                <strong className="block mb-2 text-sm">
                  Skills you&#39;ll gain:
                </strong>
                <div className="flex flex-wrap gap-2">
                  {path.skills.slice(0, MAX_SKILLS_DISPLAY).map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > MAX_SKILLS_DISPLAY && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      +{path.skills.length - MAX_SKILLS_DISPLAY} more
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={`/learning-paths/${path.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="mt-auto"
              >
                <Button className="w-full">Explore Path</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/learning-paths">
          <Button variant="link">View All Learning Paths</Button>
        </Link>
      </div>
    </section>
  );
}
