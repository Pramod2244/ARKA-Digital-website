
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Cloud, Megaphone, Target, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Strategy & Innovation",
    description: "Helping organizations adopt digital strategies that unlock efficiency and innovation.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Code2,
    title: "Platform Development",
    description: "Building scalable digital platforms including websites, applications, and HIMS solutions.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Providing secure and scalable cloud environments for reliable deployment and data protection.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Megaphone,
    title: "Digital Presence",
    description: "Enhancing brand visibility through modern UI/UX design and data-driven marketing.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FDF6F0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
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
                ARKAA DIGITAL builds intelligent digital platforms that help businesses operate more efficiently and grow in a technology-driven world. Our expertise includes modern websites, hospital management systems, cloud infrastructure, UI/UX design, and digital marketing.
              </p>
            </motion.div>
          </div>

          {/* Capability Cards Grid (2x2) */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-10 h-full rounded-[3rem] border-none shadow-xl shadow-slate-200/40 bg-white hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex gap-8 items-start">
                    <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#0D1B2A] mb-3 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex"
            >
              <Card className="p-12 rounded-[3.5rem] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex-1 shadow-2xl relative overflow-hidden border-none group flex flex-col pt-16">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 shadow-inner">
                    <Target className="h-8 w-8" />
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
              <Card className="p-12 rounded-[3.5rem] bg-white border border-slate-200 flex-1 shadow-2xl relative overflow-hidden group flex flex-col pt-16 border-t-8 border-t-primary">
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
