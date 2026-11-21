import React, { useState, useEffect } from 'react';

interface BeetleHeroVisualizerProps {
  zoomBurst?: boolean;
}

export const BeetleHeroVisualizer: React.FC<BeetleHeroVisualizerProps> = ({ zoomBurst = false }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 14;
      const ny = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouseOffset({ x: nx, y: ny });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Simulated COI barcode nucleotides along the elytra suture
  const barcodeBars = [
    { y: 148, w: 26, c: '#38BDF8' },
    { y: 158, w: 34, c: '#E89B3C' },
    { y: 168, w: 22, c: '#E64833' },
    { y: 178, w: 38, c: '#34D399' },
    { y: 188, w: 30, c: '#E89B3C' },
    { y: 198, w: 42, c: '#38BDF8' },
    { y: 208, w: 28, c: '#E64833' },
    { y: 218, w: 36, c: '#F6BA66' },
    { y: 228, w: 24, c: '#38BDF8' },
    { y: 238, w: 32, c: '#E64833' },
    { y: 248, w: 20, c: '#34D399' },
    { y: 258, w: 16, c: '#E89B3C' },
  ];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ease-out ${
        zoomBurst ? 'scale-[2.6] opacity-0 blur-sm' : 'scale-100 opacity-100'
      }`}
    >
      {/* Ambient radial glow matching the fox-eye amber backlight in reference video */}
      <div
        className="absolute w-[390px] h-[390px] rounded-full pointer-events-none transition-transform duration-300"
        style={{
          background:
            'radial-gradient(circle, rgba(232,155,60,0.22) 0%, rgba(230,72,51,0.08) 45%, rgba(7,13,14,0) 72%)',
          transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)`,
        }}
      />

      <svg
        viewBox="0 0 420 420"
        className="w-[360px] h-[360px] xl:w-[420px] xl:h-[420px] overflow-visible drop-shadow-[0_0_28px_rgba(232,155,60,0.28)]"
      >
        <defs>
          <radialGradient id="elytraGradLeft" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#F6BA66" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#D97724" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#451A03" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="elytraGradRight" cx="60%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#F6BA66" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#B85319" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#3B1206" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="thoraxGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D10" />
          </linearGradient>
        </defs>

        {/* Outer Tactical HUD Reticle Rings (inspired by video_1.mp4 circular calibration lines) */}
        <g transform="translate(210, 210)">
          <circle
            r="192"
            fill="none"
            stroke="rgba(232, 155, 60, 0.22)"
            strokeWidth="1"
            strokeDasharray="6 10"
            className="animate-spin-slow"
          />
          <circle
            r="168"
            fill="none"
            stroke="rgba(56, 189, 248, 0.18)"
            strokeWidth="1"
            strokeDasharray="44 18 6 18"
            className="animate-spin-reverse-slow"
          />
          <circle r="142" fill="none" stroke="rgba(232, 155, 60, 0.12)" strokeWidth="0.8" />

          {/* Cardinal calibration ticks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="-186"
              x2="0"
              y2="-198"
              stroke={deg % 90 === 0 ? '#E89B3C' : 'rgba(232,155,60,0.35)'}
              strokeWidth={deg % 90 === 0 ? '1.5' : '1'}
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Interactive parallax group for Stenurella dorsal morphometric diagram */}
        <g
          style={{
            transform: `translate(${mouseOffset.x * 0.45}px, ${mouseOffset.y * 0.45}px)`,
            transition: 'transform 160ms ease-out',
          }}
        >
          {/* Antennae (longhorn Cerambycidae signature) */}
          <path
            d="M 197 74 C 175 45, 135 32, 96 48"
            fill="none"
            stroke="#E89B3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="160"
            className="opacity-85"
          />
          <path
            d="M 223 74 C 245 45, 285 32, 324 48"
            fill="none"
            stroke="#E89B3C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="160"
            className="opacity-85"
          />
          {/* Antennae segmentation nodes */}
          {[
            [184, 59],
            [166, 46],
            [144, 39],
            [120, 40],
            [236, 59],
            [254, 46],
            [276, 39],
            [300, 40],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="2.2" fill="#F6BA66" />
          ))}

          {/* Legs (stylized geometric vector segments) */}
          <g stroke="rgba(230, 236, 235, 0.55)" strokeWidth="1.8" fill="none" strokeLinecap="round">
            {/* Front legs */}
            <polyline points="192,102 158,86 142,64" />
            <polyline points="228,102 262,86 278,64" />
            {/* Mid legs */}
            <polyline points="186,144 142,154 126,184" />
            <polyline points="234,144 278,154 294,184" />
            {/* Hind legs (source of DNA extraction!) */}
            <polyline
              points="188,186 146,232 136,294 124,316"
              stroke={pulsePhase === 1 ? '#38BDF8' : 'rgba(230, 236, 235, 0.65)'}
              strokeWidth={pulsePhase === 1 ? '2.4' : '1.8'}
            />
            <polyline
              points="232,186 274,232 284,294 296,316"
              stroke={pulsePhase === 1 ? '#38BDF8' : 'rgba(230, 236, 235, 0.65)'}
              strokeWidth={pulsePhase === 1 ? '2.4' : '1.8'}
            />
          </g>

          {/* Hind leg DNA extraction callout pulse */}
          <circle
            cx="146"
            cy="232"
            r="6"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.4"
            className="animate-ping"
          />

          {/* Head */}
          <polygon
            points="200,68 220,68 224,86 196,86"
            fill="url(#thoraxGrad)"
            stroke="#E89B3C"
            strokeWidth="1.3"
          />
          {/* Compound eyes */}
          <ellipse cx="195" cy="77" rx="3" ry="5" fill="#F6BA66" />
          <ellipse cx="225" cy="77" rx="3" ry="5" fill="#F6BA66" />

          {/* Pronotum (bell-shaped characteristic of Stenurella) */}
          <path
            d="M 196 88 L 224 88 L 234 128 L 186 128 Z"
            fill="url(#thoraxGrad)"
            stroke="#E89B3C"
            strokeWidth="1.4"
          />

          {/* Left Elytron (Light golden pubescence - Sm1 / S. sennii) */}
          <path
            d="M 183 132 C 175 170, 181 245, 206 312 L 208 132 Z"
            fill="url(#elytraGradLeft)"
            stroke="#F6BA66"
            strokeWidth="1.4"
          />

          {/* Right Elytron (Golden-amber with dark suture/apex - S. melanura) */}
          <path
            d="M 237 132 C 245 170, 239 245, 214 312 L 212 132 Z"
            fill="url(#elytraGradRight)"
            stroke="#E64833"
            strokeWidth="1.4"
          />

          {/* COI DNA Barcode Laser Bands across the elytra */}
          <g opacity="0.88">
            {barcodeBars.map((bar, idx) => (
              <rect
                key={idx}
                x={210 - bar.w / 2}
                y={bar.y}
                width={bar.w}
                height="3.2"
                rx="1.5"
                fill={bar.c}
                opacity={pulsePhase === idx % 3 ? 1 : 0.45}
              />
            ))}
          </g>

          {/* Central Suture Scanning Axis */}
          <line
            x1="210"
            y1="62"
            x2="210"
            y2="328"
            stroke="#F6BA66"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.75"
          />
        </g>

        {/* Bottom HUD Status Readout inside SVG */}
        <g transform="translate(210, 366)" textAnchor="middle">
          <text
            fill="#94A3B8"
            fontSize="9.5"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="2"
          >
            LOCUS: mtDNA COI (658 BP) · N = 250 SEQUENCES
          </text>
          <text
            y="16"
            fill="#E89B3C"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.6"
          >
            DIVERGENCE: 0.077 SUBS/SITE (t = 72.93, P &lt; 0.0001)
          </text>
        </g>
      </svg>
    </div>
  );
};
