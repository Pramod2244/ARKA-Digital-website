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
    <div className="fixed inset-0 overflow-hidden bg-background -z-20">
      {/* 1. Light Atmospheric Layers */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[160px] rounded-full opacity-30" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[140px] rounded-full opacity-20" />

      {/* 2. Neural Tech Grid (Light) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white" style={{ backgroundSize: '60px 60px' }} />
      </div>

      {/* 3. Subtle Multi-Colored Tech Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`global-particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: i % 3 === 0 
                ? 'hsl(var(--primary))' 
                : i % 3 === 1 
                ? 'hsl(var(--accent))' 
                : 'rgba(0,0,0,0.1)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* 4. Depth Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80 opacity-60" />
    </div>
  );
}