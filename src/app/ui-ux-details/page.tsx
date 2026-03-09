
"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Layout, 
  Palette, 
  Zap, 
  MousePointer2, 
  Smartphone, 
  Monitor, 
  CheckCircle2,
  ArrowLeft,
  Layers,
  PenTool,
  Users,
  Eye,
  Activity
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const designServices = [
  {
    title: "User Research & Analysis",
    desc: "Understanding behavior, identifying pain points, and creating data-driven user personas.",
    icon: Search
  },
  {
    title: "Wireframing & IA",
    desc: "Low-fidelity layouts and navigation structure design to plan the content organization.",
    icon: Layout
  },
  {
    title: "UI (User Interface) Design",
    desc: "Modern, brand-aligned interfaces with consistent design systems and components.",
    icon: Palette
  },
  {
    title: "UX (User Experience) Design",
    desc: "Journey mapping and flow optimization to improve overall usability and accessibility.",
    icon: Zap
  },
  {
    title: "Interactive Prototyping",
    desc: "Clickable prototypes that allow for realistic testing and rapid iteration before development.",
    icon: MousePointer2
  },
  {
    title: "Mobile App UI/UX",
    desc: "Mobile-first design for iOS and Android with touch-friendly elements and responsive layouts.",
    icon: Smartphone
  },
  {
    title: "Web Application UI/UX",
    desc: "Dashboard design and SaaS interfaces optimized for complex user workflows and data viz.",
    icon: Monitor
  },
  {
    title: "Usability Testing",
    desc: "Testing with real users to identify issues and continuously optimize the experience.",
    icon: Activity
  }
];

const benefits = [
  "Better user engagement and retention",
  "Improved product usability and satisfaction",
  "Higher conversion rates through optimized flows",
  "Stronger brand perception and professional feel",
  "Seamless user experiences across all devices"
];

const designProcess = [
  { step: "01", title: "Research", desc: "Discovery and user behavior analysis." },
  { step: "02", title: "Wireframing", desc: "Structure planning and IA definition." },
  { step: "03", title: "Visual Design", desc: "High-fidelity UI and component systems." },
  { step: "04", title: "Prototyping", desc: "Interactive flows and click-throughs." },
  { step: "05", title: "Testing", desc: "Usability validation and feedback loops." },
  { step: "06", title: "Handoff", desc: "Final design assets for development." }
];

const tools = [
  { name: "Figma", icon: Layers },
  { name: "Adobe XD", icon: PenTool },
  { name: "Sketch", icon: Layout },
  { name: "InVision", icon: Eye },
  { name: "Collaboration", icon: Users }
];

export default function UIUXDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Navigation - Mapped to #services section */}
        <Link href="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        {/* Hero Introduction */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-headline text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8"
          >
            UI/UX Design <br />
            <span className="text-[#3B82F6]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Our UI/UX Design services focus on creating intuitive, engaging, and visually appealing digital experiences. We design user interfaces that are easy to navigate and optimized for usability across websites, web applications, and mobile platforms. Our design approach combines creativity, usability research, and modern design principles to deliver seamless user experiences that improve engagement and customer satisfaction.
          </motion.p>
        </div>

        {/* Service Modules Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest">Our Design Services</h2>
            <div className="flex-1 h-[2px] bg-slate-100 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500 mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl">
            <h2 className="font-headline text-3xl font-black text-slate-900 mb-10">Design Benefits</h2>
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

          <div className="flex flex-col justify-center space-y-10">
            <h2 className="font-headline text-3xl font-black text-slate-900 leading-tight">Our Modern <br /><span className="text-[#3B82F6]">Design Process</span></h2>
            <div className="grid grid-cols-2 gap-6">
              {designProcess.map((item, i) => (
                <div key={i} className="space-y-2">
                  <span className="text-primary font-black text-xs tracking-widest">{item.step}</span>
                  <h4 className="font-black text-slate-900 text-sm uppercase">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-32">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100">
             <div className="text-center mb-16">
               <h2 className="font-headline text-3xl font-black text-slate-900 mb-4">Design Arsenal</h2>
               <p className="text-slate-500 font-medium">We leverage industry-leading tools to craft pixel-perfect experiences.</p>
             </div>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               {tools.map((tool, i) => (
                 <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center text-[#3B82F6]">
                      <tool.icon className="h-10 w-10" />
                    </div>
                    <span className="font-black text-[10px] uppercase tracking-widest text-slate-400">{tool.name}</span>
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
              Start Your <br /> Design Journey Today
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Join leading brands that have elevated their user experience and brand value with our specialized UI/UX design services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Start Your Design Project</Link>
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
