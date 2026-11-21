import React, { useState } from 'react';
import { REFERENCES_LIST } from '../data/studyData';
import { BookMarked, Search } from 'lucide-react';

export const Slide9References: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filtered = REFERENCES_LIST.filter((ref) =>
    ref.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-5 gap-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
            <BookMarked className="w-3.5 h-3.5" />
            <span>ПЕРЕДОСТАННІЙ СЛАЙД · БІБЛІОГРАФІЧНИЙ АПАРАТ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-0.5">
            Використані джерела
          </h2>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Пошук за автором або роком..."
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amberGold"
          />
        </div>
      </div>

      {/* Two-Column Scrollable Academic Reference List */}
      <div className="telemetry-card rounded-xl p-5 flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
          {filtered.map((ref, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-[11px] sm:text-xs text-slate-300 leading-relaxed pb-2 border-b border-white/[0.06]"
            >
              <span className="font-tech text-[10px] text-amberGold mt-0.5 shrink-0">
                [{String(idx + 1).padStart(2, '0')}]
              </span>
              <span>{ref}</span>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-xs text-slate-400 py-8">
            За запитом «{filter}» джерел не знайдено.
          </div>
        )}
      </div>

      <div className="text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>
          Виконано в межах держбюджетної теми № 0121U109305 (Карпатський національний університет
          імені Василя Стефаника) за підтримки BGE (Horizon Europe № 101059492) та EURIZON (№ 871072).
        </span>
        <span className="font-tech text-amberGold">Biosystems Diversity · 2026</span>
      </div>
    </div>
  );
};
