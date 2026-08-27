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
      
      {/* Top Page Header */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy-dark to-slate-900 text-white py-16 px-4 sm:px-8 shadow-inner relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-300/30 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> We're Here to Help
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact ZIK Paint Industry
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions about paint selection, custom shade tinting, or bulk dealership orders? Get in touch with our team in Peshawar today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10 space-y-12">
        
        {/* Contact Info Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-navy flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400">Customer Helpline & WhatsApp</h4>
              <a href="tel:03306100065" className="text-lg font-extrabold text-slate-900 hover:text-brand-navy block mt-1">
                03306100065
              </a>
              <span className="text-xs text-emerald-600 font-bold block mt-0.5">✓ WhatsApp Order Available</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-brand-rose flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400">Email Support</h4>
              <a href="mailto:info@zikpaints.com" className="text-base font-extrabold text-slate-900 hover:text-brand-rose block mt-1">
                info@zikpaints.com
              </a>
              <span className="text-xs text-slate-500 block mt-0.5">Replies within 24 hours</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-400">Main Factory & Outlet</h4>
              <p className="text-sm font-extrabold text-slate-900 mt-1">
                Small Industrial Estate, Kohat Road, Peshawar
              </p>
            </div>
          </div>
        </div>

        {/* Real Embedded Google Map Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="bg-blue-50 text-brand-navy border border-blue-200 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest">
                📍 Peshawar Flagship Branch
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Locate ZIK Paint Industry Main Outlet
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Visit our factory outlet at Small Industrial Estate, Kohat Road, Peshawar to view live shade cards and make purchases.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/4LQf3DYre6M21F3N7"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-brand-orange hover:bg-orange-600 text-white font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-md transition transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" /> Open in Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Map Iframe Box with Floating 'Open in Maps' Button */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner h-[380px] sm:h-[420px] w-full">
            {/* Top-Left Floating 'Open in Maps' Badge */}
            <a
              href="https://maps.app.goo.gl/4LQf3DYre6M21F3N7"
              target="_blank"
              rel="noreferrer"
              className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md hover:bg-white text-blue-600 font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg border border-slate-200 inline-flex items-center gap-1.5 transition"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Google Map Iframe */}
            <iframe
              title="ZIK Paint Industry Peshawar Outlet Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4248467924913!2d71.559547774359!3d33.981619721458415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9179588d5a465%3A0x85a69dc9be0042de!2sZik%20Paint%20%26%20Chemical!5e0!3m2!1sen!2s!4v1787772864794!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs font-extrabold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-700">Open & Ready to Serve • 9:00 AM - 9:00 PM (Mon - Sat)</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-slate-500">📍 Small Industrial Estate, Kohat Road, Peshawar</span>
              <a href="tel:03306100065" className="text-brand-navy hover:underline font-extrabold">📞 03306100065</a>
            </div>
          </div>
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
