import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Orbitron, Rajdhani } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "SpectraCore",
  description: "Created with v0",
  icons: {
    icon: "/images/favicon-robot.jpeg", // Diperbarui di sini
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${rajdhani.className}`}>
      <body>{children}</body>
    </html>
  )
}
