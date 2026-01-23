'use client';

export default function HeroCanvas() {
  // Simplified decorative background - just subtle gradient orbs
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Top right decorative orb */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
        }}
      />
      {/* Bottom left decorative orb */}
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
      />
      {/* Center subtle orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #a78bfa 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
