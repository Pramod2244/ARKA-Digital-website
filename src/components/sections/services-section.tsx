"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, TrendingUp, Palette, Layers, Cpu } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build fast, secure, and scalable web applications using modern technologies to support business growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive and visually engaging user interfaces that deliver seamless digital experiences.",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Develop strong brand identities that communicate your vision and make your business stand out.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Increase online visibility with data-driven marketing strategies and search engine optimization.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Implement secure cloud infrastructure and DevOps automation for reliable and scalable systems.",
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Faint Futuristic Grid Pattern - Minimal and Premium */}
        <div 
          className="absolute inset-0 bg-grid-white opacity-[0.03]" 
          style={{ backgroundSize: '50px 50px' }}
        />
        
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(25,95,53,0.03)_0%,transparent_70%)]" />
        
        {/* Transition Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className={cn(
        "container mx-auto px-4 transition-all duration-1000 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="text-center space-y-3 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-white"
          >
            Our <span className="text-primary text-glow-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            We offer a comprehensive suite of high-performance technology services designed to scale your business into the future.
          </motion.p>
        </div>

        {/* 2-over-3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isRowOne = index < 2;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className={cn(
                  "h-full",
                  isRowOne ? "md:col-span-3" : "md:col-span-2"
                )}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] flex flex-col p-6 md:p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110">
                        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <service.icon className="h-6 w-6 text-primary relative z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]" />
                      </div>
                    </div>

                    <CardHeader className="p-0 mb-2 relative z-10">
                      <CardTitle className="font-headline text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0 relative z-10 flex-grow">
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
