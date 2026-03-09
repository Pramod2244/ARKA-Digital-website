
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Cloud, Target, Eye, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Digital Strategy & Innovation",
    description: "We help organizations embrace digital transformation by building intelligent solutions that improve workflows, enhance customer experiences, and create new growth opportunities.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Code2,
    title: "Custom Platform Development",
    description: "Our team designs and develops scalable digital platforms, including websites, custom applications, and industry-specific systems that streamline operations and improve productivity.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Solutions",
    description: "We build secure and scalable cloud environments that ensure performance, reliability, and data protection for modern digital businesses.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Target,
    title: "Growth & Digital Presence",
    description: "Through UI/UX design, digital marketing, and technology-driven strategies, we help businesses strengthen their online presence and connect with their audience more effectively.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
];

export function AboutSection() {
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
          <div className="text-center mb-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-headline text-4xl md:text-5xl font-black text-[#0D1B2A] leading-tight"
            >
              About <span className="text-primary uppercase tracking-tight">Arkaa Digital</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                ARKAA DIGITAL is a technology-focused company dedicated to building smart digital solutions that help businesses grow and operate more efficiently. We specialize in developing modern websites, hospital management systems, user-centered digital experiences, cloud infrastructure, and strategic digital marketing solutions.
              </p>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mt-6">
                Our team blends innovation, technology, and strategic thinking to deliver scalable platforms that empower organizations to adapt and succeed in an increasingly digital world.
              </p>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-10 h-full rounded-[3rem] border-none shadow-xl shadow-slate-200/50 bg-white hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
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

          {/* Vision & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 rounded-[3.5rem] bg-[#0D1B2A] text-white h-full shadow-2xl relative overflow-hidden group border-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0 group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-8">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-6">Our Vision</h3>
                  <p className="text-lg text-slate-300 font-medium leading-relaxed flex-grow">
                    Our vision is to become a trusted technology partner for businesses by delivering innovative digital solutions that transform ideas into powerful and sustainable digital platforms.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 rounded-[3.5rem] bg-white border border-slate-100 h-full shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -z-0 group-hover:bg-blue-100/50 transition-colors" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-8">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-[#0D1B2A] mb-6">Our Mission</h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed flex-grow">
                    Our mission is to empower organizations with reliable technology, intelligent systems, and modern digital experiences that improve efficiency, accelerate growth, and create long-term value.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Closing & CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-10"
          >
            <div className="p-10 rounded-[2.5rem] bg-white/50 backdrop-blur-sm border border-white shadow-lg">
              <p className="text-xl text-slate-600 font-bold leading-relaxed italic">
                "At ARKAA DIGITAL, we believe technology should simplify complexity and unlock new possibilities. By combining expertise, creativity, and innovation, we aim to help businesses navigate the future of digital transformation with confidence."
              </p>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="h-16 md:h-20 px-10 md:px-14 text-[10px] md:text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 uppercase tracking-[0.2em] group" asChild>
                <Link href="#contact" className="flex items-center gap-4">
                  Start Your Digital Journey With Us
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
