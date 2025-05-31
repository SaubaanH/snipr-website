import Image from "next/image"
import { ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered Price Matching at Your Fingertips
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Snipr uses advanced AI to help you save money. Simply snap a photo of your shopping cart, and we'll tell
                you where to find the best price matches nearby.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-1" id="get-started">
                <Link href="#get-started">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Smartphone className="h-4 w-4" />
                <span>Coming soon to iOS & Android</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-[300px] overflow-hidden rounded-xl border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=900&width=600"
                alt="Snipr App Screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
