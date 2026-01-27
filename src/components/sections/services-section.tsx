"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, BrainCircuit, BarChart3, ShieldCheck, Palette, Search } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "End-to-end web and mobile app development using modern frameworks and agile methods.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centric design that strengthens your brand identity.",
  },
  {
    icon: ShieldCheck,
    title: "Branding",
    description: "Creating powerful brand identities that resonate with your audience.",
  },
  {
    icon: Search,
    title: "Digital Marketing & SEO",
    description: "Transform data into actionable insights for smarter decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Automation & AI",
    description: "Integrate artificial intelligence to boost productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud solutions to streamline deployment and operations.",
  },
];

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
            <Card
              key={service.title}
              className={cn(
                "text-center group transition-all duration-300 transform hover:-translate-y-2 glass-card hover:border-primary glow-border",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
