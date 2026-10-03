'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { TrendingUp, Sparkles, Zap, Smile } from 'lucide-react';

export const Chapter6Result: React.FC = () => {
  return (
    <section id="chapter-6" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-orange-50/50 border-t border-orange-100">
      {/* Warm Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/15 via-amber-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-mono text-orange-700 font-bold mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-spin" />
          <span>CHAPTER 05 // THE RESULT</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          This Is Real <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 glow-text-orange">
            Digital Transformation.
          </span>
        </motion.h2>

        <p className="text-slate-600 text-lg sm:text-2xl font-normal max-w-2xl mx-auto leading-relaxed mb-16">
          The chaos has vanished. Minimal. Clean. Fast. Autonomous automation runs 24/7. Teams collaborate effortlessly. Revenue expands exponentially.
        </p>

        {/* Results Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { metric: 'Sub-400ms Speed', label: 'Instant Customer Response Rate', icon: Zap, color: 'text-orange-600' },
            { metric: '+340% Growth', label: 'Exponential Revenue Scalability', icon: TrendingUp, color: 'text-amber-600' },
            { metric: '99.8% Retention', label: 'Delighted Global Clients & Teams', icon: Smile, color: 'text-orange-500' },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => cinematicAudio.playHover()}
                className="bg-white p-6 rounded-3xl border border-orange-200 text-center hover:border-orange-500 shadow-sm transition-all"
              >
                <Icon className={`w-8 h-8 ${card.color} mx-auto mb-3 animate-bounce`} />
                <h3 className={`text-3xl font-black text-slate-900 mb-1 ${card.color}`}>{card.metric}</h3>
                <p className="text-xs font-mono font-bold text-slate-500">{card.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
