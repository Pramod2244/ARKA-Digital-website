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
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Services", icon: LayoutGrid, href: "#services" },
  { label: "Projects", icon: Briefcase, href: "#portfolio" },
  { label: "Technologies", icon: Cpu, href: "#technologies" },
  { label: "About", icon: Info, href: "#about" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const SidebarLogo = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className="flex items-center justify-center h-12 w-12 transition-all duration-500">
    <svg viewBox="0 0 100 100" className={cn("text-primary transition-all duration-500", isCollapsed ? "h-4 w-4" : "h-8 w-8")} fill="currentColor">
      <circle cx="50" cy="50" r="30" />
    </svg>
  </div>
);

export function AppSidebar() {
  const { state, setOpen } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r border-white/5 bg-[#1E2A32]/95 backdrop-blur-xl transition-all duration-500 ease-in-out group/sidebar"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <SidebarHeader className="py-10 flex items-center justify-center overflow-hidden">
        <Link href="/" className="flex items-center gap-4 px-2">
          <SidebarLogo isCollapsed={isCollapsed} />
          {!isCollapsed && (
            <div className="flex flex-col animate-in fade-in slide-in-from-left-2 duration-500">
              <span className="font-headline text-xs font-black tracking-[0.4em] uppercase text-white leading-none">
                Arkaa
              </span>
              <span className="text-[6px] uppercase tracking-[0.5em] text-primary font-black mt-1 italic">Digital</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 flex flex-col justify-center gap-4">
        <SidebarMenu className="gap-6">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.label}
                className={cn(
                  "h-10 rounded-full transition-all duration-300 group/item relative overflow-hidden",
                  "hover:bg-white/5 hover:text-primary"
                )}
              >
                <a href={item.href} className="flex items-center gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                    <item.icon className={cn(
                      "transition-all duration-300",
                      isCollapsed ? "h-4 w-4 text-slate-400 group-hover/item:text-primary" : "h-5 w-5"
                    )} />
                  </div>
                  {!isCollapsed && (
                    <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-300 group-hover/item:text-white animate-in fade-in slide-in-from-left-4 duration-500">
                      {item.label}
                    </span>
                  )}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
