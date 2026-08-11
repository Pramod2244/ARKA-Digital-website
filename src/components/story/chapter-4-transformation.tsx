'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import {
  FileText,
  Tablet,
  FileSpreadsheet,
  BarChart3,
  PhoneCall,
  Layers,
  Cpu,
  Zap,
  Server,
  Cloud,
  FileCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Activity
} from 'lucide-react';

const TRANSFORMATION_ITEMS = [
  {
    fromLabel: 'Paper Medical Records',
    fromIcon: FileText,
    toLabel: 'Hospital HIMS & EHR Suite',
    toIcon: Activity,
    detail: 'Paper patient records & manual triage upgraded into automated clinical HIMS, bed tracking, and electronic health records.',
    badge: 'UPGRADE 01',
    color: 'text-emerald-600',
  },
  {
    fromLabel: 'Paper Files',
    fromIcon: FileText,
    toLabel: 'Digital Tablet / Zero Paper',
    toIcon: Tablet,
    detail: 'Physical files scanned & encrypted into instantaneous cloud payloads.',
    badge: 'UPGRADE 02',
    color: 'text-orange-600',
  },
  {
    fromLabel: 'Manual Excel Spreadsheets',
    fromIcon: FileSpreadsheet,
    toLabel: 'Live Telemetry Dashboard',
    toIcon: BarChart3,
    detail: 'Messy data rows converted into real-time interactive business intelligence.',
    badge: 'UPGRADE 03',
    color: 'text-amber-600',
  },
  {
    fromLabel: 'Unconnected Phone Calls',
    fromIcon: PhoneCall,
    toLabel: 'Automated CRM Pipeline',
    toIcon: Layers,
    detail: 'Inquiries automatically scored, qualified, and routed to deal pipelines.',
    badge: 'UPGRADE 04',
    color: 'text-orange-500',
  },
  {
    fromLabel: 'Slow Manual Tasks',
    fromIcon: Cpu,
    toLabel: 'Autonomous AI Workflows',
    toIcon: Zap,
    detail: 'Repetitive approvals executed automatically in sub-400ms speed.',
    badge: 'UPGRADE 05',
    color: 'text-emerald-600',
  },
  {
    fromLabel: 'Physical Legacy Server',
    fromIcon: Server,
    toLabel: 'Multi-Region Cloud Backbone',
    toIcon: Cloud,
    detail: 'Single-point server hardware replaced with 99.99% high-availability multi-cloud.',
    badge: 'UPGRADE 06',
    color: 'text-blue-600',
  },
];

export const Chapter4Transformation: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="chapter-4" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-orange-50/40 border-t border-orange-100">
      {/* Orange Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-mono text-orange-700 font-bold mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-spin" />
          <span>CHAPTER 04 // THE TRANSFORMATION</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          Every Scroll Upgrades <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 glow-text-orange">
            The Entire Enterprise.
          </span>
        </motion.h2>

        <p className="text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto mb-16">
          Click any component below to trigger its instant digital transformation upgrade.
        </p>

        {/* Upgrades Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {TRANSFORMATION_ITEMS.map((item, idx) => {
            const FromIcon = item.fromIcon;
            const ToIcon = item.toIcon;
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={item.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  cinematicAudio.playUpgradeChime();
                  setActiveIdx(idx);
                }}
                onMouseEnter={() => cinematicAudio.playHover()}
                className={`bg-white p-6 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'border-orange-500 shadow-md ring-2 ring-orange-400/20 -translate-y-1'
                    : 'border-orange-100 hover:border-orange-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-extrabold ${item.color}`}>{item.badge}</span>
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-300'}`} />
                </div>

                {/* From -> To Shift */}
                <div className="flex items-center justify-between gap-3 mb-4 p-3 rounded-2xl bg-orange-50/80 border border-orange-100">
                  <div className="flex items-center gap-2 text-slate-400 line-through text-xs">
                    <FromIcon className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{item.fromLabel}</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 animate-pulse" />

                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <ToIcon className={`w-4 h-4 ${item.color} shrink-0`} />
                    <span className={item.color}>{item.toLabel}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
