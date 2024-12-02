"use client";

import { Card } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      language: "Japanese",
      quote:
        "Learning Japanese with AI Coach Yuki has been amazing! The cultural insights and natural conversations have helped me progress so quickly.",
    },
    {
      name: "Miguel Rodriguez",
      language: "English",
      quote:
        "The pronunciation feedback from my AI coach has dramatically improved my English speaking confidence. It's like having a patient tutor available 24/7.",
    },
    {
      name: "Anna Schmidt",
      language: "Spanish",
      quote:
        "Coach María makes learning Spanish fun and engaging. I love how she adapts to my learning style and corrects my mistakes in real-time.",
    },
  ];

  return (
    <section id="testimonials" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <p className="text-lg mb-4">&rdquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">Learning {testimonial.language}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
