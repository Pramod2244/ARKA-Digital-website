"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { ArrowRight, Laptop, Activity, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Next-Gen Engineering</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Transforming Ideas into <br />
              <span className="text-primary text-glow-primary">Powerful Digital</span> <br />
              Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed">
              We build HIMS systems, business websites, and custom digital platforms that help organizations grow in the modern world.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-bold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 uppercase tracking-widest" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white uppercase tracking-widest" asChild>
                <Link href="#contact">Get Free Consultation</Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square">
                {/* Mockup Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-4/5 glass-card p-4 rounded-2xl border-white/10 shadow-2xl overflow-hidden"
                >
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-3 flex items-center gap-2">
                        <Activity className="h-3 w-3" /> HIMS Dashboard
                    </p>
                    <Image 
                        src="https://picsum.photos/seed/hims/600/400" 
                        alt="HIMS Dashboard" 
                        width={600} 
                        height={400} 
                        className="rounded-lg opacity-80"
                        data-ai-hint="medical dashboard"
                    />
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-4/5 glass-card p-4 rounded-2xl border-white/10 shadow-2xl overflow-hidden"
                >
                    <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-3 flex items-center gap-2">
                        <Building2 className="h-3 w-3" /> Enterprise Portal
                    </p>
                    <Image 
                        src="https://picsum.photos/seed/enterprise/600/400" 
                        alt="Enterprise Website" 
                        width={600} 
                        height={400} 
                        className="rounded-lg opacity-80"
                        data-ai-hint="business office"
                    />
                </motion.div>

                {/* Arkaa Reactor Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px] -z-10" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}