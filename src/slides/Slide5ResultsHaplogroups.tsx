import React, { useState } from 'react';
import { HAPLOGROUPS } from '../data/studyData';
import { PhyloTreeWidget } from '../components/PhyloTreeWidget';
import { Dna, Sparkles } from 'lucide-react';

export const Slide5ResultsHaplogroups: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const current = HAPLOGROUPS[selectedIdx];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-5 gap-3">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
            <Dna className="w-3.5 h-3.5" />
            <span>РЕЗУЛЬТАТИ · ЧАСТИНА I: ВНУТРІШНЬОВИДОВА СТРУКТУРА S. MELANURA</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-0.5">
            Чотири генетичні гаплогрупи (<span className="text-cyanHaplotype">Sm1</span>–
            <span className="text-violetHaplotype">Sm4</span>) та 16 гаплотипів
          </h2>
        </div>
        <div className="text-xs font-tech text-slate-400">
          Середня внутрішньовидова дистанція S. melanura: <span className="text-amberGlow">0.015</span>{' '}
          замін/сайт
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left 6 cols: Haplogroup Cards + Detailed Stats */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {HAPLOGROUPS.map((hg, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={hg.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    active
                      ? 'bg-[#102226] border-amberGold shadow-[0_0_20px_rgba(232,155,60,0.18)] -translate-y-0.5'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-sm font-bold" style={{ color: hg.color }}>
                      {hg.id}
                    </span>
                    <span className="text-[10px] font-tech text-slate-400">{hg.sharePercent}</span>
                  </div>
                  <div className="text-lg font-semibold text-white mt-0.5">n = {hg.sequencesCount}</div>
                  <div className="text-[10px] font-tech text-slate-400">
                    {hg.haplotypes.length}{' '}
                    {hg.haplotypes.length === 1 ? 'гаплотип' : 'гаплотипів'}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="telemetry-card telemetry-card-active rounded-xl p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: current.color }}
                  />
                  <h3 className="font-editorial text-2xl font-semibold text-white">
                    {current.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {current.haplotypes.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded text-[10px] font-tech border"
                      style={{
                        borderColor: `${current.color}55`,
                        backgroundColor: current.accentBg,
                        color: current.color,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">{current.summary}</p>

              <div className="grid grid-cols-3 gap-2 pt-0.5">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[9px] font-tech text-slate-400">СЕРЕДНЯ ДИСТАНЦІЯ</div>
                  <div className="text-sm font-tech font-semibold text-white mt-0.5">
                    {current.meanIntraDistance.toFixed(3)}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[9px] font-tech text-slate-400">ВСЕРЕДИНІ ГАПЛОТИПІВ</div>
                  <div className="text-sm font-tech font-semibold text-white mt-0.5">
                    {current.intraHaplotypeRange}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[9px] font-tech text-slate-400">МІЖ ГАПЛОТИПАМИ</div>
                  <div className="text-sm font-tech font-semibold text-white mt-0.5">
                    {current.interHaplotypeRange}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/10">
              <strong className="text-slate-200">Поширення:</strong> {current.primaryRange}
            </div>
          </div>
        </div>

        {/* Right 6 cols: Phylogenetic Tree Diagram + Phenotype & Hybridization Split */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
          <PhyloTreeWidget highlightClade={current.id} />

          <div className="telemetry-card rounded-xl p-4 flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-wider text-amberGold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>КОРЕЛЯЦІЯ МТДНК COI ТА ФЕНОТИПУ ОПУШЕННЯ НАДКРИЛ</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-1.5">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-cyanHaplotype">Sm1 (n = 47 фото)</span>
                  <span className="font-tech text-amberGlow">79% світла</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#291815] overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amberGold to-amberGlow"
                    style={{ width: '79%' }}
                  />
                  <div className="h-full bg-[#451A03]" style={{ width: '21%' }} />
                </div>
                <div className="text-[10px] font-tech text-slate-400 mt-1">
                  37 світлих / 10 темних (гібриди)
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-amberGold">Sm2 (Sm2-h2 до 90%)</span>
                  <span className="font-tech text-slate-200">55% темна</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#291815] overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amberGold to-amberGlow"
                    style={{ width: '45%' }}
                  />
                  <div className="h-full bg-[#5C2314]" style={{ width: '55%' }} />
                </div>
                <div className="text-[10px] font-tech text-slate-400 mt-1">
                  45% світлих / 55% темних морф
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 leading-snug">
              <strong className="text-amberGlow">Інтрогресія:</strong> випадки невідповідності між
              гаплогрупою та кольором щетинок (темні <span className="font-tech">Sm1</span> у
              Фенноскандії/Карпатах та світлі <span className="font-tech">Sm2</span> в Альпах)
              доводять гібридизацію при вторинному контакті.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
