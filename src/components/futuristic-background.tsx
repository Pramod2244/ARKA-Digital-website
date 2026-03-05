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
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0b] -z-20">
      {/* 1. Deep Liquid Metal Base Layers */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[160px] rounded-full opacity-30" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[140px] rounded-full opacity-20" />

      {/* 2. Abstract Liquid Blobs - Simulated 3D Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`blob-${i}`}
            className="absolute rounded-full mix-blend-screen filter blur-[80px]"
            style={{
              width: 400 + i * 100,
              height: 400 + i * 100,
              background: i === 0 ? 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(30,41,59,0.2) 0%, transparent 70%)',
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 60, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3. Subtle Liquid Filter Texture - feTurbulence for organic feel */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <filter id="liquidNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#liquidNoise)" />
      </svg>
      
      {/* 4. Fine Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 5. Depth and Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
    </div>
  );
}
