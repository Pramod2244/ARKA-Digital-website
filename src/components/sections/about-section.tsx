"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Award, Cog, Globe, Users, Package, Smile } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

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

const stats = [
  {
    icon: Users,
    value: 20,
    label: "Happy Clients",
  },
  {
    icon: Package,
    value: 50,
    label: "Projects Delivered",
  },
  {
    icon: Smile,
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%"
  },
];


function AnimatedStat({ value, label, suffix = "", icon: Icon }: { value: number, label: string, suffix?: string, icon: React.ElementType }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useSpring(0, { damping: 100, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString() + suffix;
      }
    });
    return unsubscribe;
  }, [motionValue, suffix]);
  
  return (
     <div className="text-center">
        <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
        <p ref={ref} className="font-headline text-4xl font-bold"></p>
        <p className="text-muted-foreground mt-1">{label}</p>
    </div>
  );
}


export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">About Arkaa Digital</h2>
            <p className="text-lg text-muted-foreground">
              Arkaa Digital is a forward-thinking IT services company dedicated to delivering cutting-edge digital solutions that empower businesses to grow in the modern world.
            </p>
            <p className="text-muted-foreground">
              Our name “Arka” symbolizes the Sun — a source of light, energy, and knowledge — reflecting our mission to illuminate digital paths for our clients through innovation and technology.
            </p>
          </div>
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
