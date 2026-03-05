"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../motion-provider';
import { cn } from '@/lib/utils';

const leftVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const rightVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUsSection() {
  const whyChooseUsImage = PlaceHolderImages.find(img => img.id === 'why-choose-us');

  const features = [
    'Experienced Full-Stack Developers & Cloud Experts',
    'Global Delivery Model',
    'Agile and Scalable Solutions',
    'Transparent Communication & Support',
    'Tailored Solutions for Every Business',
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      {whyChooseUsImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={whyChooseUsImage.imageUrl}
            alt={whyChooseUsImage.description}
            fill
            className="object-cover opacity-30"
            data-ai-hint={whyChooseUsImage.imageHint}
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Text & Bullet Points */}
          <MotionDiv 
            className="space-y-8"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionDiv variants={itemVariants} className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">
                Why Choose <span className="text-primary text-glow-primary">ARKA</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                We are more than just a technology provider; we are your partner in innovation and sustainable growth.
              </p>
            </MotionDiv>

            <MotionDiv variants={itemVariants} className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </MotionDiv>
          </MotionDiv>

          {/* Right Content: Commitment Card */}
          <MotionDiv 
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Decorative Glow behind card */}
            <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full -z-10" />
            
            <Card className="glass-card rounded-[2rem] border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
              {/* Animated Border/Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardHeader className="p-10 pb-4">
                <CardTitle className="font-headline text-3xl font-bold text-white flex items-center gap-3">
                  Our <span className="text-primary">Commitment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 relative z-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to turning your vision into reality with solutions that are not just effective but also elegant and future-proof. 
                  <br /><br />
                  Our agile approach ensures we adapt to your evolving needs, delivering measurable value at every stage of the development lifecycle. We believe in transparency, technical excellence, and building relationships that last.
                </p>
                
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-white font-bold text-2xl">100%</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Transparency</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-2xl">24/7</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Expert Support</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-2xl">Agile</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Methodology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
