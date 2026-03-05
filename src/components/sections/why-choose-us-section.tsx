"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../motion-provider';
import { cn } from '@/lib/utils';

const leftVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const rightVariants = {
  hidden: { x: 40, opacity: 0 },
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
  hidden: { x: -15, opacity: 0 },
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
    <section id="why-choose-us" className="relative py-16 md:py-24 overflow-hidden">
      {/* Enhanced Background Architecture */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Background Image - Highly desaturated and subtle */}
        {whyChooseUsImage && (
          <Image
            src={whyChooseUsImage.imageUrl}
            alt={whyChooseUsImage.description}
            fill
            className="object-cover opacity-[0.08] grayscale"
            data-ai-hint={whyChooseUsImage.imageHint}
          />
        )}
        
        {/* Faint Futuristic Grid Pattern */}
        <div 
          className="absolute inset-0 bg-grid-white opacity-[0.04]" 
          style={{ backgroundSize: '50px 50px' }}
        />
        
        {/* Soft Radial Gradient Glows (Blue and Orange) */}
        {/* Orange Glow (Primary) behind the left content area */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] opacity-50" />
        
        {/* Blue Glow (Accent) behind the right commitment card */}
        <div className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[160px] opacity-40" />
        
        {/* Dark Overlays for Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: Text & Bullet Points */}
          <MotionDiv 
            className="space-y-6"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionDiv variants={itemVariants} className="space-y-3">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-white">
                Why Choose <span className="text-primary text-glow-primary">ARKA</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                We are more than just a technology provider; we are your partner in innovation and sustainable growth.
              </p>
            </MotionDiv>

            <MotionDiv variants={itemVariants} className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_10px_rgba(249,115,22,0.15)] group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
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
            {/* Decorative Glow specific to card */}
            <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full -z-10" />
            
            <Card className="glass-card rounded-[1.5rem] border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardHeader className="p-8 pb-3">
                <CardTitle className="font-headline text-2xl font-bold text-white flex items-center gap-2">
                  Our <span className="text-primary">Commitment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 relative z-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to turning your vision into reality with solutions that are not just effective but also elegant and future-proof. 
                  <br /><br />
                  Our agile approach ensures we adapt to your evolving needs, delivering measurable value at every stage.
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-white font-bold text-xl">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Transparency</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-white font-bold text-xl">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Expert Support</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-white font-bold text-xl">Agile</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Methodology</p>
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
