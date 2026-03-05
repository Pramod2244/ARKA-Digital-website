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
      
      {/* 2. Soft Gradient Glow behind Headline */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute top-[15%] left-[5%] w-[40%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />

      {/* 3. Futuristic Rotating Glowing Orb (Digital Sun) */}
      <div className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none">
        {/* Core Glows */}
        <motion.div 
          className="absolute inset-[15%] bg-primary/20 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-[25%] bg-accent/15 rounded-full blur-[40px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Core */}
          <circle cx="100" cy="100" r="35" fill="url(#sun-core)" filter="url(#glow)" />

          {/* Rotating Rings */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "100px", originY: "100px" }}
          >
            <circle 
              cx="100" cy="100" r="75" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.5" 
              strokeDasharray="10 20 5 15"
              opacity="0.3"
            />
          </motion.g>

          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ originX: "100px", originY: "100px" }}
          >
            <circle 
              cx="100" cy="100" r="60" 
              fill="none" 
              stroke="hsl(var(--accent))" 
              strokeWidth="0.3" 
              strokeDasharray="2 4"
              opacity="0.4"
            />
            {/* Rays */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`ray-${i}`}
                x1="100" y1="30" x2="100" y2="45"
                stroke="hsl(var(--primary))"
                strokeWidth="0.8"
                transform={`rotate(${i * 45} 100 100)`}
                opacity="0.5"
              />
            ))}
          </motion.g>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ originX: "100px", originY: "100px" }}
          >
            <circle 
              cx="100" cy="100" r="90" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.2" 
              strokeDasharray="1 10"
              opacity="0.2"
            />
          </motion.g>

          {/* Orbiting Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={`orbit-${i}`}
              r="0.8"
              fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              animate={{
                cx: [100 + Math.cos(i) * 85, 100 + Math.cos(i + Math.PI * 2) * 85],
                cy: [100 + Math.sin(i) * 85, 100 + Math.sin(i + Math.PI * 2) * 85],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </div>

      {/* 4. AI Network Connections & Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
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
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${15 + i * 10}%`}
            y1="-20%"
            x2={`${15 + i * 10}%`}
            y2="120%"
            stroke={i % 2 === 0 ? "url(#flow-blue)" : "url(#flow-orange)"}
            strokeWidth="0.5"
            animate={{ 
              opacity: [0, 0.3, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          />
        ))}
      </svg>

      {/* 5. Floating Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* 6. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
}
