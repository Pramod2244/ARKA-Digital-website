
"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, ArrowRight, Globe, Hospital, Cpu, Palette, Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const LogoMark = () => (
  <svg viewBox="0 0 100 100" className="h-10 w-10 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

const serviceItems = [
  {
    title: "Website Development",
    description: "Modern performance-first sites for global businesses.",
    icon: Globe,
    href: "#services",
  },
  {
    title: "HIMS Systems",
    description: "Streamlined clinical operations for hospitals.",
    icon: Hospital,
    href: "#services",
  },
  {
    title: "Custom Web Applications",
    description: "Scalable business automation and workflows.",
    icon: Cpu,
    href: "#services",
  },
  {
    title: "UI / UX Design",
    description: "User-centric interface design and prototyping.",
    icon: Palette,
    href: "#services",
  },
  {
    title: "Cloud Solutions",
    description: "Robust infrastructure and cloud migration services.",
    icon: Cloud,
    href: "#services",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "container mx-auto max-w-7xl flex items-center justify-between px-6 h-16 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full" 
          : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="flex flex-col">
            <span className="font-headline text-lg font-black tracking-[0.3em] uppercase text-slate-900 leading-none">
              Arkaa <span className="text-primary">Digital</span>
            </span>
            <span className="text-[6px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1 italic">Building what's next</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="#home" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors",
                    "text-slate-600 hover:text-primary"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xs">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6 grid grid-cols-2 gap-4">
                    <div className="col-span-1 bg-slate-50 rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-primary mb-4">Our Expertise</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                          We develop world-class digital systems and high-performance websites for global innovators.
                        </p>
                      </div>
                      <Button variant="link" className="p-0 text-xs font-black uppercase tracking-widest h-auto group text-primary" asChild>
                        <Link href="#services">
                          View All Services
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className="col-span-1 space-y-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:text-primary group-hover:border-primary/20 transition-all">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">{item.title}</div>
                            <div className="text-[10px] font-medium text-slate-400 leading-tight">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.slice(1).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors",
                      "text-slate-600 hover:text-primary"
                    )}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:flex bg-secondary text-white font-bold rounded-full h-10 px-8 shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-95 uppercase tracking-widest text-[9px]" asChild>
            <Link href="#contact">Start Your Project</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-slate-900 hover:bg-slate-100 rounded-full h-10 w-10 group transition-colors">
                <Menu className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-none p-0 border-none bg-white">
              <div className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Access Arkaa Digital's main sections and project inquiry.</SheetDescription>
              </div>
              <div className="flex h-full w-full overflow-hidden">
                <div className="w-full h-full flex flex-col p-8 md:p-16 relative bg-white">
                  <div className="flex items-center justify-between mb-20">
                    <div className="flex items-center gap-3">
                      <LogoMark />
                      <span className="font-headline text-lg font-black tracking-widest uppercase text-slate-900">Arkaa</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-50">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex flex-col gap-6">
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary italic">Menu</span>
                    </div>
                    {[...navLinks.slice(0, 1), { href: "#services", label: "Services" }, ...navLinks.slice(1)].map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                      >
                        <SheetClose asChild>
                          <a 
                            href={link.href} 
                            className="group relative inline-block text-3xl md:text-5xl font-black text-slate-900 hover:text-primary transition-colors py-2"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-10">
                    <SheetClose asChild>
                      <Button 
                        size="lg" 
                        className="w-full h-16 px-12 text-sm font-black rounded-full bg-secondary text-white shadow-2xl shadow-secondary/20 hover:bg-secondary/90 transition-all uppercase tracking-[0.2em] group"
                        asChild
                      >
                        <Link href="#contact" className="flex items-center justify-center gap-4">
                          Start Your Project
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
