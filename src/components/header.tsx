"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const LogoMark = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized 'A' Logo Mark */}
    <path d="M20 5L8 35H14L20 20L26 35H32L20 5Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M20 5L8 35H14L20 20L26 35H32L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Digital Sun Core */}
    <circle cx="20" cy="22" r="6" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="3 3" className="animate-[spin_10s_linear_infinite]" />
    <circle cx="20" cy="22" r="2" fill="hsl(var(--primary))" className="animate-pulse" />
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
            <span className="font-headline text-xl font-black tracking-[0.15em] uppercase text-slate-900 leading-none">
              Arkaa <span className="text-primary">Digital</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Engineering the Future</span>
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