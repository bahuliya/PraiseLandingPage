import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { PraiseFeatures } from "@/components/PraiseFeatures"
import { PraiseBenefits } from "@/components/PraiseBenefits"
import { FAQSection } from "@/components/FAQSection"
import { PraiseCTA } from "@/components/PraiseCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioNavbar />
      <ProductTeaserCard />
      <BankingScaleHero />
      <IntegrationCarousel />
      <section id="how-it-works">
        <PraiseFeatures />
      </section>
      <PraiseBenefits />
      <section id="faq">
        <FAQSection />
      </section>
      <PraiseCTA />
      <Footer />
    </main>
  )
}
