
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#FFF1F1] overflow-hidden">
      <div className="container mx-auto max-w-6xl rounded-[4.5rem] relative overflow-hidden shadow-2xl bg-white border border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="py-24 text-center space-y-12 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="font-headline text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Let’s Build Your <br /> Next Digital Project
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to scale your business with custom digital solutions? Connect with us today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-18 px-14 text-sm font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all group active:scale-95 uppercase tracking-[0.2em]" asChild>
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
