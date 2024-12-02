import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterOptionsProps {
  category: string
  setCategory: (value: string) => void
  difficulty: string
  setDifficulty: (value: string) => void
}

export function FilterOptions({ category, setCategory, difficulty, setDifficulty }: FilterOptionsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-8">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-[200px] mb-4 sm:mb-0 sm:mr-4">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Categories</SelectItem>
          <SelectItem value="Machine Learning">Machine Learning</SelectItem>
          <SelectItem value="Deep Learning">Deep Learning</SelectItem>
          <SelectItem value="NLP">NLP</SelectItem>
          <SelectItem value="Computer Vision">Computer Vision</SelectItem>
          <SelectItem value="Reinforcement Learning">Reinforcement Learning</SelectItem>
          <SelectItem value="AI Ethics">AI Ethics</SelectItem>
        </SelectContent>
      </Select>

      <Select value={difficulty} onValueChange={setDifficulty}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Select Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Difficulties</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}