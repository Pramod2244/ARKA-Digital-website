"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl rounded-[4.5rem] relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(255,106,0,0.3)]">
        {/* Radiating Arkaa Orange Gradient Background */}
        <div className="absolute inset-0 orange-gradient-bg -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] -z-10" />
        
        <div className="py-24 text-center space-y-12 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.3em] mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              Next-Gen Engineering
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Let’s Build Your <br /> Next Digital Project
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to scale your business with custom digital solutions? Connect with us today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-18 px-14 text-sm font-black rounded-full bg-white text-primary hover:bg-slate-50 shadow-2xl transition-all group active:scale-95 uppercase tracking-[0.2em]" asChild>
              <Link href="#contact" className="flex items-center gap-4">
                Contact ARKAA DIGITAL
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}