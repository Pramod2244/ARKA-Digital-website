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
      {/* The Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Glowing Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />

      {/* Moving Light Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M ${-100} ${100 + i * 150} L ${2000} ${100 + i * 150 + 100}`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0, x: -100 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
              x: [0, 200, 400]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </svg>

      {/* Floating Digital Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 2 === 0 
                ? "0 0 10px hsl(var(--primary) / 0.5)" 
                : "0 0 10px hsl(var(--accent) / 0.5)"
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Subtle Data Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            r="2"
            fill="white"
            cx={20 + i * 25 + "%"}
            cy={30 + (i % 2) * 40 + "%"}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i }}
          />
        ))}
      </svg>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
