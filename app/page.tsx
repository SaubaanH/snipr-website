import Hero from "@/components/hero"
import Features from "@/components/features"
import AIFeature from "@/components/ai-feature"
import HowItWorks from "@/components/how-it-works"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <AIFeature />
      <HowItWorks />
      <CTA />
    </div>
  )
}
