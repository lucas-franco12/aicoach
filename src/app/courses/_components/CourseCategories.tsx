import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    name: "Computer Science",
    icon: "💻",
    description: "Programming, algorithms, and software development",
  },
  {
    name: "Data Science",
    icon: "📊",
    description: "Data analysis, machine learning, and statistics",
  },
  {
    name: "Business",
    icon: "💼",
    description: "Management, finance, and entrepreneurship",
  },
  {
    name: "Design",
    icon: "🎨",
    description: "UX/UI, graphic design, and visual arts",
  },
  {
    name: "Language",
    icon: "🗣️",
    description: "Learn new languages and improve communication skills",
  },
  {
    name: "Engineering",
    icon: "⚙️",
    description: "Mechanical, electrical, and civil engineering",
  },
];

export function CourseCategories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-medium">{category.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow h-12 overflow-hidden text-ellipsis">
                {category.description}
              </p>
              <Link
                href={`/courses/category/${category.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="mt-auto"
              >
                <Button variant="outline" className="w-full">
                  Explore {category.name}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/courses/categories">
          <Button variant="link">View All Categories</Button>
        </Link>
      </div>
    </section>
  );
}
