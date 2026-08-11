'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { Sparkles, Orbit } from 'lucide-react';
import { ArkaaLogo } from '../arkaa-logo';

export const Chapter3Discovery: React.FC = () => {
  return (
    <section id="chapter-3" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-white border-t border-orange-100">
      {/* Orange Discovery Glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/20 via-amber-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          onViewportEnter={() => cinematicAudio.playDiscoveryPulse()}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-orange-600 font-bold mb-10 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin" />
          <span>CHAPTER 03 // THE DISCOVERY</span>
        </motion.div>

        {/* Floating Glowing ARKAA Logo Core using Image 2 */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative mx-auto mb-10 inline-block cursor-pointer"
          onClick={() => cinematicAudio.playDiscoveryPulse()}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 blur-xl opacity-60 animate-pulse" />
          <div className="relative bg-white p-4 rounded-3xl border-2 border-orange-400 shadow-xl">
            <ArkaaLogo size="lg" />
          </div>
        </motion.div>

        {/* Quiet Fading Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          What If Technology <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 glow-text-orange">
            Worked For You?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-600 text-lg sm:text-2xl font-normal max-w-2xl mx-auto leading-relaxed mb-12"
        >
          The chaos freezes. A single digital impulse clears the noise. Digital energy begins reconstructing the company into an intelligent digital enterprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-50 border border-orange-300 text-orange-700 text-xs font-mono font-bold shadow-sm"
        >
          <Orbit className="w-4 h-4 text-orange-500 animate-spin" />
          <span>RECONSTRUCTING BUSINESS OPERATING SYSTEM...</span>
        </motion.div>
      </div>
    </section>
  );
};
