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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [heroZoomBurst, setHeroZoomBurst] = useState<boolean>(false);
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const navigateTo = useCallback(
    (targetIdx: number) => {
      if (isTransitioning || targetIdx === currentSlide) return;
      if (targetIdx < 0 || targetIdx >= SLIDES.length) return;

      const dir = targetIdx > currentSlide ? 'next' : 'prev';
      setTransitionDirection(dir);
      setIsTransitioning(true);

      // Authentic video_1.mp4 00:07-00:08 zoom burst transition when leaving Title Slide (Slide 0 -> Slide 1)
      if (currentSlide === 0 && targetIdx === 1) {
        setHeroZoomBurst(true);
        setTimeout(() => {
          setCurrentSlide(targetIdx);
          setHeroZoomBurst(false);
          setTimeout(() => setIsTransitioning(false), 380);
        }, 520);
      } else {
        // Laser vertical curtain wipe transition for subsequent slides (mirrors video_1.mp4 00:54)
        setTimeout(() => {
          setCurrentSlide(targetIdx);
          setTimeout(() => setIsTransitioning(false), 360);
        }, 320);
      }
    },
    [currentSlide, isTransitioning]
  );

  const handleNext = useCallback(() => {
    navigateTo(currentSlide + 1);
  }, [currentSlide, navigateTo]);

  const handlePrev = useCallback(() => {
    navigateTo(currentSlide - 1);
  }, [currentSlide, navigateTo]);

  // Keyboard navigation (ArrowRight, Space, PageDown, ArrowLeft, PageUp)
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
      {/* Subtle Ambient Corner Vignettes */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 82% 22%, rgba(232, 155, 60, 0.08) 0%, transparent 45%), radial-gradient(circle at 12% 85%, rgba(56, 189, 248, 0.06) 0%, transparent 45%)',
        }}
      />

      {/* Top HUD Telemetry Navigation Bar (inspired by video_1.mp4 top section breadcrumb) */}
      <header className="relative z-30 w-full px-6 md:px-14 pt-3.5 pb-2 flex items-center justify-between border-b border-white/[0.07] bg-[#070D0E]/80 backdrop-blur-md">
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
                className={`px-2 py-1 rounded text-[10px] font-tech transition-all ${
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

        {/* Right Controls: Slide Counter + Fullscreen */}
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

        {/* Continuous Amber Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
          <div
            className="h-full bg-gradient-to-r from-amberGold via-amberGlow to-crimsonClade transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>

      {/* Main Slide Stage with Authentic Animated Transition Curtain */}
      <main className="relative z-10 flex-1 w-full overflow-hidden flex items-center justify-center">
        {/* Laser Vertical Curtain Wipe Overlay (active during slide transitions except Slide 0->1 zoom) */}
        {isTransitioning && !heroZoomBurst && (
          <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
            <div
              className="w-full h-full bg-[#070D0E]/85 backdrop-blur-sm transition-opacity duration-300"
              style={{ opacity: 0.92 }}
            />
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-amberGlow shadow-[0_0_24px_#F6BA66]"
              style={{
                left: transitionDirection === 'next' ? '50%' : '50%',
                transition: 'all 320ms ease-out',
              }}
            />
          </div>
        )}

        {/* Active Slide Content Container */}
        <div
          key={currentSlide}
          className={`w-full h-full max-w-[1440px] mx-auto transition-all duration-500 ease-out ${
            isTransitioning && !heroZoomBurst
              ? 'opacity-0 scale-[0.985] translate-y-1'
              : 'opacity-100 scale-100 translate-y-0'
          }`}
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

      {/* Bottom HUD Navigation Bar (mirrors video_1.mp4 bottom corner controls) */}
      <footer className="relative z-30 w-full px-6 md:px-14 py-2.5 border-t border-white/[0.07] bg-[#070D0E]/85 backdrop-blur-md flex items-center justify-between text-[11px] font-tech text-slate-400">
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
            disabled={currentSlide === 0}
            className="inline-flex items-center gap-1 px-3 py-1 rounded border border-white/15 bg-white/[0.03] text-slate-200 hover:border-amberGold/50 hover:text-amberGlow disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>НАЗАД</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === SLIDES.length - 1}
            className="inline-flex items-center gap-1 px-3 py-1 rounded border border-amberGold/40 bg-amberGold/15 text-amberGlow hover:bg-amberGold/25 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <span>ДАЛІ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
