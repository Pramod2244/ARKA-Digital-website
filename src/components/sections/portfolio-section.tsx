"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  { id: 1, title: "City Hospital HIMS", category: "Medical", image: "https://picsum.photos/seed/p1/600/400" },
  { id: 2, title: "FinTech Enterprise", category: "Corporate", image: "https://picsum.photos/seed/p2/600/400" },
  { id: 3, title: "EduTech Platform", category: "Education", image: "https://picsum.photos/seed/p3/600/400" },
  { id: 4, title: "Modern eCommerce", category: "Retail", image: "https://picsum.photos/seed/p4/600/400" },
  { id: 5, title: "SaaS Dashboard", category: "Software", image: "https://picsum.photos/seed/p5/600/400" },
  { id: 6, title: "Creative Portfolio", category: "Design", image: "https://picsum.photos/seed/p6/600/400" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl font-bold text-white">Our <span className="text-primary">Portfolio</span></h2>
          <p className="text-muted-foreground mt-4">Exploring our latest digital craftmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] glass-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="project preview"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}