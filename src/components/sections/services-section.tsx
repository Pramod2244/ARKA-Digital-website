"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, Hospital, Cpu, Palette } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, SEO, and strong online presence.",
    icon: Globe,
    image: PlaceHolderImages.find(img => img.id === 'web-interface-ui'),
    bgColor: "bg-slate-800/20",
    accent: "text-primary",
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointment management.",
    icon: Hospital,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui'),
    bgColor: "bg-slate-800/20",
    accent: "text-secondary",
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and automation.",
    icon: Cpu,
    image: PlaceHolderImages.find(img => img.id === 'analytics-ui'),
    bgColor: "bg-slate-800/20",
    accent: "text-primary",
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement.",
    icon: Palette,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-showcase'),
    bgColor: "bg-slate-800/20",
    accent: "text-secondary",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#6B8F71] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 py-32">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em]"
          >
            Digital Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl font-black text-white tracking-tight leading-tight"
          >
            Digital Solutions <br />
            <span className="text-primary">We Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-100 font-medium max-w-2xl mx-auto"
          >
            We design and develop powerful digital platforms that help hospitals, businesses, and organizations grow with technology.
          </motion.p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className={cn(
                  "relative h-[400px] md:h-[500px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] border-8 border-white/10",
                  service.bgColor
                )}>
                  <Image
                    src={service.image?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={service.image?.imageHint}
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className={cn(
                  "w-16 h-16 rounded-3xl flex items-center justify-center bg-white/10 backdrop-blur-md shadow-xl border border-white/20",
                  service.accent
                )}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-100 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-bold text-slate-200">Scalable Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-bold text-slate-200">Enterprise Security</span>
                  </div>
                </div>

                <Button className="h-14 px-10 text-xs font-black rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all active:scale-95 uppercase tracking-[0.2em] group" asChild>
                  <Link href="#contact">
                    Get Expert Consultation
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}