import Link from "next/link"

export function PraiseFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-foreground">Praise</span>
          </div>
          <nav className="flex gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Praise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
