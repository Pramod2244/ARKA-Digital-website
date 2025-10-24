"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Award, Cog, Globe } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const keyValues = [
  {
    icon: Lightbulb,
    title: "Innovation that Inspires",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
  },
  {
    icon: Cog,
    title: "Technology that Transforms",
  },
  {
    icon: Globe,
    title: "Sustainability and Scalability",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="about" className="py-16 md:py-24 bg-card" ref={ref}>
      <div
        className={cn(
          "container mx-auto px-4 transition-opacity duration-1000 ease-out",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-4 transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">About ARKA Technologies</h2>
            <p className="text-lg text-muted-foreground">
              ARKA Technologies is a forward-thinking IT services company dedicated to delivering cutting-edge digital solutions that empower businesses to grow in the modern world.
            </p>
            <p className="text-muted-foreground">
              Our name “Arka” symbolizes the Sun — a source of light, energy, and knowledge — reflecting our mission to illuminate digital paths for our clients through innovation and technology.
            </p>
            <p className="text-muted-foreground">
              We specialize in custom software development, cloud solutions, AI integration, and digital transformation consulting.
            </p>
          </div>
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="font-headline text-2xl font-semibold mb-6">Our Key Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyValues.map((value, index) => (
                <Card
                  key={value.title}
                  className={cn(
                    "bg-background border-border/50 hover:shadow-lg transition-all duration-300",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms`}}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <value.icon className="h-8 w-8 text-accent" />
                    <p className="font-semibold">{value.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
