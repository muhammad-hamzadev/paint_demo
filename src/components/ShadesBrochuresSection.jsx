import React, { useState } from 'react';
import { Download, Eye, FileText, Sparkles, BookOpen, Send, X, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const BROCHURES_DATA = [
  {
    id: 'b1',
    title: 'ZIK Paints Architectural Master Collection 2026',
    category: 'Full Catalog',
    pages: 36,
    size: '12.4 MB PDF',
    desc: 'Complete range of interior, exterior, wood finishes, and industrial protective coatings.',
    coverColor: 'from-blue-900 to-slate-900',
    tag: 'Official Master Catalog'
  },
  {
    id: 'b2',
    title: 'Silk Touch Emulsion & Interior Elegance',
    category: 'Interior Paints',
    pages: 18,
    size: '6.8 MB PDF',
    desc: 'Luxury wash-ability, stain resistance, and velvet smooth finishes for interior walls.',
    coverColor: 'from-rose-800 to-amber-900',
    tag: 'Interior Shade Card'
  },
  {
    id: 'b3',
    title: 'Weather Shield Architectural Exterior Protection',
    category: 'Exterior Paints',
    pages: 16,
    size: '8.1 MB PDF',
    desc: 'UV-resistant, anti-fungal, heat reflective exterior coatings with 10-year warranty.',
    coverColor: 'from-emerald-900 to-teal-900',
    tag: 'Weatherproof Guide'
  },
  {
    id: 'b4',
    title: 'Wood & Metal Gloss Enamels Specifier Guide',
    category: 'Specialty Finishes',
    pages: 12,
    size: '4.5 MB PDF',
    desc: 'High gloss synthic enamel, polyurethane varnishes, and anti-rust primers.',
    coverColor: 'from-amber-800 to-yellow-900',
    tag: 'Enamels & Primers'
  }
];

export default function ShadesBrochuresSection({ onRequestSample }) {
  const [activePdfModal, setActivePdfModal] = useState(null);
  const [requestMailModal, setRequestMailModal] = useState(false);
  const [mailForm, setMailForm] = useState({ name: '', phone: '', city: '', address: '', type: 'Master Physical Shade Card' });
  const [mailSubmitted, setMailSubmitted] = useState(false);

  const handleDownload = (brochure) => {
    const content = `=========================================\n${brochure.title.toUpperCase()}\n=========================================\nCategory: ${brochure.category}\nPages: ${brochure.pages}\nVersion: 2026 Architectural Specifier Edition\n\nThank you for downloading official ZIK Paints documentation.\nFor orders & bulk quotes, visit www.zikpaints.com or call 042-35789000.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${brochure.title.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    setMailSubmitted(true);
  };

  return (
    <section id="shades-brochures" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            <BookOpen className="w-4 h-4 text-amber-600" /> Shades & Brochures Specifier
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Digital Catalogs & Printed Shade Cards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Preview, view inline, or download high-resolution PDF brochures and request physical shade cards delivered to your doorstep.
          </p>
        </div>

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BROCHURES_DATA.map((brochure) => (
            <div
              key={brochure.id}
              className="group rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Banner / Cover */}
              <div className={`p-6 bg-gradient-to-br ${brochure.coverColor} text-white relative min-h-[160px] flex flex-col justify-between overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 text-amber-300 w-fit backdrop-blur-sm border border-white/10">
                  {brochure.tag}
                </span>

                <div className="relative z-10 space-y-1">
                  <h4 className="text-lg font-black leading-snug line-clamp-2 text-white group-hover:text-amber-300 transition-colors">
                    {brochure.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-mono">
                    {brochure.pages} Pages • {brochure.size}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {brochure.desc}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActivePdfModal(brochure)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:border-brand-navy hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-blue-600" /> Preview PDF
                  </button>

                  <button
                    onClick={() => handleDownload(brochure)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-4 h-4 text-amber-400" /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: Request Physical Shade Card by Mail */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1B3D] via-slate-900 to-slate-800 text-white p-8 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30">
              <Mail className="w-3.5 h-3.5" /> Doorstep Postal Service
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Want Physical Shade Cards Mailed to You?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              We send authentic printed shade fan decks and product brochures directly to architects, contractors, and home builders for free.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => setRequestMailModal(true)}
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" /> Request Physical Shade Card By Mail
            </button>
          </div>
        </div>

      </div>

      {/* 1. INLINE PDF PREVIEWER MODAL */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            
            <div className="bg-[#0B1B3D] text-white p-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-amber-400" />
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">{activePdfModal.title}</h4>
                  <p className="text-xs text-slate-300">{activePdfModal.pages} Pages • Inline PDF Viewer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(activePdfModal)}
                  className="py-1.5 px-3 rounded-lg bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-200 overflow-y-auto p-6 flex flex-col items-center gap-6">
              
              <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-slate-300">
                <div className="h-48 bg-gradient-to-r from-slate-900 to-brand-navy rounded-xl p-6 text-white flex flex-col justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">ZIK PAINTS ARCHITECTURAL SPECIFIER 2026</span>
                  <div>
                    <h2 className="text-2xl font-black text-white">{activePdfModal.title}</h2>
                    <p className="text-xs text-slate-300">{activePdfModal.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 py-4 border-t border-b border-slate-100">
                  {['#F8FAFC', '#E2E8F0', '#94A3B8', '#334155', '#0F172A', '#0284C7', '#059669', '#E11D48'].map((hex, i) => (
                    <div key={i} className="space-y-1 text-center">
                      <div className="h-12 rounded-lg shadow-inner border border-slate-200" style={{ backgroundColor: hex }} />
                      <span className="text-[10px] font-mono text-slate-500">ZIK-SHADE #{i+101}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <h5 className="font-bold text-slate-900 uppercase">Product Technical Specifications:</h5>
                  <p>• Coverage: 140 - 160 sq ft per liter on smooth primed surfaces.</p>
                  <p>• Drying Time: Touch dry in 30 mins, recoat in 3 - 4 hours.</p>
                  <p>• Wash-ability: Exceeds 10,000 scrubs (ASTM D2486 standard).</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 2. PHYSICAL CATALOG MAIL REQUEST MODAL */}
      {requestMailModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative">
            
            <div className="bg-[#0B1B3D] text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-amber-400" />
                <div>
                  <h4 className="font-extrabold text-white text-lg">Request Printed Catalog by Mail</h4>
                  <p className="text-xs text-slate-300">Delivered free to home or office in Pakistan</p>
                </div>
              </div>
              <button onClick={() => { setRequestMailModal(false); setMailSubmitted(false); }} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {mailSubmitted ? (
              <div className="p-8 text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-2xl font-black text-slate-900">Shade Card Dispatched!</h4>
                <p className="text-sm text-slate-600">
                  Your physical shade card pack will be delivered to <span className="font-bold text-slate-800">{mailForm.address}, {mailForm.city}</span> via courier within 2-3 working days.
                </p>
                <button
                  onClick={() => { setRequestMailModal(false); setMailSubmitted(false); }}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleMailSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={mailForm.name}
                    onChange={(e) => setMailForm({ ...mailForm, name: e.target.value })}
                    placeholder="e.g. Engr. Tariq Hassan"
                    className="w-full px-3 py-2.5 rounded-xl border text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={mailForm.phone}
                      onChange={(e) => setMailForm({ ...mailForm, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full px-3 py-2.5 rounded-xl border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={mailForm.city}
                      onChange={(e) => setMailForm({ ...mailForm, city: e.target.value })}
                      placeholder="Lahore / Karachi"
                      className="w-full px-3 py-2.5 rounded-xl border text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Postal Delivery Address *</label>
                  <textarea
                    required
                    rows={2}
                    value={mailForm.address}
                    onChange={(e) => setMailForm({ ...mailForm, address: e.target.value })}
                    placeholder="House/Office address, street..."
                    className="w-full px-3 py-2.5 rounded-xl border text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md"
                >
                  Send Free Physical Catalog
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
