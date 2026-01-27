"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-provider";
import { Card, CardContent } from "../ui/card";
import { CheckCircle } from "lucide-react";

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
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920"
        >
            <source src="https://videos.pexels.com/video-files/853875/853875-hd.mp4" type="video/mp4" />
        </video>
      <div className="absolute inset-0 bg-background/70 z-0" />

      <div className="relative z-10 container mx-auto h-full flex items-center p-4">
        <MotionDiv
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <MotionDiv variants={itemVariants}>
              <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tight drop-shadow-md text-white">
                We Build Future-Ready Digital Experiences
              </h1>
            </MotionDiv>
            <MotionDiv variants={itemVariants}>
              <p className="text-lg md:text-xl text-primary-foreground/80 drop-shadow-sm max-w-xl">
                Web Apps • UI/UX • Branding • Automation • Growth
              </p>
            </MotionDiv>

            <MotionDiv variants={itemVariants} className="flex flex-wrap justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </MotionDiv>
          </div>

          <MotionDiv variants={cardVariants} className="hidden md:flex justify-center">
            <Card className="glass-card rounded-2xl w-full max-w-sm glow-border">
              <CardContent className="p-8 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">10+ Projects Delivered</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Fast & Scalable</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Premium UI Animations</span>
                </li>
              </CardContent>
            </Card>
          </MotionDiv>

        </MotionDiv>
      </div>
    </section>
  );
}
