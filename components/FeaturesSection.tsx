import { Database, LayoutGrid, Zap } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Automated Data Aggregation",
    description: "Pull MLS, tax, and public records into one place instantly",
  },
  {
    icon: LayoutGrid,
    title: "Smart Comp Organization",
    description: "Clean and structure your comp data with minimal manual input",
  },
  {
    icon: Zap,
    title: "Workflow Optimization",
    description: "Reduce repetitive tasks and focus on high-value analysis",
  },
]

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
