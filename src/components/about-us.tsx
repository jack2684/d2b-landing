"use client"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { PWithPointer } from "@/components/ui/p-with-pointer"

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
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-4xl font-bold mb-4">About D2B</h2>
          <PWithPointer className="text-xl text-muted-foreground mb-8">Speed-up design-intent to build-reality</PWithPointer>
          <PWithPointer className="mb-6 text-lg">
            At D2B, we are an early-stage startup with experts from AI and AEC (Architecture, Engineering, and Construction). Our team is deeply passionate about simplifying work related to construction drawings coordination,
            recognizing the challenges faced by professionals in the AEC industry.
          </PWithPointer>
          <PWithPointer className="mb-6 text-lg">
            Our mission is to make drawings coordination easy.
          </PWithPointer>
          <PWithPointer className="mb-6 text-lg">
            As we embark on this journey, we acknowledge that we have a lot to learn. That&apos;s why we&apos;re reaching out to
            you, the experts in the field, to gain valuable insights.
          </PWithPointer>
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

