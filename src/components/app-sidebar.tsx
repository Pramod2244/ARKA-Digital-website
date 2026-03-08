"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SidebarLogo = () => (
  <div className="flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="h-6 w-6 text-primary" fill="currentColor">
      <circle cx="50" cy="50" r="35" />
    </svg>
  </div>
);

export function AppSidebar() {
  const { state } = useSidebar();
  // Ensure we don't expand by ignoring the 'state' and forcing a minimal width
  
  return (
    <Sidebar 
      collapsible="none" 
      className="w-[70px] border-r border-slate-200 bg-[#F7F8FA] fixed inset-y-0 left-0 z-50 transition-none"
    >
      <SidebarHeader className="py-12 flex items-center justify-center">
        <Link href="/" className="flex flex-col items-center gap-2">
          <SidebarLogo />
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-900 mt-2 rotate-[-90deg] origin-center">
            Arkaa
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex flex-col items-center justify-center gap-12 py-10">
        <SidebarMenu className="flex flex-col items-center gap-16">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton 
                asChild 
                className="p-0 hover:bg-transparent active:bg-transparent"
              >
                <a 
                  href={item.href} 
                  className="flex flex-col items-center gap-6 group/nav"
                >
                  <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover/nav:text-primary transition-colors vertical-text rotate-180">
                    {item.label}
                  </span>
                  <div className="w-4 h-[1px] bg-slate-200 group-hover/nav:bg-primary group-hover/nav:w-6 transition-all duration-300" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </Sidebar>
  );
}
