
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SidebarLogo = () => (
  <svg viewBox="0 0 100 100" className="h-10 w-10 text-primary shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Industries", href: "#industries", id: "industries" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function AppSidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[110] transition-all duration-500 py-4 px-6 md:px-12",
      isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-100 py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Branding */}
        <Link href="#home" className="flex items-center gap-3 group">
          <SidebarLogo />
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[18px] font-black uppercase tracking-tight text-slate-900 group-hover:text-primary transition-colors">Arkaa</span>
              <span className="text-[18px] font-black uppercase tracking-tight text-primary">Digital</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-primary mt-0.5">Building what's next</span>
          </div>
        </Link>

        {/* Horizontal Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  isActive ? "text-primary" : "text-slate-500 hover:text-slate-900"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(255,106,0,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
