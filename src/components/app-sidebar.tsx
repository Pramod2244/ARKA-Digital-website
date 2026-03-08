"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#portfolio", id: "portfolio" },
  { label: "Technologies", href: "#technologies", id: "technologies" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const SidebarLogo = () => (
  <svg viewBox="0 0 100 100" className="h-8 w-8 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
      rootMargin: "-25% 0px -65% 0px",
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
    <nav className="fixed inset-y-0 left-0 w-[70px] bg-white border-r border-slate-100 z-[100] flex flex-col items-center py-12 select-none">
      {/* Brand & Logo Lockup */}
      <Link href="#home" className="flex flex-col items-center gap-6 mb-24 group">
        <SidebarLogo />
        <div className="relative h-24 flex items-center justify-center">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-900 rotate-[-90deg] origin-center whitespace-nowrap transition-colors group-hover:text-primary">
            Arkaa Digital
          </span>
        </div>
      </Link>

      {/* Navigation Line Indicators */}
      <div className="flex-1 flex flex-col justify-center gap-14 w-full">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex items-center justify-center w-full group py-3"
            >
              {/* Horizontal Line Indicator */}
              <div
                className={cn(
                  "h-[1.5px] transition-all duration-700 ease-in-out",
                  isActive 
                    ? "w-10 bg-primary shadow-[0_0_15px_rgba(255,106,0,0.4)] h-[2.5px]" 
                    : "w-5 bg-slate-200 group-hover:w-8 group-hover:bg-slate-400"
                )}
              />
              
              {/* Subtle Section Label */}
              <span className={cn(
                "absolute left-full ml-6 text-[8px] font-black uppercase tracking-[0.3em] transition-all duration-500 opacity-0 -translate-x-4 pointer-events-none whitespace-nowrap",
                "group-hover:opacity-100 group-hover:translate-x-0 text-slate-400",
                isActive && "opacity-100 translate-x-0 text-primary"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Aesthetic Spacer */}
      <div className="mt-auto pt-10">
        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent via-slate-100 to-transparent" />
      </div>
    </nav>
  );
}
