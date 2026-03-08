"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Palette, Layers, Cpu, Hospital } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Hospital,
    title: "HIMS Development",
    description: "End-to-end Hospital Information Management Systems designed for clinics and large-scale medical institutions.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "High-performance business websites that act as your digital storefront and conversion engine.",
  },
  {
    icon: Cpu,
    title: "Custom Web Apps",
    description: "Tailored software solutions built with modern stacks to solve complex operational challenges.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design systems that balance aesthetic beauty with functional simplicity.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and automated deployment pipelines for mission-critical apps.",
  },
  {
    icon: Layers,
    title: "Brand Strategy",
    description: "Defining visionary brand narratives that bridge the gap between human values and tech.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-primary text-glow-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Cutting-edge engineering and intelligence solutions built for growth.
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
              <Card className="h-full glass-card glass-card-hover p-8 md:p-10 rounded-[2.5rem]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
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