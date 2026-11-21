import React, { useRef, useEffect, useState } from 'react';

interface BeetleHeroVisualizerProps {
  zoomBurst?: boolean;
}

export const BeetleHeroVisualizer: React.FC<BeetleHeroVisualizerProps> = ({ zoomBurst = false }) => {
  const parallaxRef = useRef<SVGGElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [pulsePhase, setPulsePhase] = useState(0);

  // 60fps GPU transform parallax via requestAnimationFrame without triggering React re-renders
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 16;
      targetY = (e.clientY / window.innerHeight - 0.5) * 16;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${curX * 0.55}px, ${curY * 0.55}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curX * 0.8}px, ${curY * 0.8}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

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
      className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ease-out will-change-transform ${
        zoomBurst ? 'scale-[2.3] opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      <div
        ref={glowRef}
        className="absolute w-[390px] h-[390px] rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(232,155,60,0.24) 0%, rgba(230,72,51,0.09) 46%, rgba(7,13,14,0) 72%)',
        }}
      />

      <svg
        viewBox="0 0 420 420"
        className="w-[350px] h-[350px] xl:w-[410px] xl:h-[410px] overflow-visible drop-shadow-[0_0_24px_rgba(232,155,60,0.25)]"
      >
        <defs>
          <radialGradient id="elytraGradLeft" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#F6BA66" stopOpacity="0.94" />
            <stop offset="55%" stopColor="#D97724" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#451A03" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="elytraGradRight" cx="60%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#F6BA66" stopOpacity="0.94" />
            <stop offset="55%" stopColor="#B85319" stopOpacity="0.84" />
            <stop offset="100%" stopColor="#3B1206" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="thoraxGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D10" />
          </linearGradient>
        </defs>

        {/* Outer Tactical HUD Reticle Rings */}
        <g transform="translate(210, 210)">
          <circle
            r="192"
            fill="none"
            stroke="rgba(232, 155, 60, 0.24)"
            strokeWidth="1"
            strokeDasharray="6 10"
            className="animate-spin-slow"
          />
          <circle
            r="168"
            fill="none"
            stroke="rgba(56, 189, 248, 0.20)"
            strokeWidth="1"
            strokeDasharray="44 18 6 18"
            className="animate-spin-reverse-slow"
          />
          <circle r="142" fill="none" stroke="rgba(232, 155, 60, 0.14)" strokeWidth="0.8" />

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

        {/* Smooth 60fps Parallax Beetle Group */}
        <g ref={parallaxRef} className="will-change-transform">
          <path
            d="M 197 74 C 175 45, 135 32, 96 48"
            fill="none"
            stroke="#E89B3C"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-85"
          />
          <path
            d="M 223 74 C 245 45, 285 32, 324 48"
            fill="none"
            stroke="#E89B3C"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-85"
          />
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

          <g stroke="rgba(230, 236, 235, 0.58)" strokeWidth="1.8" fill="none" strokeLinecap="round">
            <polyline points="192,102 158,86 142,64" />
            <polyline points="228,102 262,86 278,64" />
            <polyline points="186,144 142,154 126,184" />
            <polyline points="234,144 278,154 294,184" />
            <polyline
              points="188,186 146,232 136,294 124,316"
              stroke={pulsePhase === 1 ? '#38BDF8' : 'rgba(230, 236, 235, 0.68)'}
              strokeWidth={pulsePhase === 1 ? '2.4' : '1.8'}
            />
            <polyline
              points="232,186 274,232 284,294 296,316"
              stroke={pulsePhase === 1 ? '#38BDF8' : 'rgba(230, 236, 235, 0.68)'}
              strokeWidth={pulsePhase === 1 ? '2.4' : '1.8'}
            />
          </g>

          <circle
            cx="146"
            cy="232"
            r="6"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.4"
            className="animate-ping"
          />

          <polygon
            points="200,68 220,68 224,86 196,86"
            fill="url(#thoraxGrad)"
            stroke="#E89B3C"
            strokeWidth="1.3"
          />
          <ellipse cx="195" cy="77" rx="3" ry="5" fill="#F6BA66" />
          <ellipse cx="225" cy="77" rx="3" ry="5" fill="#F6BA66" />

          <path
            d="M 196 88 L 224 88 L 234 128 L 186 128 Z"
            fill="url(#thoraxGrad)"
            stroke="#E89B3C"
            strokeWidth="1.4"
          />

          <path
            d="M 183 132 C 175 170, 181 245, 206 312 L 208 132 Z"
            fill="url(#elytraGradLeft)"
            stroke="#F6BA66"
            strokeWidth="1.4"
          />

          <path
            d="M 237 132 C 245 170, 239 245, 214 312 L 212 132 Z"
            fill="url(#elytraGradRight)"
            stroke="#E64833"
            strokeWidth="1.4"
          />

          <g opacity="0.9">
            {barcodeBars.map((bar, idx) => (
              <rect
                key={idx}
                x={210 - bar.w / 2}
                y={bar.y}
                width={bar.w}
                height="3.2"
                rx="1.5"
                fill={bar.c}
                style={{
                  opacity: pulsePhase === idx % 3 ? 1 : 0.42,
                  transition: 'opacity 400ms ease',
                }}
              />
            ))}
          </g>

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
