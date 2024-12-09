'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-primary from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Personal AI Language Coach</h1>
        <p className="text-xl md:text-2xl mb-8">Master any language through natural conversations with AI language experts</p>
        <Link href="/coaches">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Choose Your Coach
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}