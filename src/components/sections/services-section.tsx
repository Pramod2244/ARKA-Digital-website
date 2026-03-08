
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
    image: PlaceHolderImages.find(img => img.id === 'web-dev-v2'),
    bgColor: "bg-white/50",
    accent: "text-primary",
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointment management.",
    icon: Hospital,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-v2'),
    bgColor: "bg-white/50",
    accent: "text-[#3B82F6]",
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and automation.",
    icon: Cpu,
    image: PlaceHolderImages.find(img => img.id === 'analytics-core-v2'),
    bgColor: "bg-white/50",
    accent: "text-primary",
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement.",
    icon: Palette,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-v2'),
    bgColor: "bg-white/50",
    accent: "text-[#3B82F6]",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#EEF3F8] overflow-hidden pl-[70px]">
      <div className="container mx-auto max-w-7xl px-6 py-32">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]"
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
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
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
              <div className="w-full lg:w-1/2 group">
                <div className={cn(
                  "relative h-[400px] md:h-[500px] w-full rounded-[3.5rem] overflow-hidden shadow-xl transition-all duration-700 group-hover:scale-[1.02] border-8 border-white",
                  service.bgColor
                )}>
                  {service.image?.imageUrl && (
                    <Image
                      src={service.image.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={service.image?.imageHint}
                    />
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className={cn(
                  "w-16 h-16 rounded-3xl flex items-center justify-center bg-white shadow-xl border border-slate-100",
                  service.accent
                )}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Scalable Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Enterprise Security</span>
                  </div>
                </div>

                <Button className="h-14 px-10 text-xs font-black rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all active:scale-95 uppercase tracking-[0.2em] group" asChild>
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
