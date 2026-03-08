"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { motion, useSpring } from "framer-motion";

const stats = [
  { value: 100, label: "Websites Developed", suffix: "+" },
  { value: 20, label: "Hospital Systems", suffix: "+" },
  { value: 50, label: "Happy Clients", suffix: "+" },
  { value: 8, label: "Years Experience", suffix: "+" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { damping: 100, stiffness: 100 });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-5xl md:text-6xl font-bold text-white text-glow-primary">0</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}