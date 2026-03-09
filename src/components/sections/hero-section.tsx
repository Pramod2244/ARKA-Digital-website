
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

  return (
    <section id="home" className="relative w-full pt-48 pb-32 overflow-hidden bg-gradient-to-br from-[#ff7a18] to-[#ff4d00]">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white mb-8">
              We Build Smart <br />
              <span className="opacity-90">Digital Platforms</span>
            </h1>
            
            <p className="text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-lg">
              ARKAA DIGITAL develops modern websites, hospital management systems, and custom digital platforms that help businesses and healthcare organizations operate efficiently.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button size="lg" className="h-16 px-10 text-xs font-black rounded-full bg-white text-[#ff4d00] hover:bg-slate-50 shadow-2xl shadow-black/10 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xs font-black rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 transition-all hover:-translate-y-1 uppercase tracking-[0.2em] group" asChild>
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
              className="absolute top-0 right-0 w-[95%] h-[450px] bg-white/20 backdrop-blur-xl rounded-[2.5rem] border border-white/30 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden z-20"
            >
              <div className="h-10 bg-white/30 flex items-center px-6 gap-2 border-b border-white/20">
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
              className="absolute bottom-10 left-0 w-[60%] h-[300px] bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.2)] overflow-hidden z-30 flex items-center justify-center"
            >
               <div className="p-8 text-center">
                  <p className="text-white font-black text-2xl uppercase tracking-widest mb-2">High Tech</p>
                  <div className="h-1 w-12 bg-white mx-auto rounded-full" />
               </div>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
