"use client";

import { motion } from "framer-motion";
import { Hospital, Building2, Rocket, School, Factory, Landmark } from "lucide-react";

const industries = [
  { icon: Hospital, name: "Hospitals & Clinics" },
  { icon: Building2, name: "Corporate Businesses" },
  { icon: Rocket, name: "Tech Startups" },
  { icon: School, name: "Educational Institutes" },
  { icon: Landmark, name: "Financial Enterprises" },
  { icon: Factory, name: "Manufacturing" },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-white mb-4">Industries We Serve</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group text-center space-y-4"
            >
              <div className="mx-auto w-20 h-20 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}