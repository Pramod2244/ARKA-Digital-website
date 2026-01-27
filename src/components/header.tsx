"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Sun, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 h-16" : "h-20"
    )}>
      <div className="container flex h-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sun className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold">Arkaa Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-muted-foreground transition-colors hover:text-foreground px-4 py-2 group">
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center gap-2 mt-4">
                    <Sun className="h-7 w-7 text-primary" />
                    <span className="font-headline text-2xl font-bold">Arkaa Digital</span>
                </div>
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-xl font-medium text-muted-foreground transition-colors hover:text-foreground"
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
