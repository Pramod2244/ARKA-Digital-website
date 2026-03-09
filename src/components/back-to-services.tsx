
"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function BackToServices() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Only show on service detail pages (HIMS, Web Dev, UI/UX, Cloud, Marketing)
  const isDetailPage = pathname.includes("-details");
  if (!isDetailPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.8 }}
          className="fixed bottom-8 left-8 z-[120]"
        >
          <a
            href="/#services"
            className={cn(
              "flex items-center gap-3 px-6 py-4 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-all hover:-translate-y-1 active:scale-95 group",
              "text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] whitespace-nowrap"
            )}
          >
            <div className="p-1 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <span>Back to Services</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
