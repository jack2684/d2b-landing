import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { InteractiveGridPattern } from "@/components/interactive-grid"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D2B AI - Revolutionizing AEC with AI-Powered Solutions",
  description:
    "D2B AI delivers innovative, AI-driven solutions for the Architecture, Engineering, and Construction industry.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <div className="fixed inset-0 z-10 pointer-events-none">
          <InteractiveGridPattern
            className={cn("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")}
            width={20}
            height={20}
            squares={[80, 80]}
            squaresClassName="hover:fill-primary/20"
          />
        </div>
        {children}
      </body>
    </html>
  )
}

