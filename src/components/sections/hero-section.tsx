"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, ShieldCheck } from "lucide-react";
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
  const mainDashboard = PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui');

  return (
    <section id="home" className="relative w-full pt-40 pb-32 overflow-hidden bg-[#2F3E46] pl-[70px]">
      {/* Digital Grid Overlay */}
      <div className="absolute inset-0 bg-white opacity-[0.03] pointer-events-none" />
      
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <LogoMark />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-sm mb-8">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-200">Engineering Digital Platforms</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8">
              Building Powerful <br />
              <span className="text-primary text-glow-orange italic">Digital Platforms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed mb-12">
              ARKAA DIGITAL develops websites, hospital management systems (HIMS), and custom digital platforms for businesses and healthcare organizations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
              <Button size="lg" className="h-16 px-12 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xs font-black rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full relative group"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white/10 bg-slate-900/50 aspect-video md:aspect-[16/10]">
              <Image 
                src={mainDashboard?.imageUrl || ""} 
                alt="Digital Platform Dashboard" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
                data-ai-hint="software dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 hidden lg:flex bg-slate-800/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/10 items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Enterprise Security</p>
                <p className="text-xs font-black text-white">Validated Systems</p>
              </div>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
