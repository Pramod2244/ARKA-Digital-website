"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#portfolio", id: "portfolio" },
  { label: "Industries", href: "#industries", id: "industries" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const SidebarLogo = () => (
  <svg viewBox="0 0 100 100" className="h-8 w-8 text-primary shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

export function AppSidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed Top-Left Branding - Horizontal Lockup */}
      <div className="fixed top-10 left-10 z-[110] select-none pointer-events-auto">
        <Link href="#home" className="flex items-center gap-4 group">
          <SidebarLogo />
          <div className="flex flex-col leading-none">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-900 group-hover:text-primary transition-colors">Arkaa</span>
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary">Digital</span>
          </div>
        </Link>
      </div>

      {/* Fixed Vertical Navigation Dots */}
      <nav className="fixed inset-y-0 left-0 w-[70px] bg-transparent z-[100] flex flex-col items-center justify-center py-10 select-none pointer-events-none">
        <div className="flex flex-col gap-10 pointer-events-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative flex flex-col items-center group py-2"
              >
                {/* Circular Indicator */}
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ease-in-out",
                    isActive 
                      ? "bg-primary border-primary shadow-[0_0_15px_rgba(255,106,0,0.5)] scale-125" 
                      : "bg-transparent border-slate-300 group-hover:border-slate-500 group-hover:scale-110"
                  )}
                />
                
                {/* Label Reveal Below the Circle */}
                <span className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-4 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap pointer-events-none",
                  "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-slate-400",
                  isActive && "opacity-100 translate-y-0 text-primary"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
