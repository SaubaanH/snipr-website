import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Snipr.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate is the AI cart analysis?</AccordionTrigger>
              <AccordionContent>
                Our AI technology can identify most common grocery and retail items with over 95% accuracy. The system
                continuously improves as more people use it. For items that aren't recognized automatically, you can
                easily add them manually or scan their barcodes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-ai">
              <AccordionTrigger>How does the AI price matching work?</AccordionTrigger>
              <AccordionContent>
                Our advanced AI technology can identify products from a photo of your shopping cart. It then searches
                our database of current deals and promotions to find stores near you that offer price matching for those
                items. The app shows you where to go and how much you can save on each item.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the price matching feature work?</AccordionTrigger>
              <AccordionContent>
                After analyzing your cart, Snipr compares the items against current prices at nearby stores. It then
                shows you which items can be price matched and where, potentially saving you a trip to another store.
                Many retailers have price matching policies that allow you to get the lower price by simply showing the
                competitor's price in our app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is Snipr free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Snipr offers a free tier that includes 10 AI scans per month and basic features. For more frequent
                shoppers, we offer Plus ($3.99/month) with 25 AI scans and additional features, and Pro ($7.99/month)
                with unlimited AI scans and our complete feature set.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Which stores are supported?</AccordionTrigger>
              <AccordionContent>
                Snipr supports over 100 major retailers across the country, including grocery stores, pharmacies,
                department stores, and specialty shops. We're constantly adding more stores to our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is my shopping data private?</AccordionTrigger>
              <AccordionContent>
                Yes, we take your privacy seriously. While we use your cart data to improve our AI recognition system,
                all personal information is anonymized. We never sell your individual shopping data to third parties.
                You can read more in our privacy policy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I use Snipr in any store?</AccordionTrigger>
              <AccordionContent>
                Yes, you can use Snipr's cart analysis feature in any physical store. However, price matching results
                will only be available for stores in our database. The good news is that we cover most major retailers
                and are constantly expanding our coverage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
