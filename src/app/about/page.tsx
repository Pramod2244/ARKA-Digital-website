import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { StatsSection } from "@/components/sections/stats-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <StatsSection />
      <WhyChooseUsSection />
      <FaqSection />
    </>
  );
}
