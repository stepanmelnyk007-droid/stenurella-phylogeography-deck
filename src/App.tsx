import React, { useState, useEffect, useCallback } from 'react';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2Problematic } from './slides/Slide2Problematic';
import { Slide3Objectives } from './slides/Slide3Objectives';
import { Slide4Methodology } from './slides/Slide4Methodology';
import { Slide5ResultsHaplogroups } from './slides/Slide5ResultsHaplogroups';
import { Slide6ResultsSennii } from './slides/Slide6ResultsSennii';
import { Slide7ResultsPhylogeography } from './slides/Slide7ResultsPhylogeography';
import { Slide8DiscussionConclusions } from './slides/Slide8DiscussionConclusions';
import { Slide9References } from './slides/Slide9References';
import { Slide10ThankYou } from './slides/Slide10ThankYou';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface SlideMeta {
  id: number;
  shortTitle: string;
  section: string;
}

const SLIDES: SlideMeta[] = [
  { id: 0, shortTitle: '01 · Титул', section: 'Вступ' },
  { id: 1, shortTitle: '02 · Проблематика', section: 'Актуальність' },
  { id: 2, shortTitle: '03 · Мета і завдання', section: 'Дизайн' },
  { id: 3, shortTitle: '04 · Методологія', section: 'Матеріали' },
  { id: 4, shortTitle: '05 · Гаплогрупи Sm1–Sm4', section: 'Результати I' },
  { id: 5, shortTitle: '06 · S. sennii nom. res.', section: 'Результати II' },
  { id: 6, shortTitle: '07 · Філогеографія', section: 'Результати III' },
  { id: 7, shortTitle: '08 · Висновки', section: 'Обговорення' },
  { id: 8, shortTitle: '09 · Джерела', section: 'Література' },
  { id: 9, shortTitle: '10 · Подяка', section: 'Фінал' },
];

