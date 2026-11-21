import React from 'react';
import { ARTICLE_META } from '../data/studyData';
import { BeetleHeroVisualizer } from '../components/BeetleHeroVisualizer';
import { RotateCcw, ExternalLink, Mail, Award } from 'lucide-react';

interface Slide10Props {
  onRestart: () => void;
}

export const Slide10ThankYou: React.FC<Slide10Props> = ({ onRestart }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-6 md:px-14 py-5">
      <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amberGold/10 border border-amberGold/30 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold w-fit">
          <Award className="w-3.5 h-3.5" />
          <span>ЗАВЕРШЕННЯ ДОПОВІДІ</span>
        </div>

        <div className="space-y-2.5">
          <h2 className="font-editorial text-5xl sm:text-6xl font-semibold text-white leading-none">
            Дякую за увагу!
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Будемо раді відповісти на запитання щодо молекулярної філогеографії{' '}
            <span className="italic text-cyanHaplotype">Stenurella melanura</span> та таксономічного
            відновлення <span className="italic text-amberGlow">Stenurella sennii nom. res.</span>
          </p>
        </div>

        <div className="telemetry-card rounded-xl p-5 space-y-3 max-w-2xl border-l-4 border-l-amberGold">
          <div className="text-[10px] font-tech uppercase tracking-widest text-amberGold">
            ЦИТУВАННЯ ОРИГІНАЛЬНОЇ ПУБЛІКАЦІЇ
          </div>
          <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
            Melnyk, S., Malaniy, V., Kasicki, Y.-Y., Piddubnyi, O., Pozniak, O.,
            Felbaba-Klushyna, L., Shparyk, V., Zinenko, O., &amp; Zamoroka, A. (2026).{' '}
            <span className="italic">{ARTICLE_META.titleEn}</span>.{' '}
            <strong className="text-amberGlow">{ARTICLE_META.journal}</strong>,{' '}
            {ARTICLE_META.volumeIssue}.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10 text-xs font-tech">
            <a
              href={`https://doi.org/${ARTICLE_META.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-cyanHaplotype hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>doi:{ARTICLE_META.doi}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-amberGold" />
              <span>andrii.zamoroka@cnu.edu.ua</span>
            </span>
          </div>
        </div>

        <div>
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-amberGold/40 text-amberGlow font-tech text-xs tracking-wider transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ПОВЕРНУТИСЯ НА ПЕРШИЙ СЛАЙД</span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 h-[320px] lg:h-[420px] flex items-center justify-center opacity-95">
        <BeetleHeroVisualizer />
      </div>
    </div>
  );
};
