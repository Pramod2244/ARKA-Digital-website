
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const dashboardImg = PlaceHolderImages.find(img => img.id === 'hero-software-platform');
  const secondaryImg = PlaceHolderImages.find(img => img.id === 'analytics-core-v2');

  const HeroLogoIcon = () => (
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

  return (
    <section id="home" className="relative w-full pt-48 pb-32 overflow-hidden bg-[#F6F7F9] pl-[70px]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Engineering Digital Solutions
            </div>
            
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 mb-8">
              We Build Smart <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#FF8A30]">Digital</span> Platforms
            </h1>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
              ARKAA DIGITAL develops modern websites, hospital management systems, and custom digital platforms that help businesses and healthcare organizations operate efficiently in the digital world.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button size="lg" className="h-16 px-10 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xs font-black rounded-full border-2 border-[#3B82F6] bg-transparent text-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all hover:-translate-y-1 uppercase tracking-[0.2em] group" asChild>
                <Link href="#services" className="flex items-center gap-3">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[90%] h-[450px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden z-20"
            >
              <div className="h-10 bg-white/60 flex items-center px-6 gap-2 border-b border-white/40">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              </div>
              <div className="relative w-full h-full">
                {dashboardImg?.imageUrl && (
                  <Image 
                    src={dashboardImg.imageUrl} 
                    alt="Product Interface Dashboard" 
                    fill 
                    className="object-cover opacity-90"
                    data-ai-hint={dashboardImg?.imageHint}
                  />
                )}
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 w-[70%] h-[350px] bg-white/20 backdrop-blur-2xl rounded-[2.5rem] border border-white/30 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] overflow-hidden z-30"
            >
              <div className="h-10 bg-white/40 flex items-center px-6 gap-2 border-b border-white/30">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300/50" />
              </div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#3B82F6]/10 to-transparent">
                {secondaryImg?.imageUrl && (
                  <Image 
                    src={secondaryImg.imageUrl} 
                    alt="Analytics Visuals" 
                    fill 
                    className="object-cover opacity-80"
                    data-ai-hint={secondaryImg?.imageHint}
                  />
                )}
              </div>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
