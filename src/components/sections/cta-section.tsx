"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl rounded-[3rem] relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 orange-gradient-bg -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -z-10" />
        
        <div className="py-20 text-center space-y-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="font-headline text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Let’s Build Your <br /> Next Digital Project
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Ready to scale your business with custom digital solutions? Connect with us today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full bg-white text-primary hover:bg-slate-50 shadow-2xl transition-all group active:scale-95" asChild>
              <Link href="#contact" className="flex items-center gap-3">
                Contact ARKAA DIGITAL
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}