"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Hospital, Cpu, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "High-performance, modern business websites that convert visitors into customers using the latest tech stacks.",
  },
  {
    icon: Hospital,
    title: "HIMS Development",
    description: "Robust and secure Hospital Information Management Systems designed to streamline clinical operations.",
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Tailored software solutions built with scalable architecture to solve your unique business challenges.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centric designs focusing on simplicity, aesthetic beauty, and seamless interaction for all platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture, hosting, and server management to ensure 99.9% uptime for your digital assets.",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-grid-slate pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Our Expertise</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Specialized <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We bridge the gap between complex engineering and elegant digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-white/40 shadow-xl shadow-slate-200/50 bg-white/80 backdrop-blur-md hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
                <CardHeader className="pt-10 pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="font-headline text-2xl font-black text-slate-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}