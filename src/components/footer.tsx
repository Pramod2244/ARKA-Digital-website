"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 26H26L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-secondary" />
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <LogoMark />
              <div>
                <span className="block font-headline text-2xl font-black tracking-tight text-white uppercase">Arkaa</span>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-primary font-black">Engineering the Future</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-medium">
              We develop world-class digital systems, hospital management software, and high-performance websites for global innovators.
            </p>
            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white">
                <Github className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-widest text-xs mb-8">Solutions</h4>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="#" className="hover:text-primary transition-colors">Website Development</Link>
              <Link href="#" className="hover:text-primary transition-colors">HIMS Systems</Link>
              <Link href="#" className="hover:text-primary transition-colors">Custom Web Apps</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cloud Architecture</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
              <Link href="#services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-widest text-xs mb-8">Get In Touch</h4>
            <div className="space-y-6 text-sm font-medium">
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                hey@arkaadigital.com
              </div>
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Phone className="h-4 w-4" />
                </div>
                +91 8050332452
              </div>
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                Chikkaballapura, Karnataka - 562101
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-black">
          <p>© {year || '...'} Arkaa Digital. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}