import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
        <p className="mb-12 text-xl text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Let us know how we can help..." className="min-h-32" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@snipr.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-medium">Office</h3>
                <p className="text-muted-foreground">123 Deal Street</p>
                <p className="text-muted-foreground">San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
