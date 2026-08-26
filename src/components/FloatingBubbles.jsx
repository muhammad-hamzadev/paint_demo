import React from 'react';

export default function FloatingBubbles({ count = 12, className = '' }) {
  const bubbles = [
    { size: 90, left: '8%', top: '15%', delay: '0s', duration: '6s', anim: 'floatBubble1' },
    { size: 55, left: '18%', top: '65%', delay: '1.5s', duration: '7s', anim: 'floatBubble2' },
    { size: 120, left: '42%', top: '8%', delay: '0.8s', duration: '8s', anim: 'floatBubble3' },
    { size: 45, left: '55%', top: '75%', delay: '2s', duration: '5.5s', anim: 'floatBubble1' },
    { size: 80, left: '78%', top: '12%', delay: '1.2s', duration: '7.5s', anim: 'floatBubble2' },
    { size: 140, left: '88%', top: '55%', delay: '2.5s', duration: '9s', anim: 'floatBubble3' },
    { size: 35, left: '32%', top: '82%', delay: '3s', duration: '6.2s', anim: 'floatBubble1' },
    { size: 65, left: '68%', top: '48%', delay: '0.5s', duration: '8.2s', anim: 'floatBubble2' },
    { size: 110, left: '4%', top: '45%', delay: '2.1s', duration: '7.8s', anim: 'floatBubble3' },
    { size: 50, left: '92%', top: '18%', delay: '1.7s', duration: '6.5s', anim: 'floatBubble1' }
  ];

  return (
    <div
      className={`floating-bubbles-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2
      }}
    >
      {bubbles.slice(0, count).map((b, i) => (
        <div
          key={i}
          className="glass-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: b.left,
            top: b.top,
            animation: `${b.anim} ${b.duration} ease-in-out infinite`,
            animationDelay: b.delay
          }}
        />
      ))}
    </div>
  );
}
