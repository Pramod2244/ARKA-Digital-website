import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { WorkSection } from '@/components/sections/work-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
