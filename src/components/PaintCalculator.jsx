import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShoppingCart, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export default function PaintCalculator({ onAddToCart }) {
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(10);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [coats, setCoats] = useState(2);
  const [surfaceType, setSurfaceType] = useState('smooth'); // 'smooth' (140 sq ft/L), 'rough' (100 sq ft/L), 'fresh' (90 sq ft/L)
  const [paintType, setPaintType] = useState('silk-touch'); // 'silk-touch', 'weather-shield', 'royal-matt'

  // Calculations
  const grossWallArea = 2 * (Number(length) + Number(width)) * Number(height);
  const ceilingArea = Number(length) * Number(width);
  const totalOpeningsArea = (Number(doors) * 21) + (Number(windows) * 15);
  const netArea = Math.max(0, grossWallArea + ceilingArea - totalOpeningsArea);

  // Coverage multiplier based on surface
  const coverageRate = surfaceType === 'smooth' ? 140 : surfaceType === 'rough' ? 100 : 90;
  const litersPerCoat = netArea / coverageRate;
  const totalLitersRequired = Math.ceil(litersPerCoat * Number(coats));
  
  // Gallons (4L) and Quarters (1L) or Drums (16L)
  const drums16L = Math.floor(totalLitersRequired / 16);
  const remainingAfterDrums = totalLitersRequired % 16;
  const gallons4L = Math.ceil(remainingAfterDrums / 4);

  // Price estimate (average PKR 1,300 per liter)
  const pricePerLiter = paintType === 'silk-touch' ? 1300 : paintType === 'weather-shield' ? 1200 : 1150;
  const estimatedCost = totalLitersRequired * pricePerLiter;
  const puttyRequiredKg = Math.ceil(netArea * 0.15); // 0.15 kg per sq ft

  const handleAddCalculatedPack = () => {
    onAddToCart({
      id: paintType,
      name: paintType === 'silk-touch' ? 'ZIK Silk Touch Emulsion' : paintType === 'weather-shield' ? 'ZIK Weather Shield' : 'ZIK Royal Matt',
      image: paintType === 'silk-touch' ? './assets/images/product-silk-touch.svg' : './assets/images/product-weather-shield.svg'
    }, {
      size: `${totalLitersRequired} Litres Project Pack`,
      price: estimatedCost
    });
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <div className="section-badge">
              <Calculator size={14} color="#10B981" /> Smart Estimation Tool
            </div>
            <h2 className="section-title">Smart Paint Calculator</h2>
            <p className="section-subtitle">
              Calculate exact paint quantity and budget for your room or exterior walls in seconds.
            </p>
          </div>
        </div>

        <div className="calc-grid">
          {/* Inputs Card */}
          <div className="calc-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--zik-navy-dark)', marginBottom: '1.25rem' }}>
              1. Room Dimensions & Openings
            </h3>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Room Length (Feet)</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Room Width (Feet)</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Ceiling Height (Feet)</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Number of Doors</label>
                <input
                  type="number"
                  min="0"
                  className="form-input"
                  value={doors}
                  onChange={(e) => setDoors(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Number of Windows</label>
                <input
                  type="number"
                  min="0"
                  className="form-input"
                  value={windows}
                  onChange={(e) => setWindows(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Application Coats</label>
                <select
                  className="form-input"
                  value={coats}
                  onChange={(e) => setCoats(Number(e.target.value))}
                >
                  <option value={1}>1 Coat (Touch-up / Refresh)</option>
                  <option value={2}>2 Coats (Standard Recommended)</option>
                  <option value={3}>3 Coats (Extreme Durability / Color Change)</option>
                </select>
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Surface Condition</label>
                <select
                  className="form-input"
                  value={surfaceType}
                  onChange={(e) => setSurfaceType(e.target.value)}
                >
                  <option value="smooth">Smooth Previously Painted Wall</option>
                  <option value="rough">Rough Cement Plaster Wall</option>
                  <option value="fresh">Fresh Masonry (Requires Primer)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Select Paint Type</label>
                <select
                  className="form-input"
                  value={paintType}
                  onChange={(e) => setPaintType(e.target.value)}
                >
                  <option value="silk-touch">ZIK Silk Touch Emulsion</option>
                  <option value="weather-shield">ZIK Weather Shield</option>
                  <option value="royal-matt">ZIK Royal Matt</option>
                </select>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="calc-result-box">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93C5FD', fontWeight: 700 }}>
                  Calculation Breakdown
                </span>
                <span style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem' }}>
                  Live Estimate
                </span>
              </div>

              <div className="calc-stat-metric">
                <span className="calc-metric-label">Total Net Surface Area</span>
                <span className="calc-metric-val">{netArea.toLocaleString()} sq ft</span>
              </div>

              <div className="calc-stat-metric">
                <span className="calc-metric-label">Paint Volume Required</span>
                <span className="calc-metric-val">{totalLitersRequired} Litres</span>
              </div>

              <div className="calc-stat-metric">
                <span className="calc-metric-label">Recommended Pack Size</span>
                <span className="calc-metric-val" style={{ fontSize: '1.1rem' }}>
                  {drums16L > 0 ? `${drums16L} Drum (16L) + ` : ''}{gallons4L} Gallons (4L)
                </span>
              </div>

              <div className="calc-stat-metric">
                <span className="calc-metric-label">Estimated ZIK Wall Putty</span>
                <span className="calc-metric-val">{puttyRequiredKg} Kg</span>
              </div>
            </div>

            <div>
              <div className="calc-total-box">
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#93C5FD', display: 'block' }}>Estimated Paint Cost</span>
                  <span className="calc-total-price">PKR {estimatedCost.toLocaleString()}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>*Excludes labor</span>
              </div>

              <button
                onClick={handleAddCalculatedPack}
                className="btn-accent"
                style={{ width: '100%', marginTop: '1.25rem', padding: '0.9rem' }}
              >
                <ShoppingCart size={18} /> Add Calculated Package to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
