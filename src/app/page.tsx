'use client';

import React, { useState, useEffect } from 'react';
import { CinematicFilmCanvas } from '@/components/canvas/cinematic-film-canvas';
import { CinematicNav } from '@/components/cinematic-nav';
import { CustomCursor } from '@/components/custom-cursor';

import { Chapter1Problem } from '@/components/story/chapter-1-problem';
import { Chapter2Pain } from '@/components/story/chapter-2-pain';
import { Chapter3Discovery } from '@/components/story/chapter-3-discovery';
import { Chapter4Transformation } from '@/components/story/chapter-4-transformation';
import { Chapter5Products } from '@/components/story/chapter-5-products';
import { Chapter6Result } from '@/components/story/chapter-6-result';
import { Chapter7WhoWeAre } from '@/components/story/chapter-7-who-we-are';
import { FinalScene } from '@/components/story/final-scene';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const chapters = [1, 2, 3, 4, 5, 6, 7, 8];

      for (let i = chapters.length; i >= 1; i--) {
        const el = document.getElementById(`chapter-${i}`);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentChapter(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-orange-500 selection:text-white font-body">
      {/* Glow Cursor */}
      <CustomCursor />

      {/* 3D WebGL Background Canvas */}
      <CinematicFilmCanvas currentChapter={currentChapter} />

      {/* Top Glassmorphism Navigation Bar */}
      <CinematicNav
        currentChapter={currentChapter}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Interactive Story Stream */}
      <main className="relative z-10">
        <Chapter1Problem />
        <Chapter2Pain />
        <Chapter3Discovery />
        <Chapter4Transformation />
        <Chapter5Products />
        <Chapter6Result />
        <Chapter7WhoWeAre />
        <FinalScene
          externalModalOpen={contactModalOpen}
          onCloseExternalModal={() => setContactModalOpen(false)}
        />
      </main>
    </div>
  );
}
