import Image from "next/image"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/40" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Save Money with AI in Three Simple Steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Snipr's AI technology makes finding price matches easier than ever before.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary">
              <Image src="/placeholder.svg?height=400&width=400" alt="Download the app" fill className="object-cover" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Download the App</h3>
            <p className="text-center text-muted-foreground">
              Get Snipr from the App Store or Google Play Store and create your account.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Snap a photo of your cart"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Snap a Photo</h3>
            <p className="text-center text-muted-foreground">
              Take a photo of your shopping cart or items you're considering buying.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Get price matches"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Get Price Matches</h3>
            <p className="text-center text-muted-foreground">
              Our AI identifies your items and shows you where to find the best price matches nearby.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
