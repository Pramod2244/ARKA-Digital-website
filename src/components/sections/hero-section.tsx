"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, Monitor, Layout } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-30" />
      
      {/* Floating Kinetic Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[5%] w-40 h-40 orange-gradient-bg opacity-[0.03] rounded-[3rem] blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-[10%] w-64 h-64 blue-gradient-bg opacity-[0.02] rounded-full blur-[80px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Engineering Your Success</span>
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
              <Button size="lg" className="h-16 px-12 text-xs font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" className="h-16 px-12 text-xs font-bold rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-xl mx-auto">
              {/* Feature Cards Mockups */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[90%] bg-white/90 backdrop-blur-xl rounded-[3.5rem] shadow-2xl border border-slate-100 p-8 z-20 overflow-hidden group"
              >
                <div className="flex items-center gap-2 mb-6 px-4 py-2 border-b border-slate-50">
                  <Monitor className="h-4 w-4 text-primary" />
                  <div className="ml-auto text-[10px] font-black text-slate-400 uppercase tracking-widest">HIMS Dashboard</div>
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image 
                    src="https://picsum.photos/seed/hims-dashboard/800/600" 
                    alt="HIMS Interface" 
                    width={800} 
                    height={600} 
                    className="rounded-3xl transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint="medical dashboard"
                  />
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-[65%] bg-white/95 backdrop-blur-2xl rounded-[3.5rem] shadow-2xl border border-slate-100 p-8 z-30"
              >
                <div className="flex items-center gap-2 mb-6 px-4 py-2 border-b border-slate-50">
                  <Layout className="h-4 w-4 text-secondary" />
                  <div className="ml-auto text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise Web</div>
                </div>
                <Image 
                  src="https://picsum.photos/seed/enterprise-web/400/800" 
                  alt="Web Layout" 
                  width={400} 
                  height={800} 
                  className="rounded-3xl"
                  data-ai-hint="modern web interface"
                />
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}