"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-16 w-16 md:h-24 md:w-24 text-primary shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="18" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = i * 22.5;
      const isLong = i % 2 === 0;
      const d = isLong 
        ? "M 50 2 Q 53 15 50 28 Q 47 15 50 2 Z" 
        : "M 50 12 Q 52 20 50 28 Q 48 20 50 12 Z"; 
      return (
        <path
          key={i}
          d={d}
          transform={`rotate(${angle} 50 50)`}
        />
      );
    })}
  </svg>
);

export function HeroSection() {
  const himsImg = PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui');
  const webImg = PlaceHolderImages.find(img => img.id === 'web-interface-ui');
  const analyticsImg = PlaceHolderImages.find(img => img.id === 'analytics-ui');

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pt-32 pb-16 overflow-hidden bg-white">
      {/* Background Tech Textures */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[-10%] -right-[10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] -left-[10%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-secondary/10 rounded-full bg-white/60 backdrop-blur-md shadow-sm">
              <Zap className="h-4 w-4 text-secondary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500">Engineering Your Success</span>
            </div>
            
            <div className="flex items-start gap-6 md:gap-8">
              <LogoMark />
              <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
                Building <br />
                <span className="text-slate-800">High-Performance</span> <br />
                <span className="text-primary text-glow-orange italic">Digital Futures</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed tracking-wide">
              ARKAA DIGITAL develops websites, hospital management systems (HIMS), and custom digital platforms for global innovators.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Button size="lg" className="h-16 px-12 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" className="h-16 px-12 text-xs font-black rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Layered Bento-Mockups with Neon Glows */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-[85%] bg-white rounded-[3rem] shadow-2xl border border-secondary/10 p-6 z-20 glow-border-blue overflow-hidden"
            >
              <Image 
                src={himsImg?.imageUrl || ""} 
                alt="HIMS Dashboard" 
                width={800} 
                height={500} 
                className="rounded-2xl"
                data-ai-hint={himsImg?.imageHint}
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-48 -left-10 w-[60%] bg-white rounded-[2.5rem] shadow-2xl border border-primary/10 p-4 z-30"
            >
              <Image 
                src={webImg?.imageUrl || ""} 
                alt="Web UI" 
                width={400} 
                height={600} 
                className="rounded-2xl"
                data-ai-hint={webImg?.imageHint}
              />
            </motion.div>
          </MotionDiv>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-slate-300" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Trusted by hospitals, businesses, and startups.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-30 contrast-125">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">Nexus Health</span>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">FinFlow</span>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">EduSpark</span>
          </div>
        </div>
      </div>
    </section>
  );
}