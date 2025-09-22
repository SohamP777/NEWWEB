import { useEffect } from 'react'
import SEO from '../../components/seo/SEO'
import HeroSection from '../../components/landing/HeroSection'
import StatsSection from '../../components/landing/StatsSection'
import FeaturesSection from '../../components/landing/FeaturesSection'
import HowItWorks from '../../components/landing/HowItWorks'
import PricingSection from '../../components/landing/PricingSection'
import Testimonials from '../../components/landing/Testimonials'
import CtaSection from '../../components/landing/CtaSection'

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO 
        title="SEO Nova - AI-Powered SEO Optimization"
        description="Automatically improve your website's SEO with AI-powered optimization while following Google's guidelines."
        keywords="SEO, optimization, website ranking, organic traffic, AI SEO, on-page SEO"
      />
      
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <CtaSection />
    </>
  )
}