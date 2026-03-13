import { AnimatedBanner } from "@/components/animated-banner"
import { VslSection } from "@/components/vsl-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import ProductSection from "@/components/product-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { PurchaseNotifications } from "@/components/purchase-notifications"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBanner />
      <PurchaseNotifications />
      <VslSection />
      <StatsSection />
      <BenefitsSection />
      <ProductSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
