import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../data/productsData';

export default function CategorySection({ activeCategory, onSelectCategory }) {
  return (
    <section id="categories" className="category-section relative overflow-hidden">
      {/* Clean Background Room Image Layer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('./assets/images/room-blue-bg.svg')` }}
      />

      <div className="container relative z-10">
        <div className="section-header-flex">
          <div>
            <div className="section-badge">Product Collections</div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Engineered solutions for every wall, ceiling, surface, and climate condition in Pakistan.
            </p>
          </div>
          <a href="#products" className="view-all-link">
            View All Categories <ArrowRight size={16} />
          </a>
        </div>

        <div className="category-grid">
          {categoriesData.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`category-card-real ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id === activeCategory ? 'all' : cat.id)}
              >
                {/* 1. PHOTOREALISTIC STUDIO PRODUCT VISUAL FRAME */}
                <div className="category-visual-frame">

                  {cat.id === 'interior' && (
                    <div className="category-prod-wrapper">
                      <img
                        src="./assets/images/product-silk-touch.svg"
                        alt="ZIK Silk Touch Emulsion Bucket"
                        className="category-bucket-img"
                      />
                    </div>
                  )}

                  {cat.id === 'exterior' && (
                    <div className="category-prod-wrapper">
                      <img
                        src="./assets/images/product-weather-shield.svg"
                        alt="ZIK Weather Shield 100% Acrylic Bucket"
                        className="category-bucket-img"
                      />
                    </div>
                  )}

                  {cat.id === 'wood' && (
                    <div className="category-wood-visual">
                      <div className="wood-board-surface" />
                      <div className="wood-tin-can">
                        <div className="wood-tin-lid" />
                        <div className="wood-tin-body">
                          <span className="tin-brand">ZIK</span>
                          <span className="tin-title">WOOD</span>
                          <span className="tin-sub">VARNISH</span>
                        </div>
                      </div>
                      <div className="wood-brush-tool" />
                    </div>
                  )}

                  {cat.id === 'metal' && (
                    <div className="category-metal-visual">
                      <div className="metal-can-render">
                        <div className="metal-rim" />
                        <div className="metal-body">
                          <span className="metal-brand">ZIK</span>
                          <span className="metal-title">METAL</span>
                          <span className="metal-sub">ENAMEL</span>
                          <div className="metal-fence-graphic">
                            <span /> <span /> <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {cat.id === 'texture' && (
                    <div className="category-texture-visual">
                      <div className="stucco-panel">
                        <div className="stucco-texture-dots" />
                      </div>
                      <div className="trowel-tool">
                        <div className="trowel-blade" />
                        <div className="trowel-handle" />
                      </div>
                    </div>
                  )}

                  {cat.id === 'primers' && (
                    <div className="category-prod-wrapper flex items-center justify-center gap-1">
                      <img
                        src="./assets/images/product-aqueous-primer.svg"
                        alt="ZIK Aqueous Wall Primer Bucket"
                        className="category-bucket-img"
                        style={{ height: '90px', objectFit: 'contain' }}
                      />
                      <img
                        src="./assets/images/product-smooth-putty.svg"
                        alt="ZIK Smooth Wall Putty Bucket"
                        className="category-bucket-img"
                        style={{ height: '85px', objectFit: 'contain' }}
                      />
                    </div>
                  )}

                  {cat.id === 'car' && (
                    <div className="category-car-visual">
                      <div className="car-silhouette">
                        <div className="car-[#0B1B3D]" />
                        <div className="red-sports-car">
                          <div className="car-window" />
                          <div className="car-headlight" />
                          <div className="car-wheel wheel-f" />
                          <div className="car-wheel wheel-r" />
                        </div>
                      </div>
                    </div>
                  )}

                  {cat.id === 'industrial' && (
                    <div className="category-industrial-visual">
                      <div className="factory-facade">
                        <div className="chimney c-1" />
                        <div className="chimney c-2" />
                        <div className="chimney c-3" />
                        <div className="factory-roof" />
                        <div className="factory-base" />
                      </div>
                    </div>
                  )}

                </div>

                {/* 2. CATEGORY INFO */}
                <div className="category-info-wrapper">
                  <h3 className="category-card-name">{cat.name}</h3>
                  <span className="category-card-count">{cat.count} Products</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
