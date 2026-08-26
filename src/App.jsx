import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ColorsPage from './pages/ColorsPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

// New Sections & Components
import ShadesBrochuresSection from './components/ShadesBrochuresSection';

// Modals and Drawers
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import ColorPaletteDrawer from './components/ColorPaletteDrawer';
import SampleRequestModal from './components/SampleRequestModal';
import DealerModal from './components/DealerModal';

export default function App() {
  // Page Navigation State
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [language, setLanguage] = useState('en');

  // Modals & Drawers States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [sampleInitialShade, setSampleInitialShade] = useState(null);
  const [isDealerOpen, setIsDealerOpen] = useState(false);

  // Selected Detail View States
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart State (Preloaded with sample ZIK items)
  const [cartItems, setCartItems] = useState([
    {
      id: 'silk-touch',
      name: 'ZIK Silk Touch Emulsion',
      image: '/assets/images/product-silk-touch.svg',
      size: '4 Litres (Gallon)',
      price: 5200,
      quantity: 2
    },
    {
      id: 'weather-shield',
      name: 'ZIK Weather Shield',
      image: '/assets/images/product-weather-shield.svg',
      size: '16 Litres (Drum)',
      price: 18200,
      quantity: 1
    }
  ]);

  // Saved Color Palette Favorites State (FR-COLOR-4)
  const [savedPalette, setSavedPalette] = useState([
    { code: 'ZIK-101', name: 'Crystal Pure White', hex: '#F8FAFC', family: 'whites', bucket: 'ZIK Silk Touch' },
    { code: 'ZIK-201', name: 'Royal Sapphire', hex: '#1E3A8A', family: 'blues', bucket: 'ZIK Weather Shield' }
  ]);

  // Handle Page Navigation with Scroll To Top
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Handlers
  const handleAddToCart = (product, sizeObj, qty = 1) => {
    const packSize = sizeObj ? sizeObj.size : '4 Litres (Gallon)';
    const itemPrice = sizeObj ? sizeObj.price : product.price;

    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) => item.id === product.id && item.size === packSize
      );

      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            size: packSize,
            price: itemPrice,
            quantity: qty
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id, size, change) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromCart = (id, size) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const handleCheckout = () => {
    alert('Thank you! Proceeding to ZIK Paints Secure Checkout / Bulk Order Inquiry...');
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Palette Favorites Handlers
  const handleToggleFavoriteShade = (shade) => {
    if (!shade || !shade.code) return;
    setSavedPalette((prev) => {
      const exists = prev.some((s) => s.code === shade.code);
      if (exists) {
        return prev.filter((s) => s.code !== shade.code);
      } else {
        return [...prev, shade];
      }
    });
  };

  const isFavoriteShade = (shadeCode) => {
    if (!shadeCode) return false;
    return savedPalette.some((s) => s.code === shadeCode);
  };

  const handleOpenSampleModal = (shade = null) => {
    setSampleInitialShade(shade);
    setIsSampleModalOpen(true);
  };

  // Standalone Admin Route Page Render
  if (currentPage === 'admin' || window.location.pathname.startsWith('/admin')) {
    return (
      <AdminPage
        onExitAdmin={handleExitAdmin}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* Header Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSelectCategory={(catId) => setActiveCategory(catId)}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        savedPaletteCount={savedPalette.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenDealerModal={() => setIsDealerOpen(true)}
        language={language}
        onToggleLanguage={() => setLanguage(language === 'en' ? 'ur' : 'en')}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectShade={(s) => handleNavigate('colors')}
      />

      {/* Main Content Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCategory={(catId) => setActiveCategory(catId)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onOpenDealerModal={() => setIsDealerOpen(true)}
            onToggleFavoriteShade={handleToggleFavoriteShade}
            isFavoriteShade={isFavoriteShade}
            onOpenSampleModal={handleOpenSampleModal}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'colors' && (
          <ColorsPage
            onAddToCart={handleAddToCart}
            onToggleFavoriteShade={handleToggleFavoriteShade}
            isFavoriteShade={isFavoriteShade}
            onOpenSampleModal={handleOpenSampleModal}
          />
        )}

        {currentPage === 'shades-brochures' && (
          <ShadesBrochuresSection onRequestSample={handleOpenSampleModal} />
        )}

        {currentPage === 'calculator' && (
          <CalculatorPage
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenDealerModal={() => setIsDealerOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDealerModal={() => setIsDealerOpen(true)}
        onSelectCategory={(catId) => setActiveCategory(catId)}
      />

      {/* MODALS & DRAWERS */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <ColorPaletteDrawer
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        paletteItems={savedPalette}
        onRemoveItem={(code) => setSavedPalette(prev => prev.filter(s => s.code !== code))}
        onClearPalette={() => setSavedPalette([])}
        onRequestSample={handleOpenSampleModal}
      />

      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        initialShade={sampleInitialShade}
      />

      <DealerModal
        isOpen={isDealerOpen}
        onClose={() => setIsDealerOpen(false)}
      />

      {/* Floating WhatsApp Widget Button */}
      <a
        href="https://wa.me/923001234567?text=Assalam-o-Alaikum%20ZIK%20Paints!%20I%20have%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '48px',
          right: '24px',
          zIndex: 9999,
          background: '#25D366',
          color: '#FFFFFF',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.45)';
        }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.34-1.492C8.01 23.447 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.626-.502-5.145-1.378l-.369-.211-3.82.899.914-3.725-.236-.379A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
      </a>

    </div>
  );
}
