"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-10 w-10 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Central Solar Core with a gap from the rays */}
    <circle cx="50" cy="50" r="18" />
    {/* 16 Alternating Long and Short Petal-Shaped Rays with a gap from the core */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = i * 22.5;
      const isLong = i % 2 === 0;
      // Precise path for the "leaf" or "petal" ray shape
      // Inner tips stop at y=28 (Gap of 10 units from center, 4 units from circle boundary at radius 18/radius 24 context)
      // Actually circle radius is 18. So distance is 50-18=32. Inner tip at 28 means a 4 unit gap.
      const d = isLong 
        ? "M 50 2 Q 53 15 50 28 Q 47 15 50 2 Z" // Long petal ray
        : "M 50 12 Q 52 20 50 28 Q 48 20 50 12 Z"; // Short petal ray
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="flex flex-col">
            <span className="font-headline text-xl font-black tracking-[0.3em] uppercase text-slate-900 leading-none">
              Arkaa <span className="text-primary">Digital</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Building what's next</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 hover:text-primary px-4 py-2 transition-colors">
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-4 bg-secondary text-white font-bold rounded-full h-10 px-8 shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-95 uppercase tracking-widest text-[9px]">
            Start Your Project
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-slate-100">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="text-xs uppercase tracking-widest font-bold text-slate-600 hover:text-primary">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Button className="bg-primary text-white font-bold rounded-full w-full h-12 uppercase tracking-widest text-xs">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
