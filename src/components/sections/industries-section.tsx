"use client";

import { motion } from "framer-motion";
import { Hospital, Building2, Rocket, School, Stethoscope, Landmark } from "lucide-react";

const industries = [
  { icon: Hospital, name: "Hospitals" },
  { icon: Building2, name: "Businesses" },
  { icon: Rocket, name: "Startups" },
  { icon: School, name: "Schools" },
  { icon: Stethoscope, name: "Clinics" },
  { icon: Landmark, name: "Enterprises" },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-[#EAF4FF] border-y border-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Market Verticals</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Industries We <span className="text-secondary">Serve</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">Tailored digital systems for sector-specific challenges across various domains.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-7xl mx-auto">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group text-center space-y-6"
            >
              <div className="mx-auto w-28 h-28 rounded-[3rem] bg-white shadow-xl shadow-secondary/5 flex items-center justify-center border border-white group-hover:bg-secondary group-hover:shadow-secondary/30 transition-all duration-500 hover:-translate-y-2">
                <item.icon className="h-10 w-10 text-secondary group-hover:text-white transition-all scale-100 group-hover:scale-110" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}