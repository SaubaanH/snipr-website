import { ShoppingBag, Bell, Smartphone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Features</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Discover how Snipr's AI-powered technology helps you save money on everyday purchases.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid gap-12 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">AI-Powered Price Matching</h2>
            <p className="mb-4 text-muted-foreground">
              Take a photo of your shopping cart and our advanced AI will identify each item and find where you can
              price match them nearby. No more manual searching through flyers or websites.
            </p>
            <p className="text-muted-foreground">
              Our technology can recognize thousands of products and continuously learns to improve its accuracy. Simply
              snap, wait a moment, and see where you can save.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=400&width=600" alt="AI Price Matching" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=400&width=600" alt="Smart Scanning" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-3xl font-bold">Smart Scanning</h2>
            <p className="mb-4 text-muted-foreground">
              Scan product barcodes for instant price comparisons across all nearby stores. Get detailed information
              about each product including price history and predicted future discounts.
            </p>
            <p className="text-muted-foreground">
              Our barcode database covers millions of products and is updated in real-time to ensure you always have the
              most current pricing information.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Nearby Price Matches</h2>
            <p className="mb-4 text-muted-foreground">
              Instantly see which nearby stores have better prices on the items in your cart. Snipr shows you exactly
              how much you'll save at each location and provides directions to get there.
            </p>
            <p className="text-muted-foreground">
              Our location-based technology factors in your travel distance to help you decide if the savings are worth
              the trip to another store.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Nearby Price Matches"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=400&width=600" alt="Price Comparison" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-3xl font-bold">Price Comparison</h2>
            <p className="mb-4 text-muted-foreground">
              Compare prices across multiple stores to find the absolute best deal. Snipr aggregates pricing data from
              over 100 retailers to ensure you never overpay.
            </p>
            <p className="text-muted-foreground">
              Our price comparison engine takes into account current sales, loyalty discounts, and even store-specific
              coupons to calculate your true savings.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Deal Alerts</h3>
            <p className="text-center text-muted-foreground">
              Get notified when items on your wishlist go on sale at any store.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <ShoppingBag className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Shopping Lists</h3>
            <p className="text-center text-muted-foreground">
              Create and organize shopping lists with the best deals automatically added.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cross-Platform</h3>
            <p className="text-center text-muted-foreground">
              Access Snipr on iOS, Android, and the web to manage your shopping from anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start saving?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our waitlist to be the first to know when Snipr launches and start saving money on your everyday
          purchases.
        </p>
        <Button disabled size="lg">
          Coming Soon
        </Button>
      </div>
    </div>
  )
}
