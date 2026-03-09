
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
  ArrowLeft,
  Settings,
  ShieldAlert,
  Users
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Patient Management",
    desc: "Complete lifecycle management from registration to discharge, including comprehensive EMR integration.",
    icon: Users
  },
  {
    title: "Electronic Medical Records (EMR)",
    desc: "Digitized health history, prescriptions, and clinical notes available to authorized staff in real-time.",
    icon: HeartPulse
  },
  {
    title: "OPD & IPD Workflows",
    desc: "Seamless handling of outpatient consultations and inpatient admissions with automated bed management.",
    icon: Layers
  },
  {
    title: "Financial Billing",
    desc: "Integrated billing for all services, including automated insurance claim tracking and split-billing.",
    icon: LineChart
  },
  {
    title: "Laboratory & Radiology",
    desc: "Full LIS and RIS integration with digital reporting, automated sample tracking, and image archiving.",
    icon: Zap
  },
  {
    title: "Pharmacy & Inventory",
    desc: "Real-time stock tracking across departments with expiration alerts and automated reordering.",
    icon: Database
  }
];

const benefits = [
  {
    title: "Operational Efficiency",
    desc: "Automate repetitive administrative tasks, allowing your medical team to focus entirely on patient care.",
    icon: Settings
  },
  {
    title: "Data Security & Compliance",
    desc: "Bank-grade encryption and granular access controls ensure full HIPAA and GDPR compliance.",
    icon: ShieldCheck
  },
  {
    title: "Digital Transformation",
    desc: "Transition from paper-based chaos to a streamlined, data-driven digital ecosystem.",
    icon: Globe
  }
];

export default function HimsDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Navigation Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="space-y-8 mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[#3B82F6] text-[10px] font-black uppercase tracking-[0.2em]"
          >
            Clinical Excellence Through Technology
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            Modern Hospital <br />
            <span className="text-[#3B82F6]">Management (HIMS)</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium max-w-3xl leading-relaxed"
          >
            HIMS is a robust, centralized Information System engineered to empower modern healthcare providers. 
            By integrating every department into a single digital core, we eliminate manual errors and 
            accelerate patient outcomes.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="mb-32">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 mb-12 uppercase tracking-widest text-center lg:text-left">Core Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

        {/* Benefits & Automation Section */}
        <div className="mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 border border-slate-100 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10" />
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="font-headline text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                    Driving Hospital <br />
                    <span className="text-[#3B82F6]">Transformation</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Our HIMS goes beyond data entry; it implements intelligent workflow automation that 
                    optimizes resource allocation, reduces patient wait times by up to 40%, and ensures 
                    seamless digital communication across the entire clinical facility.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="p-2 rounded-lg bg-blue-50 text-[#3B82F6] mt-1">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">{benefit.title}</p>
                          <p className="text-slate-500 text-sm font-medium">{benefit.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white space-y-8">
                      <div className="w-24 h-24 rounded-full bg-[#3B82F6] flex items-center justify-center animate-pulse">
                        <Zap className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-black uppercase tracking-[0.2em]">Automated <br /> Workflow Core</h4>
                      <p className="text-slate-400 font-medium">Predictive bed management and real-time inventory alerts powered by our HIMS engine.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* CTA Section */}
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
                <div className="text-4xl font-black text-[#3B82F6]">Zero</div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Manual Errors</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-black text-[#3B82F6]">ISO</div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Data Standards</p>
              </div>
            </div>
            <div className="pt-8">
              <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Request a Live Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
