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
      {/* 1. The Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />

      {/* 2. The Digital Sun (Arka) - Core Glow */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[100%] h-[70%] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50%] h-[40%] rounded-full bg-primary/20 blur-[100px] pointer-events-none animate-pulse" />
      
      {/* 3. AI Network Connections & Radiant Rays */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="ray-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ray-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated Radiant Data Lines */}
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5) * (Math.PI / 180);
          const x2 = 50 + Math.cos(angle) * 120 + "%";
          const y2 = 0 + Math.sin(angle) * 120 + "%";
          
          return (
            <motion.line
              key={`ray-${i}`}
              x1="50%"
              y1="0%"
              x2={x2}
              y2={y2}
              stroke={i % 4 === 0 ? "url(#ray-blue)" : "url(#ray-orange)"}
              strokeWidth={i % 5 === 0 ? "1.5" : "0.5"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            />
          );
        })}

        {/* Neural Network Nodes & Links */}
        {[...Array(8)].map((_, i) => {
          const x = 10 + Math.random() * 80 + "%";
          const y = 20 + Math.random() * 60 + "%";
          return (
            <g key={`node-group-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="1.5"
                fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                stroke={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                strokeWidth="0.5"
                fill="none"
                animate={{ opacity: [0.1, 0, 0.1], scale: [0.5, 2, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, delay: i }}
              />
            </g>
          );
        })}
      </svg>

      {/* 4. Floating Glowing Particles (Dual Tone) */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              backgroundColor: i % 3 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 3 === 0 
                ? "0 0 8px hsl(var(--accent) / 0.8)" 
                : "0 0 8px hsl(var(--primary) / 0.8)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 12 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
      
      {/* 5. Readability & Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
    </div>
  );
}
