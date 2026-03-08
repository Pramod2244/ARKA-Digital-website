"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Home, 
  LayoutGrid, 
  Briefcase, 
  Cpu, 
  Info, 
  Mail, 
  Plus,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const LogoMark = () => (
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

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Services", icon: LayoutGrid, href: "#services" },
  { label: "Projects", icon: Briefcase, href: "#portfolio" },
  { label: "Technologies", icon: Cpu, href: "#technologies" },
  { label: "About", icon: Info, href: "#about" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-white/5 bg-[#1E2A32] text-slate-300">
      <SidebarHeader className="py-8">
        <Link href="/" className="flex items-center gap-4 px-2 overflow-hidden">
          <div className="flex-shrink-0">
            <LogoMark />
          </div>
          <div className={cn(
            "flex flex-col transition-all duration-300",
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          )}>
            <span className="font-headline text-sm font-black tracking-[0.2em] uppercase text-white leading-none">
              Arkaa
            </span>
            <span className="text-[6px] uppercase tracking-[0.3em] text-primary font-black mt-1 italic">Digital</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu className="gap-2">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.label}
                className="h-12 rounded-xl hover:bg-white/5 hover:text-primary transition-all group"
              >
                <a href={item.href} className="flex items-center gap-4">
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild
              className="h-12 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all overflow-hidden"
            >
              <a href="#contact" className="flex items-center gap-4">
                <Plus className="h-5 w-5 flex-shrink-0" />
                <span className="font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Start Project</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {!isCollapsed && (
          <div className="mt-8 px-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Systems Status</p>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-500/80">Operational</span>
              </div>
            </div>
          </div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
