import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Now in Free Beta
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
            Spend Less Time on Data.
            <br />
            More Time on Valuation.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Praise automates the repetitive parts of your workflow so you can focus on what actually matters—your expertise.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 gap-2">
              Join the Free Beta
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
