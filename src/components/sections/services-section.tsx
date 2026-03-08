"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, Hospital, Cpu, Palette, Cloud, Code2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Website Development",
    description: "Modern, high-performance sites optimized for SEO and strong conversion.",
    icon: Globe,
    image: PlaceHolderImages.find(img => img.id === 'web-interface-ui')?.imageUrl || "",
    imageHint: "website dashboard",
    size: "lg",
  },
  {
    title: "HIMS Systems",
    description: "Advanced clinical platforms for patient records and hospital management.",
    icon: Hospital,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui')?.imageUrl || "",
    imageHint: "medical dashboard",
    size: "md",
  },
  {
    title: "Custom Web Apps",
    description: "Tailored business automation and scalable software architecture.",
    icon: Cpu,
    image: PlaceHolderImages.find(img => img.id === 'analytics-ui')?.imageUrl || "",
    imageHint: "admin panel",
    size: "md",
  },
  {
    title: "UI / UX Design",
    description: "Clean, user-centric interfaces designed for engagement and accessibility.",
    icon: Palette,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-showcase')?.imageUrl || "",
    imageHint: "ui design",
    size: "lg",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.4em]"
          >
            Digital Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Digital Solutions <br />
            <span className="text-primary">We Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            We design and develop powerful digital platforms that help hospitals, businesses, and organizations grow with technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bento-card p-10 flex flex-col justify-between group ${
                service.size === "lg" ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-3xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:translate-x-2 transition-transform" asChild>
                  <Link href="#contact" className="flex items-center gap-3">
                    Start Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {service.size === "lg" && (
                <div className="mt-12 relative h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={service.imageHint}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}