
"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Cloud, Target, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Digital Innovation",
    description: "We help businesses embrace the future by developing modern digital platforms that enhance productivity, improve user experiences, and unlock new growth opportunities.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Cpu,
    title: "Smart Software Solutions",
    description: "From custom web applications to specialized systems like hospital management platforms, we design software that simplifies complex processes and empowers organizations.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Our cloud solutions provide secure, scalable, and high-performance environments that allow businesses to deploy and manage their applications with confidence.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Target,
    title: "Growth & Digital Presence",
    description: "We help companies build strong digital identities through modern website development, intuitive UI/UX design, and data-driven marketing strategies.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
];

export function AboutSection() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'tech-collab-office');

  return (
    <section id="about" className="py-24 bg-[#FDF6F0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-black text-[#0D1B2A] leading-tight">
                About <span className="text-primary">ARKAA DIGITAL</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                ARKAA DIGITAL is a technology-driven company focused on helping businesses transform ideas into powerful digital solutions. We specialize in building modern digital platforms, scalable software systems, and innovative technology solutions.
              </p>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full rounded-[2.5rem] border-none shadow-xl shadow-slate-200/50 bg-white hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#0D1B2A] mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Closing & Image Section */}
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="p-10 rounded-[3rem] bg-[#0D1B2A] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed relative z-10">
                  At ARKAA DIGITAL, we believe technology should simplify challenges and create opportunities. Our team is dedicated to delivering innovative solutions that help businesses adapt, grow, and thrive in an ever-evolving digital landscape.
                </p>
                <div className="pt-8 flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs relative z-10">
                   Engineering the Future <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              {teamImg?.imageUrl && (
                <Image 
                  src={teamImg.imageUrl} 
                  alt="Arkaa Tech Excellence" 
                  fill
                  className="object-cover"
                  data-ai-hint={teamImg?.imageHint}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
