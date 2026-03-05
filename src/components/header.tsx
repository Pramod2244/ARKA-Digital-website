"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Sun, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

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
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 h-14" : "h-16 md:h-20"
    )}>
      <div className="container flex h-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <Sun className="h-6 w-6 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
          </motion.div>
          <span className="font-headline text-xl md:text-2xl font-bold tracking-tight">Arkaa Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-3 py-2 group">
              {link.label}
              <span className="absolute bottom-1 left-3 h-0.5 w-[calc(100%-1.5rem)] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
            <SheetContent side="right" className="w-[280px] bg-background border-l border-white/10">
                <div className="flex items-center gap-2 mt-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Sun className="h-6 w-6 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    </motion.div>
                    <span className="font-headline text-xl font-bold">Arkaa Digital</span>
                </div>
              <nav className="flex flex-col gap-5 mt-10">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
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