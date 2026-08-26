import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import PopularProducts from '../components/PopularProducts';
import RoomVisualizer from '../components/RoomVisualizer';
import Testimonials from '../components/Testimonials';

export default function HomePage({
  onNavigate,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenConsultation,
  onOpenDealerModal,
  onSelectBlog,
  onToggleFavoriteShade,
  isFavoriteShade,
  onOpenSampleModal
}) {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <Hero
        onExploreProducts={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onFindColor={() => {
          const el = document.getElementById('visualizer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCalculator={() => {
          if (onNavigate) onNavigate('calculator');
        }}
        onSelectProduct={onSelectProduct}
      />

      {/* 2. SHOP BY CATEGORY (8 Categories) */}
      <CategorySection
        activeCategory="all"
        onSelectCategory={(catId) => {
          onSelectCategory(catId);
          if (onNavigate) onNavigate('products');
        }}
      />

      {/* 3. POPULAR PRODUCTS (5 Products Grid) */}
      <PopularProducts
        activeCategory="all"
        onSelectProduct={onSelectProduct}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        isWishlisted={isWishlisted}
        onViewShades={() => {
          if (onNavigate) onNavigate('colors');
        }}
      />

      {/* 4. COLOR DISCOVERY SECTION (FIND YOUR PERFECT COLOR) */}
      <RoomVisualizer
        onOpenConsultation={onOpenConsultation}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavoriteShade}
        isFavorite={isFavoriteShade}
      />

      {/* 5. CUSTOMER TESTIMONIALS (5-Star Reviews) */}
      <Testimonials />
    </div>
  );
}
