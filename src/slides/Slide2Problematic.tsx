import React, { useState } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AlertTriangle, GitBranch, Layers, EyeOff } from 'lucide-react';

export const Slide2Problematic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'polyphyly' | 'plasticity' | 'synonymy'>('plasticity');

  const cards = [
    {
      id: 'polyphyly' as const,
      icon: GitBranch,
      tag: '01 · РЕВІЗІЯ РОДУ STENURELLA',
      title: 'Поліфілія роду та перегляд меж таксонів',
      metric: '2 еволюційні гілки',
      body: 'Молекулярно-філогенетичні дослідження (16S rRNA, COI, 28S rRNA; Zamoroka et al., 2022) довели поліфілію роду Stenurella Villiers, 1974: види S. nigra, S. septempunctata та S. vaucheri перенесено до роду Rutpela. Проте внутрішньовидова структура самого S. melanura залишалася нерозв’язаною.',
    },
    {
      id: 'plasticity' as const,
      icon: Layers,
      tag: '02 · МОРФОЛОГІЧНА ПЛАСТИЧНІСТЬ',
      title: 'Хроматичний поліморфізм і криптичні види',
      metric: '4 спірні таксони',
      body: 'S. melanura поширений від Атлантики до Тихого океану й демонструє значну мінливість забарвлення опушення та скульптури покривів. Через це описані таксони S. samai, S. sennii, S. pamphyliae та S. zehrae були зведені в синоніми або підвиди без генетичної перевірки.',
    },
    {
      id: 'synonymy' as const,
      icon: EyeOff,
      tag: '03 · ДИЛЕМА STENURELLA SENNII',
      title: 'Помилкова синонімізація та фауністичні хиби',
      metric: '24 роки дискусій',
      body: 'Описаний Джамфранко Самою (Sama, 2002) вид S. sennii спирався на забарвлення щетинок, а не будову геніталій. Через симпатрію та зовнішню подібність до світлої форми S. melanura вид синонімізували (Danilevsky, 2014; Vitali, 2018), а давні вказівки для України, Чехії, Хорватії та Італії виявилися сумнівними.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-5 gap-3">
      {/* Header + Top KPI Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-6 space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ПРОБЛЕМАТИКА ТА АКТУАЛЬНІСТЬ ДОСЛІДЖЕННЯ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Чому традиційна морфологія не здатна розмежувати комплекс{' '}
            <span className="italic text-amberGlow">Stenurella melanura</span>?
          </h2>
        </div>

        {/* 3 Compact KPI Counters */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-3">
          <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-amberGold">
            <div className="text-2xl sm:text-3xl font-semibold text-white">
              <AnimatedCounter target={24} suffix=" р." />
            </div>
            <div className="text-[11px] text-slate-300 mt-1 leading-snug">
              дискусій щодо статусу <span className="italic">S. sennii</span> (2002–2026)
            </div>
          </div>
          <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-cyanHaplotype">
            <div className="text-2xl sm:text-3xl font-semibold text-cyanHaplotype">
              <AnimatedCounter target={1} suffix=" геном" />
            </div>
            <div className="text-[11px] text-slate-300 mt-1 leading-snug">
              був доступний до 2026 р. (Велика Британія)
            </div>
          </div>
          <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-crimsonClade">
            <div className="text-2xl sm:text-3xl font-semibold text-crimsonClade">
              <AnimatedCounter target={0} suffix=" баркодів" />
            </div>
            <div className="text-[11px] text-slate-300 mt-1 leading-snug">
              <span className="italic">S. melanura</span> з території України до цієї роботи
            </div>
          </div>
        </div>
      </div>

      {/* Middle Visual Schematic: Taxonomic Split & Cryptic Overlap Diagram (fills visual space cleanly) */}
      <div className="telemetry-card rounded-xl px-5 py-3 border border-white/10">
        <div className="flex items-center justify-between text-[10px] font-tech text-slate-400 mb-1.5">
          <span>СХЕМА ТАКСОНОМІЧНОЇ КОЛІЗІЇ КОМПЛЕКСУ STENURELLA MELANURA SENSU LATO</span>
          <span className="text-amberGold">ІНТЕГРАТИВНИЙ ПІДХІД</span>
        </div>
        <svg viewBox="0 0 880 96" className="w-full h-[78px]">
          {/* Node 1: Polyphyletic Stenurella */}
          <rect x="6" y="16" width="190" height="64" rx="8" fill="#0E1D21" stroke="#38BDF8" strokeWidth="1.2" />
          <text x="101" y="42" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Stenurella s. l. (Villiers, 1974)
          </text>
          <text x="101" y="61" textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Поліфілія → Rutpela + Stenurella s.str.
          </text>

          {/* Arrow 1 -> 2 */}
          <line x1="196" y1="48" x2="232" y2="48" stroke="#E89B3C" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="232,44 240,48 232,52" fill="#E89B3C" />

          {/* Node 2: Chromatic Polymorphism */}
          <rect x="242" y="16" width="205" height="64" rx="8" fill="#0E1D21" stroke="#E89B3C" strokeWidth="1.2" />
          <text x="344" y="42" textAnchor="middle" fill="#F6BA66" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Хроматичний поліморфізм
          </text>
          <text x="344" y="61" textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Світла та темна морфи опушення
          </text>

          {/* Arrow 2 -> 3 */}
          <line x1="447" y1="48" x2="483" y2="48" stroke="#E89B3C" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="483,44 491,48 483,52" fill="#E89B3C" />

          {/* Node 3: Premature Synonymy */}
          <rect x="493" y="16" width="185" height="64" rx="8" fill="#0E1D21" stroke="#E64833" strokeWidth="1.2" />
          <text x="585" y="42" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Синонімізація (2014–2018)
          </text>
          <text x="585" y="61" textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            S. sennii = S. melanura (помилка)
          </text>

          {/* Arrow 3 -> 4 */}
          <line x1="678" y1="48" x2="712" y2="48" stroke="#34D399" strokeWidth="1.5" />
          <polygon points="712,44 720,48 712,52" fill="#34D399" />

          {/* Node 4: DNA Barcoding Resolution */}
          <rect x="722" y="16" width="152" height="64" rx="8" fill="rgba(52, 211, 153, 0.12)" stroke="#34D399" strokeWidth="1.4" />
          <text x="798" y="42" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
            COI Баркодинг (2026)
          </text>
          <text x="798" y="61" textAnchor="middle" fill="#E6ECEB" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Sm1–Sm4 + S. sennii
          </text>
        </svg>
      </div>

      {/* Bottom 3-Pillar Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        {cards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeTab === card.id;
          return (
            <div
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className={`telemetry-card rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                isSelected ? 'telemetry-card-active -translate-y-0.5' : 'opacity-85 hover:opacity-100'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-tech tracking-wider text-amberGold">
                    {card.tag}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amberGlow' : 'text-slate-400'}`} />
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{card.body}</p>
              </div>
              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-tech">
                <span className="text-slate-400">КЛЮЧОВИЙ ФАКТОР</span>
                <span className="text-amberGlow">{card.metric}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
