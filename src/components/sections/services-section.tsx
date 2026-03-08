"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, SEO, and strong online presence. We build digital storefronts that convert visitors into customers.",
    features: ["Performance Optimized", "SEO Strategy", "Responsive Design", "Custom Branding"],
    image: PlaceHolderImages.find(img => img.id === 'web-interface-ui')?.imageUrl || "",
    imageHint: PlaceHolderImages.find(img => img.id === 'web-interface-ui')?.imageHint || "web development",
    bgColor: "bg-white",
    imageLeft: true,
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointment management. Engineered for precision and care.",
    features: ["Patient Management", "Electronic Records", "Billing & Insurance", "Analytics Reports"],
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui')?.imageUrl || "",
    imageHint: PlaceHolderImages.find(img => img.id === 'hims-dashboard-ui')?.imageHint || "medical dashboard",
    bgColor: "bg-[#F5F9FF]",
    imageLeft: false,
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and automation. Solving complex problems with scalable software architecture.",
    features: ["Custom Workflows", "Business Automation", "Scalable Tech", "API Integration"],
    image: PlaceHolderImages.find(img => img.id === 'analytics-ui')?.imageUrl || "",
    imageHint: PlaceHolderImages.find(img => img.id === 'analytics-ui')?.imageHint || "software interface",
    bgColor: "bg-white",
    imageLeft: true,
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement. We focus on the user journey to create products that people love to use.",
    features: ["User-Centric Design", "Prototyping", "Accessibility", "Visual Identity"],
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-showcase')?.imageUrl || "",
    imageHint: PlaceHolderImages.find(img => img.id === 'ui-ux-design-showcase')?.imageHint || "mobile ui",
    bgColor: "bg-[#FFF4EC]",
    imageLeft: false,
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="overflow-hidden">
      {/* Header Section */}
      <div className="bg-white py-32 border-b border-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[11px] font-black uppercase tracking-[0.3em] mb-10"
            >
              Our Core Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-headline text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-10 tracking-tight"
            >
              Digital Solutions <br />
              <span className="text-primary text-glow-orange">We Build</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl"
            >
              We design and develop powerful digital platforms that help hospitals, businesses, and organizations grow with technology.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Rows */}
      {services.map((service, index) => (
        <div key={index} className={cn("py-24 md:py-40 relative", service.bgColor)}>
          {/* Subtle Background Decorations */}
          <div className="absolute inset-0 bg-grid-slate opacity-[0.02] pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className={cn(
              "grid lg:grid-cols-2 gap-16 lg:gap-32 items-center",
              service.imageLeft ? "" : "lg:flex lg:flex-row-reverse"
            )}>
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: service.imageLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border-[12px] border-white group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={800}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={service.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                {/* Floating Glow Element */}
                <div className={cn(
                  "absolute -z-10 w-80 h-80 rounded-full blur-[120px] opacity-20 animate-pulse",
                  service.imageLeft ? "-top-20 -left-20 bg-primary/40" : "-bottom-20 -right-20 bg-secondary/40"
                )} />
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: service.imageLeft ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <h3 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-base font-bold text-slate-800 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button size="lg" className="rounded-full h-16 px-12 text-sm font-black uppercase tracking-widest group shadow-xl shadow-primary/10 transition-all hover:shadow-primary/20 hover:-translate-y-1 bg-slate-900 hover:bg-primary" asChild>
                    <Link href="#contact" className="flex items-center gap-4">
                      Get Expert Consultation
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}