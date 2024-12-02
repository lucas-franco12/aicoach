import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

const trendingCourses = [
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Jane Smith",
    rating: 4.8,
    students: 15000,
    image:
      "https://plus.unsplash.com/premium_photo-1726079248075-2b50954971fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8https://plus.unsplash.com/premium_photo-1726079248075-2b50954971fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
  },
  {
    title: "Blockchain Technology",
    instructor: "Prof. John Doe",
    rating: 4.7,
    students: 12000,
    image:
      "https://images.unsplash.com/photo-1694219782948-afcab5c095d3?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "UX/UI Design Principles",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 18000,
    image:
      "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVYJTJGVUklMjBEZXNpZ24lMjBQcmluY2lwbGVzfGVufDB8fDB8fHww",
  },
];

export function NewTrendingCourses() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">New & Trending Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingCourses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-medium mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-2">{course.instructor}</p>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{course.rating}</span>
                <span className="mx-2">•</span>
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <Link
                href={`/courses/${course.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/courses/trending">
          <Button variant="link">View All Trending Courses</Button>
        </Link>
      </div>
    </section>
  );
}
