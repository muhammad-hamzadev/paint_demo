import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingBubbles from './FloatingBubbles';
import PaintWave from './PaintWave';

export default function Hero({
  onExploreProducts,
  onFindColor,
  onOpenCalculator,
  onOpenConsultation
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      id: 1,
      badge: 'ARCHITECTURAL INTERIORS & EXTERIORS',
      headlineLine1: 'COLOR YOUR',
      headlineLine2: 'WORLD WITH',
      headlineHighlight: 'PREMIUM QUALITY',
      subheadline: 'Premium Quality • 10-Year Weather Shield • Silk Touch Finish',
      primaryCtaText: 'Explore All Products',
      primaryCtaAction: 'products',
      secondaryCtaText: 'Find Your Color',
      secondaryCtaAction: 'colors',
      bgImage: './assets/images/hero-interior.svg',
      bucketImage: './assets/images/hero-buckets.svg',
      bucketAlt: 'ZIK Paints Collection'
    },
    {
      id: 2,
      badge: 'ZIK WEATHER SHIELD',
      headlineLine1: 'SHIELD YOUR',
      headlineLine2: 'FACADE WITH',
      headlineHighlight: 'WEATHER GUARD',
      subheadline: '100% Acrylic Based • 10-Year Protection • UV & Anti-Fungus',
      primaryCtaText: 'Exterior Solutions',
      primaryCtaAction: 'products',
      secondaryCtaText: 'Paint Calculator',
      secondaryCtaAction: 'calculator',
      bgImage: './assets/images/hero-slide2-exterior.svg',
      bucketImage: './assets/images/product-weather-shield.svg',
      bucketAlt: 'ZIK Weather Shield Paint Bucket'
    },
    {
      id: 3,
      badge: 'ZIK AQUEOUS WALL PRIMER',
      headlineLine1: 'DEEP ADHESION',
      headlineLine2: 'SEALER FOR',
      headlineHighlight: 'MASONRY WALLS',
      subheadline: 'Alkali Resistant • Prevents Peeling • Extends Topcoat Coverage',
      primaryCtaText: 'View Wall Primers',
      primaryCtaAction: 'products',
      secondaryCtaText: 'Paint Calculator',
      secondaryCtaAction: 'calculator',
      bgImage: './assets/images/hero-slide3-interior.svg',
      bucketImage: './assets/images/product-aqueous-primer.svg',
      bucketAlt: 'ZIK Aqueous Wall Primer Bucket'
    },
    {
      id: 4,
      badge: 'ZIK SILK TOUCH EMULSION',
      headlineLine1: 'LUXURIOUS SILK',
      headlineLine2: 'SHEEN FOR',
      headlineHighlight: 'WALLS & CEILINGS',
      subheadline: 'Ultra Stain Resistant • Brilliant Opacity • Zero VOC',
      primaryCtaText: 'Shop Silk Touch',
      primaryCtaAction: 'products',
      secondaryCtaText: 'Find Your Color',
      secondaryCtaAction: 'colors',
      bgImage: './assets/images/luxury-terracotta-room.svg',
      bucketImage: './assets/images/product-silk-touch.svg',
      bucketAlt: 'ZIK Silk Touch Emulsion Bucket'
    }
  ];

  // Auto-advance slides every 15 seconds unless paused
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  const handleCtaClick = (action) => {
    if (action === 'products') onExploreProducts();
    else if (action === 'colors') onFindColor();
    else if (action === 'calculator' && onOpenCalculator) onOpenCalculator();
    else if (action === 'consultation' && onOpenConsultation) onOpenConsultation();
  };

  return (
    <section
      id="hero"
      className="hero-section relative overflow-hidden"
    >

      {/* 1. NETFLIX-STYLE CROSS-FADING BACKGROUND IMAGES */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
            }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.badge}
            className="w-full h-full object-cover object-center brightness-[0.98]"
          />
          {/* Soft Tint Overlay for Text Contrast */}
          <div className="hero-bg-overlay absolute inset-0" />
        </div>
      ))}

      {/* 2. ELEGANT FLOATING GLASS BUBBLES */}
      <FloatingBubbles count={16} />

      <div className="container relative z-10 py-4">
        <div className="hero-grid items-center min-h-[380px]">

          {/* LEFT SIDE: HEADLINE + SUBHEADLINE + BUTTONS */}
          <div className="hero-content space-y-4 max-w-xl">

            {/* Main Animated Headline */}
            <div key={`headline-${currentSlide}`} className="animate-in fade-in slide-in-from-left-4 duration-500">
              <h1 className="hero-headline">
                {activeSlide.headlineLine1} <br />
                {activeSlide.headlineLine2} <br />
                <span className="text-[#E11D48]">{activeSlide.headlineHighlight}</span>
              </h1>

              {/* Supporting Text */}
              <div className="hero-subheadline mt-3">
                {activeSlide.subheadline}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group pt-1 flex items-center gap-3">
              <button
                onClick={() => handleCtaClick(activeSlide.primaryCtaAction)}
                className="btn-primary"
                style={{
                  background: '#0B1B3D',
                  color: '#FFFFFF',
                  padding: '0.8rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(11, 27, 61, 0.28)'
                }}
              >
                {activeSlide.primaryCtaText} <ArrowRight size={16} />
              </button>

              <button
                onClick={() => handleCtaClick(activeSlide.secondaryCtaAction)}
                className="btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid #0B1B3D',
                  color: '#0B1B3D',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                {activeSlide.secondaryCtaText}
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: 3-BUCKET STUDIO SHOWCASE DIRECTLY ABOVE BOTTOM PAINT WAVE */}
          <div className="hero-visual-wrapper relative flex items-end justify-end min-h-[320px] pb-0">

            {/* Color Splash Glow Behind Products */}
            <div className="hero-color-splash-glow" />

            {/* Dynamic Paint Bucket Visual for Current Slide (Sleek Compact Sizing) */}
            <div
              key={`hero-bucket-${currentSlide}`}
              className="hero-products-foreground relative z-10 animate-in fade-in zoom-in-95 duration-700 flex justify-end max-w-[220px] sm:max-w-[280px] translate-y-2 sm:translate-y-3"
            >
              <img
                src={activeSlide.bucketImage}
                alt={activeSlide.bucketAlt}
                className="w-full h-auto max-h-[155px] sm:max-h-[185px] object-contain filter drop-shadow-xl ml-auto"
                style={{ filter: 'drop-shadow(0 12px 18px rgba(11, 27, 61, 0.28))' }}
              />
            </div>

            {/* Foreground Bubble Overlays */}
            <div
              className="glass-bubble"
              style={{
                width: '75px',
                height: '75px',
                right: '2%',
                top: '4%',
                animation: 'floatBubble1 6.5s ease-in-out infinite',
                zIndex: 20
              }}
            />
            <div
              className="glass-bubble"
              style={{
                width: '45px',
                height: '45px',
                right: '50%',
                bottom: '6%',
                animation: 'floatBubble2 5s ease-in-out infinite',
                zIndex: 20
              }}
            />
          </div>

        </div>

        {/* 3. NETFLIX-STYLE SLIDE PROGRESS INDICATORS */}
        <div className="flex items-center justify-start pt-4 border-t border-slate-300/50">

          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-3">
            {heroSlides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className="flex items-center gap-2 group text-left cursor-pointer border-none bg-transparent"
                >
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${isActive ? 'w-10 bg-brand-magenta shadow-md' : 'w-4 bg-slate-300 group-hover:bg-slate-400'
                    }`} />
                  <span className={`text-xs font-extrabold ${isActive ? 'text-[#0B1B3D]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                    0{s.id}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Signature Flowing Paint-Wave Ribbon Along Bottom */}
      <PaintWave height={70} />
    </section>
  );
}
