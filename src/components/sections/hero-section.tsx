"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const mainDashboard = PlaceHolderImages.find(img => img.id === 'hero-software-platform');

  return (
    <section id="home" className="relative w-full pt-48 pb-32 overflow-hidden bg-[#F7F8FA] pl-[70px]">
      {/* Soft Ambient Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFE9DC] rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8F0FF] rounded-full blur-[140px] opacity-40 pointer-events-none" />
      
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full bg-white/50 backdrop-blur-md shadow-sm mb-8">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500">Engineering Digital Solutions</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 mb-8">
              We Build Smart <br />
              <span className="text-primary italic">Digital Platforms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-12">
              ARKAA DIGITAL develops modern websites, hospital management systems, and custom digital platforms that help businesses and healthcare organizations operate efficiently in the digital world.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
              <Button size="lg" className="h-16 px-12 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xs font-black rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-md text-slate-900 hover:bg-slate-100 transition-all hover:-translate-y-1 uppercase tracking-[0.3em]" asChild>
                <Link href="#services">Explore Our Services</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full relative group"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[12px] border-white bg-white/50 aspect-video md:aspect-[16/10]">
              <Image 
                src={mainDashboard?.imageUrl || ""} 
                alt="High Performance Digital Platform Dashboard" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
                data-ai-hint={mainDashboard?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 hidden lg:flex bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-slate-100 items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Enterprise Security</p>
                <p className="text-xs font-black text-slate-900">Validated Systems</p>
              </div>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}