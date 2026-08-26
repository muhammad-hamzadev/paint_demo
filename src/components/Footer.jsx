import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';

export default function Footer({ onNavigate, onOpenDealerModal, onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-info">
            <button 
              onClick={() => onNavigate('home')} 
              className="brand-logo"
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
            >
              <div className="brand-logo-title" style={{ color: '#FFFFFF' }}>
                ZIK<span style={{ color: 'var(--zik-magenta)' }}>.</span>
              </div>
              <div className="brand-logo-sub" style={{ color: '#38BDF8' }}>
                PAINTS <span style={{ background: '#38BDF8' }}></span> PAKISTAN
              </div>
            </button>

            <p>
              Bringing colors to life with premium quality paints, weather-shielding exterior emulsions, primers, and architectural textures since 1998.
            </p>

            <div className="top-bar-socials">
              <a href="#" className="top-bar-social-btn" style={{ background: 'rgba(255, 255, 255, 0.08)', width: '36px', height: '36px', borderRadius: '50%' }}><FacebookIcon size={16} /></a>
              <a href="#" className="top-bar-social-btn" style={{ background: 'rgba(255, 255, 255, 0.08)', width: '36px', height: '36px', borderRadius: '50%' }}><InstagramIcon size={16} /></a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="top-bar-social-btn" style={{ background: 'rgba(255, 255, 255, 0.08)', width: '36px', height: '36px', borderRadius: '50%' }}><WhatsappIcon size={16} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><button onClick={() => onNavigate('home')}>Home</button></li>
              <li className="footer-link-item"><button onClick={() => onNavigate('products')}>Products Catalog</button></li>
              <li className="footer-link-item"><button onClick={() => onNavigate('colors')}>Color Shades Studio</button></li>
              <li className="footer-link-item"><button onClick={() => onNavigate('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('interior'); onNavigate('products'); }}>Interior Paints</button></li>
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('exterior'); onNavigate('products'); }}>Exterior Paints</button></li>
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('wood'); onNavigate('products'); }}>Wood Finishes</button></li>
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('metal'); onNavigate('products'); }}>Metal Paints</button></li>
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('primers'); onNavigate('products'); }}>Primers & Putty</button></li>
              <li className="footer-link-item"><button onClick={() => { onSelectCategory('industrial'); onNavigate('products'); }}>Industrial Coatings</button></li>
            </ul>
          </div>

          {/* Column 4: Services & Tools */}
          <div>
            <h4 className="footer-title">Services & Tools</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <button onClick={() => onNavigate('calculator')}>Paint Calculator</button>
              </li>
              <li className="footer-link-item">
                <button onClick={onOpenDealerModal}>Location</button>
              </li>
              <li className="footer-link-item"><button onClick={() => onNavigate('contact')}>10-Year Warranty</button></li>
              <li className="footer-link-item"><button onClick={() => onNavigate('products')}>SDS & TDS Docs</button></li>
            </ul>
          </div>

          {/* Column 5: Contact Us & Newsletter */}
          <div>
            <h4 className="footer-title">Contact</h4>
            
            <div className="footer-contact-item">
              <Phone size={16} color="#38BDF8" style={{ marginTop: '3px' }} />
              <div>
                <a href="tel:+923001234567" style={{ color: '#E2E8F0', fontWeight: 700 }}>+92 300 1234567</a>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Mon - Sat: 9:00 AM - 9:00 PM</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} color="#F59E0B" style={{ marginTop: '3px' }} />
              <div>
                <span style={{ color: '#CBD5E1', fontSize: '0.85rem' }}>Main University Road, Near Gulabad Stop, Peshawar, Khyber Pakhtunkhwa</span>
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: '1.25rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E2E8F0' }}>Newsletter Signup</span>
              {subscribed ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#10B981',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginTop: '0.5rem'
                }}>
                  <Check size={16} /> Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--zik-blue-vibrant)',
                      color: '#FFFFFF',
                      padding: '0 1rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none'
                    }}
                  >
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 ZIK Paints Pakistan Ltd. All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <span style={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Developed by <strong style={{ color: '#38BDF8', fontWeight: 800 }}>Solvia Code</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
