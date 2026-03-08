"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      d="M16 4L6 26H26L16 4Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <motion.circle 
      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      cx="16" cy="17" r="5" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeDasharray="2 2"
    />
    <path d="M12 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-accent/10 h-14" : "h-16 md:h-20"
    )}>
      <div className="container flex h-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="font-headline text-lg md:text-xl font-bold tracking-[0.15em] uppercase text-foreground group-hover:text-primary transition-colors duration-300">
            Arkaa Digital
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-[11px] uppercase tracking-widest font-bold text-muted-foreground transition-colors hover:text-foreground px-4 py-2 group">
              {link.label}
              <span className="absolute bottom-1 left-4 h-0.5 w-[calc(100%-2rem)] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l border-accent/10">
                <div className="flex items-center gap-3 mt-2">
                    <LogoMark />
                    <span className="font-headline text-lg font-bold tracking-[0.15em] uppercase text-foreground">Arkaa Digital</span>
                </div>
              <nav className="flex flex-col gap-5 mt-10">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm uppercase tracking-widest font-bold text-muted-foreground transition-colors hover:text-foreground"
                    >
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