import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Shield,
  Globe
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';
import { categoriesData, productsData } from '../data/productsData';
import { colorShadesData } from '../data/shadesData';

export default function Navbar({
  currentPage,
  onNavigate,
  onSelectCategory,
  cartCount,
  savedPaletteCount = 0,
  onOpenCart,
  onOpenPalette,
  onOpenDealerModal,
  language = 'en',
  onToggleLanguage
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdown, setProductsDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products Catalog', hasDropdown: true },
    { id: 'colors', label: 'Shades & Visualizer' },
    { id: 'calculator', label: 'Paint Calculator' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Notification / Contact Bar - Strictly 1 Single Inline Row */}
      <div className="top-bar">
        <div className="container top-bar-inner" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <div className="top-bar-left" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap' }}>
            <span className="top-bar-item top-bar-slogan" style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.72rem' }}>
              High Quality Paints for Beautiful Spaces
            </span>
            <a href="tel:+923001234567" className="top-bar-item" style={{ fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
              <Phone size={11} /> +92 300 1234567
            </a>
          </div>

          <div className="top-bar-right" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap' }}>
            <button 
              onClick={onOpenDealerModal} 
              className="top-bar-item" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.72rem', whiteSpace: 'nowrap' }}
            >
              <MapPin size={11} color="#EC4899" /> Location
            </button>

            <div className="top-bar-socials" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '0.4rem', alignItems: 'center' }}>
              <a href="#" className="top-bar-social-btn" aria-label="Facebook"><FacebookIcon size={13} /></a>
              <a href="#" className="top-bar-social-btn" aria-label="Instagram"><InstagramIcon size={13} /></a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="top-bar-social-btn" aria-label="WhatsApp"><WhatsappIcon size={13} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="main-header">
        <div className="container nav-container">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="brand-logo-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div className="brand-logo">
              <div className="brand-logo-title">
                ZIK<span className="brand-logo-accent">.</span>
              </div>
              <div className="brand-logo-sub">
                PAINTS <span></span> PAKISTAN
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id}
                    className="nav-dropdown-wrapper"
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {item.label} <ChevronDown size={14} />
                    </button>

                    {productsDropdown && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '280px',
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        boxShadow: '0 15px 35px rgba(11, 34, 101, 0.15)',
                        border: '1px solid #EEF2F6',
                        padding: '0.75rem',
                        zIndex: 60,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                      }}>
                        <button
                          onClick={() => {
                            onSelectCategory('all');
                            onNavigate('products');
                            setProductsDropdown(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.6rem 0.8rem',
                            borderRadius: '8px',
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            color: '#0B2265',
                            border: 'none',
                            background: '#F1F5F9',
                            cursor: 'pointer'
                          }}
                        >
                          <span>All Products Catalog</span>
                          <span style={{ fontSize: '0.75rem', color: '#FFFFFF', background: '#0B2265', padding: '2px 6px', borderRadius: '10px' }}>
                            {productsData.length}
                          </span>
                        </button>

                        {categoriesData.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onSelectCategory(cat.id);
                              onNavigate('products');
                              setProductsDropdown(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0.6rem 0.8rem',
                              borderRadius: '8px',
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              color: '#1E293B',
                              border: 'none',
                              background: 'transparent',
                              cursor: 'pointer',
                              textAlign: 'left'
                            }}
                          >
                            <span>{cat.name}</span>
                            <span style={{ fontSize: '0.75rem', color: '#64748B', background: '#F1F5F9', padding: '2px 6px', borderRadius: '10px' }}>
                              {cat.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="action-btn"
              aria-label="Search"
              title="Search"
            >
              <Search size={18} />
            </button>

            {/* 3-Line Mobile Hamburger Menu Icon Button (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="action-btn mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              title="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Navigation Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '95px',
          left: 0,
          right: 0,
          background: '#0B1B3D',
          color: '#FFFFFF',
          padding: '1rem 1.25rem',
          zIndex: 9999,
          boxShadow: '0 15px 30px rgba(0,0,0,0.35)',
          borderBottom: '3px solid #E11D48',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                borderRadius: '10px',
                background: currentPage === item.id ? '#E11D48' : 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{item.label}</span>
              <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          ))}

          <button
            onClick={() => {
              onOpenDealerModal();
              setMobileMenuOpen(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              background: '#38BDF8',
              color: '#0B1B3D',
              fontSize: '0.88rem',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              marginTop: '0.2rem'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={15} /> Official Peshawar Location
            </span>
            <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
      )}
    </>
  );
}
