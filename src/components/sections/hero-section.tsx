"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-12 w-12 text-primary mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
    <section id="home" className="relative w-full min-h-screen flex flex-col pt-32 pb-16 overflow-hidden">
      {/* Ergonomic Atmospheric Background */}
      <div className="absolute inset-0 bg-[#F7F8FA] -z-20" />
      <div 
        className="absolute inset-0 -z-10 opacity-60" 
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, #FFF4EC 0%, #F7F8FA 100%)' 
        }} 
      />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.015] pointer-events-none" />
      
      {/* Soft Kinetic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center justify-center">
        <div className="relative max-w-4xl w-full text-center">
          
          {/* Orbital Floating UI Cards (Desktop) */}
          <div className="hidden lg:block">
            {/* HIMS Card - Top Left */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0, x: -100, y: -50 }}
              animate={{ opacity: 1, x: -280, y: -180 }}
              className="absolute z-0 w-72 bg-white rounded-[2rem] shadow-2xl border border-secondary/10 p-4 glow-border-blue overflow-hidden"
            >
              <div className="bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100 aspect-video relative">
                <Image 
                  src={himsImg?.imageUrl || ""} 
                  alt="HIMS Interface" 
                  fill 
                  className="object-cover"
                  data-ai-hint="medical dashboard"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Clinical Core v2.4</span>
              </div>
            </motion.div>

            {/* Analytics Card - Top Right */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              initial={{ opacity: 0, x: 100, y: -50 }}
              animate={{ opacity: 1, x: 280, y: -120 }}
              className="absolute z-0 w-64 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 overflow-hidden"
            >
              <div className="bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100 aspect-video relative">
                <Image 
                  src={analyticsImg?.imageUrl || ""} 
                  alt="Analytics Dashboard" 
                  fill 
                  className="object-cover"
                  data-ai-hint="analytics dashboard"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Live Traffic Data</span>
              </div>
            </motion.div>

            {/* Web Platform - Bottom Centerish */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, x: 180, y: 140 }}
              className="absolute z-0 w-80 bg-white rounded-[2.5rem] shadow-2xl border border-primary/10 p-4 glow-border-orange overflow-hidden"
            >
              <div className="bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-100 aspect-[4/3] relative">
                <Image 
                  src={webImg?.imageUrl || ""} 
                  alt="Web Management" 
                  fill 
                  className="object-cover"
                  data-ai-hint="website dashboard"
                />
              </div>
            </motion.div>
          </div>

          {/* Center Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <LogoMark />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/10 rounded-full bg-white/80 backdrop-blur-md shadow-sm mb-8">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500">Next-Gen Engineering</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 mb-8">
              Building Powerful <br />
              <span className="text-primary text-glow-orange italic">Digital Platforms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed tracking-wide mb-12">
              ARKAA DIGITAL develops websites, hospital management systems (HIMS), and custom digital platforms for businesses and healthcare organizations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Button size="lg" className="h-16 px-12 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xs font-black rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-md text-slate-900 hover:bg-white transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Trusted By Strip */}
      <div className="container mx-auto px-6 mt-12 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto pt-12 border-t border-slate-200/30 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-slate-300" />
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
              Reliable Engineering for Global Leaders
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