type CurtainPhase = 'idle' | 'expand' | 'collapse';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>('idle');
  const [heroZoomBurst, setHeroZoomBurst] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const isBusy = curtainPhase !== 'idle' || heroZoomBurst;

  const navigateTo = useCallback(
    (targetIdx: number) => {
      if (isBusy || targetIdx === currentSlide) return;
      if (targetIdx < 0 || targetIdx >= SLIDES.length) return;

      // Slide 0 -> Slide 1: Beetle zoom-in burst + TV curtain collapse reveal
      if (currentSlide === 0 && targetIdx === 1) {
        setHeroZoomBurst(true);
        setTimeout(() => {
          setCurrentSlide(targetIdx);
          setHeroZoomBurst(false);
          setCurtainPhase('collapse');
          setTimeout(() => {
            setCurtainPhase('idle');
          }, 340);
        }, 420);
        return;
      }

      // Authentic TV Vertical Line Expand (320ms) -> Swap Slide -> Collapse back to center beam (340ms)
      setCurtainPhase('expand');
      setTimeout(() => {
        setCurrentSlide(targetIdx);
        setCurtainPhase('collapse');
        setTimeout(() => {
          setCurtainPhase('idle');
        }, 340);
      }, 320);
    },
    [currentSlide, isBusy]
  );

  const handleNext = useCallback(() => {
    navigateTo(currentSlide + 1);
  }, [currentSlide, navigateTo]);

  const handlePrev = useCallback(() => {
    navigateTo(currentSlide - 1);
  }, [currentSlide, navigateTo]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const progressPct = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen bg-[#070D0E] bg-radar-grid text-[#E6ECEB] flex flex-col justify-between overflow-hidden">
      {/* Ambient Radial Vignettes */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 82% 22%, rgba(232, 155, 60, 0.08) 0%, transparent 45%), radial-gradient(circle at 12% 85%, rgba(56, 189, 248, 0.06) 0%, transparent 45%)',
        }}
      />

      {/* Top HUD Telemetry Navigation Bar */}
      <header className="relative z-30 w-full px-6 md:px-14 pt-3 pb-2 flex items-center justify-between border-b border-white/[0.07] bg-[#070D0E]/90">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] font-tech tracking-[0.18em] text-amberGold uppercase">
            <span className="w-2 h-2 rounded-full bg-amberGold animate-pulse" />
            <span>BIOSYSTEMS DIVERSITY · 34(1)</span>
          </div>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-[11px] font-tech text-slate-400">
            {SLIDES[currentSlide].section.toUpperCase()}
          </span>
        </div>

        {/* Interactive Slide Pill Dots */}
        <nav className="hidden xl:flex items-center gap-1">
          {SLIDES.map((s) => {
            const active = s.id === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => navigateTo(s.id)}
                className={`px-2 py-1 rounded text-[10px] font-tech transition-colors ${
                  active
                    ? 'bg-amberGold/20 text-amberGlow border border-amberGold/45 font-semibold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {s.shortTitle}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <span className="font-tech text-xs text-slate-300">
            <span className="text-amberGlow font-semibold">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>{' '}
            / {String(SLIDES.length).padStart(2, '0')}
          </span>
          <button
            onClick={toggleFullscreen}
            title="Повноекранний режим"
            className="p-1.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 hover:text-amberGlow hover:border-amberGold/40 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
          <div
            className="h-full bg-gradient-to-r from-amberGold via-amberGlow to-crimsonClade transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>

      {/* Main Slide Stage */}
      <main className="relative z-10 flex-1 w-full overflow-hidden flex items-center justify-center">
        {/* TV Vertical Line Expand -> Full Curtain -> Collapse Transition Overlay (60fps GPU scale3d) */}
        {curtainPhase !== 'idle' && (
          <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center overflow-hidden">
            {/* Expanding / Collapsing Dark Teal Shutter */}
            <div
              className={`absolute inset-0 bg-[#081214] border-x-2 border-amberGlow shadow-[0_0_50px_rgba(232,155,60,0.45)] ${
                curtainPhase === 'expand' ? 'tv-shutter-expand' : 'tv-shutter-collapse'
              }`}
              style={{ transformOrigin: 'center center' }}
            />
            {/* Glowing Central Vertical CRT Scan Beam */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-amberGlow shadow-[0_0_28px_4px_rgba(246,186,102,0.9)] tv-core-beam"
              style={{ transformOrigin: 'center center' }}
            />
          </div>
        )}

        {/* Active Slide Content Container with 60fps smooth entry */}
        <div
          key={currentSlide}
          className="w-full h-full max-w-[1440px] mx-auto animate-slide-enter"
        >
          {currentSlide === 0 && <Slide1Title onNext={handleNext} zoomBurst={heroZoomBurst} />}
          {currentSlide === 1 && <Slide2Problematic />}
          {currentSlide === 2 && <Slide3Objectives />}
          {currentSlide === 3 && <Slide4Methodology />}
          {currentSlide === 4 && <Slide5ResultsHaplogroups />}
          {currentSlide === 5 && <Slide6ResultsSennii />}
          {currentSlide === 6 && <Slide7ResultsPhylogeography />}
          {currentSlide === 7 && <Slide8DiscussionConclusions />}
          {currentSlide === 8 && <Slide9References />}
          {currentSlide === 9 && <Slide10ThankYou onRestart={() => navigateTo(0)} />}
        </div>
      </main>

      {/* Bottom HUD Navigation Bar */}
      <footer className="relative z-30 w-full px-6 md:px-14 py-2.5 border-t border-white/[0.07] bg-[#070D0E]/90 flex items-center justify-between text-[11px] font-tech text-slate-400">
        <div className="flex items-center gap-2 truncate">
          <span className="text-amberGold">MELNYK ET AL. (2026)</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline truncate">
            Stenurella sennii nom. res. &amp; S. melanura Phylogeography
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0 || isBusy}
            className="inline-flex items-center gap-1 px-3 py-1 rounded border border-white/15 bg-white/[0.03] text-slate-200 hover:border-amberGold/50 hover:text-amberGlow disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>НАЗАД</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === SLIDES.length - 1 || isBusy}
            className="inline-flex items-center gap-1 px-3 py-1 rounded border border-amberGold/40 bg-amberGold/15 text-amberGlow hover:bg-amberGold/25 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <span>ДАЛІ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
