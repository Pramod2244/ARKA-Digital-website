"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../motion-provider';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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
    <section id="why-choose-us" className="relative py-16 md:py-24">
      {whyChooseUsImage && (
        <Image
          src={whyChooseUsImage.imageUrl}
          alt={whyChooseUsImage.description}
          fill
          className="absolute inset-0 w-full h-full object-cover -z-10"
          data-ai-hint={whyChooseUsImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <MotionDiv 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-6">
            <MotionDiv variants={itemVariants}>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Choose ARKA?</h2>
            </MotionDiv>
            <MotionDiv variants={itemVariants}>
              <p className="text-lg text-muted-foreground">
                We are more than just a technology provider; we are your partner in innovation and growth.
              </p>
            </MotionDiv>
            <MotionDiv variants={itemVariants} className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </MotionDiv>
          </div>

          <MotionDiv variants={itemVariants}>
            <Card className="glass-card rounded-2xl glow-border">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Our Commitment</CardTitle>
                </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground">
                  We are dedicated to turning your vision into reality with solutions that are not just effective but also elegant and future-proof. Our agile approach ensures we adapt to your needs, delivering value at every stage of the development lifecycle.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
