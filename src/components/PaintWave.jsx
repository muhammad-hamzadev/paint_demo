import React from 'react';

export default function PaintWave({ height = 70, className = '' }) {
  return (
    <div className={`hero-paint-wave-layer ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="paint-wave-svg"
        viewBox="0 0 2400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="zikWaveRainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B2265" />
            <stop offset="12%" stopColor="#1E40AF" />
            <stop offset="25%" stopColor="#7C3AED" />
            <stop offset="38%" stopColor="#D91B5C" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="62%" stopColor="#EA580C" />
            <stop offset="75%" stopColor="#F59E0B" />
            <stop offset="88%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0B2265" />
          </linearGradient>

          <linearGradient id="zikWaveSecondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Secondary soft back-wave */}
        <path
          d="M0,55 C300,95 600,15 900,60 C1200,105 1500,25 1800,65 C2100,105 2300,35 2400,60 L2400,120 L0,120 Z"
          fill="url(#zikWaveSecondaryGrad)"
          opacity="0.45"
        />

        {/* Main Flowing Ribbon */}
        <path
          d="M0,40 C200,85 500,5 800,45 C1100,85 1400,15 1700,55 C2000,95 2200,20 2400,40 L2400,120 L0,120 Z"
          fill="url(#zikWaveRainbowGrad)"
        />

        {/* Gloss highlight edge */}
        <path
          d="M0,39 C200,84 500,4 800,44 C1100,84 1400,14 1700,54 C2000,94 2200,19 2400,39"
          stroke="rgba(255, 255, 255, 0.65)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
}
