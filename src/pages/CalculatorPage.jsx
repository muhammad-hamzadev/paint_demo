import React from 'react';
import PaintCalculator from '../components/PaintCalculator';
import { Calculator } from 'lucide-react';

export default function CalculatorPage({ onAddToCart }) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-slate-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Calculator className="w-4 h-4 text-emerald-400" /> Smart Estimation Tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            HOW MUCH PAINT DO YOU NEED?
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Input your room length, width, height, doors, and windows to get exact paint volume, pack size recommendations, and estimated material cost.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <PaintCalculator onAddToCart={onAddToCart} />
      </div>

    </div>
  );
}
