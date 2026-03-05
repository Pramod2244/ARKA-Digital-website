"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Card, CardContent } from "../ui/card";
import { CheckCircle, Rocket, ArrowRight } from "lucide-react";
import { FuturisticBackground } from "../futuristic-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[75vh] md:min-h-[650px] overflow-hidden flex items-center pt-20 pb-8">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 max-w-2xl">
            <MotionDiv variants={textVariants} className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/40 block mb-1">
                  We Build
                </span>
                <h1 className="font-headline tracking-tight leading-[1.2] text-white text-3xl md:text-4xl lg:text-5xl font-black">
                  <span className="relative inline-block text-primary text-glow-primary">
                    Future-Ready
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[50px] -z-10 rounded-full" />
                  </span>
                  <br />
                  <span className="relative inline-block text-accent text-glow-accent mt-1">
                    Digital
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/20 blur-[40px] -z-10 rounded-full" />
                  </span>
                  <span className="block mt-1 text-2xl md:text-3xl lg:text-4xl font-bold text-white/90">
                    Experiences
                  </span>
                </h1>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed font-medium">
                Arkaa Digital is a premium agency specializing in high-performance web apps, AI automation, and future-proof digital strategy.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" className="h-12 px-6 text-base font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 flex items-center gap-2 group" asChild>
                <Link href="#contact">
                  Start Your Project
                  <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base font-bold rounded-full border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2 group" asChild>
                <Link href="#services">
                  View Our Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          <MotionDiv variants={cardVariants} className="hidden lg:flex justify-end relative">
            <Card className="glass-card rounded-[2rem] w-full max-w-sm glow-border overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur-3xl relative z-10">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-5">
                    <div className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <CheckCircle className="h-5 w-5 text-primary shadow-sm" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-headline font-bold text-lg block">Fast & Scalable</span>
                        <p className="text-xs text-muted-foreground">Built for exponential growth.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                          <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-headline font-bold text-lg block">AI-Powered UI</span>
                        <p className="text-xs text-muted-foreground">Intelligent, user-centric design.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-headline font-bold text-lg block">Secure & Robust</span>
                        <p className="text-xs text-muted-foreground">Enterprise-grade infrastructure.</p>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}