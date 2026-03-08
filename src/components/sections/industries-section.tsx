"use client";

import { motion } from "framer-motion";
import { Hospital, Building2, Rocket, School, Factory, Landmark, Stethoscope } from "lucide-react";

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
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">Market Verticals</div>
          <h2 className="font-headline text-4xl font-black text-slate-900">Industries We <span className="text-primary">Serve</span></h2>
          <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 bg-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group text-center space-y-6"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center group-hover:bg-primary group-hover:shadow-primary/30 transition-all duration-500 hover:-rotate-6">
                <item.icon className="h-10 w-10 text-primary group-hover:text-white transition-all scale-100 group-hover:scale-110" />
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}