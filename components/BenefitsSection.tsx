import { Check } from "lucide-react"

const benefits = [
  "Save hours per report",
  "Reduce manual errors",
  "Focus on judgment, not busywork",
  "Works alongside your existing tools",
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                Why Appraisers Use Praise
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Built by professionals who understand the demands of property appraisal work.
              </p>
            </div>

            {/* Right side - Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                      <Check className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
