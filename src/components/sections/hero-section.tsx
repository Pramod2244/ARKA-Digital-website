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
    <section id="home" className="relative w-full min-h-screen flex flex-col pt-32 pb-16 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0 bg-white -z-20" />
      <div 
        className="absolute inset-0 -z-10" 
        style={{ 
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF3E8 50%, #FFE8D9 100%)' 
        }} 
      />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none" />
      
      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] -right-[10%] w-[900px] h-[900px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-40" />
      <div className="absolute bottom-[-10%] -left-[10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none opacity-30" />

      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/10 rounded-full bg-white/40 backdrop-blur-md shadow-sm">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500">Engineering Your Success</span>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <LogoMark />
                 <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary italic">Innovation Studio</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
                Building Powerful <br />
                <span className="text-primary text-glow-orange italic">Digital Platforms</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed tracking-wide">
              ARKAA DIGITAL develops websites, hospital management systems (HIMS), and custom digital platforms for businesses and healthcare organizations.
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

          <div className="relative h-[650px] hidden lg:flex items-center justify-center">
            {/* Layered Floating UI Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-full"
            >
              {/* Analytics Dashboard (Back Layer) */}
              <motion.div 
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-64 right-10 w-[65%] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-4 z-10 overflow-hidden"
              >
                <div className="bg-slate-50 rounded-xl overflow-hidden">
                  <Image 
                    src={analyticsImg?.imageUrl || ""} 
                    alt="Business Analytics Panel" 
                    width={500} 
                    height={300} 
                    className="rounded-2xl"
                    data-ai-hint="analytics dashboard"
                  />
                </div>
              </motion.div>

              {/* HIMS Dashboard (Middle Layer) */}
              <motion.div 
                animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-0 w-[80%] bg-white rounded-[3rem] shadow-2xl border border-secondary/10 p-6 z-20 glow-border-blue overflow-hidden"
              >
                <div className="bg-slate-50 rounded-2xl overflow-hidden">
                  <Image 
                    src={himsImg?.imageUrl || ""} 
                    alt="Hospital Management Interface" 
                    width={800} 
                    height={500} 
                    className="rounded-2xl"
                    data-ai-hint="medical dashboard"
                  />
                </div>
              </motion.div>

              {/* Web Admin Interface (Front Layer) */}
              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-48 -left-10 w-[60%] bg-white rounded-[2.5rem] shadow-2xl border border-primary/10 p-5 z-30 glow-border-orange"
              >
                <div className="bg-slate-50 rounded-2xl overflow-hidden">
                  <Image 
                    src={webImg?.imageUrl || ""} 
                    alt="Website Admin Dashboard" 
                    width={400} 
                    height={600} 
                    className="rounded-2xl"
                    data-ai-hint="website dashboard"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8">
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