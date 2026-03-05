"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Card, CardContent } from "../ui/card";
import { CheckCircle } from "lucide-react";
import { FuturisticBackground } from "../futuristic-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};


export function HeroSection() {

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center">
      <FuturisticBackground />

      <div className="relative z-10 container mx-auto p-4">
        <MotionDiv
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <MotionDiv variants={itemVariants}>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
                We Build <span className="text-primary">Future-Ready</span> Digital Experiences
              </h1>
            </MotionDiv>
            <MotionDiv variants={itemVariants}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Premium Web Apps • UI/UX Strategy • Branding • Smart Automation • Exponential Growth
              </p>
            </MotionDiv>

            <MotionDiv variants={itemVariants} className="flex flex-wrap justify-start gap-4 pt-2">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </MotionDiv>
          </div>

          <MotionDiv variants={cardVariants} className="hidden md:flex justify-end">
            <Card className="glass-card rounded-3xl w-full max-w-sm glow-border overflow-hidden border-white/5 bg-white/[0.03]">
              <CardContent className="p-10 space-y-6">
                <div className="space-y-4">
                    <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-lg">Fast & Scalable</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-lg">Premium Animations</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-lg">AI-Driven UI/UX</span>
                    </li>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

        </MotionDiv>
      </div>
    </section>
  );
}
