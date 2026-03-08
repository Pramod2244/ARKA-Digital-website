
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
  Code2 
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, SEO, and a strong online presence.",
    icon: Globe,
    image: PlaceHolderImages.find(img => img.id === 'web-dev-v2'),
    accent: "text-primary",
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointments.",
    icon: Hospital,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-v2'),
    accent: "text-[#3B82F6]",
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and complex automation.",
    icon: Cpu,
    image: PlaceHolderImages.find(img => img.id === 'analytics-core-v2'),
    accent: "text-primary",
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement across all platforms.",
    icon: Palette,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-v2'),
    accent: "text-[#3B82F6]",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and migration services to ensure your data is secure and always accessible.",
    icon: Cloud,
    image: PlaceHolderImages.find(img => img.id === 'cloud-solutions-v2'),
    accent: "text-primary",
  },
  {
    title: "Software Development",
    description: "Full-cycle software engineering services from conceptualization to deployment and maintenance.",
    icon: Code2,
    image: PlaceHolderImages.find(img => img.id === 'software-dev-v2'),
    accent: "text-[#3B82F6]",
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
    <section id="services" className="bg-[#E9F1FB] overflow-hidden pl-[70px]">
      <div className="container mx-auto max-w-7xl px-6 py-32">
        <div className="text-center mb-20 space-y-6">
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
            Our Core <br />
            <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
          >
            Explore our specialized engineering solutions designed to power modern businesses and healthcare.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-6">
                    <div className="w-full lg:w-1/2 group">
                      <div className="relative h-[350px] md:h-[450px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] border-8 border-white bg-white">
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
                        <h3 className="font-headline text-3xl font-black text-slate-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3 pt-2">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  current === i 
                    ? "w-8 bg-primary shadow-[0_0_10px_rgba(255,106,0,0.5)]" 
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
