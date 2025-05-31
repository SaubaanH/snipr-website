import { Banknote, Camera, Map, Scan } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">AI-Powered Savings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Snipr uses cutting-edge artificial intelligence to revolutionize how you save money on everyday purchases.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AI-Powered Price Matching</h3>
            <p className="text-center text-muted-foreground">
              Take a photo of your shopping cart and our AI will find where you can price match items nearby.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Scan className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Scanning</h3>
            <p className="text-center text-muted-foreground">
              Scan product barcodes for instant price comparisons across all nearby stores.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Map className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Nearby Price Matches</h3>
            <p className="text-center text-muted-foreground">
              Instantly see which nearby stores have better prices on the items in your cart.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Banknote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Price Comparison</h3>
            <p className="text-center text-muted-foreground">
              Compare prices across multiple stores to find the absolute best deal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
