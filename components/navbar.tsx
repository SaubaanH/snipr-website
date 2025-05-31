"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/snipr-logo-black.png" alt="Snipr Logo" width={480} height={160} className="h-32 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button disabled className="hidden md:inline-flex">
            Coming Soon
          </Button>
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-28 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/snipr-logo-black.png"
                alt="Snipr Logo"
                width={480}
                height={160}
                className="h-32 w-auto"
              />
            </Link>
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8 text-center">
            <Link href="/" className="text-lg font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/features"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button disabled className="mt-4" onClick={toggleMenu}>
              Coming Soon
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
