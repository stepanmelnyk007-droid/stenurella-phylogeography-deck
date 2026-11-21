import React, { useState } from 'react';
import { HAPLOGROUPS } from '../data/studyData';
import { Dna, Sparkles } from 'lucide-react';

export const Slide5ResultsHaplogroups: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const current = HAPLOGROUPS[selectedIdx];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
            <Dna className="w-3.5 h-3.5" />
            <span>РЕЗУЛЬТАТИ · ЧАСТИНА I: ВНУТРІШНЬОВИДОВА СТРУКТУРА S. MELANURA</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-1">
            Чотири генетичні гаплогрупи (<span className="text-cyanHaplotype">Sm1</span>–
            <span className="text-violetHaplotype">Sm4</span>) та 16 гаплотипів
          </h2>
        </div>
        <div className="text-xs font-tech text-slate-400">
          Середня внутрішньовидова дистанція S. melanura: <span className="text-amberGlow">0.015</span>{' '}
          замін/сайт
        </div>
      </div>

      {/* Main Content Split: Left Interactive Haplogroup Selector + Chart, Right Phenotype & Hybridization */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-2 max-h-[385px]">
        {/* Left 7 cols: Bar distribution + Haplogroup Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          {/* Interactive Haplogroup Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {HAPLOGROUPS.map((hg, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={hg.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    active
                      ? 'bg-[#102226] border-amberGold shadow-[0_0_20px_rgba(232,155,60,0.18)] -translate-y-0.5'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-sm font-bold" style={{ color: hg.color }}>
                      {hg.id}
                    </span>
                    <span className="text-[11px] font-tech text-slate-400">{hg.sharePercent}</span>
                  </div>
                  <div className="text-xl font-semibold text-white mt-1">n = {hg.sequencesCount}</div>
                  <div className="text-[10px] font-tech text-slate-400 mt-0.5">
                    {hg.haplotypes.length}{' '}
                    {hg.haplotypes.length === 1 ? 'гаплотип' : 'гаплотипів'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Haplogroup Card */}
          <div className="telemetry-card telemetry-card-active rounded-xl p-5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2.5">
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

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.summary}</p>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] font-tech text-slate-400">СЕРЕДНЯ ДИСТАНЦІЯ</div>
                  <div className="text-sm sm:text-base font-tech font-semibold text-white mt-0.5">
                    {current.meanIntraDistance.toFixed(3)}
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] font-tech text-slate-400">ВСЕРЕДИНІ ГАПЛОТИПІВ</div>
                  <div className="text-sm sm:text-base font-tech font-semibold text-white mt-0.5">
                    {current.intraHaplotypeRange}
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] font-tech text-slate-400">МІЖ ГАПЛОТИПАМИ</div>
                  <div className="text-sm sm:text-base font-tech font-semibold text-white mt-0.5">
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

        {/* Right 5 cols: Phenotype Association & Hybridization Discovery */}
        <div className="lg:col-span-5 telemetry-card rounded-xl p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-wider text-amberGold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ЗВ’ЯЗОК ГАПЛОГРУП ІЗ ФЕНОТИПОМ НАДКРИЛ</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Хоча мітохондріальний ген <span className="font-tech text-cyanHaplotype">COI</span> не
              кодує забарвлення, виявлено чітку кореляцію між гаплогрупами та кольором щетинок
              надкрил (меланін ядерного геному), що свідчить про проходження предкових популяцій
              через еволюційні «пляшкові горлечка».
            </p>

            {/* Animated Phenotype Split Bars for Sm1 vs Sm2 */}
            <div className="space-y-3 pt-1">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-cyanHaplotype">
                    Гаплогрупа Sm1 (n = 47 фото)
                  </span>
                  <span className="font-tech text-amberGlow">79% світла морфа</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#291815] overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amberGold to-amberGlow transition-all duration-700"
                    style={{ width: '79%' }}
                    title="Світло-жовте/золотисте опушення: 79%"
                  />
                  <div
                    className="h-full bg-[#451A03]"
                    style={{ width: '21%' }}
                    title="Темно-буре/чорне опушення: 21%"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-tech text-slate-400 mt-1">
                  <span>Світле опушення: 37 ос. (79%)</span>
                  <span>Темне (гібриди): 10 ос. (21%)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-amberGold">
                    Гаплогрупа Sm2 (кластер Sm2-h2 до 90%)
                  </span>
                  <span className="font-tech text-slate-200">55% темна морфа</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#291815] overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-amberGold to-amberGlow transition-all duration-700"
                    style={{ width: '45%' }}
                  />
                  <div className="h-full bg-[#5C2314]" style={{ width: '55%' }} />
                </div>
                <div className="flex justify-between text-[10px] font-tech text-slate-400 mt-1">
                  <span>Світле (гібриди): 45%</span>
                  <span>Темне опушення: 55%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amberGold/10 border border-amberGold/30 text-[11px] text-slate-200 leading-snug">
            <strong className="text-amberGlow">Доказ гібридизації:</strong> виявлення темноопушених
            особин із мтДНК <span className="font-tech">Sm1</span> (Фінляндія, Польща, Карпати) та
            світлоопушених із мтДНК <span className="font-tech">Sm2</span> (Німеччина, Альпи,
            Піренеї) доводить вільну інтрогресивну гібридизацію при вторинному контакті.
          </div>
        </div>
      </div>
    </div>
  );
};
