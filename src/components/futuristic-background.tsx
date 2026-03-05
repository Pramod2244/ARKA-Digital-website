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
      {/* The Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* The Digital Sun - Arka */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[40%] h-[30%] rounded-full bg-primary/30 blur-[80px] pointer-events-none animate-pulse" />
      
      {/* Radiant Tech Rays (Data Network Lines) */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="ray-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blue-ray-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x2 = 50 + Math.cos(angle) * 100 + "%";
          const y2 = 0 + Math.sin(angle) * 100 + "%";
          
          return (
            <motion.line
              key={`ray-${i}`}
              x1="50%"
              y1="0%"
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? "url(#blue-ray-gradient)" : "url(#ray-gradient)"}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.8, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          );
        })}
      </svg>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`gold-p-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: i % 4 === 0 ? "hsl(var(--accent))" : "#fbbf24", // Gold/Blue mix
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 4 === 0 
                ? "0 0 10px hsl(var(--accent) / 0.6)" 
                : "0 0 10px #fbbf24",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Subtle Digital Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={20 + i * 15 + "%"}
            cy={30 + (i % 2) * 40 + "%"}
            r="1.5"
            fill="white"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i }}
          />
        ))}
      </svg>
      
      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background" />
    </div>
  );
}
