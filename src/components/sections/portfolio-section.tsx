"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  { 
    id: 1, 
    title: "Healthcare Nexus HIMS", 
    category: "Clinical Software", 
    image: PlaceHolderImages.find(img => img.id === 'portfolio-hims-nexus'),
    grid: "md:col-span-4 md:row-span-2"
  },
  { 
    id: 2, 
    title: "FinFlow Enterprise", 
    category: "Financial Core", 
    image: PlaceHolderImages.find(img => img.id === 'portfolio-finflow'),
    grid: "md:col-span-2 md:row-span-1"
  },
  { 
    id: 3, 
    title: "EduSpark Portal", 
    category: "Learning LMS", 
    image: PlaceHolderImages.find(img => img.id === 'portfolio-eduspark'),
    grid: "md:col-span-2 md:row-span-1"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-[#F2F6FF] relative overflow-hidden pl-[70px]">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.4em]">Our Work</div>
          <h2 className="font-headline text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Featured <br /><span className="text-primary">Projects</span></h2>
          <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto">High-performance digital systems crafted for industry leaders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card group relative ${project.grid} !bg-white !border-slate-100 shadow-xl`}
            >
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-primary mb-3">{project.category}</p>
                <h3 className="text-2xl font-black text-white flex items-center justify-between">
                  {project.title}
                  <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </h3>
              </div>
              <div className="relative w-full h-full min-h-[400px] bg-slate-50">
                <Image 
                  src={project.image?.imageUrl || ""} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={project.image?.imageHint}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}