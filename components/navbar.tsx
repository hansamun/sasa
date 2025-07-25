"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Buy", href: "#buy" },
    { name: "Community", href: "#community" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Tokenomics", href: "#tokenomics" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-blue-900/20" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-2xl font-bold font-cinzel text-white">
              Little Pepe <span className="text-blue-600">$LILPE</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-cinzel text-white hover:text-blue-600 transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="https://t.me/littlepepeonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors p-2"
              title="Join Telegram"
            >
              <img src="/icons/telegram-icon.webp" alt="Telegram" className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/littlepepeonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors p-2"
              title="Follow Twitter"
            >
              <img src="/icons/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a
              href="#buy"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 py-2 rounded-lg font-cinzel text-sm font-bold transition-all duration-300"
            >
              BUY $LILPE
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-blue-900/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-cinzel text-white hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://t.me/littlepepeonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors p-2"
              >
                <img src="/icons/telegram-icon.webp" alt="Telegram" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/littlepepeonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors p-2"
              >
                <img src="/icons/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
            <a
              href="#buy"
              className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg font-cinzel font-bold transition-all duration-300 mt-2 mx-3"
              onClick={() => setIsOpen(false)}
            >
              BUY $LILPE
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
