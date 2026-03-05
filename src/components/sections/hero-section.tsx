"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { ArrowRight, Cpu, Cloud, Code2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const glassCardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const services = [
  { icon: Cpu, label: "AI Automation", color: "from-primary/20 to-primary/5", glow: "shadow-primary/20" },
  { icon: Cloud, label: "Secure Cloud", color: "from-accent/20 to-accent/5", glow: "shadow-accent/20" },
  { icon: Code2, label: "Scalable Dev", color: "from-primary/20 to-primary/5", glow: "shadow-primary/20" },
];

export function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-circuit-bg");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050506]">
      {/* 1. Enhanced Tech Background */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            priority
            className="object-cover opacity-60 mix-blend-screen"
            data-ai-hint={heroBg.imageHint}
          />
          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050506] via-[#050506]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/80" />
        </div>
      )}

      {/* 2. Depth Glows & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] opacity-30" />
        
        {/* Subtle Floating Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Wider for better readability */}
          <div className="lg:col-span-3 space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Advanced Engineering</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.05] text-white text-5xl md:text-7xl lg:text-8xl font-bold">
                Future-Ready <br />
                <span className="text-primary text-glow-neon">Digital</span> <br />
                Architectures
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl font-medium leading-relaxed">
                Transforming ambitious visions into high-performance web applications, AI automation agents, and resilient cloud infrastructures.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] active:scale-95 uppercase tracking-widest" asChild>
                <Link href="#contact">
                  Start Project
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-sm font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 text-white group uppercase tracking-widest" asChild>
                <Link href="#services">
                  Our Expertise
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: Refined Glass-morphism Stack */}
          <div className="lg:col-span-2 relative flex flex-col gap-5 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                custom={i}
                variants={glassCardVariants}
                whileHover={{ 
                  x: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="w-full max-w-sm group"
              >
                <div className="relative p-7 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  {/* Internal Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1 opacity-70">Core Capability</p>
                      <h3 className="text-xl font-bold text-white tracking-tight">{service.label}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Ambient Backglow for the stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          </div>
        </MotionDiv>
      </div>
      
      {/* Decorative vertical accent */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 h-80 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden xl:block" />
    </section>
  );
}
