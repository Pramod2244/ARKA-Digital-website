"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { Briefcase, Smile, Globe } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";


const stats = [
    {
        icon: Briefcase,
        value: 100,
        label: "Projects Completed",
        suffix: "+",
    },
    {
        icon: Smile,
        value: 50,
        label: "Happy Clients",
        suffix: "+",
    },
    {
        icon: Globe,
        value: 10,
        label: "Countries Served",
        suffix: "+",
    },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  
  return (
    <section className="py-16 md:py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col items-center p-6 rounded-lg transition-all duration-1000 ease-out",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                    <stat.icon className="h-12 w-12 text-primary mb-4" />
                    <div className="font-headline text-5xl font-bold text-secondary-foreground">
                        <AnimatedCounter target={stat.value} />
                        {stat.suffix}
                    </div>
                    <p className="text-lg text-secondary-foreground/80 mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
