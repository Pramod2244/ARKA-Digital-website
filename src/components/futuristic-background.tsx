"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FuturisticBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] -z-10">
      {/* 1. Subtle Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />
      
      {/* 2. Soft Atmospheric Glows */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />

      {/* 3. AI Network Connections & Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="flow-orange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical Data Stream Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${10 + i * 15}%`}
            y1="-20%"
            x2={`${10 + i * 15}%`}
            y2="120%"
            stroke={i % 2 === 0 ? "url(#flow-blue)" : "url(#flow-orange)"}
            strokeWidth="0.5"
            animate={{ 
              opacity: [0, 0.4, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 25 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
          />
        ))}
      </svg>

      {/* 4. Floating Glowing Particles (Mixed Colors) */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: i % 4 === 0 
                ? "hsl(var(--accent))" 
                : i % 4 === 1 
                  ? "hsl(var(--primary))" 
                  : "#ffffff",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 4 === 0 
                ? "0 0 10px hsl(var(--accent) / 0.6)" 
                : i % 4 === 1 
                  ? "0 0 10px hsl(var(--primary) / 0.6)" 
                  : "0 0 10px rgba(255,255,255,0.3)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
              scale: [0.7, 1.3, 0.7]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
      
      {/* 5. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
    </div>
  );
}