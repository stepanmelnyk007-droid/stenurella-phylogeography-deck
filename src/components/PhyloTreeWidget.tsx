import React from 'react';

interface PhyloTreeWidgetProps {
  highlightClade?: 'ALL' | 'Sm1' | 'Sm2' | 'Sm3' | 'Sm4' | 'SENNII';
}

export const PhyloTreeWidget: React.FC<PhyloTreeWidgetProps> = ({ highlightClade = 'ALL' }) => {
  const branches = [
    {
      id: 'Sm1',
      label: 'Sm1 (n = 148 · 4 гаплотипи)',
      y: 28,
      xEnd: 235,
      support: '0.84',
      color: '#38BDF8',
      morph: '79% світла морфа',
    },
    {
      id: 'Sm2',
      label: 'Sm2 (n = 34 · 6 гаплотипів)',
      y: 66,
      xEnd: 222,
      support: '0.86',
      color: '#E89B3C',
      morph: '55% темна (до 90%)',
    },
    {
      id: 'Sm3',
      label: 'Sm3 (n = 4 · Sm3-h1)',
      y: 104,
      xEnd: 215,
      support: '0.91',
      color: '#34D399',
      morph: 'Зах. Європа',
    },
    {
      id: 'Sm4',
      label: 'Sm4 (n = 53 · 5 гаплотипів)',
      y: 142,
      xEnd: 230,
      support: '0.88',
      color: '#A78BFA',
      morph: 'Пд.-Зх. Європа',
    },
    {
      id: 'SENNII',
      label: 'S. sennii nom. res. (n = 2)',
      y: 184,
      xEnd: 245,
      support: '0.99',
      color: '#E64833',
      morph: '0.077 subs/site',
    },
  ];

  return (
    <div className="telemetry-card rounded-xl p-3.5 border border-white/10">
      <div className="flex items-center justify-between text-[10px] font-tech text-slate-400 mb-1.5">
        <span>ML-ФІЛОГЕНІЯ (PHYML 3.0 · МОДЕЛЬ GTR · ПІДТРИМКА aLRT)</span>
        <span className="text-amberGold">SCALE: 0.05</span>
      </div>

      <svg viewBox="0 0 430 228" className="w-full h-[168px]">
        {/* Root to Outgroup */}
        <line x1="16" y1="165" x2="16" y2="214" stroke="#64748B" strokeWidth="1.5" />
        <line x1="16" y1="214" x2="180" y2="214" stroke="#64748B" strokeWidth="1.5" />
        <text x="188" y="217" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          Outgroup: S. bifasciata (0.160) &amp; A. dubia (0.193)
        </text>

        {/* Main stem to S. sennii + S. melanura */}
        <line x1="16" y1="165" x2="54" y2="165" stroke="#94A3B8" strokeWidth="1.6" />
        <text x="34" y="159" fill="#34D399" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
          1.00
        </text>

        {/* Split between S. sennii (y=184) and S. melanura crown (y=85) */}
        <line x1="54" y1="85" x2="54" y2="184" stroke="#94A3B8" strokeWidth="1.6" />
        <line x1="54" y1="85" x2="112" y2="85" stroke="#38BDF8" strokeWidth="1.8" />
        <text x="72" y="79" fill="#34D399" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
          0.95
        </text>

        {/* Crown vertical spine for Sm1..Sm4 */}
        <line x1="112" y1="28" x2="112" y2="142" stroke="#38BDF8" strokeWidth="1.8" />

        {branches.map((b) => {
          const isDimmed =
            highlightClade !== 'ALL' && highlightClade !== b.id;
          const startX = b.id === 'SENNII' ? 54 : 112;
          return (
            <g
              key={b.id}
              style={{
                opacity: isDimmed ? 0.28 : 1,
                transition: 'opacity 280ms ease',
              }}
            >
              <line
                x1={startX}
                y1={b.y}
                x2={b.xEnd - 24}
                y2={b.y}
                stroke={b.color}
                strokeWidth={b.id === 'SENNII' ? '2.4' : '1.8'}
              />
              {/* Clade triangle wedge */}
              <polygon
                points={`${b.xEnd - 24},${b.y} ${b.xEnd},${b.y - 8} ${b.xEnd},${b.y + 8}`}
                fill={b.color}
                fillOpacity="0.32"
                stroke={b.color}
                strokeWidth="1.3"
              />
              <text
                x={startX + 8}
                y={b.y - 4}
                fill="#CBD5E1"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                aLRT {b.support}
              </text>
              <text
                x={b.xEnd + 8}
                y={b.y + 3}
                fill={b.id === 'SENNII' ? '#F87171' : '#F8FAFC'}
                fontSize="9.5"
                fontWeight={b.id === 'SENNII' ? '700' : '600'}
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                {b.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
