"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { InteractiveGridPattern } from "@/components/interactive-grid"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
  );
}
