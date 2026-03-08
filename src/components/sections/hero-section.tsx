"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Dynamic Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Floating Orange Gradient Circles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 orange-gradient-bg opacity-[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 right-40 w-80 h-80 blue-gradient-bg opacity-[0.03] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
              <Zap className="h-3 w-3 text-primary animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-primary">Engineering Your Success</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
              Transforming Ideas into <br />
              <span className="text-primary text-glow-orange">Powerful Digital</span> <br />
              Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              ARKAA DIGITAL develops websites, HIMS systems, and custom digital platforms for businesses, hospitals, and startups.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Button size="lg" className="h-16 px-12 text-xs font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xs font-bold rounded-full border-secondary text-secondary hover:bg-secondary/10 shadow-xl shadow-secondary/5 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-xl mx-auto">
              {/* Feature Cards Mockups */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[90%] bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/50 p-5 z-20 overflow-hidden group"
              >
                <div className="flex items-center gap-2 mb-4 px-4 py-2 border-b border-slate-50">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <div className="ml-auto text-[8px] font-black text-slate-400 uppercase tracking-widest">HIMS Portal</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image 
                    src="https://picsum.photos/seed/hims-reactor/800/600" 
                    alt="HIMS Interface" 
                    width={800} 
                    height={600} 
                    className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint="medical dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-[65%] bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/50 p-5 z-30"
              >
                <div className="flex items-center gap-2 mb-4 px-4 py-2 border-b border-slate-50">
                  <Smartphone className="h-3 w-3 text-secondary" />
                  <div className="ml-auto text-[8px] font-black text-slate-400 uppercase tracking-widest">Mobile Engine</div>
                </div>
                <Image 
                  src="https://picsum.photos/seed/mobile-reactor/400/800" 
                  alt="Mobile UI" 
                  width={400} 
                  height={800} 
                  className="rounded-2xl"
                  data-ai-hint="mobile interface"
                />
              </motion.div>

              {/* Reactor Rings Visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-primary/10 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-dotted border-secondary/10 rounded-full -z-10 animate-[spin_40s_linear_infinite_reverse]" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}