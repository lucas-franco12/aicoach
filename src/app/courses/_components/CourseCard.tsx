import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface CourseCardProps {
  id: number
  title: string
  description: string
  instructor: string
  rating: number
  image: string
  category: string
  difficulty: string
}

export function CourseCard({ title, description, instructor, rating, image }: CourseCardProps) {
  return (
    <Card className="flex flex-col">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{instructor}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}