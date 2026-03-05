"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Card, CardContent } from "../ui/card";
import { CheckCircle, Rocket, ArrowRight, ShieldCheck, Cpu, Zap } from "lucide-react";
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
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[85vh] md:min-h-[750px] overflow-hidden flex items-center pt-24 pb-16">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="space-y-3 relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-[70px] -z-10" />
                <div className="absolute top-1/2 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] -z-10" />

                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary/80 block mb-1">
                  Established Excellence
                </span>
                <h1 className="font-headline tracking-tight leading-[1.1] text-white text-4xl md:text-5xl lg:text-6xl font-black">
                  <span className="relative inline-block text-white">
                    Future-Ready
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
                  </span>
                  <br />
                  <span className="text-primary text-glow-primary">Digital</span>
                  <br />
                  <span className="text-white/90">Experiences</span>
                </h1>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-[520px] leading-relaxed font-medium">
                High-performance web ecosystems, intelligent AI automation, and secure cloud infrastructures built to accelerate your business growth.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="h-14 px-8 text-sm font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] active:scale-95 flex items-center gap-2 group bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20" asChild>
                <Link href="#contact">
                  Start Your Project
                  <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold rounded-full border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2 group text-white" asChild>
                <Link href="#services">
                  View Our Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: Feature Card with Background Sun */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* The Digital Sun: Centered behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] pointer-events-none z-0 flex items-center justify-center">
              
              {/* Central Radial Glows */}
              <motion.div 
                className="absolute w-[60%] h-[60%] bg-primary/15 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-[40%] h-[40%] bg-accent/5 rounded-full blur-[80px]"
                animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Rotating Tech SVG Rings */}
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                {/* Slow External Ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "100px", originY: "100px" }}
                >
                  <circle 
                    cx="100" cy="100" r="92" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="0.4" 
                    strokeDasharray="40 80 20 60"
                    opacity="0.2"
                  />
                </motion.g>

                {/* Counter-Rotating Middle Ring */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "100px", originY: "100px" }}
                >
                  <circle 
                    cx="100" cy="100" r="78" 
                    fill="none" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="0.3" 
                    strokeDasharray="10 20"
                    opacity="0.3"
                  />
                </motion.g>

                {/* Rapid Inner Ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "100px", originY: "100px" }}
                >
                  <circle 
                    cx="100" cy="100" r="65" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="0.2" 
                    strokeDasharray="1 15"
                    opacity="0.2"
                  />
                </motion.g>
              </svg>
            </div>

            {/* Floating Feature Card */}
            <MotionDiv 
              variants={cardVariants}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                duration: 0.8 
              }}
              className="relative z-10 w-full max-w-sm"
            >
              <Card className="glass-card rounded-[2.5rem] glow-border overflow-hidden border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-2xl">
                <CardContent className="p-10 md:p-12 space-y-10">
                  <div className="space-y-10">
                      <div className="flex items-center gap-5 group">
                        <div className="p-3.5 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                            <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <span className="font-headline font-bold text-lg text-white block">Scalable Dev</span>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Web Ecosystems</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 group">
                        <div className="p-3.5 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                            <Cpu className="h-6 w-6 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <span className="font-headline font-bold text-lg text-white block">AI-Powered</span>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Automation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 group">
                        <div className="p-3.5 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <span className="font-headline font-bold text-lg text-white block">Secure Cloud</span>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Infrastructure</p>
                        </div>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
