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
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-[#050506]">
      {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-grid-white" 
          style={{ backgroundSize: '60px 60px' }} 
        />
        
        {/* Radial Energy Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] opacity-15" />
        
        {/* Ambient Particle System */}
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={`service-particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Transition Masking */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md mb-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Technical Core</span>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Our <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-glow-primary">Specializations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            High-performance engineering and future-ready intelligence solutions built to scale the Arkaa Digital core.
          </p>
        </div>

        {/* SYMMETRICAL 3x2 GRID */}
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
              <Card className="h-full glass-card border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col p-8 md:p-10 rounded-[2.5rem]">
                {/* Interactive Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-2xl">
                    <service.icon className="h-8 w-8 text-white filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:text-primary transition-colors duration-500" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-4 relative z-10">
                  <CardTitle className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 relative z-10 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </CardContent>

                {/* Decorative Tech Detail */}
                <div className="absolute bottom-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="w-4 h-1.5 rounded-full bg-primary/40" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}