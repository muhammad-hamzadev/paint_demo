import React, { useState } from 'react';
import { X, Heart, Trash2, Copy, Check, Send, Sparkles, Download, Paintbrush } from 'lucide-react';

export default function ColorPaletteDrawer({
  isOpen,
  onClose,
  paletteItems = [],
  onRemoveItem,
  onClearPalette,
  onRequestSample
}) {
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    if (paletteItems.length === 0) return;
    const text = paletteItems
      .map((item) => `${item.code} - ${item.name} (${item.hex}) [${item.bucket || 'ZIK Paint'}]`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownloadPalette = () => {
    if (paletteItems.length === 0) return;
    const text = `=======================================\nZIK PAINTS - MY CUSTOM COLOR PALETTE\n=======================================\n\n` +
      paletteItems.map((item, idx) => `${idx + 1}. ${item.name} (${item.code})\n   Hex: ${item.hex}\n   Category: ${item.family || 'Custom'}\n   Recommended Paint: ${item.bucket || 'ZIK Premium Finish'}\n`).join('\n') +
      `\nGenerated from ZIK Paints Official Architectural Portal.\nVisit www.zikpaints.com for orders & dealer inquiry.`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ZIK_My_Color_Palette.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">

          {/* Drawer Header */}
          <div className="p-6 bg-[#0B1B3D] text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  My Color Palette
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 font-extrabold border border-rose-500/40">
                    {paletteItems.length}
                  </span>
                </h2>
                <p className="text-xs text-slate-300">Saved Architectural & Interior Shades</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {paletteItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-rose-50 flex items-center justify-center text-rose-400 border border-rose-100">
                  <Paintbrush className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800">Your Palette is Empty</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Browse the 200+ Color Shades explorer or Room Visualizer and click the heart icon to save your favorite colors here.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                  <span>Saved Shades List ({paletteItems.length})</span>
                  <button
                    onClick={onClearPalette}
                    className="text-rose-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {paletteItems.map((shade) => (
                    <div
                      key={shade.code}
                      className="group flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Swatch Circle */}
                        <div
                          className="w-12 h-12 rounded-xl shadow-inner border border-black/10 flex-shrink-0 relative overflow-hidden"
                          style={{ backgroundColor: shade.hex }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                        </div>

                        <div>
                          <div className="font-bold text-sm text-slate-900 group-hover:text-brand-navy transition-colors">
                            {shade.name}
                          </div>
                          <div className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-2">
                            <span>Code: {shade.code}</span>
                            <span className="text-[10px] uppercase bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-sans">
                              {shade.hex}
                            </span>
                          </div>
                          {shade.bucket && (
                            <div className="text-[11px] text-amber-600 font-medium mt-0.5">
                              {shade.bucket}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onRequestSample && onRequestSample(shade)}
                          title="Request 100ml Tester Sample"
                          className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(shade.code)}
                          title="Remove from palette"
                          className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {paletteItems.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyAll}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
                >
                  {copiedAll ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedAll ? 'Codes Copied!' : 'Copy Color Codes'}
                </button>

                <button
                  onClick={handleDownloadPalette}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  Download List
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onRequestSample) onRequestSample(paletteItems[0]);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Request Color Sample Testers
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
