"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, TrendingUp, Palette, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Web Engineering",
    description: "Architecting ultra-high-performance, secure, and infinitely scalable web ecosystems with modern frameworks and resilient digital infrastructure.",
  },
  {
    icon: Cpu,
    title: "AI Intelligence",
    description: "Deploying proprietary neural architectures to automate mission-critical workflows and unlock exponential business value.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Synthesizing intuitive UX with cutting-edge visual aesthetics for world-class digital interactions and experiences.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Defining visionary brand narratives that bridge the gap between human values and technological progress globally.",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "Automated, global-scale infrastructure with zero-latency deployment cycles and robust multi-cloud redundancy for stability.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description: "Strategic search optimization and high-impact marketing funnels powered by real-time data analytics and growth algorithms.",
  },
];

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white" style={{ backgroundSize: '60px 60px' }} />
        
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] opacity-15" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md mb-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Technical Core</span>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Our <span className="text-primary text-glow-primary">Specializations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            High-performance engineering and future-ready intelligence solutions built to scale the Arkaa Digital core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <Card className="h-full glass-card glass-card-hover flex flex-col p-8 md:p-10 rounded-[2.5rem]">
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <service.icon className="h-8 w-8 text-accent transition-colors duration-500" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-4 relative z-10">
                  <CardTitle className="font-headline text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 relative z-10 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}