"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCallback } from "react"

export default function Hero() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="container flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Speed-up design-intent
          <br />
          to build-reality
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          D2B is revolutionizing the AEC industry by simplifying complex PDF documentation. From AI-driven analytics to
          seamless integrations, we&apos;re bridging the gap between design and construction.
        </p>
        <p className="mb-6 text-lg">
          Let&apos;s transform how we handle documentation
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" onClick={() => scrollToSection("solutions")}>
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

