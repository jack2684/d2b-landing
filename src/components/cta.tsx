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
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="border-t">
      <div className="container flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Sign Up or Share your Challenges</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join our mailing list to receive the latest news and optionally share your experiences with PDF documentation
          in the AEC industry.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
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

