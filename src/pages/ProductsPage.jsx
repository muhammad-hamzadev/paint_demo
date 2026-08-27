import React, { useState } from 'react';
import { Search, Heart, Star, Eye, ShoppingCart, Filter, FileText, ArrowRight } from 'lucide-react';
import { productsData, categoriesData } from '../data/productsData';

export default function ProductsPage({
  activeCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedQualities, setSelectedQualities] = useState({});

  const qualityOptions = [
    { id: 'high', label: 'High Quality (Premium)', multiplier: 1.0 },
    { id: 'medium', label: 'Medium Quality (Standard)', multiplier: 0.75 },
    { id: 'low', label: 'Low Quality (Economy)', multiplier: 0.55 }
  ];

  const handleSizeChange = (productId, sizeIndex) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: sizeIndex
    }));
  };

  const handleQualityChange = (productId, qualityId) => {
    setSelectedQualities((prev) => ({
      ...prev,
      [productId]: qualityId
    }));
  };

  const handleWhatsAppOrder = (product, qualityLabel, sizeName, price) => {
    const phone = '923001234567';
    const text = `Assalam-o-Alaikum ZIK Paints!\nI want to order:\n📦 Product: ${product.name}\n⭐ Quality Grade: ${qualityLabel}\n🛢️ Pack Size: ${sizeName}\n💰 Price: PKR ${price.toLocaleString()}\n\nPlease details send karein.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Filter products by Category & Search query
  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero Header with Clean Blue Room Background */}
      <div 
        className="relative text-white py-20 sm:py-24 px-4 overflow-hidden bg-cover bg-center border-b border-slate-200 shadow-lg"
        style={{ backgroundImage: `url('./assets/images/room-blue-bg.svg')` }}
      >
        {/* Subtle Transparent Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            Product & Category Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            Professional Paint Formulations
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
            Discover interior emulsions, exterior weather shields, wood varnishes, primers, wall putty, and industrial coatings engineered for Pakistani climates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 space-y-6">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products by name, surface type, or feature (e.g., Weather Shield, Primer, Silk Touch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy focus:bg-white transition"
            />
          </div>

          {/* Category Pills */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
              <Filter className="w-4 h-4 text-brand-navy" /> Filter by Surface Category:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onSelectCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === 'all'
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Products ({productsData.length})
              </button>
              {categoriesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeCategory === cat.id
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const currentQualityId = selectedQualities[product.id] || 'high';
              const currentQualityObj = qualityOptions.find((q) => q.id === currentQualityId) || qualityOptions[0];

              const currentSizeIdx = selectedSizes[product.id] || 0;
              const currentSizeObj = product.sizes ? product.sizes[currentSizeIdx] : { size: '4 Litres', price: product.price };

              const basePrice = currentSizeObj.price || product.price;
              const currentPrice = Math.round(basePrice * currentQualityObj.multiplier);
              return (
                <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col group relative">
                  
                  {/* Badge */}
                  {product.badge && (
                    <span 
                      className="absolute top-4 left-4 z-10 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md"
                      style={{ backgroundColor: product.badgeColor || '#0B2265' }}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Product Image */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="h-64 bg-slate-50 p-6 flex items-center justify-center relative cursor-pointer overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Product Info Body */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-orange">
                      {product.categoryName || 'ZIK Paint Series'}
                    </span>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="text-xl font-extrabold text-slate-900 group-hover:text-brand-blue transition cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />
                        ))}
                      </div>
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
                    </div>

                    {/* Quality Category Dropdown */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Select Quality Grade:
                      </label>
                      <select
                        value={currentQualityId}
                        onChange={(e) => handleQualityChange(product.id, e.target.value)}
                        className="w-full bg-blue-50/50 border border-blue-200 rounded-xl px-3 py-2 text-xs font-bold text-brand-navy focus:outline-none focus:border-brand-navy"
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
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                          Select Pack Size:
                        </label>
                        <select
                          value={currentSizeIdx}
                          onChange={(e) => handleSizeChange(product.id, Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-navy"
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
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase">Price</span>
                        <span className="text-xl font-black text-brand-navy">PKR {currentPrice.toLocaleString()}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        In Stock
                      </span>
                    </div>

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" /> Details
                      </button>
                      <button
                        onClick={() => handleWhatsAppOrder(product, currentQualityObj.label, currentSizeObj.size, currentPrice)}
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs py-3 rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.34-1.492C8.01 23.447 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.626-.502-5.145-1.378l-.369-.211-3.82.899.914-3.725-.236-.379A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                        </svg> WhatsApp
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800">No Products Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". Try selecting a different category or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="bg-brand-navy text-white font-bold text-xs px-6 py-3 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
