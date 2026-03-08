"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Hospital, Cpu, Cloud, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance, responsive websites built with the latest frameworks to drive engagement and conversion.",
  },
  {
    icon: Hospital,
    title: "Hospital Management Systems (HIMS)",
    description: "Scalable, secure, and integrated HIMS solutions designed to optimize clinical workflows and patient care.",
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Tailored digital products engineered to solve complex business logic and provide seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Aesthetic and functional interface design focused on simplicity, accessibility, and high user retention.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Modern cloud architecture and DevOps services to ensure your applications are always fast, secure, and scalable.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "End-to-end software engineering focusing on long-term maintainability and robust performance at scale.",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F7F9FC] to-[#EDF2F8] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-grid-slate pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[11px] font-black uppercase tracking-[0.3em] border border-secondary/10"
          >
            Digital Solutions We Build
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            We design and develop modern <br className="hidden md:block" />
            <span className="text-primary text-glow-orange">digital platforms</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Our expertise spans across hospitals, businesses, startups, and organizations, providing the technical backbone for their growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] bg-white/60 backdrop-blur-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:border-primary/30 transition-all duration-500 rounded-[3.5rem] overflow-hidden group p-10 flex flex-col justify-between">
                <div>
                  <CardHeader className="p-0 mb-8">
                    <div className="w-20 h-20 rounded-[2.2rem] bg-slate-50 shadow-sm flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 border border-slate-100 group-hover:border-primary/20">
                      <service.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="font-headline text-2xl font-black text-slate-900 leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-500 leading-relaxed font-medium text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                  <Link 
                    href="#contact" 
                    className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
