"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, TrendingUp, Palette, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Web Engineering",
    description: "Build fast, secure, and scalable web applications using modern technologies to drive your business growth.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Create intuitive and visually engaging user interfaces that deliver seamless, world-class digital experiences.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Develop strong brand identities that communicate your vision and make your business stand out in the market.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description: "Increase online visibility with data-driven marketing strategies and expert search engine optimization.",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "Implement secure cloud infrastructure and DevOps automation for reliable, high-performance digital systems.",
  },
  {
    icon: Cpu,
    title: "AI Intelligence",
    description: "Leverage cutting-edge AI to automate complex workflows and drive intelligent business decision making.",
  },
];

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-grid-white" 
          style={{ backgroundSize: '40px 40px' }} 
        />
        
        {/* Radial Energy Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-20" />
        
        {/* Ambient Particle System - Deferred to avoid hydration mismatch */}
        {mounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={`service-particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Transition Masking */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Our Expertise</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Our <span className="text-primary text-glow-primary">Specializations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive suite of high-performance technology services designed to scale your business into the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col p-8 md:p-10 rounded-[2.5rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                    <service.icon className="h-8 w-8 text-primary relative z-10 filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                  </div>
                </div>

                <CardHeader className="p-0 mb-4 relative z-10">
                  <CardTitle className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 relative z-10 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-base min-h-[4.5rem]">
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
