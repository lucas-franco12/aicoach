'use client'

import { Card } from "@/components/ui/card"

export function AIFeatures() {
  const features = [
    { 
      title: "Natural Conversations", 
      description: "Practice real-world conversations with AI coaches that adapt to your level" 
    },
    { 
      title: "Pronunciation Feedback", 
      description: "Get instant feedback on your pronunciation and accent" 
    },
    { 
      title: "Cultural Context", 
      description: "Learn cultural nuances and context while practicing the language" 
    },
    { 
      title: "Personalized Vocabulary", 
      description: "Build vocabulary based on your interests and learning goals" 
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Smart Language Learning Features</h2>
        {/* Changed grid-cols-1 md:grid-cols-2 to grid-cols-1 md:grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}