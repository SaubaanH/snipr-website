import { Check } from "lucide-react"

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
                <span>
                  <strong>10 AI scans</strong> per month
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Basic price matching</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Access to 50+ retailers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Basic savings reports</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Single shopping list</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Ad-supported experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button disabled className="w-full" variant="outline">
              Coming Soon
            </Button>
          </CardFooter>
        </Card>

        {/* Plus Tier */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Plus</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $3.99<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-4">For regular shoppers who want more savings.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>25 AI scans</strong> per month
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Enhanced price matching</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Access to 75+ retailers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Detailed savings reports</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Multiple shopping lists</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Deal alerts for saved items</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Ad-supported experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button disabled className="w-full" variant="outline">
              Coming Soon
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Tier */}
        <Card className="flex flex-col border-primary">
          <CardHeader className="bg-primary/10 rounded-t-lg">
            <div className="text-sm font-semibold text-primary">MOST POPULAR</div>
            <CardTitle className="text-2xl">Pro</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              $7.99<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-4">The ultimate shopping companion with no limits.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Unlimited AI scans</strong>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Premium AI price matching</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Access to 100+ retailers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Advanced savings analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Unlimited shopping lists</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Priority deal alerts</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Price history & predictions</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Ad-free experience</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>Priority customer support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button disabled className="w-full">
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">What are AI scans?</h3>
            <p className="text-muted-foreground">
              AI scans are when you take a photo of your shopping cart or items and our AI analyzes them to find price
              matches. Each time you use this feature, it counts as one scan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">When will Snipr be available?</h3>
            <p className="text-muted-foreground">
              Snipr is currently in development. Join our waitlist to be the first to know when we launch and get early
              access to the app.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Can I switch between plans?</h3>
            <p className="text-muted-foreground">
              Yes, once launched, you'll be able to upgrade, downgrade, or cancel your subscription at any time. Changes
              will take effect at the start of your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Will there be a free trial for paid plans?</h3>
            <p className="text-muted-foreground">
              Yes, we plan to offer a 7-day free trial for both our Plus and Pro plans. You'll be able to cancel anytime
              during the trial period without being charged.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
