
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-[120] p-4 rounded-full bg-primary text-white shadow-2xl transition-all hover:bg-primary/90 hover:-translate-y-1 active:scale-95 group",
            "glow-border-orange"
          )}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
