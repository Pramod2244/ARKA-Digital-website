
"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-10 w-10 text-primary shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="18" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = i * 22.5;
      const isLong = i % 2 === 0;
      const d = isLong 
        ? "M 50 2 Q 53 15 50 28 Q 47 15 50 2 Z" 
        : "M 50 12 Q 52 20 50 28 Q 48 20 50 12 Z"; 
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
    <footer className="bg-[#2F3E46] text-slate-300 py-24 px-4 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <LogoMark />
              <div className="flex flex-col justify-center leading-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[22px] font-black uppercase tracking-tight text-white">Arkaa</span>
                  <span className="text-[22px] font-black uppercase tracking-tight text-primary">Digital</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mt-1">Building what's next</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-medium text-slate-400">
              We develop world-class digital systems, hospital management software, and high-performance websites for global innovators.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Solutions</h4>
            <nav className="flex flex-col space-y-5 text-xs font-bold uppercase tracking-widest">
              <Link href="/web-dev-details" className="hover:text-primary transition-colors">Website Development</Link>
              <Link href="/hims-details" className="hover:text-primary transition-colors">HIMS Systems</Link>
              <Link href="/cloud-details" className="hover:text-primary transition-colors">Cloud Architecture</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Company</h4>
            <nav className="flex flex-col space-y-5 text-xs font-bold uppercase tracking-widest">
              <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/#services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="/#about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-headline text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Get In Touch</h4>
            <div className="space-y-8 text-xs font-bold tracking-widest">
              <div className="flex items-center gap-5 hover:text-white transition-colors cursor-pointer group lowercase">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                hey@arkaadigital.com
              </div>
              <div className="flex items-center gap-5 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                +91 8050332452
              </div>
              <div className="flex items-start gap-5 hover:text-white transition-colors cursor-pointer group">
                <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-all border border-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="uppercase">Chikkaballapura, Karnataka - 562101</span>
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
