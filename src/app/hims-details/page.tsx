
"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  HeartPulse, 
  CreditCard, 
  Pill, 
  FlaskConical, 
  Microscope, 
  Bed, 
  Stethoscope, 
  Package, 
  Briefcase, 
  BarChart3,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Cloud,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Patient Registration & Management",
    desc: "Quick registration, unique ID generation, digital profiles, and comprehensive medical history tracking.",
    icon: Users
  },
  {
    title: "Appointment Scheduling",
    desc: "Online booking, doctor availability management, automated reminders, and queue optimization.",
    icon: Calendar
  },
  {
    title: "Electronic Medical Records (EMR)",
    desc: "Secure digital records, diagnosis tracking, treatment plans, and integrated prescription management.",
    icon: HeartPulse
  },
  {
    title: "Billing & Insurance",
    desc: "Automated billing, insurance claim processing, invoice generation, and real-time financial reporting.",
    icon: CreditCard
  },
  {
    title: "Pharmacy Management",
    desc: "Inventory tracking, automated stock monitoring, expiry alerts, and supplier management.",
    icon: Pill
  },
  {
    title: "Laboratory Management",
    desc: "Digital test requests, sample tracking, automated report generation, and patient record syncing.",
    icon: FlaskConical
  },
  {
    title: "Radiology Management",
    desc: "Scheduling, imaging reports, PACS support, and seamless integration with patient medical records.",
    icon: Microscope
  },
  {
    title: "In-Patient (IPD) Management",
    desc: "Bed allocation, ward management, nurse monitoring, treatment tracking, and discharge summaries.",
    icon: Bed
  },
  {
    title: "Out-Patient (OPD) Management",
    desc: "OPD registration, consultation management, follow-up scheduling, and prescription tracking.",
    icon: Stethoscope
  },
  {
    title: "Inventory & Equipment",
    desc: "Medical equipment tracking, purchase management, stock monitoring, and inventory alerts.",
    icon: Package
  },
  {
    title: "Staff & HR Management",
    desc: "Staff profiles, attendance tracking, payroll integration, and department-wise management.",
    icon: Briefcase
  },
  {
    title: "Reports & Analytics",
    desc: "Operational analytics, financial reports, patient statistics, and department performance tracking.",
    icon: BarChart3
  }
];

const benefits = [
  "Improved hospital efficiency",
  "Reduced manual paperwork",
  "Accurate patient data management",
  "Faster hospital workflows",
  "Better patient experience",
  "Real-time reporting and insights",
  "Secure centralized data storage"
];

const advantages = [
  { icon: Cloud, title: "Cloud-Based", desc: "Reliable, high-availability infrastructure accessible from anywhere." },
  { icon: ShieldCheck, title: "Secure Data", desc: "Enterprise-grade encryption for sensitive patient information." },
  { icon: Zap, title: "Easy Integration", desc: "Seamlessly connects with your existing clinical systems." },
  { icon: Globe, title: "Scalable", desc: "Engineered for small clinics up to multi-specialty hospitals." }
];

export default function HimsDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Introduction */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8"
          >
            Hospital Management <br />
            <span className="text-[#3B82F6]">Information System (HIMS)</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Our Hospital Management Information System (HIMS) is a comprehensive digital platform designed to automate and manage hospital operations efficiently. It connects multiple departments such as patient registration, appointments, billing, pharmacy, laboratory, radiology, and hospital administration into a single centralized system. HIMS improves operational efficiency, reduces paperwork, minimizes human errors, and enhances patient care through real-time data access and automation.
          </motion.p>
        </div>

        {/* Key Modules Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest">Key Modules of HIMS</h2>
            <div className="flex-1 h-[2px] bg-slate-100 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 group"
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

        {/* Benefits & Advantages Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl">
            <h2 className="font-headline text-3xl font-black text-slate-900 mb-10">System Benefits</h2>
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="p-1.5 rounded-full bg-blue-50 text-[#3B82F6]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-black text-slate-900 leading-tight">Why Choose Our <br /><span className="text-[#3B82F6]">HIMS Solution?</span></h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our HIMS solution is designed for hospitals, clinics, and healthcare institutions looking to digitally transform their operations. It offers a secure, scalable, and user-friendly platform that integrates all hospital departments into one powerful system.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {advantages.map((adv, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#3B82F6] border border-slate-100">
                    <adv.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{adv.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
          <div className="relative z-10 space-y-12">
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Start Your <br /> Digital Transformation?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Join leading medical institutions that have already scaled their efficiency and patient care with our HIMS platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-14 text-xs font-black rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-white/10 transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
