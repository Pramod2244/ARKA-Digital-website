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
  hidden: { x: -50, opacity: 0 },
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
  hidden: { x: 50, opacity: 0 },
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
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto p-4">
        <MotionDiv
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-10">
            <MotionDiv variants={textVariants} className="space-y-6">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
                We Build <br />
                <span className="text-primary text-glow-primary">Future-Ready</span> <br />
                <span className="text-accent text-glow-accent">Digital</span> Experiences
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                Arkaa Digital is a premium agency specializing in high-performance web apps, AI automation, and future-proof digital strategy.
              </p>
            </MotionDiv>

            <MotionDiv variants={textVariants} className="flex flex-wrap items-center gap-5 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 flex items-center gap-2 group" asChild>
                <Link href="#contact">
                  Start Your Project
                  <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-full border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2 group" asChild>
                <Link href="#services">
                  View Our Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MotionDiv>
          </div>

          <MotionDiv variants={cardVariants} className="hidden lg:flex justify-end">
            <Card className="glass-card rounded-[2.5rem] w-full max-w-md glow-border overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-2xl">
              <CardContent className="p-12 space-y-8">
                <div className="space-y-6">
                    <div className="flex items-center gap-5 group">
                      <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <CheckCircle className="h-6 w-6 text-primary shadow-sm" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-headline font-bold text-xl block">Fast & Scalable</span>
                        <p className="text-sm text-muted-foreground">Built for exponential growth.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 group">
                      <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                          <CheckCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-headline font-bold text-xl block">AI-Powered UI</span>
                        <p className="text-sm text-muted-foreground">Intelligent, user-centric design.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 group">
                      <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-headline font-bold text-xl block">Secure & Robust</span>
                        <p className="text-sm text-muted-foreground">Enterprise-grade infrastructure.</p>
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