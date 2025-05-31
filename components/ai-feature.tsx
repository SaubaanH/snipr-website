import Image from "next/image"
import { Camera, Search, MapPin } from "lucide-react"

export default function AIFeature() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Smart Price Matching with AI</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Our advanced artificial intelligence makes saving money easier than ever before.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Snap a Photo</h3>
                  <p className="text-muted-foreground">
                    Take a quick photo of your shopping cart or any product you're interested in buying.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">AI Recognition</h3>
                  <p className="text-muted-foreground">
                    Our AI instantly identifies the products in your photo with remarkable accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Find Price Matches</h3>
                  <p className="text-muted-foreground">
                    Get a list of nearby stores where you can price match each item, showing you exactly how much you'll
                    save.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background shadow-xl lg:aspect-square lg:w-full max-w-[500px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="AI Price Matching Demo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
