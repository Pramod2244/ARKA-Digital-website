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
      {/* 1. Cinematic Lighting Layer - Extremely Subtle for Minimalism */}
      <div className="absolute top-[10%] left-[5%] w-[60%] h-[50%] bg-primary/2 blur-[140px] rounded-full opacity-40" />
      <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[40%] bg-accent/2 blur-[120px] rounded-full opacity-30" />

      {/* 2. Precise Tech Grid - Very Faint Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />
      
      {/* 3. Floating Data Streams (Cinematic Motion) - Reduced count for minimalism */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="stream-primary" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${20 + i * 15}%`}
            y1="-20%"
            x2={`${20 + i * 15}%`}
            y2="120%"
            stroke="url(#stream-primary)"
            strokeWidth="0.5"
            animate={{ 
              opacity: [0, 0.3, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
          />
        ))}
      </svg>

      {/* 4. Neural Particles - Minimalist density */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: "1px",
              height: "1px",
              backgroundColor: i % 2 === 0 ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 2 === 0 ? "0 0 8px hsl(var(--primary) / 0.4)" : "none",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* 5. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-95" />
    </div>
  );
}
