"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 26H26L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6"/>
    <path d="M12 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-accent/10">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <LogoMark />
              <div>
                <span className="block font-headline text-xl font-bold tracking-[0.15em] uppercase text-foreground">Arkaa Digital</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-primary font-medium">Engineering the Future</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Designing and building high-performance digital ecosystems for the next generation of innovators.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground uppercase tracking-wider">Quick Links</p>
              <nav className="mt-6 flex flex-col space-y-3">
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">Home</a>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</a>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-accent transition-colors">Why Us</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">Testimonials</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground uppercase tracking-wider">Expertise</p>
              <nav className="mt-6 flex flex-col space-y-3">
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Software Dev</a>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Cloud Architecture</a>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">AI Engineering</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground uppercase tracking-wider">Contact</p>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> hey@arkaadigital.com</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +91 8050332452</p>
                <p className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-1 text-accent shrink-0" /> Chikkaballapura, Karnataka - 562101</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs text-muted-foreground uppercase tracking-widest font-medium">
          <p>&copy; {year || '...'} Arkaa Digital. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}