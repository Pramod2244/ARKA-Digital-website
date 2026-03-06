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
    <section id="home" className="relative w-full min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#050506]">
      {/* 1. LAYERED BACKGROUND SYSTEM (The Digital Sun Engine) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white" style={{ backgroundSize: '40px 40px' }} />

        {/* 2. THE REACTOR CORE (Right Aligned) */}
        <div className="absolute top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px]">
            
            {/* Base Glow Core */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.45, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#ff7a18]/10 rounded-full blur-[160px]" 
            />

            {/* Inner Intense Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-[#ff7a18]/20 rounded-full blur-[90px]" />

            {/* TRIPLE PHASE RINGS */}
            
            {/* Ring 01: Outer (Clockwise 40s) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 stroke-primary/40 fill-none">
                <circle cx="50" cy="50" r="48" strokeWidth="0.05" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="46" strokeWidth="0.1" strokeDasharray="10 15" />
              </svg>
            </motion.div>

            {/* Ring 02: Middle Orbit (Counter-Clockwise 30s) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-[10%]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 stroke-accent/40 fill-none">
                <circle cx="50" cy="50" r="44" strokeWidth="0.1" strokeDasharray="2 12" />
                <circle cx="50" cy="6" r="0.6" fill="currentColor" className="text-accent" />
                <circle cx="50" cy="94" r="0.6" fill="currentColor" className="text-accent" />
              </svg>
            </motion.div>

            {/* Ring 03: Inner Fast (Clockwise 20s) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-[20%]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 stroke-primary/60 fill-none">
                <path d="M50 5 L50 15" strokeWidth="0.3" />
                <path d="M50 85 L50 95" strokeWidth="0.3" />
                <path d="M5 50 L15 50" strokeWidth="0.3" />
                <path d="M85 50 L95 50" strokeWidth="0.3" />
              </svg>
            </motion.div>
        </div>

        {/* 3. NEURAL SPACE (Particles & Network) */}
        {mounted && (
          <div className="absolute inset-0 z-0">
            {/* Quantum Blue Particles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`q-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  background: i % 2 === 0 ? 'hsl(var(--accent))' : 'rgba(255,255,255,0.4)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.2 + 0.05,
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.05, 0.25, 0.05],
                }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
            
            {/* Subtle Connection Lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`net-trail-${i}`}
                className="absolute bg-accent/20"
                style={{
                  width: '1px',
                  height: Math.random() * 200 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  rotate: `${Math.random() * 360}deg`,
                  opacity: 0.04,
                }}
                animate={{
                  opacity: [0.02, 0.06, 0.02],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        {/* 4. DEPTH MASKING & ATMOSPHERE */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-95 lg:opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
        
        {/* Subtle Blue Headline Wave */}
        <div className="absolute top-[40%] left-0 w-[50%] h-[30%] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 -z-10" />
      </div>

      {/* 5. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Headline & CTA */}
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
                  {/* Intensified Glow Behind "Digital" */}
                  <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full scale-150 opacity-60" />
                </span> <br />
                Experiences
              </h1>
              
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase opacity-60">
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

          {/* Right Side: Feature Cards (Layered over the Sun) */}
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
                className="w-full max-w-sm group cursor-default z-10"
              >
                <div className="relative p-7 rounded-[2.2rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-primary/40">
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
