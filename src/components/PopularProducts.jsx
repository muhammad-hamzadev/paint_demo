import React, { useState } from 'react';
import { Heart, Star, Eye, ShoppingCart, ArrowRight, Check } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function PopularProducts({
  activeCategory,
  onSelectProduct,
  onAddToCart,
  onViewShades
}) {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedQualities, setSelectedQualities] = useState({});

  const qualityOptions = [
    { id: 'high', label: 'High Quality (Premium)', multiplier: 1.0 },
    { id: 'medium', label: 'Medium Quality (Standard)', multiplier: 0.75 },
    { id: 'low', label: 'Low Quality (Economy)', multiplier: 0.55 }
  ];

  const handleSizeChange = (productId, sizeIndex) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: sizeIndex
    }));
  };

  const handleQualityChange = (productId, qualityId) => {
    setSelectedQualities(prev => ({
      ...prev,
      [productId]: qualityId
    }));
  };

  const handleWhatsAppOrder = (product, qualityLabel, sizeName, price) => {
    const phone = '923306100065';
    const text = `Assalam-o-Alaikum ZIK Paint Industry!\nI want to order:\n📦 Product: ${product.name}\n⭐ Quality Grade: ${qualityLabel}\n🛢️ Pack Size: ${sizeName}\n💰 Price: PKR ${price.toLocaleString()}\n\nPlease details send karein.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products-section relative overflow-hidden">
      {/* Clean Background Room Image Layer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('./assets/images/room-blue-bg.svg')` }}
      />

      <div className="container relative z-10">
        <div className="section-header-flex">
          <div>
            <div className="section-badge">Top Formulations</div>
            <h2 className="section-title">Popular Products</h2>
            <p className="section-subtitle">
              Trusted by leading architects, interior designers, and homeowners across Pakistan.
            </p>
          </div>
          <button 
            onClick={onViewShades}
            className="view-all-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Explore Shade Cards <ArrowRight size={16} />
          </button>
        </div>

        <div className="products-grid-layout">
          {filteredProducts.map((product) => {
            const currentQualityId = selectedQualities[product.id] || 'high';
            const currentQualityObj = qualityOptions.find(q => q.id === currentQualityId) || qualityOptions[0];

            const currentSizeIdx = selectedSizes[product.id] || 0;
            const currentSizeObj = product.sizes ? product.sizes[currentSizeIdx] : { size: '4 Litres', price: product.price };

            const basePrice = currentSizeObj.price || product.price;
            const currentPrice = Math.round(basePrice * currentQualityObj.multiplier);
            return (
              <div key={product.id} className="product-card">
                {/* Badge */}
                {product.badge && (
                  <span 
                    className="product-badge-pill"
                    style={{ backgroundColor: product.badgeColor || '#0B2265' }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Product Image */}
                <div 
                  className="product-img-wrapper"
                  onClick={() => onSelectProduct(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>

                {/* Product Info */}
                <div className="product-info">
                  <h3 
                    className="product-name"
                    onClick={() => onSelectProduct(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    {product.name}
                  </h3>
                  <p className="product-tagline">{product.tagline}</p>

                  {/* Rating */}
                  <div className="product-rating-row">
                    <div style={{ display: 'flex', color: '#F59E0B' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span>{product.rating}</span>
                    <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>({product.reviewsCount})</span>
                  </div>

                  {/* Quality Category Dropdown */}
                  <div style={{ marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '0.2rem' }}>
                      Quality Grade:
                    </label>
                    <select
                      className="product-size-select"
                      value={currentQualityId}
                      onChange={(e) => handleQualityChange(product.id, e.target.value)}
                      style={{ width: '100%', fontWeight: 700, color: '#0B2265', border: '1.5px solid #CBD5E1' }}
                    >
                      {qualityOptions.map((q) => (
                        <option key={q.id} value={q.id}>
                          {q.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pack Size Selector */}
                  {product.sizes && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '0.2rem' }}>
                        Pack Size:
                      </label>
                      <select
                        className="product-size-select"
                        value={currentSizeIdx}
                        onChange={(e) => handleSizeChange(product.id, Number(e.target.value))}
                        style={{ width: '100%' }}
                      >
                        {product.sizes.map((s, idx) => {
                          const p = Math.round(s.price * currentQualityObj.multiplier);
                          return (
                            <option key={idx} value={idx}>
                              {s.size} — PKR {p.toLocaleString()}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}

                  {/* Price Row */}
                  <div className="product-price-row">
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>Starting from</span>
                      <span className="product-price">PKR {currentPrice.toLocaleString()}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>In Stock</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="product-card-actions">
                    <button
                      className="btn-card-secondary"
                      onClick={() => onSelectProduct(product)}
                    >
                      <Eye size={14} style={{ display: 'inline', marginRight: '4px' }} /> View Details
                    </button>
                    <button
                      className="btn-card-primary"
                      onClick={() => handleWhatsAppOrder(product, currentQualityObj.label, currentSizeObj.size, currentPrice)}
                      style={{ background: '#25D366', borderColor: '#25D366', color: '#FFFFFF', fontWeight: 800 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', marginRight: '4px' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.34-1.492C8.01 23.447 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.626-.502-5.145-1.378l-.369-.211-3.82.899.914-3.725-.236-.379A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                      </svg> WhatsApp Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
