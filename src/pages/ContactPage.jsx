import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Building2
} from 'lucide-react';

export default function ContactPage({ onOpenDealerModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 4000);
  };

  const faqs = [
    {
      q: 'Where is the main ZIK Paints store located in Pakistan?',
      a: 'ZIK Paints main experience center and flagship outlet is located on Main University Road, Near Gulabad Stop, Peshawar. You can visit our store or order directly via WhatsApp.'
    },
    {
      q: 'What is the warranty coverage on ZIK Weather Shield?',
      a: 'ZIK Weather Shield comes with a 10-Year Direct Manufacturer Performance Warranty against flaking, peeling, UV fading, and fungal/algae growth when applied over ZIK Aqueous Primer.'
    },
    {
      q: 'Are ZIK paints eco-friendly and safe for indoor air quality?',
      a: 'Yes! All ZIK interior emulsions (Silk Touch and Royal Matt) are formulated with zero-VOC, non-toxic waterborne formulas that produce virtually zero odor and allow immediate room re-entry.'
    },
    {
      q: 'How do I calculate how much paint I need for my house?',
      a: 'You can use our interactive Smart Paint Calculator on the "Paint Calculator" tab! Simply enter your room dimensions, doors, and windows to get exact gallon recommendations.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero Header with AI Generated Store Locator Map Background */}
      <div 
        className="relative text-white py-20 sm:py-24 px-4 overflow-hidden bg-cover bg-center border-b border-blue-900/60 shadow-2xl"
        style={{ backgroundImage: `url('./assets/images/ai-store-locator-map.svg')` }}
      >
        {/* Dark Glass Overlay Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/85 to-[#040D25]/75 backdrop-blur-[1px]" />

        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            <Phone className="w-4 h-4 text-brand-orange" /> Contact & Store Locator
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            GET IN TOUCH WITH ZIK PAINTS
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
            Have questions about product specifications, shade decks, dealer locations, or bulk contractor quotes? Our team is here to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 space-y-12">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-navy flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400">Customer Helpline & WhatsApp</h4>
              <a href="tel:+923001234567" className="text-lg font-black text-slate-900 hover:text-brand-navy block mt-1">
                +92 300 1234567
              </a>
              <p className="text-xs text-slate-500 mt-1">Mon - Sat: 9:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400">Main Experience Center & Outlet</h4>
              <p className="text-sm font-extrabold text-slate-900 mt-1">
                Main University Road, Near Gulabad Stop, Peshawar, Khyber Pakhtunkhwa
              </p>
            </div>
          </div>
        </div>

        {/* Dealer Map Locator Banner */}
        <div 
          className="relative rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden bg-cover bg-center border border-blue-800/40"
          style={{ backgroundImage: `url('./assets/images/ai-store-locator-map.svg')` }}
        >
          {/* Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2265]/90 via-[#0B2265]/80 to-[#040D25]/75" />

          <div className="space-y-3 text-center md:text-left relative z-10">
            <span className="bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-amber-300">
              Peshawar Flagship Branch
            </span>
            <h3 className="text-3xl font-extrabold text-white drop-shadow-md">Locate ZIK Paints Main Outlet</h3>
            <p className="text-slate-200 text-sm max-w-xl">
              Visit our flagship experience center and main outlet on Main University Road, Peshawar to view live shade cards and make purchases.
            </p>
          </div>

          <button
            onClick={onOpenDealerModal}
            className="relative z-10 shrink-0 bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" /> Open Peshawar Branch Map
          </button>
        </div>

        {/* Contact Form & Office Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Send Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">Drop Us a Line</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Send a Direct Message</h3>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Message Sent!</h4>
                <p className="text-xs text-emerald-700">Thank you for reaching out. A ZIK representative will reply to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bilal Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="bilal@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Dealer Registration">Become a Dealer</option>
                      <option value="Bulk Contractor Quote">Bulk Contractor Quote</option>
                      <option value="Shade Consultation">Shade Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-navy"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-navy hover:bg-blue-900 text-white font-extrabold text-sm py-4 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-brand-navy">
              <HelpCircle className="w-5 h-5" />
              <h3 className="text-xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between text-sm hover:text-brand-navy transition"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-brand-navy" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
