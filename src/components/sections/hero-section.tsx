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
  { icon: Cpu, label: "AI Automation", color: "from-primary/20 to-primary/5" },
  { icon: Cloud, label: "Secure Cloud", color: "from-accent/20 to-accent/5" },
  { icon: Code2, label: "Scalable Dev", color: "from-primary/20 to-primary/5" },
];

export function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-circuit-bg");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050506]">
      {/* 1. LAYERED BACKGROUND SYSTEM */}
      
      {/* Texture Layer */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            priority
            className="object-cover opacity-30 mix-blend-overlay grayscale"
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050506] via-[#050506]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/80" />
        </div>
      )}

      {/* Global Digital Sun Energy Core (Background Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            
            {/* Massive Radial Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.45, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[160px]" 
            />
            
            {/* Primary Energy Core */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px]" 
            />

            {/* Rotating Tech Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.1" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.05" strokeDasharray="5 15" />
              </svg>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[50vw] h-[50vw] max-w-[800px] max-h-[800px]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-15">
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" strokeDasharray="10 20" />
                <circle cx="50" cy="5" r="1" fill="hsl(var(--primary))" className="drop-shadow-[0_0_8px_hsl(var(--primary))]" />
              </svg>
            </motion.div>

            {/* Floating Energy Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`solar-particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px]"
                animate={{
                  x: [Math.cos(i) * 300, Math.cos(i + 6.28) * 300],
                  y: [Math.sin(i) * 300, Math.sin(i + 6.28) * 300],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
        </div>
      </div>

      {/* 2. CONTENT LAYER (Interactive) */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - High Impact Messaging */}
          <div className="lg:col-span-3 space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Powering Innovation</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.05] text-white text-5xl md:text-7xl lg:text-8xl font-bold">
                Future-Ready <br />
                <span className="text-primary text-glow-neon">Digital</span> <br />
                <span className="text-outline text-white/20">Architectures</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl font-medium leading-relaxed">
                Experience the radiance of high-performance engineering. We build web apps, AI agents, and cloud systems powered by the Arkaa digital core.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl transition-all bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] active:scale-95 uppercase tracking-widest" asChild>
                <Link href="#contact">
                  Start Project
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-sm font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 text-white group uppercase tracking-widest" asChild>
                <Link href="#services">
                  Explore Expertise
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: Powered Glass Cards */}
          <div className="lg:col-span-2 relative flex flex-col gap-6 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                custom={i}
                variants={glassCardVariants}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7
                  }
                }}
                whileHover={{ 
                  x: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="w-full max-w-sm group cursor-default"
              >
                <div className="relative p-7 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                  {/* Internal Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                      <service.icon className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold mb-1 opacity-60">System Core</p>
                      <h3 className="text-xl font-bold text-white tracking-tight">{service.label}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionDiv>
      </div>
      
      {/* Decorative vertical energy line */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 h-96 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden xl:block" />
    </section>
  );
}
