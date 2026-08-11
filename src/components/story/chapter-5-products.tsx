'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import {
  Activity,
  Globe,
  Layers,
  GraduationCap,
  Bot,
  Smartphone,
  Cloud,
  Sparkles,
  Bed,
  UserCheck,
  Plus
} from 'lucide-react';

export const Chapter5Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hims' | 'web' | 'crm' | 'erp' | 'ai' | 'mobile' | 'cloud'>('hims');
  
  // Hospital HIMS Live Demo State
  const [icuBeds, setIcuBeds] = useState(42);
  const [erQueue, setErQueue] = useState(18);

  return (
    <section id="chapter-5" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-white border-t border-orange-100">
      {/* Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-orange-600 font-bold mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin" />
          <span>CHAPTER 05 // PRODUCTS IN ACTION</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          We Don't List Services.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 glow-text-orange">
            Watch Products Execute.
          </span>
        </motion.h2>

        <p className="text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto mb-12">
          Click any product engine below to watch it assemble and run live in real-time.
        </p>

        {/* Product Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { id: 'hims', label: '1. HOSPITAL HIMS SUITE', icon: Activity, color: 'text-emerald-600' },
            { id: 'web', label: '2. HIGH-SPEED WEBSITE', icon: Globe, color: 'text-orange-600' },
            { id: 'crm', label: '3. CRM DEAL PIPELINE', icon: Layers, color: 'text-orange-500' },
            { id: 'erp', label: '4. ENTERPRISE ERP', icon: GraduationCap, color: 'text-amber-600' },
            { id: 'ai', label: '5. NEURAL AI ENGINE', icon: Bot, color: 'text-emerald-600' },
            { id: 'mobile', label: '6. MOBILE APP SUITE', icon: Smartphone, color: 'text-rose-600' },
            { id: 'cloud', label: '7. GLOBAL CLOUD NODES', icon: Cloud, color: 'text-blue-600' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  cinematicAudio.playHover();
                  setActiveTab(tab.id as any);
                }}
                className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold transition-all border flex items-center gap-2 ${
                  isActive
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md scale-105'
                    : 'bg-white text-slate-700 border-orange-200 hover:border-orange-400 hover:bg-orange-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Product Window */}
        <div className="bg-white rounded-3xl border border-orange-200 p-6 sm:p-10 shadow-xl text-left min-h-[380px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* 1. HOSPITAL MANAGEMENT SYSTEM (HIMS) */}
            {activeTab === 'hims' && (
              <motion.div key="hims" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                      <span>Hospital Information Management System (HIMS)</span>
                      <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
                        CLINICAL OPERATING SYSTEM v4.2
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Real-time bed telemetry, emergency triage queue & pharmacy billing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        cinematicAudio.playUpgradeChime();
                        setIcuBeds((prev) => Math.max(0, prev - 1));
                        setErQueue((prev) => prev + 1);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Admit Patient</span>
                    </button>
                    <button
                      onClick={() => {
                        cinematicAudio.playHover();
                        setIcuBeds((prev) => prev + 1);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold hover:bg-orange-100"
                    >
                      Discharge Bed
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                      <span>Available ICU Beds</span>
                      <Bed className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">{icuBeds} <span className="text-xs text-emerald-600 font-bold">/ 120 Total</span></p>
                  </div>
                  <div className="bg-orange-50/70 p-4 rounded-2xl border border-orange-200">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                      <span>ER Patient Triage Queue</span>
                      <UserCheck className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">{erQueue} <span className="text-xs text-orange-600 font-bold">Active Triage</span></p>
                  </div>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                      <span>EHR Clinical Diagnostics</span>
                      <Activity className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">100% <span className="text-xs text-blue-600 font-bold">HIPAA Compliant</span></p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. WEBSITE ASSEMBLY */}
            {activeTab === 'web' && (
              <motion.div key="web" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Browser Assembles & Self-Optimizes</h3>
                    <p className="text-xs text-slate-500 font-medium">Sub-second Next.js page load + Lighthouse 100 performance score</p>
                  </div>
                  <span className="text-xs font-mono text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-300 font-bold">LIGHTHOUSE SCORE: 100/100</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-200">
                    <span className="text-xs text-slate-500 font-medium">Page Load Time</span>
                    <p className="text-3xl font-extrabold text-orange-600">0.04s</p>
                  </div>
                  <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                    <span className="text-xs text-slate-500 font-medium">SEO Index Ranking</span>
                    <p className="text-3xl font-extrabold text-emerald-600">Top 1%</p>
                  </div>
                  <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                    <span className="text-xs text-slate-500 font-medium">3D WebGL Canvas</span>
                    <p className="text-3xl font-extrabold text-amber-600">60 FPS</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. CRM PIPELINE */}
            {activeTab === 'crm' && (
              <motion.div key="crm" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Automated Lead to Deal Won Pipeline</h3>
                    <p className="text-xs text-slate-500 font-medium">Lead enters ➔ AI Qualification ➔ Quotation ➔ Invoice ➔ Deal Won</p>
                  </div>
                  <span className="text-xs font-mono text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-300 font-bold">DEAL WON: $240,000</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {['1. Lead Enters', '2. AI Qualification', '3. Auto Quotation', '4. DEAL WON 🎉'].map((step, i) => (
                    <div key={i} className="bg-orange-50 p-3 rounded-xl border border-orange-200 text-center font-extrabold text-orange-700">
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 4. ENTERPRISE ERP */}
            {activeTab === 'erp' && (
              <motion.div key="erp" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Department Interconnection Grid</h3>
                    <p className="text-xs text-slate-500 font-medium">HR, Finance, Inventory, and Academic Attendance sync into one ledger</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {['HR & Payroll', 'Finance Ledger', 'Inventory Stock', 'Live Reports'].map((dep, i) => (
                    <div key={i} className="bg-orange-50 p-3 rounded-xl border border-orange-200 text-center font-bold text-orange-700">
                      {dep} (CONNECTED)
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 5. NEURAL AI ENGINE */}
            {activeTab === 'ai' && (
              <motion.div key="ai" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Neural Network Autonomous Execution</h3>
                    <p className="text-xs text-slate-500 font-medium">Documents searchable, voice agent answers, analytics predicts trends</p>
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                  [NEURAL ENGINE]: Processing 150,000 records. Predicted Q4 Revenue Growth: +340%. Autonomous workflows active.
                </div>
              </motion.div>
            )}

            {/* 6. MOBILE APP */}
            {activeTab === 'mobile' && (
              <motion.div key="mobile" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Native iOS & Android Mobile Suite</h3>
                    <p className="text-xs text-slate-500 font-medium">Rotating smartphone frame, instant push notifications, offline sync</p>
                  </div>
                </div>
                <div className="flex items-center justify-around text-xs font-mono font-bold text-orange-700">
                  <span>📱 FLUID 60 FPS MICRO-ANIMATIONS</span>
                  <span>🔔 INSTANT PUSH ALERTS</span>
                  <span>⚡ OFFLINE FIRST SYNC</span>
                </div>
              </motion.div>
            )}

            {/* 7. GLOBAL CLOUD */}
            {activeTab === 'cloud' && (
              <motion.div key="cloud" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Multi-Region Cloud Topology</h3>
                    <p className="text-xs text-slate-500 font-medium">AWS, Docker & Azure clusters connected across 18+ countries</p>
                  </div>
                </div>
                <div className="flex items-center justify-around text-xs font-mono font-bold text-blue-700">
                  <span>☁️ 128 CLOUD NODES ONLINE</span>
                  <span>🛡️ 99.99% UPTIME GUARANTEE</span>
                  <span>⚡ 12.4ms GLOBAL LATENCY</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
