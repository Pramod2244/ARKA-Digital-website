"use client";

import { useRef, useEffect } from "react";
import { useInView } from "@/hooks/use-in-view";
import { motion, useSpring } from "framer-motion";

const stats = [
  { value: 100, label: "Projects Completed", suffix: "+" },
  { value: 50, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 20, label: "Technologies Used", suffix: "+" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { damping: 50, stiffness: 50 });

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

  return <span ref={ref} className="text-5xl md:text-7xl font-black text-white leading-none">0</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 blue-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 opacity-20 bg-grid-white pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-6">
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="h-1.5 w-16 bg-white/40 mx-auto rounded-full" />
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}