import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Apple } from "lucide-react"

export default function Download() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Download Now
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Snipr on Your Device</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download Snipr today and start saving on your favorite products. Available on iOS and Android.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="https://apps.apple.com">
                  <Apple className="h-5 w-5" />
                  App Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="https://play.google.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="3 3 21 12 3 21 3 3" />
                  </svg>
                  Google Play
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Free Download</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-[300px] w-[150px] overflow-hidden rounded-xl border bg-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Snipr App Screenshot 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mt-12 h-[300px] w-[150px] overflow-hidden rounded-xl border bg-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Snipr App Screenshot 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
