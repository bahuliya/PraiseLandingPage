import { Clock, FileWarning, Layers } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Hours spent pulling data",
    description: "Hours spent pulling data from multiple sources (MLS, tax records, permits)",
  },
  {
    icon: FileWarning,
    title: "Manual entry and cleanup",
    description: "Manual entry and cleanup in comp grids wastes valuable time",
  },
  {
    icon: Layers,
    title: "Fragmented data sources",
    description: "Fragmented, inconsistent data across counties and systems",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Appraisers Are Stuck Doing Manual Work
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <problem.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 mx-auto max-w-2xl">
            <blockquote className="relative">
              <div className="relative rounded-2xl border border-border bg-background p-8">
                <p className="text-lg italic text-muted-foreground text-center">
                  {'"Most of my time is spent gathering and cleaning data—not analyzing it."'}
                </p>
                <p className="mt-4 text-sm font-medium text-foreground text-center">
                  — Property Appraiser
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
