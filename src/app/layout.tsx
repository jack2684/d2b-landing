"use client"

import { GeistSans } from "next/font/google"
import "./globals.css"

const geistSans = GeistSans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>{children}</body>
    </html>
  )
}
