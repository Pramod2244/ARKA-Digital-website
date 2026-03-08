
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Hospital, 
  Cpu, 
  Palette, 
  Cloud,
  CheckCircle2
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, SEO, and a strong online presence.",
    icon: Globe,
    image: PlaceHolderImages.find(img => img.id === 'web-dev-v2'),
    accent: "text-primary",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Mobile Friendly"]
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointments.",
    icon: Hospital,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-v2'),
    accent: "text-[#3B82F6]",
    features: ["Patient Records Management", "Appointment Scheduling", "Billing & Insurance", "Hospital Workflow Automation"]
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and complex automation.",
    icon: Cpu,
    image: PlaceHolderImages.find(img => img.id === 'analytics-core-v2'),
    accent: "text-primary",
    features: ["Workflow Automation", "Secure Data Handling", "API Integration", "Scalable Architecture"]
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement across all platforms.",
    icon: Palette,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-v2'),
    accent: "text-[#3B82F6]",
    features: ["User-Centered Design", "Interactive Prototypes", "Clean Interface Layout", "Mobile Experience Optimization"]
  },
  {
    title: "Cloud & Hosting Solutions",
    description: "Scalable cloud architecture and managed hosting services to ensure your data is secure and always accessible.",
    icon: Cloud,
    image: PlaceHolderImages.find(img => img.id === 'cloud-solutions-v2'),
    accent: "text-primary",
    features: ["Cloud Deployment", "Server Management", "High Availability", "Performance Monitoring"]
  }
];

export function ServicesSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="services" className="bg-[#E9F1FB] overflow-hidden pl-[70px] relative">
      <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Header - More Compact */}
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] border border-white"
          >
            Digital Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Our Core <span className="text-primary">Services</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative px-4 lg:px-12">
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-4">
                    {/* Image Column - Controlled Height */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative h-[300px] md:h-[400px] w-full rounded-[3rem] overflow-hidden shadow-xl border-[10px] border-white bg-white">
                        {service.image?.imageUrl && (
                          <Image
                            src={service.image.imageUrl}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-1000"
                            data-ai-hint={service.image?.imageHint}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content Column - Streamlined */}
                    <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                      <div className={cn(
                        "w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-white shadow-lg border border-slate-50",
                        service.accent
                      )}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-headline text-3xl font-black text-slate-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <div className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center",
                              index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-[#3B82F6]/10 text-[#3B82F6]"
                            )}>
                              <CheckCircle2 className="h-3 w-3" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button className="h-14 px-10 text-xs font-black rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all active:scale-95 uppercase tracking-[0.2em] group shadow-xl" asChild>
                          <Link href="#contact" className="flex items-center gap-4">
                            Consult with Experts
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows - Always Visible on Desktop */}
            <div className="hidden lg:block">
              <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-slate-50 text-slate-900 border-none transition-all z-20" />
              <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-slate-50 text-slate-900 border-none transition-all z-20" />
            </div>
          </Carousel>

          {/* Navigation Dots - Tighter Spacing */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 transition-all duration-500 rounded-full",
                  current === i 
                    ? "w-10 bg-primary shadow-[0_0_15px_rgba(255,106,0,0.3)]" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
