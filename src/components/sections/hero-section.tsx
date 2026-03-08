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
    color: "from-accent/20 to-accent/5",
    description: "High-performance apps"
  },
  { 
    icon: Cpu, 
    label: "AI Automation", 
    color: "from-primary/20 to-primary/5",
    description: "Intelligent workflows"
  },
  { 
    icon: Cloud, 
    label: "Secure Cloud", 
    color: "from-accent/20 to-accent/5",
    description: "Resilient infra"
  },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* 1. LAYERED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Subtle Light Tech Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-grid-white" style={{ backgroundSize: '40px 40px' }} />

        {/* 2. THE REACTOR CORE (Light Version) */}
        <div className="absolute top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px]">
            
            {/* Base Glow Core */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.35, 0.2] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/10 rounded-full blur-[160px]" 
            />

            {/* Inner Intense Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-accent/10 rounded-full blur-[90px]" />

            {/* TRIPLE PHASE RINGS */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 stroke-primary/30 fill-none">
                <circle cx="50" cy="50" r="48" strokeWidth="0.1" strokeDasharray="1 3" />
              </svg>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-[10%]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-15 stroke-accent/40 fill-none">
                <circle cx="50" cy="50" r="44" strokeWidth="0.1" strokeDasharray="2 12" />
              </svg>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-[20%]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 stroke-primary/50 fill-none">
                <path d="M50 5 L50 15" strokeWidth="0.5" />
                <path d="M50 85 L50 95" strokeWidth="0.5" />
              </svg>
            </motion.div>
        </div>

        {/* 3. NEURAL SPACE (Particles) */}
        {mounted && (
          <div className="absolute inset-0 z-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`q-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  background: i % 2 === 0 ? 'hsl(var(--accent))' : 'rgba(0,0,0,0.1)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.15 + 0.05,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.05, 0.2, 0.05],
                }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        )}

        {/* 4. DEPTH MASKING */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
      </div>

      {/* 5. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6">
        <MotionDiv
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:col-span-3 space-y-8">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Powering Innovation</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.05] text-foreground text-5xl md:text-7xl lg:text-8xl font-bold">
                Future-Ready <br />
                <span className="relative inline-block">
                  <span className="text-primary text-glow-primary relative z-10">Digital</span>
                  <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 rounded-full scale-150 opacity-40" />
                </span> <br />
                Experiences
              </h1>
              
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase">
                  <span>Web Apps</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>UI/UX</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Branding</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Automation</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_5px_15px_rgba(249,115,22,0.15)] uppercase tracking-widest" asChild>
                <Link href="#contact">
                  Start Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold rounded-xl border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all flex items-center gap-2 text-foreground group uppercase tracking-widest" asChild>
                <Link href="#services">
                  Explore Expertise
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          <div className="lg:col-span-2 relative flex flex-col gap-6 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                variants={textVariants}
                className="w-full max-w-sm group cursor-default z-10"
              >
                <div className="relative p-7 rounded-[2.2rem] border border-accent/10 bg-white/60 backdrop-blur-3xl shadow-[0_15px_35px_rgba(0,186,255,0.05)] overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-[0_15px_45px_rgba(0,186,255,0.12)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 transition-all duration-500">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-bold mb-1">{service.description}</p>
                      <h3 className="text-xl font-bold text-foreground tracking-tight">{service.label}</h3>
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