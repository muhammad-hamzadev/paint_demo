import React from 'react';
import { X, Trash2, ShoppingCart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCharges = subtotal > 15000 ? 0 : 500;
  const grandTotal = subtotal + deliveryCharges;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#EEF2FF',
              color: 'var(--zik-blue-royal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingCart size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--zik-navy-dark)' }}>
                Your Paint Cart
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>

          <button className="action-btn" onClick={onClose} aria-label="Close Cart">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#F1F5F9',
                color: '#94A3B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <ShoppingCart size={30} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--zik-navy-dark)', marginBottom: '0.5rem' }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
                Discover our premium emulsions, primers, and weather shields to get started.
              </p>
              <button onClick={onClose} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                Shop Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${item.size}-${idx}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.85rem',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid #EEF2F6'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '60px', height: '60px', objectFit: 'contain', background: '#FFFFFF', borderRadius: '8px', padding: '4px' }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--zik-navy-dark)' }}>
                      {item.name}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>
                      Size: {item.size}
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--zik-navy)' }}>
                      PKR {item.price.toLocaleString()}
                    </span>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '6px', overflow: 'hidden', background: '#FFFFFF' }}>
                        <button
                          onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                          style={{ padding: '2px 8px', fontSize: '0.8rem', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ padding: '2px 8px', fontSize: '0.8rem', fontWeight: 700 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          style={{ padding: '2px 8px', fontSize: '0.8rem', fontWeight: 700 }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(idx)}
                        style={{ color: '#EF4444', padding: '4px', display: 'flex', alignItems: 'center' }}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748B', marginBottom: '0.35rem' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 700, color: '#1E293B' }}>PKR {subtotal.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748B', marginBottom: '0.75rem' }}>
              <span>Delivery (Pakistan)</span>
              <span>{deliveryCharges === 0 ? <strong style={{ color: '#10B981' }}>FREE (Orders &gt; 15k)</strong> : `PKR ${deliveryCharges}`}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 900, color: 'var(--zik-navy)', borderTop: '1px solid #E2E8F0', paddingTop: '0.65rem', marginBottom: '1.25rem' }}>
              <span>Grand Total</span>
              <span>PKR {grandTotal.toLocaleString()}</span>
            </div>

            <button
              onClick={onCheckout}
              className="btn-accent"
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
            >
              Proceed to Secure Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
