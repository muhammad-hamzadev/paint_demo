import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
export default function DealerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const branch = {
    city: 'Peshawar',
    name: 'ZIK Paints Main Experience Center & Outlet',
    address: 'Main University Road, Near Gulabad Stop, Peshawar, Khyber Pakhtunkhwa',
    phone: '+92 300 1234567',
    timings: '9:00 AM - 9:00 PM (Monday - Saturday)'
  };

  const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4248467924913!2d71.559547774359!3d33.981619721458415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9179588d5a465%3A0x85a69dc9be0042de!2sZik%20Paint%20%26%20Chemical!5e0!3m2!1sen!2s!4v1787772864794!5m2!1sen!2s";
  const directMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.address)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '92%' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div style={{ padding: '2rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D91B5C', marginBottom: '0.25rem' }}>
            <MapPin size={20} color="#D91B5C" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.82rem' }}>
              Official Main Branch Location
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--zik-navy-dark)', marginBottom: '0.4rem' }}>
            ZIK Paints Peshawar Branch
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.5rem' }}>
            Visit our flagship experience center and main outlet in Peshawar for color consultations, live paint testing, and instant orders.
          </p>

          {/* Main Branch Card */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '1.25rem',
            border: '1.5px solid #E2E8F0',
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ background: '#0B2265', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '12px' }}>
                📍 Peshawar Flagship Outlet
              </span>
              <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem' }}>
                ✓ Open & Ready to Serve
              </span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1B3D' }}>
              {branch.name}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
              {branch.address}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#334155', pt: '0.25rem' }}>
              <a href={`tel:${branch.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#10B981' }}>
                <Phone size={15} /> {branch.phone}
              </a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#64748B' }}>
                <Clock size={15} color="#D91B5C" /> {branch.timings}
              </span>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #CBD5E1', height: '260px', marginBottom: '1.25rem', position: 'relative' }}>
            <iframe
              title="ZIK Paints Peshawar Location Map"
              src={googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Directions CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <a
              href={directMapUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#0B2265',
                color: '#FFFFFF',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(11, 34, 101, 0.2)'
              }}
            >
              <Navigation size={16} /> Get Directions on Google Maps <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
