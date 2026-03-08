
"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-12 w-12 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Central Solar Core */}
    <circle cx="50" cy="50" r="22" />
    {/* 16 Alternating Long and Short Razor-Sharp Triangular Rays */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = i * 22.5;
      const isLong = i % 2 === 0;
      // Long rays extend near the edge, short rays are smaller. Both are very thin.
      const d = isLong 
        ? "M50 2 L51.5 34 L48.5 34 Z" 
        : "M50 16 L51.2 34 L48.8 34 Z";
      return (
        <path
          key={i}
          d={d}
          transform={`rotate(${angle} 50 50)`}
        />
      );
    })}
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A1F44] text-slate-300 py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <LogoMark />
              <div className="flex flex-col">
                <span className="block font-headline text-2xl font-black tracking-[0.3em] text-white uppercase leading-none">Arkaa</span>
                <span className="block text-[8px] uppercase tracking-[0.4em] text-primary font-black mt-2">Engineering the Future</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-medium text-slate-400">
              We develop world-class digital systems, hospital management software, and high-performance websites for global innovators.
            </p>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer text-white border border-white/5 hover:border-primary/50 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer text-white border border-white/5 hover:border-primary/50 group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer text-white border border-white/5 hover:border-primary/50 group">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Solutions</h4>
            <nav className="flex flex-col space-y-5 text-xs font-bold uppercase tracking-widest">
              <Link href="#" className="hover:text-primary transition-colors">Website Development</Link>
              <Link href="#" className="hover:text-primary transition-colors">HIMS Systems</Link>
              <Link href="#" className="hover:text-primary transition-colors">Custom Web Apps</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cloud Architecture</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Company</h4>
            <nav className="flex flex-col space-y-5 text-xs font-bold uppercase tracking-widest">
              <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
              <Link href="#services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Get In Touch</h4>
            <div className="space-y-8 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-5 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                hey@arkaadigital.com
              </div>
              <div className="flex items-center gap-5 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                +91 8050332452
              </div>
              <div className="flex items-start gap-5 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-all border border-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                Chikkaballapura, Karnataka - 562101
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase tracking-[0.4em] font-black">
          <p>© {year || '...'} Arkaa Digital. All rights reserved.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
