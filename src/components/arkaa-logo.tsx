'use client';

import React from 'react';
import Image from 'next/image';

interface ArkaaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const ArkaaLogo: React.FC<ArkaaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className={`relative ${heights[size]} aspect-square rounded-xl overflow-hidden shadow-sm border border-orange-200 bg-white flex items-center justify-center p-0.5`}>
        <Image
          src="/arkaa-logo.jpg"
          alt="ARKAA DIGITAL LLP Logo"
          width={120}
          height={120}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
            ARKAA <span className="text-orange-600 glow-text-orange font-black">DIGITAL LLP</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-orange-600 font-bold uppercase mt-0.5">
            Enterprise AI & Software
          </span>
        </div>
      )}
    </div>
  );
};
