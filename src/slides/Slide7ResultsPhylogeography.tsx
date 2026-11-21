import React, { useState } from 'react';
import { EuropePhylogeoMap } from '../components/EuropePhylogeoMap';
import { HAPLOGROUPS } from '../data/studyData';
import { Compass, Snowflake } from 'lucide-react';

export const Slide7ResultsPhylogeography: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<'ALL' | 'Sm1' | 'Sm2' | 'Sm3' | 'Sm4' | 'SENNII'>('ALL');

  const activeGroup = HAPLOGROUPS.find((g) => g.id === selectedLayer);

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
            <Compass className="w-3.5 h-3.5" />
            <span>РЕЗУЛЬТАТИ · ЧАСТИНА III: ФІЛОГЕОГРАФІЯ ТА ЛЬОДОВИКОВІ РЕФУГІУМИ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-1">
            Плейстоценові рефугіуми та голоценові шляхи розселення в Європі
          </h2>
        </div>
        <div className="text-xs font-tech text-slate-400">
          Клікайте на шари карти для ізоляції гаплогруп
        </div>
      </div>

      {/* Main Split: Interactive Map (7 cols) + Glacial Refugia Reconstruction Cards (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-2 max-h-[415px]">
        {/* Left: Interactive SVG Phylogeography Map with Laser Scan */}
        <div className="lg:col-span-7 h-full">
          <EuropePhylogeoMap selectedId={selectedLayer} onSelect={setSelectedLayer} />
        </div>

        {/* Right: Refugia & Postglacial Routes Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 overflow-y-auto pr-1">
          {selectedLayer === 'SENNII' ? (
            <div className="telemetry-card telemetry-card-active rounded-xl p-5 flex-1 flex flex-col justify-between border border-crimsonClade/50">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded bg-crimsonClade/20 text-crimsonClade font-tech text-xs">
                  ВУЗЬКОЛОКАЛЬНИЙ ЕНДЕМІК АБО НЕДОСЛІДЖЕНИЙ АРЕАЛ?
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-white">
                  Stenurella sennii nom. res. у Центральній Франції
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Обидва генетично підтверджені екземпляри походять виключно з Франції:
                  <br />• <span className="font-tech text-amberGlow">PSFOR1138-17</span> (47.81°N, 0.42°E)
                  <br />• <span className="font-tech text-amberGlow">PSFOR160-13</span> (45.38°N, 2.49°E)
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Справжній ареал виду залишається невідомим через складність морфологічної
                  діагностики. Попередні вказівки зі Східної та Центральної Європи ймовірно
                  стосуються світлих морф <span className="font-tech text-cyanHaplotype">Sm1</span>.
                </p>
              </div>
              <button
                onClick={() => setSelectedLayer('ALL')}
                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-tech text-white transition-colors"
              >
                ПОВЕРНУТИ ВСІ ГАПЛОГРУПИ НА КАРТУ
              </button>
            </div>
          ) : activeGroup ? (
            <div className="telemetry-card telemetry-card-active rounded-xl p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded font-tech text-xs font-bold"
                    style={{
                      backgroundColor: activeGroup.accentBg,
                      color: activeGroup.color,
                    }}
                  >
                    {activeGroup.name} · n = {activeGroup.sequencesCount}
                  </span>
                  <Snowflake className="w-4 h-4 text-cyanHaplotype" />
                </div>

                <div>
                  <div className="text-[10px] font-tech uppercase tracking-wider text-amberGold">
                    ЛЬОДОВИКОВИЙ РЕФУГІУМ
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {activeGroup.glacialRefugium}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-tech uppercase tracking-wider text-cyanHaplotype">
                    МАРШРУТ ПІСЛЯЛЬОДОВИКОВОЇ ЕКСПАНСІЇ
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed">
                    {activeGroup.postglacialRoute}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-tech uppercase tracking-wider text-slate-400">
                    СУЧАСНА ЕКОЛОГО-ГЕОГРАФІЧНА ПРИУРОЧЕНІСТЬ
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {activeGroup.primaryRange}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedLayer('ALL')}
                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-tech text-amberGlow transition-colors"
              >
                ПОКАЗАТИ ПОРІВНЯННЯ УСІХ 4 ГАПЛОГРУП
              </button>
            </div>
          ) : (
            <>
              {[
                {
                  id: 'Sm1' as const,
                  title: 'Рефугіум Південної Франції (Sm1)',
                  color: '#38BDF8',
                  desc: 'Експансія на північ та схід у голоцені; північні популяції — релікти атлантичного оптимуму або наслідок інтрогресії.',
                },
                {
                  id: 'Sm2' as const,
                  title: 'Східний рефугіум: Поволжя / Пд. Урал (Sm2)',
                  color: '#E89B3C',
                  desc: 'Бореальна міграція зі сходу на захід (Фенноскандія, Балтія) із проникненням у високогір’я Центральної Європи.',
                },
                {
                  id: 'Sm4' as const,
                  title: 'Піренейський рефугіум (Sm4)',
                  color: '#A78BFA',
                  desc: 'Приуроченість до гірських систем Пн.-Зх. Середземномор’я (Піренеї, Альпи, Центральний масив Франції).',
                },
              ].map((ref) => (
                <div
                  key={ref.id}
                  onClick={() => setSelectedLayer(ref.id)}
                  className="telemetry-card rounded-xl p-3.5 cursor-pointer hover:border-amberGold/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-white">{ref.title}</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: ref.color }}
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                    {ref.desc}
                  </p>
                </div>
              ))}

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-slate-300 leading-snug">
                <strong className="text-amberGlow">Зона вторинного контакту:</strong> у Центральній
                та Західній Європі ареали <span className="font-tech text-cyanHaplotype">Sm1</span> та{' '}
                <span className="font-tech text-amberGold">Sm2</span> широко перекриваються,
                формуючи клінальні градієнти «захід–схід» і «північ–південь».
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
