"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sun className="h-8 w-8 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
              </motion.div>
              <span className="font-headline text-2xl font-bold">Arkaa Digital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We Build Future-Ready Digital Experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Quick Links</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">Why Us</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Services</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Software Development</a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Cloud & DevOps</a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI & Automation</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Contact Us</p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hey@arkaadigital.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 8050332452</p>
                <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-primary" /> 29th ward behind Mayuga Bakery, vapasandra, Chikkaballapura, Karnataka - 562101</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {year || '...'} Arkaa Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
