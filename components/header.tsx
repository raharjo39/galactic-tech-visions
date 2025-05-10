"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Update the navItems array to be empty since we want to remove all navigation items
const navItems = []

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/gip-logo.jpeg" alt="GIP Logo" width={100} height={40} className="h-8 w-auto" />
            <span className="sr-only">PT. Galactic Indonesia Perkasa</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in Touch
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
