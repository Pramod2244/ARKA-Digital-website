
"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Code2, 
  Smartphone, 
  Settings, 
  Zap, 
  ShieldCheck, 
  LifeBuoy,
  CheckCircle2,
  ArrowLeft,
  Layout,
  Cpu,
  Database,
  Lock,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const devModules = [
  {
    title: "Business Website Development",
    desc: "Professional company profiles, portfolio sites, and high-converting landing pages tailored for your brand.",
    icon: Globe
  },
  {
    title: "E-Commerce Development",
    desc: "Robust online stores with product management, secure payment gateways, and inventory tracking.",
    icon: ShoppingCart
  },
  {
    title: "Custom Web Applications",
    desc: "Tailor-made web solutions for complex business logic, workflow automation, and enterprise scaling.",
    icon: Code2
  },
  {
    title: "Responsive Web Design",
    desc: "Mobile-first layouts ensuring a perfect user experience across all devices and browser types.",
    icon: Smartphone
  },
  {
    title: "Content Management (CMS)",
    desc: "User-friendly platforms like WordPress or custom headless CMS for easy article and media management.",
    icon: Settings
  },
  {
    title: "Performance Optimization",
    desc: "Blazing fast load speeds through code minification, image optimization, and advanced caching.",
    icon: Zap
  },
  {
    title: "Security Implementation",
    desc: "Enterprise-grade SSL, secure authentication, malware protection, and rigorous data encryption.",
    icon: ShieldCheck
  },
  {
    title: "Maintenance & Support",
    desc: "Regular updates, security patches, bug fixes, and 24/7 monitoring to keep your site performing.",
    icon: LifeBuoy
  }
];

const benefits = [
  "Strong online presence for your business",
  "Improved user experience (UX/UI)",
  "Better search engine (SEO) visibility",
  "Higher customer engagement and conversion",
  "Scalable and future-ready cloud architecture"
];

const technologies = [
  { icon: Layout, title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
  { icon: Cpu, title: "Backend", desc: "Node.js, Python, Serverless Functions" },
  { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB, Firestore" },
  { icon: Lock, title: "Cloud", desc: "AWS, Google Cloud, Firebase Hosting" }
];

export default function WebDevDetailsPage() {
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
            Professional Website <br />
            <span className="text-primary">Development Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Our Website Development services help businesses build modern, responsive, and high-performing websites that strengthen their online presence. We design and develop websites that are visually appealing, user-friendly, and optimized for performance, security, and scalability. Whether you need a business website, e-commerce platform, or custom web application, our team delivers solutions tailored to your goals.
          </motion.p>
        </div>

        {/* Service Modules Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest">Our Development Services</h2>
            <div className="flex-1 h-[2px] bg-slate-100 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6">
                  <module.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{module.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits & Tech Stack Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl">
            <h2 className="font-headline text-3xl font-black text-slate-900 mb-10">Development Benefits</h2>
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
              <h2 className="font-headline text-3xl font-black text-slate-900 leading-tight">Technologies <br /><span className="text-primary">We Use</span></h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We leverage the most advanced and stable technologies to build high-performance solutions that are secure, scalable, and easy to maintain.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {technologies.map((tech, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary border border-slate-100">
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{tech.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative z-10 space-y-12">
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Start Your <br /> Website Project?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Let's build a future-ready digital presence that drives growth and elevates your brand's authority.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-14 text-xs font-black rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-white/10 transition-all uppercase tracking-[0.2em]" asChild>
                <Link href="/#contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
