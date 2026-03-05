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

      {/* 2. AI Network Connections & Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="flow-orange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical Data Stream Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${10 + i * 10}%`}
            y1="-10%"
            x2={`${10 + i * 10}%`}
            y2="110%"
            stroke={i % 2 === 0 ? "url(#flow-blue)" : "url(#flow-orange)"}
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.3, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}

        {/* Neural Network Nodes & Links */}
        {[...Array(12)].map((_, i) => {
          const x = 10 + Math.random() * 80 + "%";
          const y = 10 + Math.random() * 80 + "%";
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
                r="10"
                stroke={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                strokeWidth="0.5"
                fill="none"
                animate={{ opacity: [0.1, 0, 0.1], scale: [0.5, 2.5, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, delay: i }}
              />
            </g>
          );
        })}
      </svg>

      {/* 3. Floating Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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
              y: [0, -120, 0],
              x: [0, (Math.random() - 0.5) * 60, 0],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
      
      {/* 4. Readability & Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
    </div>
  );
}
