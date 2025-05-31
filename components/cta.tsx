import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Saving?</h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
              Join our waitlist to be the first to know when Snipr launches.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="gap-1">
                Join <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60">
              We'll notify you when Snipr is ready to download. No spam, we promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
