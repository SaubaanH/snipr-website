import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Choose the plan that's right for you and start saving money today.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Free Tier */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Free</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $0<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-4">Perfect for casual shoppers looking to save.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Basic AI price matching</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Up to 5 cart analyses per week</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Basic savings reports</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Access to 50+ retailers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Ad-supported experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
              <Link href="#get-started">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Tier */}
        <Card className="flex flex-col border-primary">
          <CardHeader className="bg-primary/10 rounded-t-lg">
            <div className="text-sm font-semibold text-primary">MOST POPULAR</div>
            <CardTitle className="text-2xl">Pro</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $4.99<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-4">For regular shoppers who want to maximize savings.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Advanced AI price matching</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Unlimited cart analyses</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Detailed savings reports</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Access to 100+ retailers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Flyer previews and alerts</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Shopping list optimization</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Ad-supported experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="#get-started">Get Pro</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Ad-Free Tier */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Ad-Free</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $7.99<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-4">The ultimate shopping companion with no distractions.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Everything in Pro plan</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Completely ad-free experience</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Priority AI processing</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Early access to new features</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Premium customer support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
              <Link href="#get-started">Go Ad-Free</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Can I switch between plans?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the
              start of your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Is there a free trial for paid plans?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 7-day free trial for both our Pro and Ad-Free plans. You can cancel anytime during the
              trial period without being charged.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and Apple Pay/Google Pay where available.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
