'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, Menu, X } from 'lucide-react';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { ArkaaLogo } from './arkaa-logo';

interface CinematicNavProps {
  currentChapter: number;
  onOpenContactModal?: () => void;
}

const CHAPTER_NAMES = [
  '01 / THE PROBLEM',
  '02 / THE PAIN',
  '03 / THE DISCOVERY',
  '04 / THE TRANSFORMATION',
  '05 / THE PRODUCTS IN ACTION',
  '06 / THE RESULT',
  '07 / WHO WE ARE',
  '08 / DIGITAL CITY FUTURE',
];

export const CinematicNav: React.FC<CinematicNavProps> = ({ currentChapter, onOpenContactModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (chapterIdx: number) => {
    cinematicAudio.playHover();
    setMenuOpen(false);
    const element = document.getElementById(`chapter-${chapterIdx + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-orange-100 py-3 shadow-[0_4px_25px_rgba(249,115,22,0.1)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Image 2 Aligned to Far Left End */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToChapter(0);
          }}
          className="flex items-center gap-3 group"
        >
          <ArkaaLogo size="md" />
        </a>

        {/* Center Live Chapter Indicator */}
        <div className="hidden md:flex items-center gap-2 bg-orange-50/90 px-4 py-1.5 rounded-full border border-orange-200 text-xs font-mono shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-ping" />
          <span className="text-slate-500 font-medium">ACTIVE CHAPTER:</span>
          <span className="text-orange-600 font-extrabold tracking-wider">
            {CHAPTER_NAMES[Math.min(currentChapter - 1, CHAPTER_NAMES.length - 1)] || '01 / THE PROBLEM'}
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Jump to Scene Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 rounded-full bg-white border border-orange-200 text-xs font-bold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Chapters Menu</span>
            {menuOpen ? <X className="w-4 h-4 text-orange-600" /> : <Menu className="w-4 h-4 text-orange-600" />}
          </button>

          {/* Start Journey CTA */}
          <button
            onClick={() => {
              if (onOpenContactModal) {
                onOpenContactModal();
              } else {
                scrollToChapter(7);
              }
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_30px_rgba(249,115,22,0.5)] transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Journey</span>
          </button>
        </div>
      </div>

      {/* Chapter Navigation Modal Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full px-4 sm:px-6 lg:px-8 pt-4"
          >
            <div className="p-6 rounded-3xl border border-orange-200 shadow-2xl bg-white/95 backdrop-blur-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200"
              >
                <X className="w-4 h-4" />
              </button>
              {CHAPTER_NAMES.map((name, idx) => (
                <button
                  key={name}
                  onClick={() => scrollToChapter(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between text-xs font-medium ${
                    currentChapter === idx + 1
                      ? 'border-orange-500 text-orange-600 bg-orange-50 font-bold shadow-sm'
                      : 'border-slate-100 text-slate-700 hover:border-orange-300 hover:bg-orange-50/50'
                  }`}
                >
                  <span>{name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
