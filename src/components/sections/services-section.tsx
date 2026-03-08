
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
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

// --- Custom Modern Service Icons ---

const WebAppsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="100%" stopColor="#FF8A30" />
      </linearGradient>
    </defs>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="url(#grad1)" strokeWidth="1.5" />
    <path d="M2 8H22" stroke="url(#grad1)" strokeWidth="1.5" />
    <path d="M7 12L5 14L7 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#3B82F6]" />
    <path d="M17 12L19 14L17 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#3B82F6]" />
    <path d="M13 11L11 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="100%" stopColor="#FF8A30" />
      </linearGradient>
    </defs>
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#grad2)" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="1" fill="url(#grad2)" />
    <rect x="8" y="5" width="8" height="2" rx="1" fill="#3B82F6" className="opacity-40" />
    <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="url(#grad2)" strokeWidth="1.5" />
    <path d="M15 15L19 19L17 21L13 17L15 15Z" fill="#3B82F6" className="drop-shadow-[0_0_5px_#3B82F6]" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="100%" stopColor="#FF8A30" />
      </linearGradient>
    </defs>
    <path d="M17.5 19C20.4822 19 22.9 16.5822 22.9 13.6C22.9 10.9782 21.0303 8.79153 18.5391 8.29124C17.9701 5.28943 15.3413 3 12.1818 3C9.67498 3 7.48512 4.45033 6.4172 6.55627C3.41407 6.89736 1.1 9.42844 1.1 12.5C1.1 15.8137 3.78629 18.5 7.1 18.5" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="12" width="6" height="8" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" className="drop-shadow-[0_0_3px_#3B82F6]" />
    <path d="M12 15V17M10 15H14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="100%" stopColor="#FF8A30" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#grad4)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2 17L12 22L22 17" stroke="url(#grad4)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#3B82F6]" />
    <path d="M7 8L10 11L7 14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HIMSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="100%" stopColor="#FF8A30" />
      </linearGradient>
    </defs>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="url(#grad5)" strokeWidth="1.5" />
    <path d="M8 7H16" stroke="url(#grad5)" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="9" y="2" width="6" height="3" rx="1" fill="url(#grad5)" />
    <path d="M12 9V17M8 13H16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" className="drop-shadow-[0_0_5px_#3B82F6]" />
    <path d="M15 17L17 19L21 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, SEO, and a strong online presence.",
    icon: WebDevIcon,
    image: PlaceHolderImages.find(img => img.id === 'web-dev-v2'),
    accent: "text-primary",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Mobile Friendly"]
  },
  {
    title: "Hospital Management Systems",
    description: "Advanced HIMS platforms that streamline hospital workflows including patient records, billing, and appointments.",
    icon: HIMSIcon,
    image: PlaceHolderImages.find(img => img.id === 'hims-dashboard-v2'),
    accent: "text-[#3B82F6]",
    features: ["Patient Records Management", "Appointment Scheduling", "Billing & Insurance", "Hospital Workflow Automation"]
  },
  {
    title: "Custom Web Applications",
    description: "Tailored digital platforms designed specifically for business workflows and complex automation.",
    icon: WebAppsIcon,
    image: PlaceHolderImages.find(img => img.id === 'analytics-core-v2'),
    accent: "text-primary",
    features: ["Workflow Automation", "Secure Data Handling", "API Integration", "Scalable Architecture"]
  },
  {
    title: "UI / UX Design",
    description: "Clean, intuitive user interfaces that improve usability and engagement across all platforms.",
    icon: UIUXIcon,
    image: PlaceHolderImages.find(img => img.id === 'ui-ux-design-v2'),
    accent: "text-[#3B82F6]",
    features: ["User-Centered Design", "Interactive Prototypes", "Clean Interface Layout", "Mobile Experience Optimization"]
  },
  {
    title: "Cloud & Hosting Solutions",
    description: "Scalable cloud architecture and managed hosting services to ensure your data is secure and always accessible.",
    icon: CloudIcon,
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
                        "w-20 h-20 rounded-[2rem] flex items-center justify-center bg-white shadow-xl border border-slate-50 p-4 transition-transform hover:scale-105 duration-300",
                        service.accent
                      )}>
                        <service.icon />
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
