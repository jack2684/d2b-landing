"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitFeedback } from "@/app/actions"

export default function CTA() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [challenges, setChallenges] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Handle email signup and challenges submission
      console.log("Submission:", { name, email, challenges })

      // In a real application, you would send this data to your backend
      if (challenges) {
        await submitFeedback(challenges)
      }

      setSubmitMessage("Thank you for signing up and sharing your insights!")
      setName("")
      setEmail("")
      setChallenges("")
    } catch {  // Removed unused parameter
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="border-t">
      <div className="container flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <a href="#cta">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">We are here to help!</h2>
        </a>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Sign up to get early access to our product. Share your challenges with drawings coordination with the founders directly.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 pointer-events-auto">
          <div>
            <Label htmlFor="name" className="sr-only">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="challenges" className="sr-only">
              Your Challenges (Optional)
            </Label>
            <Textarea
              id="challenges"
              placeholder="Share your challenges with PDF documentation (optional)"
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              rows={4}
              className="border border-input"
            />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign Up and Submit"}
          </Button>
        </form>
        {submitMessage && <p className="mt-4 text-green-600 font-semibold">{submitMessage}</p>}
      </div>
    </section>
  )
}

