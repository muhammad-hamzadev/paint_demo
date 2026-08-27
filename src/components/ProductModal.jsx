import React, { useState } from 'react';
import { X, Star, CheckCircle, Shield, ShoppingCart, Heart, Download, FileText } from 'lucide-react';

export default function ProductModal({
  product,
  onClose,
  onAddToCart
}) {
  if (!product) return null;

  const [selectedQualityIndex, setSelectedQualityIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  const qualityOptions = [
    { id: 'high', label: 'High Quality (Premium)', multiplier: 1.0 },
    { id: 'medium', label: 'Medium Quality (Standard)', multiplier: 0.75 },
    { id: 'low', label: 'Low Quality (Economy)', multiplier: 0.55 }
  ];

  const currentQualityObj = qualityOptions[selectedQualityIndex];
  const currentSizeObj = product.sizes ? product.sizes[selectedSizeIndex] : { size: '4 Litres (Gallon)', price: product.price };
  const basePrice = (currentSizeObj.price || product.price);
  const currentPrice = Math.round(basePrice * currentQualityObj.multiplier) * quantity;

  const handleWhatsAppOrder = () => {
    const phone = '923306100065';
    const text = `Assalam-o-Alaikum ZIK Paint Industry!\nI want to order:\n📦 Product: ${product.name}\n⭐ Quality Grade: ${currentQualityObj.label}\n🛢️ Pack Size: ${currentSizeObj.size}\n🔢 Qty: ${quantity}\n💰 Price: PKR ${currentPrice.toLocaleString()}\n\nPlease details send karein.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem' }}>
          {/* Left: Product Image */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {product.badge && (
              <span
                className="product-badge-pill"
                style={{ backgroundColor: product.badgeColor || '#0B2265' }}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '320px', maxWidth: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Right: Info & Purchase Controls */}
          <div>
            <span style={{ fontSize: '0.8rem', color: '#13389E', fontWeight: 700, textTransform: 'uppercase' }}>
              {product.categoryName}
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--zik-navy-dark)', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              {product.name}
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '0.85rem' }}>
              {product.tagline}
            </p>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', color: '#F59E0B' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{product.rating}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price */}
            <div style={{
              background: '#F1F5F9',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '1.25rem'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Price (Inc. Taxes)</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--zik-navy)' }}>
                  PKR {currentPrice.toLocaleString()}
                </span>
              </div>
              <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem' }}>✓ In Stock • Ready to Dispatch</span>
            </div>

            {/* Quality Grade Selector */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.5rem' }}>
                Select Quality Category:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {qualityOptions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQualityIndex(idx)}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: '1.5px solid',
                      borderColor: selectedQualityIndex === idx ? '#0B2265' : '#E2E8F0',
                      background: selectedQualityIndex === idx ? '#EFF6FF' : '#FFFFFF',
                      color: selectedQualityIndex === idx ? '#0B2265' : '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pack Size Selector */}
            {product.sizes && (
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.5rem' }}>
                  Select Packaging Size:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.sizes.map((s, idx) => {
                    const priceVal = Math.round(s.price * currentQualityObj.multiplier);
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedSizeIndex(idx)}
                        style={{
                          padding: '0.5rem 0.9rem',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          border: '1.5px solid',
                          borderColor: selectedSizeIndex === idx ? 'var(--zik-blue-royal)' : '#E2E8F0',
                          background: selectedSizeIndex === idx ? '#EFF6FF' : '#FFFFFF',
                          color: selectedSizeIndex === idx ? 'var(--zik-blue-royal)' : '#334155',
                          cursor: 'pointer'
                        }}
                      >
                        {s.size} — PKR {priceVal.toLocaleString()}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Quantity:</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '0.4rem 0.8rem', background: '#F8FAFC', fontWeight: 700 }}
                >
                  -
                </button>
                <span style={{ padding: '0.4rem 0.9rem', fontWeight: 700, minWidth: '40px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '0.4rem 0.8rem', background: '#F8FAFC', fontWeight: 700 }}
                >
                  +
                </button>
              </div>
            </div>

            {/* WhatsApp Action Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1rem',
                background: '#25D366',
                borderColor: '#25D366',
                color: '#FFFFFF',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.34-1.492C8.01 23.447 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.626-.502-5.145-1.378l-.369-.211-3.82.899.914-3.725-.236-.379A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg> Order on WhatsApp (PKR {currentPrice.toLocaleString()})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
