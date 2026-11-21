import React, { useEffect, useState } from 'react';
import { HAPLOGROUPS, HaplogroupInfo } from '../data/studyData';

interface EuropePhylogeoMapProps {
  selectedId: 'ALL' | 'Sm1' | 'Sm2' | 'Sm3' | 'Sm4' | 'SENNII';
  onSelect: (id: 'ALL' | 'Sm1' | 'Sm2' | 'Sm3' | 'Sm4' | 'SENNII') => void;
}

export const EuropePhylogeoMap: React.FC<EuropePhylogeoMapProps> = ({ selectedId, onSelect }) => {
  const [scanKey, setScanKey] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  useEffect(() => {
    setScanKey((k) => k + 1);
  }, [selectedId]);

  const visibleGroups: HaplogroupInfo[] =
    selectedId === 'ALL' || selectedId === 'SENNII'
      ? HAPLOGROUPS
      : HAPLOGROUPS.filter((g) => g.id === selectedId);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden telemetry-card p-3 flex flex-col">
      {/* Top map telemetry header */}
      <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-[11px] font-tech text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amberGold animate-pulse" />
          <span>WGS 84 (EPSG:4326) · DIVA-GIS 7.5</span>
        </div>
        <span className="text-amberGlow">
          {selectedId === 'SENNII'
            ? 'S. sennii nom. res. (n = 2; Центральна Франція)'
            : selectedId === 'ALL'
            ? 'Усі 4 гаплогрупи (n = 241)'
            : `${selectedId} — активний шар`}
        </span>
      </div>

      {/* Main SVG Europe Schematic + Phylogeographic Vectors */}
      <div className="relative flex-1 w-full min-h-[260px] flex items-center justify-center overflow-hidden">
        {/* 60fps GPU Laser Sweep */}
        <div
          key={scanKey}
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 z-20 will-change-transform"
          style={{
            background:
              'linear-gradient(90deg, rgba(232,155,60,0) 0%, rgba(232,155,60,0.28) 85%, rgba(246,186,102,0.88) 100%)',
            animation: 'scanSweep 1.35s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        />

        <svg viewBox="110 55 340 265" className="w-full h-full max-h-[340px]">
          <defs>
            <radialGradient id="refugiumGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E89B3C" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#E89B3C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="senniiGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E64833" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#E64833" stopOpacity="0" />
            </radialGradient>
          </defs>

          {[90, 140, 190, 240, 290].map((y) => (
            <line
              key={`lat-${y}`}
              x1="110"
              y1={y}
              x2="450"
              y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.7"
            />
          ))}
          {[150, 210, 270, 330, 390].map((x) => (
            <line
              key={`lon-${x}`}
              x1={x}
              y1="55"
              x2={x}
              y2="320"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.7"
            />
          ))}

          {/* Europe Coastlines */}
          <g fill="#0E1D21" stroke="rgba(148, 163, 184, 0.30)" strokeWidth="1.1" strokeLinejoin="round">
            <path d="M 142 262 L 185 256 L 204 268 L 195 294 L 160 304 L 138 292 Z" />
            <path d="M 185 256 L 192 214 L 222 198 L 248 192 L 258 228 L 246 258 L 204 268 Z" />
            <path d="M 186 142 L 206 138 L 214 176 L 188 182 Z" />
            <path d="M 166 154 L 180 152 L 180 172 L 165 172 Z" />
            <path d="M 258 228 L 284 234 L 308 276 L 296 286 L 274 252 Z" />
            <path d="M 248 192 L 278 164 L 348 156 L 366 184 L 336 212 L 284 226 L 258 228 Z" />
            <path d="M 312 214 L 356 208 L 372 246 L 346 282 L 320 264 L 306 232 Z" />
            <path d="M 284 126 L 308 74 L 356 68 L 388 86 L 384 128 L 354 134 L 336 112 L 314 142 L 288 138 Z" />
            <path d="M 348 156 L 368 132 L 436 122 L 442 224 L 392 232 L 356 208 L 366 184 Z" />
          </g>

          {/* Mountain Systems */}
          <g fill="none" stroke="rgba(232, 155, 60, 0.24)" strokeWidth="1.2" strokeDasharray="3 3">
            <path d="M 184 262 Q 204 266 222 264" />
            <path d="M 252 224 Q 282 212 314 218" />
            <path d="M 346 196 Q 378 194 388 218 Q 378 232 362 230" />
          </g>

          {(selectedId === 'ALL' || selectedId === 'Sm1') && (
            <g>
              <circle cx="236" cy="256" r="24" fill="url(#refugiumGlow)" />
              <path
                d="M 236 254 Q 275 210 386 208"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.6"
                strokeDasharray="5 5"
                className="animate-dash-flow"
                opacity="0.78"
              />
              <path
                d="M 236 254 Q 265 175 344 108"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.4"
                strokeDasharray="5 5"
                className="animate-dash-flow"
                opacity="0.68"
              />
            </g>
          )}

          {(selectedId === 'ALL' || selectedId === 'Sm2') && (
            <g>
              <circle cx="428" cy="148" r="26" fill="url(#refugiumGlow)" />
              <path
                d="M 426 148 Q 375 128 316 112"
                fill="none"
                stroke="#E89B3C"
                strokeWidth="1.6"
                strokeDasharray="5 5"
                className="animate-dash-flow"
                opacity="0.82"
              />
              <path
                d="M 426 148 Q 355 178 286 214"
                fill="none"
                stroke="#E89B3C"
                strokeWidth="1.4"
                strokeDasharray="5 5"
                className="animate-dash-flow"
                opacity="0.72"
              />
            </g>
          )}

          {(selectedId === 'ALL' || selectedId === 'Sm4') && (
            <g>
              <circle cx="176" cy="276" r="22" fill="url(#refugiumGlow)" />
              <path
                d="M 178 275 Q 214 260 252 248"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                className="animate-dash-flow"
                opacity="0.85"
              />
            </g>
          )}

          {selectedId !== 'SENNII' &&
            visibleGroups.map((group) =>
              group.points.map((pt, idx) => (
                <g
                  key={`${group.id}-${idx}`}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(`${group.id}: ${pt.label}`)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  {pt.isHybrid && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="6.5"
                      fill="none"
                      stroke="#F6BA66"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                  )}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={pt.isHybrid ? '3.8' : '4.2'}
                    fill={group.color}
                    stroke="#070D0E"
                    strokeWidth="1"
                  />
                </g>
              ))
            )}

          {(selectedId === 'ALL' || selectedId === 'SENNII') && (
            <g
              className="cursor-pointer"
              onMouseEnter={() =>
                setHoveredPoint('S. sennii nom. res.: PSFOR1138-17 (47.81°N, 0.42°E) та PSFOR160-13 (45.38°N, 2.49°E)')
              }
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle cx="222" cy="224" r="24" fill="url(#senniiGlow)" />
              <circle cx="212" cy="214" r="8" fill="none" stroke="#E64833" strokeWidth="1.2" className="animate-ping" />
              <circle cx="212" cy="214" r="4.8" fill="#E64833" stroke="#FFFFFF" strokeWidth="1.2" />
              <circle cx="228" cy="233" r="4.8" fill="#E64833" stroke="#FFFFFF" strokeWidth="1.2" />
              {selectedId === 'SENNII' && (
                <g transform="translate(242, 206)">
                  <rect
                    x="0"
                    y="-12"
                    width="148"
                    height="36"
                    rx="4"
                    fill="rgba(7,13,14,0.92)"
                    stroke="#E64833"
                    strokeWidth="1"
                  />
                  <text x="8" y="2" fill="#F87171" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
                    PSFOR1138-17 &amp; PSFOR160-13
                  </text>
                  <text x="8" y="15" fill="#E6ECEB" fontSize="8" fontFamily="Plus Jakarta Sans, sans-serif">
                    Лише 2 самці (0.8% вибірки)
                  </text>
                </g>
              )}
            </g>
          )}
        </svg>

        {hoveredPoint && (
          <div className="absolute bottom-2 left-3 right-3 px-3 py-1.5 rounded bg-[#070D0E]/95 border border-amberGold/40 text-xs text-amberGlow font-tech flex items-center justify-between z-30">
            <span>{hoveredPoint}</span>
            <span className="text-[10px] text-slate-400">COI VOUCHER</span>
          </div>
        )}
      </div>

      {/* Interactive Layer Filter Pills */}
      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5">
        {(
          [
            { id: 'ALL', label: 'Усі лінії', color: '#E6ECEB' },
            { id: 'Sm1', label: 'Sm1 (n=148)', color: '#38BDF8' },
            { id: 'Sm2', label: 'Sm2 (n=34)', color: '#E89B3C' },
            { id: 'Sm3', label: 'Sm3 (n=4)', color: '#34D399' },
            { id: 'Sm4', label: 'Sm4 (n=53)', color: '#A78BFA' },
            { id: 'SENNII', label: 'S. sennii (n=2)', color: '#E64833' },
          ] as const
        ).map((tab) => {
          const active = selectedId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelect(tab.id)}
              className={`px-2.5 py-1 rounded text-[11px] font-tech transition-all flex items-center gap-1.5 border ${
                active
                  ? 'bg-white/12 border-amberGold/60 text-white shadow-sm'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
