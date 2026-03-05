"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Rocket, ArrowRight, Server, Cpu, Globe } from "lucide-react";
import { FuturisticBackground } from "../futuristic-background";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content: Bold High-Performance Messaging */}
          <div className="space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Future-Ready Digital Ecosystems
                </motion.span>
                
                <h1 className="font-headline tracking-tight leading-[1.05] text-white text-5xl md:text-6xl lg:text-7xl font-black">
                  Next-Gen <br />
                  <span className="text-primary text-glow-neon">Digital</span> <br />
                  Experiences
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-[540px] leading-relaxed font-medium">
                High-performance web applications, intelligent AI automation, and secure cloud infrastructures engineered for exponential growth.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-5">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] active:scale-95 flex items-center gap-2 bg-primary text-primary-foreground border-none group" asChild>
                <Link href="#contact">
                  Start Your Project
                  <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-sm font-bold rounded-full border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-white group" asChild>
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>

            {/* Subtle Stat/Trust Line */}
            <motion.div 
              variants={textVariants}
              className="flex items-center gap-8 pt-4"
            >
              <div className="space-y-1">
                <p className="text-white font-bold text-xl">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Projects Delivered</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="space-y-1">
                <p className="text-white font-bold text-xl">99.9%</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Uptime Guaranteed</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content: 3D Isometric Server Rack / Digital Orb Visual */}
          <div className="relative flex items-center justify-center py-10 lg:py-0">
            {/* Background Solar Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0">
               <motion.div 
                className="absolute inset-0 bg-primary/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                <motion.circle 
                  cx="100" cy="100" r="90" 
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" strokeDasharray="50 100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "100px", originY: "100px" }}
                />
                <motion.circle 
                  cx="100" cy="100" r="75" 
                  fill="none" stroke="hsl(var(--accent))" strokeWidth="0.3" strokeDasharray="10 20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "100px", originY: "100px" }}
                />
              </svg>
            </div>

            {/* Main Visual: Isometric Glowing Server Rack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[480px]"
            >
              <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-[0_0_50px_rgba(249,115,22,0.2)]">
                {/* 3D Isometric Planes */}
                <motion.path
                  d="M250 100 L450 200 L250 300 L50 200 Z"
                  fill="rgba(30, 41, 59, 0.4)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M250 140 L410 220 L250 300 L90 220 Z"
                  fill="rgba(30, 41, 59, 0.6)"
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.5"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                
                {/* Central Data Core */}
                <motion.circle
                  cx="250" cy="210" r="40"
                  fill="hsl(var(--primary))"
                  className="opacity-20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                  cx="250" cy="210" r="15"
                  fill="hsl(var(--primary))"
                  animate={{ scale: [1, 1.5, 1], filter: ["blur(4px)", "blur(8px)", "blur(4px)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating Tech Cubes / Rack Components */}
                {[...Array(3)].map((_, i) => (
                  <motion.g
                    key={`server-row-${i}`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    <path
                      d={`M${200 + i * 20} ${250 + i * 10} L${300 + i * 20} ${300 + i * 10} L${200 + i * 20} ${350 + i * 10} L${100 + i * 20} ${300 + i * 10} Z`}
                      fill="rgba(255, 255, 255, 0.05)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="0.5"
                    />
                    {/* Glowing Light Strips */}
                    <motion.rect
                      x={180 + i * 20} y={280 + i * 10} width="40" height="2"
                      fill="hsl(var(--primary))"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.g>
                ))}

                {/* Vertical Connectivity Lines */}
                <motion.path
                  d="M250 100 L250 400"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}