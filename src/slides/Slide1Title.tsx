import React from 'react';
import { ARTICLE_META } from '../data/studyData';
import { BeetleHeroVisualizer } from '../components/BeetleHeroVisualizer';
import { ArrowRight, BookOpen, Dna, MapPin } from 'lucide-react';

interface Slide1Props {
  onNext: () => void;
  zoomBurst: boolean;
}

export const Slide1Title: React.FC<Slide1Props> = ({ onNext, zoomBurst }) => {
  return (
    <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-6 md:px-14 py-5">
      {/* Left Column: Editorial Typography, Journal Badge, Authors */}
      <div
        className={`lg:col-span-7 flex flex-col justify-center space-y-4 z-10 transition-all duration-500 ease-out will-change-transform ${
          zoomBurst ? '-translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
          <span className="px-2.5 py-1 rounded bg-amberGold/10 border border-amberGold/30">
            МОЛЕКУЛЯРНА ФІЛОГЕОГРАФІЯ · COLEOPTERA: CERAMBYCIDAE
          </span>
          <span className="text-slate-400">ЄВРОПА · 2026</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-editorial text-3xl sm:text-4xl xl:text-[42px] font-semibold leading-[1.12] text-white tracking-tight">
            Молекулярні докази таксономічного відновлення{' '}
            <span className="italic text-amberGlow">Stenurella sennii</span>{' '}
            <span className="text-2xl sm:text-3xl font-normal text-amberGold">nom. res.</span> у
            філогеографічній структурі{' '}
            <span className="italic text-cyanHaplotype">S. melanura</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light italic leading-relaxed max-w-2xl">
            {ARTICLE_META.titleEn}
          </p>
        </div>

        {/* Journal Citation Badge */}
        <div className="inline-flex flex-wrap items-center gap-3 p-3 rounded-lg bg-[#0D1A1D]/90 border border-amberGold/35 max-w-2xl shadow-lg">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-amberGold/15 border border-amberGold/40 text-amberGlow font-tech text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{ARTICLE_META.journal}</span>
          </div>
          <div className="text-xs font-tech text-slate-300">
            {ARTICLE_META.volumeIssue} · DOI:{' '}
            <span className="text-amberGold underline decoration-amberGold/40">
              {ARTICLE_META.doi}
            </span>
          </div>
          <div className="text-[11px] font-tech text-slate-400">
            Прийнято: {ARTICLE_META.dates.accepted}
          </div>
        </div>

        {/* Authors & Affiliations Grid */}
        <div className="space-y-2 pt-0.5">
          <div className="text-[10px] font-tech uppercase tracking-[0.18em] text-slate-400">
            АВТОРСЬКИЙ КОЛЕКТИВ ТА УСТАНОВИ
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ARTICLE_META.authors.map((author, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-slate-200 hover:border-amberGold/40 transition-colors"
              >
                {author.name}
                <sup className="ml-0.5 text-[10px] text-amberGold font-tech">
                  {'*'.repeat(author.affiliation)}
                </sup>
              </span>
            ))}
          </div>
          <div className="space-y-1 text-[11px] text-slate-400 leading-snug">
            {ARTICLE_META.affiliations.map((aff) => (
              <div key={aff.id} className="flex items-start gap-1.5">
                <span className="text-amberGold font-tech font-bold">{'*'.repeat(aff.id)}</span>
                <span>{aff.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Trigger */}
        <div className="pt-1 flex items-center gap-4">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amberGold to-[#D97724] text-[#070D0E] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(232,155,60,0.35)] hover:brightness-110 transition-all"
          >
            <span>РОЗПОЧАТИ АНАЛІЗ ДОСЛІДЖЕННЯ</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-tech text-slate-400">
            <span className="flex items-center gap-1">
              <Dna className="w-3.5 h-3.5 text-cyanHaplotype" /> 250 COI сиквенсів
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-crimsonClade" /> Пан’європейський ареал
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Tactical Beetle Morphometric + COI Barcode Radar */}
      <div className="lg:col-span-5 h-[360px] lg:h-[460px] flex items-center justify-center relative">
        <BeetleHeroVisualizer zoomBurst={zoomBurst} />
      </div>
    </div>
  );
};
