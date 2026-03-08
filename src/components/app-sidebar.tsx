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
    <nav className="fixed inset-y-0 left-0 w-[70px] bg-white border-r border-slate-100 z-[100] flex flex-col items-center py-10 select-none overflow-y-auto no-scrollbar">
      {/* Horizontal Brand & Logo Lockup at the Top */}
      <Link href="#home" className="flex flex-col items-center gap-2 mb-16 group px-1">
        <SidebarLogo />
        <div className="flex flex-col items-center leading-tight">
          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-primary transition-colors">Arkaa</span>
          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-primary">Digital</span>
        </div>
      </Link>

      {/* Navigation Indicators */}
      <div className="flex-1 flex flex-col justify-center gap-6 w-full">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col items-center justify-center w-full group py-2"
            >
              {/* Horizontal Line Indicator */}
              <div
                className={cn(
                  "h-[2px] transition-all duration-500 ease-in-out",
                  isActive 
                    ? "w-10 bg-primary shadow-[0_0_10px_rgba(255,106,0,0.3)] h-[2px]" 
                    : "w-4 bg-slate-200 group-hover:w-8 group-hover:bg-slate-400"
                )}
              />
              
              {/* Contextual Section Label Below the Line */}
              <span className={cn(
                "mt-2 text-[6px] font-black uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap",
                "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 text-slate-400",
                isActive && "opacity-100 translate-y-0 text-primary"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Aesthetic Bottom Spacer */}
      <div className="mt-auto pt-6 opacity-20">
        <div className="w-[1px] h-10 bg-gradient-to-t from-transparent via-slate-400 to-transparent" />
      </div>
    </nav>
  );
}
