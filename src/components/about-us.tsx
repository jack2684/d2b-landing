"use client"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About D2B</h2>
          <p className="text-xl text-muted-foreground mb-8">Speed-up design-intent to build-reality</p>
          <p className="mb-6 text-lg">
            At D2B, we are an early-stage startup with experts from AEC (Architecture, Engineering, and Construction),
            software development, and AI. Our team is deeply passionate about simplifying tedious PDF documentation,
            recognizing the challenges faced by professionals in the AEC industry.
          </p>
          <p className="mb-6 text-lg">
            Our mission is to speed up the process from design-intent to build-reality. We're focused on bridging the
            gap between complex design documents and practical, buildable solutions.
          </p>
          <p className="mb-6 text-lg">
            As we embark on this journey, we acknowledge that we have a lot to learn. That's why we're reaching out to
            you, the experts in the field, to gain valuable insights into how the problem of complex PDF documentation
            is manifesting in your day-to-day work.
          </p>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => scrollToSection("cta")} size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

