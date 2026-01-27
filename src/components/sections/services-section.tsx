"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, BrainCircuit, Search, Palette, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "End-to-end web and mobile app development using modern frameworks and agile methods.",
    details: "Our web development services cover everything from single-page applications to complex e-commerce platforms. We use technologies like React, Next.js, and Node.js to build scalable and performant solutions."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centric design that strengthens your brand identity.",
    details: "We create intuitive and visually appealing interfaces that provide a seamless user experience. Our design process involves user research, wireframing, prototyping, and user testing to ensure the final product meets user needs."
  },
  {
    icon: ShieldCheck,
    title: "Branding",
    description: "Creating powerful brand identities that resonate with your audience.",
    details: "We help you build a strong brand identity through logo design, style guides, and brand messaging. Our goal is to create a memorable brand that stands out from the competition."
  },
  {
    icon: Search,
    title: "Digital Marketing & SEO",
    description: "Transform data into actionable insights for smarter decisions.",
    details: "Our digital marketing services include SEO, content marketing, and social media management to help you reach your target audience and grow your business. We use data-driven strategies to optimize your online presence."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud solutions to streamline deployment and operations.",
    details: "Our cloud and DevOps services help you build and manage a reliable and scalable infrastructure. We offer cloud migration, CI/CD pipeline setup, and infrastructure as code to accelerate your development lifecycle."
  },
];

const FlipCard = ({ service }: { service: (typeof services)[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[320px] rounded-2xl [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
          <Card className="text-center h-full group glass-card hover:border-primary glow-border flex flex-col justify-center items-center p-6">
            <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
              <service.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <CardHeader className="p-2 items-center">
              <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Card className="h-full glass-card hover:border-primary glow-border flex flex-col justify-center items-center p-6 text-center">
            <CardHeader className="p-2 items-center">
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground text-sm">{service.details}</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};


export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-24" ref={ref}>
      <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out", isInView ? "opacity-100" : "opacity-0")}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of technology services designed to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <FlipCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
