import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { IndustriesSection } from '@/components/sections/industries-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <IndustriesSection />
      <TechnologiesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}