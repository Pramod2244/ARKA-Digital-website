import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { IndustriesSection } from '@/components/sections/industries-section';
import { StatsSection } from '@/components/sections/stats-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { CTASection } from '@/components/sections/cta-section';
import { FuturisticBackground } from '@/components/futuristic-background';

export default function Home() {
  return (
    <>
      <FuturisticBackground />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}