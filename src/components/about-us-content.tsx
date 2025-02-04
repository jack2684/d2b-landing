"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { submitFeedback } from "@/app/actions"

export default function AboutUsContent() {
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitFeedback(feedback)
      setSubmitMessage("Thank you for your insights!")
      setFeedback("")
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About D2B</h1>
      <p className="text-xl text-muted-foreground mb-8">Speed-up design-intent to build reality</p>
      <p className="mb-6 text-lg">
        At D2B, we are an early-stage startup with experts from AEC (Architecture, Engineering, and Construction),
        software development, and AI. Our team is deeply passionate about simplifying tedious PDF documentation,
        recognizing the challenges faced by professionals in the AEC industry.
      </p>
      <p className="mb-6 text-lg">
        Our mission is to speed up the process from design-intent to build reality. We're focused on bridging the gap
        between complex design documents and practical, buildable solutions.
      </p>
      <p className="mb-6 text-lg">
        As we embark on this journey, we acknowledge that we have a lot to learn. That's why we're reaching out to you,
        the experts in the field, to gain valuable insights into how the problem of complex PDF documentation is
        manifesting in your day-to-day work.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Share Your Insights</h2>
      <p className="mb-6">
        We'd love to hear about your experiences and challenges with PDF documentation in the AEC industry. Your
        feedback will be invaluable in helping us develop solutions that truly address the pain points you face.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Tell us about your challenges with PDF documentation..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={6}
          className="w-full p-2 border rounded"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
      {submitMessage && <p className="mt-4 text-green-600 font-semibold">{submitMessage}</p>}
    </div>
  )
}

