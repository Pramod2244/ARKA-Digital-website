"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#portfolio", id: "portfolio" },
  { label: "Stack", href: "#technologies", id: "technologies" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const SidebarLogo = () => (
  <svg viewBox="0 0 100 100" className="h-6 w-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
    <nav className="fixed inset-y-0 left-0 w-[70px] bg-transparent z-[100] flex flex-col items-center py-10 select-none pointer-events-none">
      {/* Brand Lockup - Top Left (Fixed, Interactive) */}
      <Link href="#home" className="flex flex-col items-center gap-2 mb-16 group px-1 pointer-events-auto">
        <SidebarLogo />
        <div className="flex flex-col items-center leading-tight">
          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-primary transition-colors">Arkaa</span>
          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-primary">Digital</span>
        </div>
      </Link>

      {/* Navigation Indicators - Minimal Circles (Interactive) */}
      <div className="flex-1 flex flex-col justify-center gap-10 w-full pointer-events-auto">
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
                  "w-2 h-2 rounded-full border transition-all duration-500 ease-in-out",
                  isActive 
                    ? "bg-primary border-primary shadow-[0_0_12px_rgba(255,106,0,0.6)] scale-125" 
                    : "bg-transparent border-white/30 group-hover:border-white/60 group-hover:scale-110"
                )}
              />
              
              {/* Label Reveal Below the Circle */}
              <span className={cn(
                "mt-3 text-[7px] font-black uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap",
                "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 text-white/50",
                isActive && "opacity-100 translate-y-0 text-primary"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Aesthetic Spacer */}
      <div className="mt-auto pt-6 opacity-10">
        <div className="w-[1px] h-10 bg-gradient-to-t from-transparent via-white to-transparent" />
      </div>
    </nav>
  );
}
