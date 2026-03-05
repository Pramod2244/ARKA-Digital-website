"use client";

import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from '../motion-provider';
import { motion } from 'framer-motion';

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
  const features = [
    'Experienced Full-Stack Developers & Cloud Experts',
    'Global Delivery Model',
    'Agile and Scalable Solutions',
    'Transparent Communication & Support',
    'Tailored Solutions for Every Business',
  ];

  return (
    <section id="why-choose-us" className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] opacity-40" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.02]" style={{ backgroundSize: '50px 50px' }} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <MotionDiv 
            className="space-y-8"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Why Choose <span className="text-primary text-glow-primary">ARKA</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                We are more than just a technology provider; we are your partner in innovation and sustainable growth.
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 transition-all duration-300">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </MotionDiv>

          {/* Right Content */}
          <MotionDiv 
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="glass-card rounded-[2.5rem] border-white/5 bg-white/[0.01] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardHeader className="p-10 pb-4">
                <CardTitle className="font-headline text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                  Our <span className="text-primary">Commitment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 relative z-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to turning your vision into reality with solutions that are not just effective but also elegant and future-proof. 
                  <br /><br />
                  Our agile approach ensures we adapt to your evolving needs, delivering measurable value at every stage.
                </p>
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Transparency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Expert Support</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">Agile</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Methodology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </motion.div>
    </section>
  );
}
