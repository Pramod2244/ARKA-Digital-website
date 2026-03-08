"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 26H26L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-secondary" />
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
          <span className="font-headline text-xl font-black tracking-tight uppercase text-slate-900">
            Arkaa <span className="text-primary">Digital</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-primary px-4 py-2 transition-colors">
              {link.label}
            </a>
          ))}
          <Button className="ml-4 bg-secondary text-white font-bold rounded-full h-11 px-8 shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-95">
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
                    <a href={link.href} className="text-sm uppercase tracking-widest font-bold text-slate-600 hover:text-primary">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Button className="bg-primary text-white font-bold rounded-full w-full h-12">
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