"use client"

import { useEffect, useState } from "react"

const CONTACT_URL = "https://ziyadbooks.com"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goContact = () => {
    window.open(CONTACT_URL, "_blank")
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-sky-600 shadow-md" : "bg-white/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo kiri */}
        <h1
          onClick={goTop}
          className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white drop-shadow-md"
          }`}
        >
          ZiyadBooks
        </h1>

        {/* CTA kanan */}
        <button
          onClick={goContact}
          className={`font-semibold px-4 py-2 rounded-lg transition-colors duration-300 ${
            scrolled
              ? "bg-white text-sky-600 hover:bg-gray-100"
              : "bg-blue-500/80 text-white hover:bg-blue-600/90"
          }`}
        >
          Contact Us
        </button>
      </div>
    </nav>
  )
}