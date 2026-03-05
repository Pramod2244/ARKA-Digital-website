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
    <div className="absolute inset-0 overflow-hidden bg-[#020617] -z-20">
      {/* 1. Cinematic Lighting Layer */}
      <div className="absolute top-[10%] left-[5%] w-[60%] h-[50%] bg-primary/5 blur-[140px] rounded-full opacity-60" />
      <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[40%] bg-accent/5 blur-[120px] rounded-full opacity-40" />
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full opacity-30" />

      {/* 2. Precise Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      {/* 3. Floating Data Streams (Cinematic Motion) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="stream-primary" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="stream-accent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${12 + i * 12}%`}
            y1="-20%"
            x2={`${12 + i * 12}%`}
            y2="120%"
            stroke={i % 3 === 0 ? "url(#stream-primary)" : "url(#stream-accent)"}
            strokeWidth="0.5"
            animate={{ 
              opacity: [0, 0.4, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          />
        ))}
      </svg>

      {/* 4. Neural Particles (Mixed Glows) */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              backgroundColor: i % 5 === 0 
                ? "hsl(var(--primary))" 
                : i % 5 === 1 
                  ? "hsl(var(--accent))" 
                  : "rgba(255,255,255,0.4)",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 5 === 0 
                ? "0 0 12px hsl(var(--primary) / 0.8)" 
                : i % 5 === 1 
                  ? "0 0 12px hsl(var(--accent) / 0.8)" 
                  : "none",
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
      
      {/* 5. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-95" />
    </div>
  );
}