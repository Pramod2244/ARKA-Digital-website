"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, Monitor, Layout, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const himsImg = PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui');
  const webImg = PlaceHolderImages.find(img => img.id === 'web-interface-ui');
  const analyticsImg = PlaceHolderImages.find(img => img.id === 'analytics-ui');

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FFF4EC] to-[#FFE6D6]">
      {/* Abstract Background Shapes - Soft Glows */}
      <div className="absolute top-[-10%] -right-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] -left-[10%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none opacity-40" />
      
      {/* Subtle Digital Grid Overlay */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none" />

      {/* Floating Kinetic Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[5%] w-40 h-40 orange-gradient-bg opacity-[0.05] rounded-[3rem] blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full bg-white/60 backdrop-blur-md shadow-sm">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Engineering Your Success</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
              Building Powerful <br />
              <span className="text-primary text-glow-orange">Digital Solutions</span> <br />
              for Every Industry
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              ARKAA DIGITAL develops websites, hospital management systems (HIMS), and custom digital platforms for hospitals, businesses, and startups.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Button size="lg" className="h-16 px-12 text-xs font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" className="h-16 px-12 text-xs font-bold rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
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
            {/* Layered UI Mockups */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-[85%] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 z-20 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">HIMS_DASHBOARD_V2</div>
              </div>
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
              className="absolute top-48 -left-10 w-[60%] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 z-30"
            >
              <div className="flex items-center gap-2 mb-3 px-2">
                <Layout className="h-3 w-3 text-secondary" />
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">WEB_INTERFACE</span>
              </div>
              <Image 
                src={webImg?.imageUrl || ""} 
                alt="Web UI" 
                width={400} 
                height={600} 
                className="rounded-xl"
                data-ai-hint={webImg?.imageHint}
              />
            </motion.div>

            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 right-10 w-[50%] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 z-40"
            >
              <div className="flex items-center gap-2 mb-3 px-2">
                <BarChart3 className="h-3 w-3 text-primary" />
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">ANALYTICS_CORE</span>
              </div>
              <Image 
                src={analyticsImg?.imageUrl || ""} 
                alt="Analytics UI" 
                width={400} 
                height={300} 
                className="rounded-xl"
                data-ai-hint={analyticsImg?.imageHint}
              />
            </motion.div>
          </MotionDiv>
        </div>
      </div>

      {/* Trust Line Section */}
      <div className="container mx-auto px-6 mt-12 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-slate-400" />
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
              Trusted by hospitals, businesses, and startups.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-50 contrast-125">
            {/* Simplified Client Indicators */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest">Nexus Health</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest">FinFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest">EduSpark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}