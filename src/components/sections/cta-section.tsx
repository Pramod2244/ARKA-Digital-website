"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl overflow-hidden rounded-[3rem] relative">
        <div className="absolute inset-0 orange-gradient-bg -z-10" />
        <div className="absolute inset-0 bg-grid-white opacity-20 -z-10" />
        
        <div className="py-20 text-center space-y-8 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Let’s Build Your <br /> Digital Future
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl bg-white text-primary hover:bg-white/90 shadow-2xl transition-all" asChild>
              <Link href="#contact">Contact Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}