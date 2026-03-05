"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { ArrowRight } from "lucide-react";
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

const liquidShapeVariants = {
  animate: {
    scale: [1, 1.1, 0.9, 1],
    rotate: [0, 90, 180, 360],
    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#0a0a0b]">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content: Bold Typography & Subtext */}
          <div className="space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-block px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5 mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Digital Agency</span>
              </div>
              
              <h1 className="font-headline tracking-tighter leading-[0.95] text-white text-6xl md:text-7xl lg:text-9xl font-black">
                ARKA <br />
                <span className="text-primary text-glow-neon">DIGITAL</span>
              </h1>
              
              <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-muted-foreground/60 font-bold">
                Web Apps <span className="text-primary/40 mx-2">•</span> UI/UX <span className="text-primary/40 mx-2">•</span> Branding
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-8">
              <Button size="lg" className="h-16 px-10 text-xs font-bold rounded-none transition-all bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] active:scale-95 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-16 px-6 text-xs font-bold rounded-none hover:bg-white/5 transition-all flex items-center gap-3 text-white group uppercase tracking-[0.2em]" asChild>
                <Link href="#services">
                  Portfolio
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: 3D Abstract Liquid Metal Shape */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              variants={liquidShapeVariants}
              animate="animate"
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] shadow-[inset_0_0_100px_rgba(0,0,0,0.8),0_0_120px_rgba(249,115,22,0.15)] overflow-hidden"
              style={{
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              {/* Internal Glowing Core */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[80px]"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Highlight Lines simulating liquid surface */}
              <svg viewBox="0 0 450 450" className="absolute inset-0 w-full h-full opacity-30 stroke-primary/40 fill-none">
                <motion.path
                  d="M100,100 Q225,50 350,100 T450,300"
                  strokeWidth="1"
                  animate={{ d: ["M100,100 Q225,50 350,100 T450,300", "M100,150 Q225,250 350,150 T450,100", "M100,100 Q225,50 350,100 T450,300"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </motion.div>
            
            {/* Ambient Background Glow for the shape */}
            <div className="absolute -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-40" />
          </div>
        </MotionDiv>
      </div>
      
      {/* Visual Accent - Sidebar vertical line */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden xl:block" />
    </section>
  );
}
