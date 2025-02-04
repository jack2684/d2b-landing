"use client"

import Link from "next/link"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between h-20 max-w-screen-2xl items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2b-logo-wide-2rciA537rnG7uRabJnr9jL04H5ShBz.png"
            alt="D2B Logo"
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center space-x-6 ml-auto">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => scrollToSection("solutions")} className="transition-colors hover:text-primary">
              Solutions
            </button>
            <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-primary">
              About
            </button>
          </nav>
          <Button onClick={() => scrollToSection("cta")} size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

