'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { Lightbulb, PenTool, Code2, ShieldCheck, Rocket, Zap, TrendingUp, Sparkles } from 'lucide-react';

const PIPELINE_STEPS = [
  { label: 'IDEAS', icon: Lightbulb, color: 'text-amber-500', border: 'border-amber-200' },
  { label: 'DESIGN', icon: PenTool, color: 'text-orange-500', border: 'border-orange-200' },
  { label: 'DEVELOPMENT', icon: Code2, color: 'text-orange-600', border: 'border-orange-300' },
  { label: 'TESTING', icon: ShieldCheck, color: 'text-blue-600', border: 'border-blue-200' },
  { label: 'DEPLOYMENT', icon: Rocket, color: 'text-orange-600', border: 'border-orange-400' },
  { label: 'AUTOMATION', icon: Zap, color: 'text-emerald-600', border: 'border-emerald-200' },
  { label: 'GROWTH', icon: TrendingUp, color: 'text-amber-600', border: 'border-amber-300' },
];

export const Chapter7WhoWeAre: React.FC = () => {
  return (
    <section id="chapter-7" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-white border-t border-orange-100">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-orange-600 font-bold mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin" />
          <span>CHAPTER 07 // WHO WE ARE</span>
        </motion.div>

        {/* Large Typography Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            We Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500 glow-text-orange">Digital Experiences.</span>
          </h2>
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            We Engineer <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 glow-text-orange">Business Growth.</span>
          </h2>
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            We Turn Ideas Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">Intelligent Products.</span>
          </h2>
        </motion.div>

        {/* The Evolution Pipeline */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => cinematicAudio.playHover()}
                  className={`px-4 py-3 rounded-2xl bg-white border ${step.border} shadow-sm flex items-center gap-2.5 hover:scale-105 transition-transform cursor-pointer`}
                >
                  <Icon className={`w-4 h-4 ${step.color}`} />
                  <span className={`text-xs font-mono font-extrabold text-slate-900`}>{step.label}</span>
                </motion.div>
                {idx < PIPELINE_STEPS.length - 1 && (
                  <span className="text-orange-400 font-mono text-xs font-bold hidden sm:inline">➔</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
