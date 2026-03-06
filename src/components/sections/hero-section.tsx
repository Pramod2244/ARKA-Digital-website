"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { ArrowRight, Cpu, Cloud, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#050506]">
      {/* 1. LAYERED BACKGROUND SYSTEM (The Arkaa Sun + Neural Space) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Subtle Futuristic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white" style={{ backgroundSize: '40px 40px' }} />

        {/* Dynamic Background Gradient (Navy -> Blue -> Sun) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.08)_0%,rgba(6,182,212,0.03)_40%,transparent_100%)]" />
        
        {/* Main Energy Core Glow (Right Aligned) */}
        <div className="absolute top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px]">
            {/* Outer Soft Radial Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/10 rounded-full blur-[160px]" 
            />
            
            {/* Bright Energy Core */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[25%] bg-primary/20 rounded-full blur-[80px]" 
            />

            {/* Rotating Tech Ring 01 (Outer) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-4"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 stroke-primary/40 fill-none">
                <circle cx="50" cy="50" r="48" strokeWidth="0.05" strokeDasharray="1 4" />
                <circle cx="50" cy="50" r="44" strokeWidth="0.1" strokeDasharray="8 12" />
                <path d="M50 2 L50 8" strokeWidth="0.2" className="text-primary" />
                <path d="M50 92 L50 98" strokeWidth="0.2" className="text-primary" />
              </svg>
            </motion.div>

            {/* Rotating Tech Ring 02 (Inner Counter-Rotation) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-16"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-15 stroke-primary/30 fill-none">
                <circle cx="50" cy="50" r="45" strokeWidth="0.1" strokeDasharray="2 10" />
                <circle cx="50" cy="5" r="0.5" fill="currentColor" className="text-primary" />
              </svg>
            </motion.div>
        </div>

        {/* 2. NEURAL SPACE PARTICLE SYSTEM */}
        {mounted && (
          <div className="absolute inset-0 z-0">
            {/* Blue Space Particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  background: i % 2 === 0 ? 'hsl(var(--accent))' : 'white',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.15 + 0.05,
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 15 - 7, 0],
                  opacity: [0.05, 0.2, 0.05],
                }}
                transition={{
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 10,
                }}
              />
            ))}
            
            {/* Subtle Digital Connection Trails */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className="absolute bg-accent/10"
                style={{
                  width: '1px',
                  height: Math.random() * 150 + 80,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  rotate: `${Math.random() * 360}deg`,
                  opacity: 0.03,
                }}
                animate={{
                  opacity: [0.01, 0.05, 0.01],
                  scaleY: [1, 1.15, 1],
                }}
                transition={{
                  duration: 12 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        {/* Depth Masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-90 lg:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-8">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Powering Innovation</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.05] text-white text-5xl md:text-7xl lg:text-8xl font-bold">
                Future-Ready <br />
                <span className="relative inline-block">
                  <span className="text-primary text-glow-neon relative z-10">Digital</span>
                  {/* Subtle Glow Behind the word "Digital" */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl -z-10 rounded-full scale-150" />
                </span> <br />
                Experiences
              </h1>
              
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase opacity-50">
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

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl transition-all bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:bg-primary/90 shadow-[0_5px_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 uppercase tracking-widest" asChild>
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

          {/* Right Content - Service Cards (Anchored to the Sun) */}
          <div className="lg:col-span-2 relative flex flex-col gap-6 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  },
                  opacity: { delay: 0.6 + i * 0.1, duration: 0.8 }
                }}
                whileHover={{ 
                  x: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="w-full max-w-sm group cursor-default"
              >
                <div className="relative p-7 rounded-[2.2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-primary/40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
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
