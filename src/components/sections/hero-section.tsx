
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
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { x: -50, opacity: 0 },
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
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const services = [
  { icon: Cpu, label: "AI & Automation", color: "from-orange-500/20 to-orange-500/5" },
  { icon: Cloud, label: "Secure Cloud", color: "from-blue-500/20 to-blue-500/5" },
  { icon: Code2, label: "Scalable Dev", color: "from-orange-500/20 to-orange-500/5" },
];

export function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-circuit-bg");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-black">
      {/* 1. High-Resolution Circuit Board Background */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            priority
            className="object-cover opacity-40 mix-blend-luminosity"
            data-ai-hint={heroBg.imageHint}
          />
          {/* Dark Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
      )}

      {/* 2. Neon Orange Traces Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.02]" style={{ backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 left-1/4 w-px h-64 bg-primary/40 blur-sm animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-px bg-primary/40 blur-sm animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <MotionDiv variants={textVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Future-Ready</span>
              </div>
              
              <h1 className="font-headline tracking-tight leading-[1.1] text-white text-5xl md:text-6xl lg:text-7xl font-bold">
                We Build <br />
                <span className="text-primary text-glow-neon">Digital</span> <br />
                Experiences
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-lg font-medium leading-relaxed">
                Transforming complex challenges into scalable software, intelligent AI automation, and secure cloud infrastructure.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="h-14 px-8 text-sm font-bold rounded-xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] active:scale-95 uppercase tracking-widest" asChild>
                <Link href="#contact">
                  Start Project
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-6 text-sm font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 text-white group uppercase tracking-widest" asChild>
                <Link href="#services">
                  Our Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {/* Right Content: Floating Glass-morphism Cards */}
          <div className="relative flex flex-col gap-6 items-center lg:items-end">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                custom={i}
                variants={glassCardVariants}
                animate={{
                    y: [0, -10, 0],
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }
                }}
                className="w-full max-w-xs group"
              >
                <div className="relative p-6 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.06]">
                  {/* Subtle Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-5">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">Service</p>
                      <h3 className="text-lg font-bold text-white tracking-tight">{service.label}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Background Ambient Glow for the stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          </div>
        </MotionDiv>
      </div>
      
      {/* Sidebar Accent - Decorative Vertical line */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden xl:block" />
    </section>
  );
}
