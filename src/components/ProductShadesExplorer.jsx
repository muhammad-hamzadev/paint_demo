import React, { useState, useMemo } from 'react';
import { Check, Sparkles, Copy, Search, Paintbrush, Filter, RefreshCw } from 'lucide-react';
import { productsData } from '../data/productsData';
import { ALL_200_COLOR_SHADES } from '../data/allShadesData';

// Color Family Categories for filtering 1000+ shades
const colorFamilyCategories = [
  { id: 'all', name: 'All 1000+ Shades' },
  { id: 'whites', name: 'Whites & Creams', icon: '⚪' },
  { id: 'beiges', name: 'Beiges & Sand', icon: '🌾' },
  { id: 'blues', name: 'Blues & Navy', icon: '🔵' },
  { id: 'greens', name: 'Greens & Sage', icon: '🟢' },
  { id: 'grays', name: 'Grays & Slate', icon: '🩶' },
  { id: 'reds', name: 'Reds & Terracotta', icon: '🔴' },
  { id: 'yellows', name: 'Yellows & Gold', icon: '🟡' },
  { id: 'purples', name: 'Purples & Lilac', icon: '🪻' },
  { id: 'teals', name: 'Teals & Aquas', icon: '🩵' },
  { id: 'earth', name: 'Earth Tones', icon: '🟤' }
];

export default function ProductShadesExplorer({ onSelectShade, onOpenConsultation }) {
  // Filter & Pagination States
  const [selectedFamilyId, setSelectedFamilyId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;

  // Filter 1000+ Color Shades based on Family & Search
  const filteredShades = useMemo(() => {
    return ALL_200_COLOR_SHADES.filter((shade) => {
      const matchesFamily = selectedFamilyId === 'all' || shade.family === selectedFamilyId;
      const matchesSearch =
        shade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shade.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shade.hex.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFamily && matchesSearch;
    });
  }, [selectedFamilyId, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredShades.length / itemsPerPage));
  const currentShades = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredShades.slice(start, start + itemsPerPage);
  }, [filteredShades, currentPage, itemsPerPage]);

  const handleCopy = (code, hex, name) => {
    navigator.clipboard.writeText(`${code} ${name} (${hex})`);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleResetFilters = () => {
    setSelectedFamilyId('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const elem = document.getElementById('shades-explorer-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="shades-explorer-section" className="py-6 space-y-8">

      {/* ========================================================================= */}
      {/* 1000+ COLOR SHADES EXPLORER CONTAINER                                     */}
      {/* ========================================================================= */}
      <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">

        {/* 1. CLEAN SECTION HEADER (MATCHING "FIND YOUR COLOR" STYLE) */}
        <div className="p-6 sm:p-8 bg-white border-b border-slate-100">
          <div className="section-badge" style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
            1000+ Signature Color Library
          </div>
          <h2 className="section-title">
            Color Shades
          </h2>
          <p className="section-subtitle">
            Explore 1000+ vibrant ZIK paint shades, custom shade cards, and hex codes across all spectrum categories.
          </p>
        </div>

        {/* 2. COLOR FAMILY CATEGORY TABS & SEARCH BAR */}
        <div className="p-6 sm:p-8 bg-white border-b border-slate-100 space-y-6">

          {/* Color Family Category Pills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
              <Filter className="w-4 h-4 text-brand-navy" /> Filter by Color Spectrum Category:
            </div>
            <div className="flex flex-wrap gap-2">
              {colorFamilyCategories.map((fam) => {
                const isActive = selectedFamilyId === fam.id;
                return (
                  <button
                    key={fam.id}
                    onClick={() => {
                      setSelectedFamilyId(fam.id);
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${isActive
                      ? 'bg-[#0B1B3D] text-white shadow-md scale-105 ring-2 ring-[#0B1B3D]/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                  >
                    {fam.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box & Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 500 shades by name, code (e.g. ZIK-105) or hex..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-brand-navy focus:bg-white transition"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                Showing <strong className="text-brand-magenta">{currentShades.length}</strong> of {filteredShades.length} Shades
              </span>

              {(selectedFamilyId !== 'all' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-slate-500 hover:text-brand-navy flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>
              )}
            </div>
          </div>

        </div>

        {/* 3. 500 COLOR SHADES CARD GRID & NUMBERED PAGINATION */}
        <div className="p-6 sm:p-10 space-y-8 bg-slate-50/50">

          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">
              Available Color Shades & Swatch Cards
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              Click any color shade card to copy code & hex value. Use page numbers below to navigate all 500 shades.
            </p>
          </div>

          {currentShades.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {currentShades.map((shade) => (
                <div
                  key={shade.code}
                  onClick={() => handleCopy(shade.code, shade.hex, shade.name)}
                  className="group cursor-pointer bg-white rounded-2xl p-3 border border-slate-200 hover:border-brand-navy shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Color Swatch Tile */}
                  <div
                    className="w-full h-28 sm:h-32 rounded-xl shadow-inner border border-black/10 transition-transform duration-300 group-hover:scale-[1.02] relative flex flex-col justify-between p-2.5"
                    style={{ backgroundColor: shade.hex }}
                  >
                    {/* Top Code Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs ${shade.textLight ? 'bg-black/40 text-white' : 'bg-white/80 text-slate-900 border border-black/10'
                        }`}>
                        {shade.code}
                      </span>
                      {copiedCode === shade.code && (
                        <span className="text-[10px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-md shadow-md animate-in fade-in">
                          Copied!
                        </span>
                      )}
                    </div>

                    {/* Bottom Hex Code */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`text-[10px] font-bold ${shade.textLight ? 'text-white/90 drop-shadow-sm' : 'text-slate-900/90'}`}>
                        {shade.hex}
                      </span>
                      <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded ${shade.textLight ? 'bg-white/20 text-white' : 'bg-black/10 text-slate-800'
                        }`}>
                        ZIK
                      </span>
                    </div>
                  </div>

                  {/* Shade Name Below Swatch */}
                  <div className="mt-2.5 flex flex-col">
                    <h4 className="text-xs font-black text-slate-900 group-hover:text-brand-navy transition line-clamp-1">
                      {shade.name}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400 mt-0.5">
                      {shade.familyName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-lg font-black text-slate-800">No Color Shades Found</h4>
              <p className="text-xs text-slate-500">
                No color matches "{searchQuery}" under the selected filters. Try resetting your search.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#0B1B3D] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* NUMBERED PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <span className="text-xs font-extrabold text-slate-600">
                Page <strong className="text-brand-navy">{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredShades.length} Total Shades)
              </span>

              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition ${currentPage === 1
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 shadow-xs'
                    }`}
                >
                  ← Previous
                </button>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Display page numbers intelligently (first, last, and current neighbors)
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    const isCurrent = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-black transition ${isCurrent
                          ? 'bg-[#0B1B3D] text-white shadow-md scale-105'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    (pageNum === currentPage - 2 && pageNum > 2) ||
                    (pageNum === currentPage + 2 && pageNum < totalPages - 1)
                  ) {
                    return (
                      <span key={pageNum} className="text-xs text-slate-400 px-1 font-bold">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition ${currentPage === totalPages
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 shadow-xs'
                    }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
