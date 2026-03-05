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
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />
      
      {/* 2. Secondary Finer Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* 3. AI Network Connections & Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
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
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={`stream-${i}`}
            x1={`${8 + i * 8.5}%`}
            y1="-20%"
            x2={`${8 + i * 8.5}%`}
            y2="120%"
            stroke={i % 2 === 0 ? "url(#flow-blue)" : "url(#flow-orange)"}
            strokeWidth="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 20 + Math.random() * 25,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}

        {/* Neural Network Nodes with Pulse Effect */}
        {[...Array(15)].map((_, i) => {
          const x = 5 + Math.random() * 90 + "%";
          const y = 10 + Math.random() * 80 + "%";
          const color = i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))";
          
          return (
            <g key={`node-group-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="1.2"
                fill={color}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                stroke={color}
                strokeWidth="0.3"
                fill="none"
                animate={{ 
                  opacity: [0.15, 0, 0.15], 
                  scale: [0.8, 2.5, 0.8] 
                }}
                transition={{ 
                  duration: 6 + Math.random() * 4, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* 4. Floating Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + "px",
              height: Math.random() * 2 + 0.5 + "px",
              backgroundColor: i % 2 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: i % 2 === 0 
                ? "0 0 6px hsl(var(--accent) / 0.6)" 
                : "0 0 6px hsl(var(--primary) / 0.6)",
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, (Math.random() - 0.5) * 80, 0],
              opacity: [0, 0.4, 0],
              scale: [0.7, 1.2, 0.7]
            }}
            transition={{
              duration: 25 + Math.random() * 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 15
            }}
          />
        ))}
      </div>
      
      {/* 5. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.8)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    </div>
  );
}
