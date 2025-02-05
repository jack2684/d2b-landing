"use client"

import { CircleArrowOutUpRight, Bot, Shield, Plug } from "lucide-react"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "AI Searh Engine for Construcionts",
    description: "An AI search engine for your construction projet.",
    icon: CircleArrowOutUpRight,
  },
  {
    name: "Drawings Coordination Co-pilot",
    description: "Code Review, Cross Discipline Review, Shop Drawing Reviews",
    icon: Bot,
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "Seamless Interation",
    description: "Work seamlessly with your day-to-day tools and workflow",
    icon: Plug,
  },
]

export default function Features() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="solutions" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center pointer-events-auto">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how D2B AI can transform your business with our innovative technologies.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8 pointer-events-auto">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button onClick={() => scrollToSection("cta")} size="lg">
          Try it out
        </Button>
      </div>
    </section>
  )
}

