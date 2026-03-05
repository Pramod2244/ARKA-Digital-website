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
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-background/50">
      {/* Seamless Transition Mask - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />

      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] opacity-30" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.02]" style={{ backgroundSize: '50px 50px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Our <span className="text-primary text-glow-neon">Specializations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive suite of high-performance technology services designed to scale your business into the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -12 }}
                className="h-full"
              >
                <Card className="h-full glass-card border-white/5 bg-white/[0.03] relative group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col p-10 rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40">
                      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      <service.icon className="h-8 w-8 text-primary relative z-10 filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                  </div>

                  <CardHeader className="p-0 mb-4 relative z-10">
                    <CardTitle className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 relative z-10 flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Seamless Transition Mask - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}