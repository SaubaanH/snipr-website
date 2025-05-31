import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About Snipr</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          We're on a mission to help people save money on everyday purchases.
        </p>
      </div>

      <div className="grid gap-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Snipr was founded with a simple idea: make it easier for people to find and use deals from digital flyers.
              We noticed that while the world had gone digital, the way people discovered deals was still stuck in the
              past.
            </p>
            <p className="text-muted-foreground">
              Our team of developers and deal enthusiasts came together to create a solution that brings deal discovery
              into the modern era, helping consumers save time and money with just a few taps.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=400&width=600" alt="Snipr team" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=400&width=600" alt="Snipr mission" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At Snipr, we believe everyone should have easy access to savings. Our mission is to democratize deal
              discovery and make it effortless for people to save on their everyday purchases.
            </p>
            <p className="text-muted-foreground">
              We're committed to building technology that works for you, saving you both time and money while providing
              a delightful user experience that makes finding deals actually fun.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
