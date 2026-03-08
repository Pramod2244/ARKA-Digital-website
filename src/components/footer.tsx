"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const LogoMark = () => (
  <svg viewBox="0 0 40 40" className="h-12 w-12 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L8 35H14L20 20L26 35H32L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="22" r="6" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="20" cy="22" r="2" fill="currentColor" />
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <LogoMark />
              <div className="flex flex-col">
                <span className="block font-headline text-2xl font-black tracking-[0.1em] text-white uppercase leading-none">Arkaa</span>
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
            <nav className="flex flex-col space-y-5 text-xs font-black uppercase tracking-widest">
              <Link href="#" className="hover:text-primary transition-colors">Website Development</Link>
              <Link href="#" className="hover:text-primary transition-colors">HIMS Systems</Link>
              <Link href="#" className="hover:text-primary transition-colors">Custom Web Apps</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cloud Architecture</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Company</h4>
            <nav className="flex flex-col space-y-5 text-xs font-black uppercase tracking-widest">
              <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
              <Link href="#services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Get In Touch</h4>
            <div className="space-y-8 text-xs font-black uppercase tracking-widest">
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