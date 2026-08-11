'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { ArkaaLogo } from './arkaa-logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    cinematicAudio.playHover();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 text-xs border-t border-orange-100 overflow-hidden pt-16 pb-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Col 1: Brand Logo Image 2 */}
          <div className="lg:col-span-2 space-y-4">
            <ArkaaLogo size="lg" />
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Architecting mission-critical Enterprise Software, Autonomous AI Systems, Hospital Management (HIMS), College ERP, and Cloud Infrastructure for global industry leaders.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-mono text-[11px] font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ARKAA DIGITAL LLP CORE ONLINE - v4.0 PRODUCTION READY</span>
            </div>
          </div>

          {/* Col 2: Core Pillars */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-4 font-mono">13 Core Pillars</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">Enterprise Software</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">AI Applications</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">Hospital Management (HIMS)</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">College & Campus ERP</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">CRM & Sales Pipelines</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">Native & Web Apps</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-4 font-mono">Chapters</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><a href="#chapter-1" className="hover:text-orange-600 transition-colors">01 / The Problem</a></li>
              <li><a href="#chapter-3" className="hover:text-orange-600 transition-colors">03 / The Discovery</a></li>
              <li><a href="#chapter-4" className="hover:text-orange-600 transition-colors">04 / The Transformation</a></li>
              <li><a href="#chapter-5" className="hover:text-orange-600 transition-colors">05 / Products in Action</a></li>
              <li><a href="#chapter-6" className="hover:text-orange-600 transition-colors">06 / The Result</a></li>
              <li><a href="#chapter-8" className="hover:text-orange-600 transition-colors">08 / Digital City Future</a></li>
            </ul>
          </div>

          {/* Col 4: Global HQ */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-4 font-mono">Global Headquarters</h4>
            <div className="space-y-3 text-slate-600 text-xs font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Chikkaballapura, Karnataka - 562101</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>hey@arkaadigital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+91 93805 08350</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] font-medium">
            © {new Date().getFullYear()} ARKAA DIGITAL LLP. All Rights Reserved. Engineered with Next.js, Three.js & Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-xs text-orange-700 font-bold hover:bg-orange-500 hover:text-white flex items-center gap-2 transition-all shadow-sm"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
