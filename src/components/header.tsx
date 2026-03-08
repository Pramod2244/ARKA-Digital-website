"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';

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
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
    { href: "#about", label: "About" },
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
            <span className="text-[7px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1 italic">Building what's next</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:flex bg-secondary text-white font-bold rounded-full h-10 px-8 shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-95 uppercase tracking-widest text-[9px]" asChild>
            <Link href="#contact">Start Your Project</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100 rounded-full h-12 w-12 group transition-colors">
                <Menu className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-none p-0 border-none bg-white">
              <div className="flex h-full w-full overflow-hidden">
                {/* Left Side: Navigation Panel */}
                <div className="w-full lg:w-1/2 h-full flex flex-col p-8 md:p-16 lg:p-24 relative bg-white">
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

                  <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-primary italic">Navigate Your Next</span>
                  </div>

                  <nav className="flex flex-col gap-4 md:gap-8">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                      >
                        <SheetClose asChild>
                          <a 
                            href={link.href} 
                            className="group relative inline-block text-4xl md:text-6xl font-black text-slate-900 hover:text-primary transition-colors py-2"
                          >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
                          </a>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-20">
                    <SheetClose asChild>
                      <Button 
                        size="lg" 
                        className="h-16 px-12 text-sm font-black rounded-full bg-secondary text-white shadow-2xl shadow-secondary/20 hover:bg-secondary/90 transition-all uppercase tracking-[0.2em] group"
                        asChild
                      >
                        <Link href="#contact" className="flex items-center gap-4">
                          Start Your Project
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>

                {/* Right Side: Visual Accent Panel */}
                <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden bg-gradient-to-br from-white via-[#FFF4EC] to-[#F5F9FF]">
                  <div className="absolute inset-0 bg-grid-slate opacity-[0.03]" />
                  
                  {/* Kinetic Accent Shapes */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-primary/10 rounded-full opacity-30"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 orange-gradient-bg opacity-[0.05] rounded-full blur-[100px]" />
                  <div className="absolute bottom-[10%] left-[10%] w-60 h-60 bg-secondary/10 rounded-full blur-[80px]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="space-y-6"
                    >
                      <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Arkaa Digital Core</h4>
                      <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                        Engineering world-class digital systems and high-performance experiences for global innovators.
                      </p>
                      <div className="pt-10 flex justify-center gap-12 grayscale opacity-40">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-3xl font-black text-slate-900">100+</span>
                          <span className="text-[8px] uppercase font-black tracking-widest text-slate-400">Systems Delivered</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-3xl font-black text-slate-900">5+</span>
                          <span className="text-[8px] uppercase font-black tracking-widest text-slate-400">Years Active</span>
                        </div>
                      </div>
                    </motion.div>
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
