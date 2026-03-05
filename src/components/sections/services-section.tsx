"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, TrendingUp, Palette, Layers } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "End-to-end web and mobile app development using modern frameworks and agile methods.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centric design that strengthens your brand identity and user engagement.",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Creating powerful, cohesive brand identities that resonate with your target audience.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Strategic growth through data-driven marketing and expert search engine optimization.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud solutions to streamline your deployment and business operations.",
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
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
            className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Our <span className="text-primary text-glow-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of high-performance technology services designed to scale your business into the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className={cn(index >= 3 ? "lg:col-span-1" : "")}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] flex flex-col p-6 md:p-8">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <service.icon className="h-6 w-6 text-primary relative z-10 shadow-[0_0_12px_rgba(249,115,22,0.4)]" />
                    </div>
                  </div>

                  <CardHeader className="p-0 mb-2 relative z-10">
                    <CardTitle className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 relative z-10">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}