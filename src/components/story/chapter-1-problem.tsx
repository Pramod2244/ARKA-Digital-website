'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { FileText, Clock, PhoneCall, Mail, Flame } from 'lucide-react';

export const Chapter1Problem: React.FC = () => {
  return (
    <section id="chapter-1" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Warm Soft Glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-orange-600 font-bold mb-8 shadow-sm"
        >
          <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
          <span>CHAPTER 01 // THE SOLUTION</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          Building Digital Solutions for <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400">
            Real Business Challenges
          </span>
        </motion.h1>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-600 text-lg sm:text-2xl font-normal max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Arkaa Digital LLP is a technology solutions and digital transformation company delivering custom software, enterprise platforms, healthcare and education systems, automation, cloud solutions, data analytics, and digital experiences.
        </motion.p>

        {/* Chaos Cards */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: FileText, text: 'Paper Files Stacked', sub: 'Manual Processing' },
            { icon: PhoneCall, text: 'Phones Ringing 24/7', sub: 'Missed Inquiries' },
            { icon: Mail, text: 'Unread Email Swarm', sub: 'Overwhelming Threads' },
            { icon: Clock, text: 'Projects Delayed', sub: '48h Response Lag' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                onMouseEnter={() => cinematicAudio.playChaosClick()}
                className="bg-white p-5 rounded-2xl border border-orange-200 shadow-sm hover:border-orange-500 hover:shadow-md transition-all text-center flex flex-col items-center justify-center"
              >
                <Icon className="w-6 h-6 text-orange-500 mb-2 animate-bounce" />
                <h4 className="text-xs font-bold text-slate-900 mb-0.5">{item.text}</h4>
                <span className="text-[10px] font-mono text-slate-500">{item.sub}</span>
              </motion.div>
            );
          })}
        </div> */}

        {/* Scroll Indicator Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 text-xs font-mono text-slate-500 font-bold flex flex-col items-center gap-2"
        >
          <span>SCROLL TO ESCALATE CHAOS</span>
          <div className="w-4 h-7 border border-orange-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
