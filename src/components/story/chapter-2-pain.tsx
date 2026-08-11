'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { AlertCircle, FileSpreadsheet, ZapOff, Clock, TrendingDown } from 'lucide-react';

export const Chapter2Pain: React.FC = () => {
  return (
    <section id="chapter-2" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-orange-50/50 border-t border-orange-100">
      {/* Orange/Red Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/15 via-red-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono text-red-600 font-bold mb-8 shadow-sm"
        >
          <AlertCircle className="w-3.5 h-3.5 text-red-500 animate-ping" />
          <span>CHAPTER 02 // THE PAIN</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          Growth Created <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">
            Complexity & Chaos.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-600 text-lg sm:text-2xl font-normal max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Invoices explode. Customer complaints accumulate. Critical data gets lost in spreadsheets. Revenue stalls while headcount skyrockets.
        </motion.p>

        {/* Exploding Chaos Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {[
            {
              title: 'Exploding Excel Sheets',
              desc: 'V1_final_final.xlsx is corrupted. Nobody knows which customer lead is real.',
              icon: FileSpreadsheet,
            },
            {
              title: 'Missed SLA Deadlines',
              desc: 'Approval requests sit in email inboxes for 4 days. Competitors win clients.',
              icon: Clock,
            },
            {
              title: 'Human Data Corruption',
              desc: 'Manual data entry errors result in $40,000 lost in billing discrepancies.',
              icon: ZapOff,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onMouseEnter={() => cinematicAudio.playChaosClick()}
                className="bg-white p-6 rounded-3xl border border-red-200 shadow-sm hover:border-red-500 hover:shadow-md transition-all"
              >
                <Icon className="w-8 h-8 text-red-500 mb-4 animate-pulse" />
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Warning Indicator Ticker */}
        <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-red-200 text-red-600 font-mono text-xs font-bold shadow-sm">
          <TrendingDown className="w-4 h-4 text-red-500 animate-bounce" />
          <span>WARNING: UNCONNECTED SYSTEMS REDUCE OPERATIONAL EFFICIENCY BY 65%</span>
        </div>
      </div>
    </section>
  );
};
