import React, { useState } from 'react';
import { Palette, Copy, Check, Sparkles } from 'lucide-react';
import { colorShadesData, visualizerRooms } from '../data/shadesData';
import FloatingBubbles from './FloatingBubbles';

export default function RoomVisualizer({ onOpenConsultation }) {
  const [selectedShade, setSelectedShade] = useState(colorShadesData[0]);
  const [copiedCode, setCopiedCode] = useState(false);
  const [opacity, setOpacity] = useState(0.85);

  // Standard & Custom Color Picker Modal States
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('standard'); // 'standard' | 'custom'
  const [tempColor, setTempColor] = useState('#D91B5C');

  const standardMatrixColors = [
    '#FFFFFF', '#F8FAFC', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#334155', '#0F172A',
    '#FEF2F2', '#FCA5A5', '#F87171', '#EF4444', '#DC2626', '#B91C1C', '#991B1B', '#7F1D1D',
    '#FFF7ED', '#FDBA74', '#FB923C', '#F97316', '#EA580C', '#C2410C', '#9A3412', '#7C2D12',
    '#FEFCE8', '#FDE047', '#EAB308', '#CA8A04', '#A16207', '#854D0E', '#713F12', '#543110',
    '#F0FDF4', '#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#166534', '#14532D',
    '#F0FDFA', '#5EEAD4', '#2DD4BF', '#14B8A6', '#0D9488', '#0F766E', '#115E59', '#134E4A',
    '#EFF6FF', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF', '#1E3A8A',
    '#F5F3FF', '#C084FC', '#A855F7', '#9333EA', '#7E22CE', '#6B21A8', '#581C87', '#3B0764',
    '#FDF2F8', '#F472B6', '#EC4899', '#DB2777', '#BE185D', '#9D174D', '#831843', '#500724'
  ];

  const blankWhiteWallImage = '/assets/images/blank-white-wall.svg';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`${selectedShade.code} ${selectedShade.name} (${selectedShade.hex})`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleOpenColorModal = () => {
    setTempColor(selectedShade.hex || '#D91B5C');
    setIsColorModalOpen(true);
  };

  return (
    <section id="visualizer" className="visualizer-section">
      <FloatingBubbles count={6} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header-flex">
          <div>
            <div className="section-badge">
              Interactive Studio
            </div>
            <h2 className="section-title">Find Your Color</h2>
            <p className="section-subtitle">
              Click any of ZIK’s signature color shades below to preview real-time wall painting with preserved texture and lighting.
            </p>
          </div>
        </div>

        <div className="visualizer-container">
          {/* LEFT: REAL INTERIOR ROOM PREVIEW */}
          <div>
            {/* Room Frame with Real White Wall Display & Mix-Blend-Mode Overlay */}
            <div className="visualizer-preview-box relative overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img
                src={blankWhiteWallImage}
                alt="Blank White Wall Preview"
                className="visualizer-room-image w-full h-auto block object-contain"
                style={{
                  transform: 'scale(1.1)',
                  transformOrigin: 'right center',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Dynamic CSS mix-blend-mode Multiply Paint Layer (Full Wall Area: top 86.5%) */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '88.5%',
                  backgroundColor: selectedShade.hex,
                  opacity: opacity,
                  mixBlendMode: 'multiply',
                  pointerEvents: 'none',
                  transition: 'background-color 0.4s ease, opacity 0.3s ease'
                }}
              />

            </div>

            {/* Selected Shade Details Block Below Image Card */}
            <div style={{
              marginTop: '0.75rem',
              padding: '0.75rem 0.9rem',
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(11, 34, 101, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: selectedShade.hex,
                  border: '2px solid #FFFFFF',
                  boxShadow: '0 0 6px rgba(0,0,0,0.2)',
                  flexShrink: 0
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0B1B3D', lineHeight: 1.2 }}>
                  {selectedShade.name} ({selectedShade.colorTag}) — {selectedShade.code}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                  Hex: {selectedShade.hex} • {selectedShade.popularFor}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '0.4rem', fontSize: '0.72rem', color: '#94A3B8', fontWeight: 500 }}>
              *Official ZIK Paints high-resolution architectural interior finish photography.
            </div>
          </div>

          {/* RIGHT: THE SIGNATURE COLOR SWATCHES */}
          <div className="visualizer-controls">
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1B3D', marginBottom: '0.25rem' }}>
                Select Color Shade
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '1rem', fontWeight: 500 }}>
                Click any of ZIK’s signature color shades below to test on real room interiors:
              </p>
            </div>

            {/* Swatch Matrix Grid (Custom Picker + 15 Shades - Compact Height) */}
            <div className="swatches-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(105px, 1fr))', gap: '0.6rem', maxHeight: '310px', overflowY: 'auto', paddingRight: '4px', marginBottom: '1rem' }}>
              
              {/* Rainbow Styled Custom Color Wheel Picker Card */}
              <div
                onClick={handleOpenColorModal}
                className={`swatch-item ${selectedShade.code === 'CUSTOM' ? 'active' : ''}`}
                style={{
                  padding: '0.55rem 0.4rem',
                  borderRadius: '14px',
                  background: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(135deg, #FF0000, #FFA500, #FFFF00, #008000, #0000FF, #4B0082, #EE82EE) border-box',
                  border: '2px solid transparent',
                  boxShadow: selectedShade.code === 'CUSTOM' ? '0 6px 18px rgba(225, 29, 72, 0.25)' : '0 2px 6px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative'
                }}
                title="Click to open Standard & Custom Color Picker"
              >
                <div
                  className="swatch-circle"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'conic-gradient(from 0deg, red, yellow, green, cyan, blue, magenta, red)',
                    borderRadius: '50%',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.18)',
                    marginBottom: '0.35rem',
                    border: '2px solid #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.9rem' }}>🎨</span>
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#E11D48', lineHeight: 1.1 }}>
                  Custom Mix
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', marginTop: '0.1rem' }}>
                  Standard / Custom
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#94A3B8', marginTop: '0.05rem' }}>
                  {selectedShade.code === 'CUSTOM' ? selectedShade.hex : 'Pick Color'}
                </span>
              </div>

              {colorShadesData.map((shade) => {
                const isActive = selectedShade.code === shade.code;
                return (
                  <div
                    key={shade.code}
                    className={`swatch-item ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedShade(shade)}
                    style={{
                      padding: '0.55rem 0.4rem',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      border: isActive ? '2px solid #E11D48' : '1.5px solid #E2E8F0',
                      boxShadow: isActive ? '0 6px 18px rgba(225, 29, 72, 0.2)' : '0 2px 6px rgba(0,0,0,0.03)',
                      transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      className="swatch-circle"
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: shade.hex,
                        borderRadius: '50%',
                        boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.1)',
                        marginBottom: '0.35rem',
                        border: '2px solid #FFFFFF'
                      }}
                    />
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0B1B3D', lineHeight: 1.1, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {shade.name}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#E11D48', marginTop: '0.1rem' }}>
                      {shade.colorTag}
                    </span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#94A3B8', marginTop: '0.05rem' }}>
                      {shade.code}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Selected Shade Details Card */}
            <div className="visualizer-info-card" style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.25rem',
              border: '1.5px solid #EEF2F6',
              boxShadow: '0 4px 15px rgba(11,27,61,0.04)',
              marginTop: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: selectedShade.hex,
                  border: '2px solid #FFFFFF',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
                }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0B1B3D' }}>
                    {selectedShade.name} — {selectedShade.colorTag}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                    Recommended Finish: ZIK Silk Touch Emulsion / ZIK Royal Matt
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                {selectedShade.description}
              </p>

              {/* Paint Coverage Intensity Control Slider */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <label htmlFor="room-opacity-range" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569' }}>
                    Paint Coverage Intensity:
                  </label>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0B1B3D' }}>
                    {Math.round(opacity * 100)}%
                  </span>
                </div>
                <input
                  id="room-opacity-range"
                  type="range"
                  min="0.4"
                  max="1.0"
                  step="0.05"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#0B2265' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard & Custom Color Picker Modal */}
      {isColorModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '480px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            fontFamily: 'sans-serif'
          }}>
            {/* Title Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1.25rem',
              borderBottom: '1px solid #F1F5F9',
              background: '#F8FAFC'
            }}>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0B1B3D' }}>Colors</h3>
              <button
                onClick={() => setIsColorModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#64748B', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            {/* Tabs Row */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', background: '#F1F5F9', padding: '0.35rem 0.5rem 0' }}>
              <button
                onClick={() => setActiveTab('standard')}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  cursor: 'pointer',
                  background: activeTab === 'standard' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'standard' ? '#0B1B3D' : '#64748B',
                  boxShadow: activeTab === 'standard' ? '0 -2px 5px rgba(0,0,0,0.03)' : 'none'
                }}
              >
                Standard
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  cursor: 'pointer',
                  background: activeTab === 'custom' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'custom' ? '#0B1B3D' : '#64748B',
                  boxShadow: activeTab === 'custom' ? '0 -2px 5px rgba(0,0,0,0.03)' : 'none'
                }}
              >
                Custom
              </button>
            </div>

            {/* Modal Body & Buttons Container */}
            <div style={{ padding: '1.25rem', display: 'flex', gap: '1rem' }}>
              
              {/* Left Side: Standard or Custom Picker */}
              <div style={{ flex: 1 }}>
                {activeTab === 'standard' ? (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.6rem' }}>Colors:</div>
                    
                    {/* Authentic Hexagonal Honeycomb Palette Grid */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.25rem 0' }}>
                      
                      {/* 1. Main Honeycomb Hexagon Matrix */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.25rem' }}>
                        {[
                          ['#002060', '#003399', '#004080', '#203764', '#3F3F5F'],
                          ['#004B87', '#0070C0', '#00B0F0', '#41719C', '#7030A0', '#660066'],
                          ['#008080', '#00B0B0', '#5B9BD5', '#70AD47', '#D9E1F2', '#B4C6E7', '#8EA9DB'],
                          ['#006100', '#008000', '#00FF00', '#92D050', '#A9D18E', '#FCE4D6', '#F4B084', '#C65911'],
                          ['#375623', '#548235', '#A8D08D', '#E2EFDA', '#FFFFFF', '#FFF2CC', '#FE6D73', '#C00000', '#800000'],
                          ['#808000', '#999900', '#C5E0B4', '#FFF2CC', '#FFE699', '#F8CBAD', '#ED7D31', '#A61C1C'],
                          ['#BF8F00', '#FFC000', '#FFFF00', '#FFD966', '#F4B084', '#C65911', '#833C0C'],
                          ['#804000', '#994C00', '#B25900', '#CC6600', '#E67300', '#FF8000'],
                          ['#402000', '#4C2600', '#592C00', '#663300', '#733D00']
                        ].map((rowColors, rIdx) => (
                          <div
                            key={rIdx}
                            style={{
                              display: 'flex',
                              gap: '3px',
                              marginTop: rIdx > 0 ? '-6px' : '0'
                            }}
                          >
                            {rowColors.map((colorHex, cIdx) => {
                              const isSelected = tempColor.toLowerCase() === colorHex.toLowerCase();
                              return (
                                <button
                                  key={cIdx}
                                  onClick={() => setTempColor(colorHex)}
                                  style={{
                                    width: '21px',
                                    height: '24px',
                                    backgroundColor: colorHex,
                                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'transform 0.15s ease',
                                    transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                                    zIndex: isSelected ? 10 : 1,
                                    filter: isSelected ? 'drop-shadow(0 0 4px #0B1B3D)' : 'none'
                                  }}
                                  title={colorHex}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      {/* 2. Bottom Row: Standalone White Hexagon + Grayscale Bar + Standalone Black Hexagon */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Standalone White Hexagon */}
                        <button
                          onClick={() => setTempColor('#FFFFFF')}
                          style={{
                            width: '24px',
                            height: '27px',
                            backgroundColor: '#FFFFFF',
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            border: 'none',
                            cursor: 'pointer',
                            filter: tempColor.toLowerCase() === '#ffffff' ? 'drop-shadow(0 0 4px #0B1B3D)' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))'
                          }}
                          title="#FFFFFF"
                        />

                        {/* Grayscale Bar Hexagons */}
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {['#F2F2F2', '#D9D9D9', '#BFBFBF', '#A6A6A6', '#808080', '#595959', '#404040', '#262626'].map((colorHex, gIdx) => {
                            const isSelected = tempColor.toLowerCase() === colorHex.toLowerCase();
                            return (
                              <button
                                key={gIdx}
                                onClick={() => setTempColor(colorHex)}
                                style={{
                                  width: '18px',
                                  height: '21px',
                                  backgroundColor: colorHex,
                                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                  border: 'none',
                                  cursor: 'pointer',
                                  transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                                  zIndex: isSelected ? 10 : 1
                                }}
                                title={colorHex}
                              />
                            );
                          })}
                        </div>

                        {/* Standalone Black Hexagon */}
                        <button
                          onClick={() => setTempColor('#000000')}
                          style={{
                            width: '28px',
                            height: '31px',
                            backgroundColor: '#000000',
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            border: 'none',
                            cursor: 'pointer',
                            filter: tempColor.toLowerCase() === '#000000' ? 'drop-shadow(0 0 4px #38BDF8)' : 'none'
                          }}
                          title="#000000"
                        />
                      </div>

                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.5rem' }}>Pick Custom Shade:</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', alignItems: 'center' }}>
                      <input
                        type="color"
                        value={tempColor}
                        onChange={(e) => setTempColor(e.target.value)}
                        style={{ width: '100%', height: '120px', cursor: 'pointer', borderRadius: '12px', border: '2px solid #CBD5E1' }}
                      />
                      <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Hex:</span>
                        <input
                          type="text"
                          value={tempColor}
                          onChange={(e) => setTempColor(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '0.4rem 0.6rem',
                            borderRadius: '8px',
                            border: '1.5px solid #CBD5E1',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: '#0B1B3D',
                            textTransform: 'uppercase'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Action Buttons & New/Current Preview Boxes */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: '100px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <button
                    onClick={() => {
                      setSelectedShade({
                        code: 'CUSTOM',
                        name: 'Custom Mix',
                        colorTag: 'Personal',
                        hex: tempColor,
                        popularFor: 'Custom Accent',
                        description: `Custom user-selected wall color (${tempColor.toUpperCase()}).`
                      });
                      setIsColorModalOpen(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.55rem 1rem',
                      backgroundColor: '#0B1B3D',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    OK
                  </button>
                  <button
                    onClick={() => setIsColorModalOpen(false)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 1rem',
                      backgroundColor: '#F1F5F9',
                      color: '#475569',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </div>

                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', marginBottom: '0.2rem' }}>New</div>
                  <div style={{
                    width: '100%',
                    height: '38px',
                    backgroundColor: tempColor,
                    borderRadius: '8px',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    marginBottom: '0.5rem'
                  }} />

                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', marginBottom: '0.2rem' }}>Current</div>
                  <div style={{
                    width: '100%',
                    height: '38px',
                    backgroundColor: selectedShade.hex,
                    borderRadius: '8px',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                  }} />
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
