"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Rocket, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { FuturisticBackground } from "../futuristic-background";
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

const cardVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const iconStack = [
  {
    icon: Rocket,
    label: "Scalable Dev",
    description: "High-performance web ecosystems",
    color: "hsl(var(--primary))",
  },
  {
    icon: Cpu,
    label: "AI Automation",
    description: "Intelligent agentic workflows",
    color: "hsl(var(--accent))",
  },
  {
    icon: ShieldCheck,
    label: "Secure Cloud",
    description: "Fortified digital infrastructure",
    color: "hsl(var(--primary))",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content: Minimalist Typography */}
          <div className="space-y-12">
            <MotionDiv variants={textVariants} className="relative pl-8 md:pl-12 border-l border-primary/30">
              {/* Subtle Orange Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
              
              <div className="space-y-6">
                <h1 className="font-headline tracking-tight leading-[1.1] text-white text-5xl md:text-6xl lg:text-7xl font-black">
                  Next-Gen <br />
                  <span className="text-primary/90 text-glow-neon">Digital</span> <br />
                  Experiences
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-[500px] leading-relaxed font-medium">
                  We engineer minimalist, high-performance web applications and intelligent AI solutions for forward-thinking enterprises.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-6 pl-8 md:pl-12">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-none transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 bg-primary text-primary-foreground border-none uppercase tracking-widest" asChild>
                <Link href="#contact">
                  Start Project
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-6 text-sm font-bold rounded-none hover:bg-white/5 transition-all flex items-center gap-2 text-white group uppercase tracking-widest" asChild>
                <Link href="#services">
                  Our Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: Vertical Floating Icon Stack */}
          <div className="relative flex flex-col gap-6 items-center lg:items-end pr-0 lg:pr-12">
            {iconStack.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ x: -10, scale: 1.02 }}
                className="group relative w-full max-w-[340px] bg-white/[0.02] border border-white/10 backdrop-blur-sm p-6 flex items-center gap-6 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 bg-white/[0.02] transition-colors group-hover:border-primary/50">
                  <item.icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" strokeWidth={1} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-sm font-bold text-white uppercase tracking-widest">{item.label}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{item.description}</p>
                </div>
                
                {/* Subtle Floating Animation */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
            
            {/* Minimalist Background Texture Overlay */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-white/20" fill="none">
                    <circle cx="100" cy="100" r="80" strokeWidth="0.5" strokeDasharray="1 4" />
                    <circle cx="100" cy="100" r="60" strokeWidth="0.5" strokeDasharray="1 8" />
                </svg>
            </div>
          </div>
        </MotionDiv>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-20">
        <div className="w-24 h-24 border-r border-b border-primary/40" />
      </div>
    </section>
  );
}
