import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Cinzel } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AudioPlayer from "@/components/audio-player"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Little Pepe $LILPE",
  description: "The premier Little Pepe meme token built on Base network - Little Pepe $LILPE",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${notoSerifJP.variable} ${cinzel.variable} bg-black text-gray-200 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  )
}
