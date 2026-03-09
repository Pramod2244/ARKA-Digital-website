import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { IndustriesSection } from '@/components/sections/industries-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
