
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Cloud, Target, Eye, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Strategy & Innovation",
    description: "Developing intelligent solutions that enhance productivity and unlock new growth opportunities.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Code2,
    title: "Platform Development",
    description: "Designing scalable digital platforms and specialized systems like HIMS to streamline operations.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Building secure, high-performance cloud environments for reliable deployment and data protection.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Target,
    title: "Digital Presence",
    description: "Strengthening brand identity through modern web, UI/UX, and data-driven marketing strategies.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FDF6F0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-headline text-3xl md:text-5xl font-black text-[#0D1B2A] leading-tight"
            >
              About <span className="text-primary uppercase tracking-tight">Arkaa Digital</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                ARKAA DIGITAL is a technology-focused company dedicated to building smart digital solutions. We specialize in modern websites, HIMS, and scalable cloud platforms that help organizations thrive.
              </p>
            </motion.div>
          </div>

          {/* Feature Grid - Compact 2x2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-8 h-full rounded-[2.5rem] border-none shadow-lg shadow-slate-200/40 bg-white hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex gap-6 items-start">
                    <div className={`w-12 h-12 shrink-0 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0D1B2A] mb-2 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission Row - Equal Height Redesign */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex"
            >
              <Card className="p-12 rounded-[3rem] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex-1 shadow-2xl relative overflow-hidden border-none group flex flex-col pt-16">
                {/* Top Orange Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 shadow-inner">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-6">Our Vision</h3>
                  <p className="text-lg text-slate-300 font-medium leading-relaxed">
                    To become a trusted technology partner that empowers businesses with innovative digital platforms designed for long-term growth.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex"
            >
              <Card className="p-12 rounded-[3rem] bg-white border border-slate-200 flex-1 shadow-2xl relative overflow-hidden group flex flex-col pt-16">
                {/* Top Orange Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-primary mb-10 shadow-sm">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-[#0D1B2A] mb-6">Our Mission</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    To create intelligent digital solutions—including modern websites, hospital systems, cloud infrastructure, and data-driven marketing—that help organizations operate smarter and grow faster.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Compact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Button size="lg" className="h-14 px-10 text-[10px] font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/10 transition-all hover:-translate-y-1 uppercase tracking-[0.2em] group" asChild>
              <Link href="#contact" className="flex items-center gap-4">
                Start Your Digital Journey
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
