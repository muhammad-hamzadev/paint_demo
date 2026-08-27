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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative z-10 space-y-12">
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
