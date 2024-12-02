'use client'

export function HowItWorks() {
  const steps = [
    { 
      title: "Choose Your Coach", 
      description: "Select your preferred language and AI coach that matches your learning style" 
    },
    { 
      title: "Start Conversations", 
      description: "Engage in natural conversations with your AI coach in your target language" 
    },
    { 
      title: "Practice & Improve", 
      description: "Receive instant feedback, corrections, and cultural insights as you practice" 
    },
  ]

  return (
    <section id="how-it-works" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}