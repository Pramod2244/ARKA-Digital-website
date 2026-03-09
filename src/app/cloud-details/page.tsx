
"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Server, 
  RefreshCw, 
  ShieldCheck, 
  Activity, 
  Database, 
  Lock, 
  Monitor, 
  CheckCircle2, 
  ArrowLeft, 
  Layers, 
  Globe, 
  Zap, 
  Cpu,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cloudServices = [
  {
    title: "Cloud Infrastructure Setup",
    desc: "Deployment of cloud servers, VM configuration, and custom cloud architecture design for scalable performance.",
    icon: Cloud
  },
  {
    title: "Website & Application Hosting",
    desc: "High-performance managed hosting solutions tailored for web platforms and business applications.",
    icon: Globe
  },
  {
    title: "Cloud Migration Services",
    desc: "Seamless transition from traditional servers to cloud with minimal downtime and full data integrity.",
    icon: RefreshCw
  },
  {
    title: "Server Management",
    desc: "Expert setup, configuration, OS updates, and performance tuning for your server environments.",
    icon: Server
  },
  {
    title: "High Availability",
    desc: "Load balancing and auto-scaling infrastructure to ensure redundant and failover systems.",
    icon: Activity
  },
  {
    title: "Disaster Recovery",
    desc: "Automated cloud backups and fast data restoration plans to protect your business continuity.",
    icon: Database
  },
  {
    title: "Security & Compliance",
    desc: "Firewall hardening, SSL implementation, and robust access control management to protect your data.",
    icon: ShieldCheck
  },
  {
    title: "Monitoring & Optimization",
    desc: "24/7 resource tracking and system health reporting for continuous peak efficiency.",
    icon: BarChart3
  }
];

const platforms = [
  { name: "AWS", icon: Cpu },
  { name: "Microsoft Azure", icon: Layers },
  { name: "Google Cloud", icon: Globe },
  { name: "DigitalOcean", icon: Zap },
  { name: "Private Cloud", icon: Lock }
];

const benefits = [
  "Scalable infrastructure for growing businesses",
  "High availability and 99.9% uptime",
  "Strong data security and enterprise encryption",
  "Faster application performance globally",
  "Reduced infrastructure maintenance costs",
  "Reliable automated disaster recovery"
];

export default function CloudDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Navigation - Mapped back to specific service anchor */}
        <Link href="/#cloud-service" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        {/* Hero Introduction */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8"
          >
            Cloud & Hosting <br />
            <span className="text-primary">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Our Cloud & Hosting Solutions provide reliable, secure, and scalable infrastructure to power modern websites, applications, and business platforms. We help organizations deploy, manage, and optimize cloud environments that ensure high performance, strong security, and continuous availability. Our services are designed to support businesses of all sizes with flexible cloud architecture and professional server management.
          </motion.p>
        </div>

        {/* Service Modules Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest">Our Cloud Services</h2>
            <div className="flex-1 h-[2px] bg-slate-100 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits & Platforms Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl">
            <h2 className="font-headline text-3xl font-black text-slate-900 mb-10">System Benefits</h2>
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="p-1.5 rounded-full bg-blue-50 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12 flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-black text-slate-900 leading-tight">Platforms <br /><span className="text-primary">We Support</span></h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We leverage industry-leading cloud providers to build resilient infrastructure that grows with your business needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {platforms.map((platform, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary border border-slate-100">
                    <platform.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{platform.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-white">
             <div className="max-w-3xl space-y-8">
               <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight leading-tight">Why Choose Our <br /><span className="text-primary">Cloud Experts?</span></h2>
               <p className="text-slate-400 text-lg font-medium leading-relaxed">
                 Our cloud experts design and manage infrastructure that ensures your systems remain secure, stable, and high-performing. We focus on delivering scalable cloud solutions that support business growth while minimizing operational complexity.
               </p>
               <div className="grid sm:grid-cols-2 gap-6 pt-4">
                 <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-primary/20 text-primary mt-1">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-black text-sm uppercase tracking-wider mb-2">24/7 Monitoring</h4>
                     <p className="text-xs text-slate-500">Continuous system health checks and proactive maintenance.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-primary/20 text-primary mt-1">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-black text-sm uppercase tracking-wider mb-2">Zero Downtime Migration</h4>
                     <p className="text-xs text-slate-500">Professional transition with absolute data integrity.</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center space-y-12">
          <h2 className="font-headline text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Ready to Build Your <br /> Cloud Foundation?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
              <Link href="/#contact">Deploy Your Cloud Infrastructure</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-14 text-xs font-black rounded-full border-2 border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-[0.2em]" asChild>
              <Link href="/#contact">Contact Our Cloud Experts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
