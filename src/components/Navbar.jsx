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
  onToggleLanguage,
  onSelectProduct,
  onSelectShade
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

  // Search Filtering
  const filteredProducts = searchQuery.trim()
    ? productsData.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredShades = searchQuery.trim()
    ? colorShadesData.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.family.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasSearchQuery = searchQuery.trim().length > 0;

  return (
    <>
      {/* Top Notification / Contact Bar - Strictly 1 Single Inline Row */}
      <div className="top-bar">
        <div className="container top-bar-inner" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <div className="top-bar-left" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: '0.85rem', whiteSpace: 'nowrap' }}>
            <span className="top-bar-item top-bar-slogan" style={{ color: '#F1F5F9', fontWeight: 700, fontSize: '0.88rem' }}>
              High Quality Paints for Beautiful Spaces
            </span>
            <a href="tel:03306100065" className="top-bar-item" style={{ fontSize: '0.88rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
              <Phone size={14} /> 03306100065
            </a>
          </div>

          <div className="top-bar-right" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: '0.85rem', whiteSpace: 'nowrap' }}>
            <button 
              onClick={onOpenDealerModal} 
              className="top-bar-item" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 700, whiteSpace: 'nowrap' }}
            >
              <MapPin size={14} color="#EC4899" /> Location
            </button>

            <div className="top-bar-socials" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '0.5rem', alignItems: 'center' }}>
              <a href="#" className="top-bar-social-btn" aria-label="Facebook"><FacebookIcon size={15} /></a>
              <a href="#" className="top-bar-social-btn" aria-label="Instagram"><InstagramIcon size={15} /></a>
              <a href="https://wa.me/923306100065" target="_blank" rel="noreferrer" className="top-bar-social-btn" aria-label="WhatsApp"><WhatsappIcon size={15} /></a>
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
                PAINT INDUSTRY <span></span> PAKISTAN
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
            {/* Search Button & Expandable Search Bar Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  if (searchOpen) setSearchQuery('');
                }} 
                className="action-btn"
                aria-label="Search"
                title="Search"
                style={{
                  background: searchOpen ? '#EFF6FF' : 'transparent',
                  color: searchOpen ? '#0B2265' : 'inherit'
                }}
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>

              {/* Live Search Input & Results Dropdown */}
              {searchOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  right: 0,
                  width: '340px',
                  maxWidth: '90vw',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(11, 34, 101, 0.22)',
                  border: '1.5px solid #E2E8F0',
                  padding: '0.85rem',
                  zIndex: 99999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}>
                  {/* Search Input Field */}
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search size={16} color="#64748B" style={{ position: 'absolute', left: '12px' }} />
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search paints, shades e.g. Silk Touch..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchQuery.trim()) {
                          onNavigate('products');
                          setSearchOpen(false);
                          setSearchQuery('');
                        }
                      }}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.8rem 0.6rem 2.2rem',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#0B1B3D',
                        outline: 'none',
                        background: '#F8FAFC'
                      }}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Results List */}
                  {hasSearchQuery ? (
                    <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingRight: '4px' }}>
                      {/* Products Category */}
                      {filteredProducts.length > 0 && (
                        <div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                            Products ({filteredProducts.length})
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {filteredProducts.slice(0, 4).map((product) => (
                              <button
                                key={product.id}
                                onClick={() => {
                                  if (onSelectProduct) onSelectProduct(product);
                                  else onNavigate('products');
                                  setSearchOpen(false);
                                  setSearchQuery('');
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.65rem',
                                  padding: '0.45rem 0.6rem',
                                  borderRadius: '8px',
                                  border: '1px solid #EEF2F6',
                                  background: '#F8FAFC',
                                  cursor: 'pointer',
                                  textAlign: 'left',
                                  width: '100%'
                                }}
                              >
                                <img src={product.image} alt={product.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0B1B3D', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {product.name}
                                  </div>
                                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                                    PKR {product.price?.toLocaleString()}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Color Shades Category */}
                      {filteredShades.length > 0 && (
                        <div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.35rem', marginTop: '0.25rem' }}>
                            Color Shades ({filteredShades.length})
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {filteredShades.slice(0, 4).map((shade) => (
                              <button
                                key={shade.code}
                                onClick={() => {
                                  if (onSelectShade) onSelectShade(shade);
                                  else onNavigate('colors');
                                  setSearchOpen(false);
                                  setSearchQuery('');
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.65rem',
                                  padding: '0.45rem 0.6rem',
                                  borderRadius: '8px',
                                  border: '1px solid #EEF2F6',
                                  background: '#FFFFFF',
                                  cursor: 'pointer',
                                  textAlign: 'left',
                                  width: '100%'
                                }}
                              >
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: shade.hex, border: '1px solid #CBD5E1', flexShrink: 0 }} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0B1B3D' }}>
                                    {shade.name}
                                  </div>
                                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                                    Code: {shade.code}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredProducts.length === 0 && filteredShades.length === 0 && (
                        <div style={{ padding: '0.85rem', textAlign: 'center', color: '#64748B', fontSize: '0.82rem' }}>
                          No paints or shades found for "<strong>{searchQuery}</strong>".
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ padding: '0.4rem', fontSize: '0.78rem', color: '#64748B' }}>
                      💡 Type a product name (e.g., <strong>Silk Touch</strong>, <strong>Weather Shield</strong>) or shade code (e.g., <strong>ZIK-101</strong>).
                    </div>
                  )}
                </div>
              )}
            </div>

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
