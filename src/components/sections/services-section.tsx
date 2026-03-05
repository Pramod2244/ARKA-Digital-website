"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, TrendingUp, Palette, Layers, Cpu } from "lucide-react";
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
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage cutting-edge AI to automate workflows and drive intelligent business decision making.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      {/* Seamless Transition Mask - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Faint Futuristic Grid Pattern */}
        <div 
          className="absolute inset-0 bg-grid-white opacity-[0.03]" 
          style={{ backgroundSize: '40px 40px' }}
        />
        
        {/* Soft Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] opacity-40" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[140px] opacity-30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-white">
            Our <span className="text-primary text-glow-primary">Services</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-medium">
            We offer a comprehensive suite of high-performance technology services designed to scale your business into the future.
          </p>
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
                  <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col p-6 md:p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Professional Solar Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <service.icon className="h-7 w-7 text-primary relative z-10 filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
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
      </motion.div>

      {/* Seamless Transition Mask - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
