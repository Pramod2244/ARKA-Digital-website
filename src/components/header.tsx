"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 26H26L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
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
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="font-headline text-xl font-bold tracking-[0.1em] uppercase text-white">
            Arkaa <span className="text-primary">Digital</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-white px-4 py-2 transition-colors">
              {link.label}
            </a>
          ))}
          <Button className="ml-4 bg-primary text-white font-bold rounded-xl h-10 px-6 text-[10px] uppercase tracking-widest">
            Consult Now
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/5">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="text-sm uppercase tracking-widest font-bold text-muted-foreground hover:text-white">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}