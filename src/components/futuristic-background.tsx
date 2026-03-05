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
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />

      {/* Glowing Ambient Orbs - Dynamic Depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]" />

      {/* Moving Light Lines (Data Streams) */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`stream-${i}`}
            d={`M ${-500} ${100 + i * 180} L ${2500} ${100 + i * 180 + 150}`}
            stroke={i % 2 === 0 ? "url(#line-gradient-primary)" : "url(#line-gradient-accent)"}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0, x: -200 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
              x: [0, 300, 600]
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </svg>

      {/* High-Tech Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              backgroundColor: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 2 === 0 
                ? "0 0 12px hsl(var(--primary) / 0.8)" 
                : "0 0 12px hsl(var(--accent) / 0.8)"
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 7 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Subtle AI Connection Nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {[...Array(5)].map((_, i) => {
          const cx = 15 + i * 20 + "%";
          const cy = 20 + (i % 3) * 25 + "%";
          return (
            <React.Fragment key={`node-group-${i}`}>
              <motion.circle
                cx={cx}
                cy={cy}
                r="3"
                fill="white"
                animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r="8"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i }}
              />
            </React.Fragment>
          );
        })}
      </svg>
      
      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
    </div>
  );
}