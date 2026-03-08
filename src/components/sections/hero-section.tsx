"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Decorative Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Leading Digital Agency</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
              Transforming Ideas into <br />
              <span className="text-primary">Powerful Digital</span> <br />
              Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              ARKAA DIGITAL develops websites, HIMS systems, and custom digital platforms for businesses, hospitals, and startups.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-widest" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-sm font-bold rounded-full border-secondary text-secondary hover:bg-secondary/10 shadow-lg shadow-secondary/5 transition-all hover:-translate-y-1 uppercase tracking-widest" asChild>
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
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[85%] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-4 z-20"
              >
                <div className="flex items-center gap-2 mb-3 px-4 py-2 border-b border-slate-50">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <div className="ml-auto text-[8px] font-bold text-slate-400 uppercase tracking-widest">HIMS Interface</div>
                </div>
                <Image 
                  src="https://picsum.photos/seed/hims-pro/800/600" 
                  alt="HIMS Interface" 
                  width={800} 
                  height={600} 
                  className="rounded-2xl"
                  data-ai-hint="medical dashboard"
                />
              </motion.div>

              <motion.div 
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-8 w-[60%] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-4 z-30"
              >
                <div className="flex items-center gap-2 mb-3 px-4 py-2 border-b border-slate-50">
                  <Smartphone className="h-3 w-3 text-secondary" />
                  <div className="ml-auto text-[8px] font-bold text-slate-400 uppercase tracking-widest">Mobile App</div>
                </div>
                <Image 
                  src="https://picsum.photos/seed/mobile-pro/400/800" 
                  alt="Mobile UI" 
                  width={400} 
                  height={800} 
                  className="rounded-2xl"
                  data-ai-hint="mobile interface"
                />
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-primary/10 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}