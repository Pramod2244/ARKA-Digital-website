
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Calendar, 
  CreditCard, 
  FlaskConical, 
  Pill, 
  FileText, 
  Workflow 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  { icon: Users, text: "Patient Records Management" },
  { icon: Calendar, text: "Appointment Scheduling" },
  { icon: CreditCard, text: "Billing & Insurance Integration" },
  { icon: FlaskConical, text: "Laboratory & Radiology Management" },
  { icon: Pill, text: "Pharmacy Management" },
  { icon: FileText, text: "Electronic Medical Records (EMR)" },
  { icon: Workflow, text: "Hospital Workflow Automation" },
];

export function HimsSection() {
  const himsImg = PlaceHolderImages.find(img => img.id === 'hims-system-illustration');

  return (
    <section id="hims" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 bg-white group">
              {himsImg?.imageUrl && (
                <Image 
                  src={himsImg.imageUrl} 
                  alt="HIMS Digital Management Illustration" 
                  width={800} 
                  height={1000} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={himsImg?.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
            </div>
            {/* Decorative Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
                  <p className="text-lg font-black text-slate-900">+45% Faster Ops</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Hospital Management <br />
                <span className="text-[#3B82F6]">Systems (HIMS)</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                HIMS (Hospital Management Information System) is a complete digital solution designed to manage hospital operations efficiently. It integrates patient records, appointment scheduling, billing, pharmacy, laboratory, and administrative workflows into a single centralized platform. This system improves efficiency, reduces manual errors, and enhances patient care through real-time data access and automation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <Button size="lg" className="h-16 px-10 text-xs font-black rounded-full bg-[#3B82F6] text-white hover:bg-[#2563eb] shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 uppercase tracking-[0.2em]" asChild>
                <Link href="/hims-details">Learn More About HIMS</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xs font-black rounded-full border-2 border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 transition-all hover:-translate-y-1 uppercase tracking-[0.2em] group" asChild>
                <Link href="#contact" className="flex items-center gap-3">
                  Consult With Experts
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
