import React from 'react';
import PaintCalculator from '../components/PaintCalculator';
import { Calculator } from 'lucide-react';

export default function CalculatorPage({ onAddToCart }) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero Header */}
      <div 
        className="relative text-white py-12 sm:py-16 px-4 overflow-hidden bg-cover bg-center shadow-lg border-b border-blue-900"
        style={{ backgroundImage: `url('./assets/images/room-blue-bg.svg')` }}
      >
        {/* Transparent Tint Overlay */}
        <div className="absolute inset-0 bg-[#0B1B3D]/85 backdrop-blur-[2px]" />

        <div className="max-w-7xl mx-auto text-center space-y-3.5 relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            <Calculator className="w-4 h-4 text-emerald-300" /> Smart Estimation Tool
          </span>
          <h1 className="text-2xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg" style={{ color: '#FFFFFF' }}>
            HOW MUCH PAINT DO YOU NEED?
          </h1>
          <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Input your room length, width, height, doors, and windows to get exact paint volume, pack size recommendations, and estimated material cost.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <PaintCalculator onAddToCart={onAddToCart} />
      </div>

    </div>
  );
}
