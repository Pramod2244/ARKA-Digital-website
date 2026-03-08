"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Layout } from "lucide-react";

const projects = [
  { id: 1, title: "Healthcare Nexus HIMS", category: "Hospital Management", image: "https://picsum.photos/seed/p1/800/600" },
  { id: 2, title: "FinFlow Enterprise", category: "Corporate Web", image: "https://picsum.photos/seed/p2/800/600" },
  { id: 3, title: "EduSpark Portal", category: "Educational System", image: "https://picsum.photos/seed/p3/800/600" },
  { id: 4, title: "Vibe Commerce", category: "Next-Gen Retail", image: "https://picsum.photos/seed/p4/800/600" },
  { id: 5, title: "SaaS Analytics Pro", category: "Web Application", image: "https://picsum.photos/seed/p5/800/600" },
  { id: 6, title: "Arkaa Creative Studio", category: "Design Showcase", image: "https://picsum.photos/seed/p6/800/600" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Our Portfolio</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900">Featured <span className="text-secondary">Projects</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">A selection of high-performance digital solutions crafted for industry leaders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[3.5rem] bg-slate-50 shadow-xl shadow-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="project showcase"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                <p className="text-[11px] uppercase tracking-[0.3em] font-black text-primary mb-3">{project.category}</p>
                <h3 className="text-2xl font-black text-white flex items-center justify-between">
                  {project.title}
                  <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
