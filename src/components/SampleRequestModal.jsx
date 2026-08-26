import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, MapPin, User, Phone, Paintbrush, Package } from 'lucide-react';

export default function SampleRequestModal({ isOpen, onClose, initialShade = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    address: '',
    shadeCode: initialShade ? `${initialShade.code} - ${initialShade.name}` : 'ZIK-101 Crystal White',
    sampleType: '100ml Tester Can (Rs 350)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0B1B3D] text-white p-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Paintbrush className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Request Color Sample / Tester</h3>
                <p className="text-xs text-slate-300">Get physical 100ml tester cans or shade cards delivered</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900">Sample Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Your request for <span className="font-bold text-amber-600">{formData.shadeCode}</span> ({formData.sampleType}) has been logged.
              </p>
              <p className="text-xs text-slate-400">
                Our color dispatch team will call you at <span className="font-mono text-slate-700">{formData.phone}</span> within 2 hours to confirm delivery to {formData.city}.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {initialShade && (
              <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-2xl">
                <div
                  className="w-10 h-10 rounded-xl shadow-inner border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: initialShade.hex }}
                />
                <div>
                  <div className="text-xs text-amber-800 font-extrabold uppercase tracking-wider">Selected Color Shade</div>
                  <div className="text-sm font-bold text-slate-900">{initialShade.name} ({initialShade.code})</div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ali Ahmed"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-1234567"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy bg-white"
                >
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Sample Type *
                </label>
                <select
                  value={formData.sampleType}
                  onChange={(e) => setFormData({ ...formData, sampleType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy bg-white"
                >
                  <option value="100ml Tester Can (Rs 350)">100ml Mini Tester Can</option>
                  <option value="Physical Shade Fan Deck Card (Free)">Physical Printed Shade Deck</option>
                  <option value="Architect Master Swatch Pack">Architect Master Swatch Box</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Shade Code / Color Name
              </label>
              <input
                type="text"
                value={formData.shadeCode}
                onChange={(e) => setFormData({ ...formData, shadeCode: e.target.value })}
                placeholder="e.g. ZIK-204 Ocean Blue"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Complete Delivery Address *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address, house #, area..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" /> Submit Sample Request
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
