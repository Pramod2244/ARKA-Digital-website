
"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  ShieldCheck, 
  Database, 
  Zap, 
  HeartPulse, 
  LineChart, 
  Layers, 
  Globe,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Patient Management",
    desc: "Complete lifecycle management from registration to discharge, including EMR integration.",
    icon: Activity
  },
  {
    title: "OPD & IPD Workflows",
    desc: "Seamless handling of outpatient consultations and inpatient admissions/bed management.",
    icon: Layers
  },
  {
    title: "Financial Billing",
    desc: "Automated billing for services, pharmacy, and laboratory with insurance claim tracking.",
    icon: LineChart
  },
  {
    title: "Diagnostics Control",
    desc: "Integrated Laboratory (LIS) and Radiology (RIS) modules with digital reporting.",
    icon: Zap
  },
  {
    title: "Inventory & Pharmacy",
    desc: "Real-time stock tracking, expiration alerts, and automated procurement workflows.",
    icon: Database
  },
  {
    title: "Data Security",
    desc: "Enterprise-grade encryption ensuring HIPAA and GDPR compliance for sensitive medical data.",
    icon: ShieldCheck
  }
];

export default function HimsDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-8 mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[#3B82F6] text-[10px] font-black uppercase tracking-[0.2em]"
          >
            Deep Dive: Flagship Solution
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            The Arkaa Digital <br />
            <span className="text-[#3B82F6]">HIMS Core</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium max-w-3xl leading-relaxed"
          >
            A high-performance Hospital Management Information System engineered for modern healthcare providers. 
            We provide a scalable, secure, and intuitive ecosystem that puts patient care back at the center of operations.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500 mb-8">
                <module.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{module.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{module.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10 space-y-12">
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Modernize Your <br /> Medical Facility?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-4xl font-black text-[#3B82F6]">99.9%</div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">System Uptime</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-black text-[#3B82F6]">40%</div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Wait-time Reduction</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-black text-[#3B82F6]">Zero</div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Data Loss Risk</p>
              </div>
            </div>
            <div className="pt-8">
              <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Schedule a Live Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
