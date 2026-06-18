import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { Benefits } from '#/components/Benefits'
import { FeaturesSection } from '#/components/FeaturesSection'
import { StatsSection } from '#/components/StatsSection'
import { BentoSection } from '#/components/BentoSection'
import { WorkflowSection } from '#/components/WorkflowSection'
import { FeatureCards } from '#/components/FeatureCards'
import { ForCreativeTeams } from '#/components/ForCreativeTeams'
import { CTASection } from '#/components/CTASection'
import { Footer } from '#/components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="bg-[#f3eae5] min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturesSection />
      <StatsSection />
      <BentoSection />
      <WorkflowSection />
      <FeatureCards />
      <ForCreativeTeams />
      <CTASection />
      <Footer />
    </div>
  )
}
