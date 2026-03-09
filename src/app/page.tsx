
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { HimsSection } from '@/components/sections/hims-section';
import { IndustriesSection } from '@/components/sections/industries-section';
import { AboutSection } from '@/components/sections/about-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesSection />
      <HimsSection />
      <IndustriesSection />
      <AboutSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
