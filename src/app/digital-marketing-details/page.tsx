
"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Megaphone, 
  Search, 
  Share2, 
  Target, 
  FileText, 
  Mail, 
  Globe, 
  LineChart,
  CheckCircle2,
  ArrowLeft,
  Smartphone,
  Eye,
  Activity,
  Zap,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const marketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Website SEO optimization, keyword strategy, and technical improvements to rank higher on search engines.",
    icon: Search
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic content creation and audience engagement across platforms like Instagram, LinkedIn, and Facebook.",
    icon: Share2
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Google Ads and social media ad management optimized for conversion tracking and ROI.",
    icon: Target
  },
  {
    title: "Content Marketing",
    desc: "Blog writing, copywriting, and strategic content planning to drive authority and brand visibility.",
    icon: FileText
  },
  {
    title: "Email Marketing",
    desc: "Automated workflows and personalized campaigns designed to increase customer retention and engagement.",
    icon: Mail
  },
  {
    title: "Online Brand Management",
    desc: "Reputation monitoring and visibility strategies to build a professional digital brand presence.",
    icon: Eye
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    desc: "Landing page tuning and A/B testing to maximize the value of every visitor to your site.",
    icon: Activity
  },
  {
    title: "Analytics & Reporting",
    desc: "Comprehensive performance reports and ROI analysis to continuously improve marketing results.",
    icon: BarChart3
  }
];

const benefits = [
  "Increased online visibility and brand awareness",
  "More qualified leads and higher website traffic",
  "Improved customer engagement and loyalty",
  "Measurable marketing results and transparent ROI",
  "Scalable solutions tailored to your business goals"
];

const platforms = [
  { name: "Google Ads", icon: Globe },
  { name: "Facebook Ads", icon: Smartphone },
  { name: "LinkedIn Marketing", icon: Zap },
  { name: "Marketing Analytics", icon: LineChart }
];

export default function DigitalMarketingDetailsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Navigation - Mapped back to specific service anchor */}
        <Link href="/#marketing-service" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
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
            Digital Marketing <br />
            <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Our Digital Marketing services help businesses build a strong online presence and connect with their target audience effectively. We use data-driven marketing strategies, modern digital tools, and creative campaigns to increase brand visibility, generate leads, and drive business growth. From search engine optimization to social media marketing and paid advertising, we provide comprehensive digital marketing solutions tailored to your business goals.
          </motion.p>
        </div>

        {/* Service Modules Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest">Our Marketing Services</h2>
            <div className="flex-1 h-[2px] bg-slate-100 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service, i) => (
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

        {/* Platforms & Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl">
            <h2 className="font-headline text-3xl font-black text-slate-900 mb-10">Marketing Benefits</h2>
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
              <h2 className="font-headline text-3xl font-black text-slate-900 leading-tight">Platforms <br /><span className="text-primary">We Work With</span></h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We leverage industry-leading platforms and analytics tools to ensure your campaigns reach the right audience at the right time.
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
               <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight leading-tight">Why Choose Our <br /><span className="text-primary">Marketing Experts?</span></h2>
               <p className="text-slate-400 text-lg font-medium leading-relaxed">
                 Our marketing experts combine creativity with data-driven strategies to deliver measurable results. We focus on building long-term growth for your business by targeting the right audience and optimizing campaigns for maximum performance.
               </p>
               <div className="grid sm:grid-cols-2 gap-6 pt-4">
                 <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-primary/20 text-primary mt-1">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-black text-sm uppercase tracking-wider mb-2">Customized Strategies</h4>
                     <p className="text-xs text-slate-500">Tailored marketing plans based on your industry and goals.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-primary/20 text-primary mt-1">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <div>
                     <h4 className="font-black text-sm uppercase tracking-wider mb-2">Data-Driven Growth</h4>
                     <p className="text-xs text-slate-500">Continuous optimization using real-time performance data.</p>
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
            Ready to Amplify Your <br /> Digital Reach?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-14 text-xs font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all uppercase tracking-[0.2em]" asChild>
              <Link href="/#contact">Start Your Marketing Campaign</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-14 text-xs font-black rounded-full border-2 border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-[0.2em]" asChild>
              <Link href="/#contact">Talk to Our Marketing Experts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
