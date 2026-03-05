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
      {/* 1. Subtle Tech Grid Layer with Perspective */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }}
      />
      
      {/* 2. Soft Gradient Glow behind Headline */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute top-[15%] left-[5%] w-[40%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />

      {/* 3. Glowing Digital Sphere (Right Side) */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] hidden md:block">
        <motion.div 
          className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
          <defs>
            <radialGradient id="sphere-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle 
            cx="100" cy="100" r="80" 
            fill="none" 
            stroke="url(#sphere-grad)" 
            strokeWidth="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="100" cy="100" r="60" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="0.2"
            strokeDasharray="10 5"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* 4. AI Network Connections & Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="flow-orange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical Data Stream Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${10 + i * 9}%`}
            y1="-20%"
            x2={`${10 + i * 9}%`}
            y2="120%"
            stroke={i % 2 === 0 ? "url(#flow-blue)" : "url(#flow-orange)"}
            strokeWidth="0.5"
            animate={{ 
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

        {/* Neural Network Nodes */}
        {[...Array(12)].map((_, i) => {
          const x = 5 + Math.random() * 90 + "%";
          const y = 10 + Math.random() * 80 + "%";
          const color = i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))";
          
          return (
            <g key={`node-group-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="1"
                fill={color}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
              />
            </g>
          );
        })}
      </svg>

      {/* 5. Floating Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              backgroundColor: i % 2 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 2 === 0 
                ? "0 0 8px hsl(var(--accent) / 0.8)" 
                : "0 0 8px hsl(var(--primary) / 0.8)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 0.8]
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
      
      {/* 6. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.5)_80%,rgba(2,6,23,0.9)_100%)]" />
    </div>
  );
}