"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const highlights = [
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Delivering world-class digital standards for global clients.",
  },
  {
    icon: Zap,
    title: "Agile Development",
    description: "Rapid iteration and deployment for faster time-to-market.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description: "Robust, enterprise-grade security for every HIMS and web app.",
  },
  {
    icon: CheckCircle2,
    title: "Result Oriented",
    description: "Focusing on measurable ROI and business efficiency.",
  },
];

export function AboutSection() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'tech-collab');

  return (
    <section id="about" className="py-24 bg-[#A67C52] relative overflow-hidden">
      {/* Soft Glow Background Element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em]">Our Story</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight">
              Engineering the Future of <br />
              <span className="text-primary">Digital Innovation</span>
            </h2>
            <p className="text-lg text-slate-100 font-medium leading-relaxed">
              Arkaa Digital is a forward-thinking IT services company dedicated to delivering cutting-edge digital solutions that empower businesses to grow in the modern world.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 shadow-sm flex items-center justify-center text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-white uppercase tracking-wider text-sm">{item.title}</h4>
                  <p className="text-sm text-slate-200 font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10 bg-slate-800/20">
              <Image 
                src={teamImg?.imageUrl || ""} 
                alt="Arkaa Tech Collaboration" 
                width={800} 
                height={1000} 
                className="object-cover opacity-90"
                data-ai-hint={teamImg?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}