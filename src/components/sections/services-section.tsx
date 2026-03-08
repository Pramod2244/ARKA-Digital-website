"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Palette, Monitor, Cpu, Hospital } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "High-performance, modern business websites that convert visitors into customers using the latest tech stacks.",
    accent: "text-primary",
    bg: "bg-primary/5"
  },
  {
    icon: Hospital,
    title: "HIMS Development",
    description: "Robust and secure Hospital Information Management Systems designed to streamline clinical operations and patient care.",
    accent: "text-secondary",
    bg: "bg-secondary/5"
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Tailored software solutions built with scalable architecture to solve your unique business challenges.",
    accent: "text-primary",
    bg: "bg-primary/5"
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centric designs focusing on simplicity, aesthetic beauty, and seamless interaction for all platforms.",
    accent: "text-secondary",
    bg: "bg-secondary/5"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture, hosting, and server management to ensure 99.9% uptime for your digital assets.",
    accent: "text-primary",
    bg: "bg-primary/5"
  },
  {
    icon: Monitor,
    title: "Business Platforms",
    description: "End-to-end digital platforms that integrate your business processes into a unified, high-performance ecosystem.",
    accent: "text-secondary",
    bg: "bg-secondary/5"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">Our Expertise</div>
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
              <Card className="h-full border-none shadow-xl shadow-slate-200/50 bg-white hover:-translate-y-2 transition-all duration-500 rounded-[2rem] overflow-hidden group">
                <div className={`h-1.5 w-full ${service.accent.includes('primary') ? 'bg-primary' : 'bg-secondary'}`} />
                <CardHeader className="pt-8 pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-7 w-7 ${service.accent}`} />
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