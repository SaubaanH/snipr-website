import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what people are saying about Snipr.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="User avatar" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <div className="flex text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "Snipr has completely changed how I shop. I've saved over $200 in the first month alone by finding deals
                I would have missed otherwise!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="User avatar" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">Michael Rodriguez</h3>
                  <div className="flex text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "The AI price matching feature is incredible! I took a photo of my cart at one store and found I could
                save $45 by price matching certain items at a store just across the street."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="User avatar" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">Emily Chen</h3>
                  <div className="flex text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "The price comparison feature is a game-changer. I no longer have to visit multiple stores to find the
                best price on items I need."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
