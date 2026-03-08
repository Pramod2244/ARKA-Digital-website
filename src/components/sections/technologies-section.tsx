"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, Globe, Lock, Workflow } from "lucide-react";

const techs = [
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "Node.js", icon: Cpu, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "React Native", icon: Layout, category: "Mobile" },
  { name: "Firebase", icon: Lock, category: "Cloud" },
  { name: "Genkit AI", icon: Workflow, category: "AI/ML" },
];

export function TechnologiesSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
       {/* Subtle Background Shape */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-200/20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Our Stack</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Modern <span className="text-primary">Technologies</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">We use the most advanced and stable technologies to build high-performance solutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-white shadow-lg shadow-slate-200/30 flex flex-col items-center text-center gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <tech.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 uppercase tracking-wider">{tech.name}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-1">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}