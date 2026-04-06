import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Start Working Smarter
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Join early access and streamline your appraisal workflow.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 gap-2"
            >
              Join the Free Beta
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
