import React from 'react';
import RoomVisualizer from '../components/RoomVisualizer';
import ProductShadesExplorer from '../components/ProductShadesExplorer';
import { Sparkles } from 'lucide-react';

export default function ColorsPage({
  onOpenConsultation,
  onAddToCart,
  onToggleFavoriteShade,
  isFavoriteShade,
  onOpenSampleModal
}) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero Header */}
      <div 
        className="relative text-white py-20 px-4 overflow-hidden bg-cover bg-center shadow-xl border-b border-slate-700 bg-brand-navy"
      >
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-rose-300 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            Color Discovery Studio
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            Find Your Signature Shade
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
            Explore product-wise color shades, test 200+ vibrant ZIK paint colors live on architectural interiors, and inspect color spectrums.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10 space-y-12">
        {/* 1. Interactive Room Visualizer Studio */}
        <RoomVisualizer
          onOpenConsultation={onOpenConsultation}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavoriteShade}
          isFavorite={isFavoriteShade}
        />

        {/* 2. Color Shades by Product & Palette Spectrum Explorer */}
        <ProductShadesExplorer
          onOpenConsultation={onOpenConsultation}
          onToggleFavorite={onToggleFavoriteShade}
          isFavorite={isFavoriteShade}
          onOpenSampleModal={onOpenSampleModal}
        />
      </div>

    </div>
  );
}
