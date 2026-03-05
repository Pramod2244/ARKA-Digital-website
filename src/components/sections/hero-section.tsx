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

const services = [
  { 
    icon: Code2, 
    label: "Scalable Dev", 
    color: "from-primary/20 to-primary/5",
    description: "High-performance apps"
  },
  { 
    icon: Cpu, 
    label: "AI Automation", 
    color: "from-accent/20 to-accent/5",
    description: "Intelligent workflows"
  },
  { 
    icon: Cloud, 
    label: "Secure Cloud", 
    color: "from-primary/20 to-primary/5",
    description: "Resilient infra"
  },
];

export function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-circuit-bg");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 1. LAYERED BACKGROUND SYSTEM */}
      
      {/* Texture Layer */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            priority
            className="object-cover opacity-10 mix-blend-overlay grayscale"
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
      )}

      {/* Digital Sun Energy Core (Background Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[65vw] h-[65vw] max-w-[900px] max-h-[900px]">
            
            {/* Powerful Radial Glow Halo */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-[140px]" 
            />
            
            {/* Core Energy Pulse */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[25%] bg-primary/40 rounded-full blur-[80px]" 
            />

            {/* Slow Rotating Futuristic Tech Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-4"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 stroke-primary/60 fill-none">
                <circle cx="50" cy="50" r="48" strokeWidth="0.1" strokeDasharray="1 4" />
                <circle cx="50" cy="50" r="42" strokeWidth="0.2" strokeDasharray="8 12" />
              </svg>
            </motion.div>

            {/* Reverse Rotating Orbital Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-12"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 stroke-primary/40 fill-none">
                <circle cx="50" cy="50" r="45" strokeWidth="0.15" strokeDasharray="2 10" />
                <circle cx="50" cy="5" r="0.8" fill="currentColor" className="text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary))]" />
              </svg>
            </motion.div>
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Headline & CTA */}
          <div className="lg:col-span-3 space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Powering Innovation</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.05] text-white text-5xl md:text-7xl lg:text-8xl font-bold">
                Future-Ready <br />
                <span className="text-primary text-glow-neon">Digital</span> <br />
                Experiences
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl font-medium leading-relaxed">
                  Experience the radiance of high-performance engineering. We build powerful digital solutions powered by the Arkaa digital core.
                </p>
                <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] text-primary/80 uppercase">
                  <span>Web Apps</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>UI/UX</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Branding</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Automation</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Growth</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl transition-all bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:bg-primary/90 shadow-[0_10px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95 uppercase tracking-widest" asChild>
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

          {/* Right Content - Powered Service Cards */}
          <div className="lg:col-span-2 relative flex flex-col gap-6 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -12, 0],
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  },
                  opacity: { delay: 0.5 + i * 0.1, duration: 0.8 }
                }}
                whileHover={{ 
                  x: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="w-full max-w-sm group cursor-default"
              >
                <div className="relative p-7 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]">
                  {/* Subtle Card Glow Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold mb-1 opacity-60">{service.description}</p>
                      <h3 className="text-xl font-bold text-white tracking-tight">{service.label}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
