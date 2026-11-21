import React, { useState } from 'react';
import { PAIRWISE_MATRIX } from '../data/studyData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Fingerprint, Scale, AlertCircle } from 'lucide-react';

export const Slide6ResultsSennii: React.FC = () => {
  const [viewMode, setViewMode] = useState<'divergence' | 'morphology'>('divergence');

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-5 gap-3">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-crimsonClade">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>РЕЗУЛЬТАТИ · ЧАСТИНА II: ВІДНОВЛЕННЯ ТАКСОНОМІЧНОГО СТАТУСУ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-0.5">
            Виділення криптичного виду{' '}
            <span className="italic text-crimsonClade">Stenurella sennii</span>{' '}
            <span className="text-amberGold font-normal">nom. res.</span>
          </h2>
        </div>

        {/* Toggle Switch */}
        <div className="flex rounded-lg bg-white/[0.04] p-1 border border-white/10 text-xs font-tech">
          <button
            onClick={() => setViewMode('divergence')}
            className={`px-3 py-1 rounded-md transition-all ${
              viewMode === 'divergence'
                ? 'bg-crimsonClade text-white font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Генетична дивергенція
          </button>
          <button
            onClick={() => setViewMode('morphology')}
            className={`px-3 py-1 rounded-md transition-all ${
              viewMode === 'morphology'
                ? 'bg-amberGold text-[#070D0E] font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Криптична морфологія
          </button>
        </div>
      </div>

      {/* Top 3 High-Impact Statistical Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-crimsonClade">
          <div className="text-3xl font-semibold text-crimsonClade">
            <AnimatedCounter target={0.077} decimals={3} />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            середня дистанція COI (замін/сайт; діапазон <span className="font-tech">0.062–0.186</span>) від{' '}
            <span className="italic">S. melanura</span>
          </div>
        </div>

        <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-amberGold">
          <div className="text-3xl font-semibold text-amberGlow">
            <AnimatedCounter target={72.93} decimals={2} prefix="t = " />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            критерій Стьюдента (<span className="font-tech">P = 1.77 × 10⁻²⁰²</span>) — високодостовірна видова ізоляція клади
          </div>
        </div>

        <div className="telemetry-card rounded-xl p-3.5 border-l-2 border-l-cyanHaplotype">
          <div className="text-3xl font-semibold text-cyanHaplotype">
            <AnimatedCounter target={0.8} decimals={1} suffix="%" />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            частка у вибірці: лише 2 самці (<span className="font-tech">PSFOR1138-17</span> та{' '}
            <span className="font-tech">PSFOR160-13</span>) із Франції
          </div>
        </div>
      </div>

      {/* Main Panel */}
      {viewMode === 'divergence' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
          <div className="lg:col-span-8 telemetry-card rounded-xl p-4 flex flex-col justify-between overflow-x-auto">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-tech uppercase tracking-wider text-amberGold">
                ТАБЛИЦЯ 2 · ПОПАРНІ COI ДИСТАНЦІЇ (НИЖЧЕ ДІАГОНАЛІ) ТА t-ТЕСТ СТЬЮДЕНТА (ВИЩЕ)
              </span>
            </div>

            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/15 text-[11px] font-tech text-slate-400">
                  <th className="py-2 pr-2">Таксон</th>
                  <th className="py-2 px-2">S. melanura</th>
                  <th className="py-2 px-2 text-crimsonClade">S. sennii nom. res.</th>
                  <th className="py-2 px-2">S. bifasciata</th>
                  <th className="py-2 pl-2">A. dubia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-tech text-[11px] sm:text-xs">
                {PAIRWISE_MATRIX.map((row, rIdx) => (
                  <tr
                    key={row.species}
                    className={rIdx === 1 ? 'bg-crimsonClade/12 text-white' : 'text-slate-200'}
                  >
                    <td className="py-2 pr-2 font-sans italic font-semibold">{row.shortName}</td>
                    <td
                      className={`py-2 px-2 ${
                        rIdx === 1 ? 'text-crimsonClade font-bold text-sm' : 'text-slate-300'
                      }`}
                    >
                      {row.smel}
                    </td>
                    <td
                      className={`py-2 px-2 ${
                        rIdx === 0 ? 'text-amberGlow font-semibold' : 'text-slate-300'
                      }`}
                    >
                      {row.ssen}
                    </td>
                    <td className="py-2 px-2 text-slate-300">{row.sbif}</td>
                    <td className="py-2 pl-2 text-slate-300">{row.adub}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Visual Divergence Scale Bar */}
            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <div className="flex justify-between text-[10px] font-tech text-slate-400">
                <span>ПОРІВНЯННЯ РІВНІВ ГЕНЕТИЧНОЇ ДИВЕРГЕНЦІЇ COI (ЗАМІН / САЙТ)</span>
                <span>0.000 — 0.200</span>
              </div>
              <div className="space-y-1 text-[10px] font-tech">
                <div className="flex items-center gap-2">
                  <span className="w-32 text-cyanHaplotype truncate">Внутрішньовид. S.mel</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyanHaplotype" style={{ width: '7.5%' }} />
                  </div>
                  <span className="w-10 text-right text-slate-300">0.015</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-32 text-crimsonClade font-bold truncate">S. sennii vs S. mel</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-crimsonClade" style={{ width: '38.5%' }} />
                  </div>
                  <span className="w-10 text-right text-crimsonClade font-bold">0.077</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-32 text-amberGold truncate">Міжпідрод. S. bifasc</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amberGold" style={{ width: '80%' }} />
                  </div>
                  <span className="w-10 text-right text-slate-300">0.160</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 telemetry-card telemetry-card-active rounded-xl p-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-tech text-crimsonClade">
                <Scale className="w-4 h-4" />
                <span>БАРКОДИНГОВИЙ ПОРІГ ВИДУ</span>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-white">
                Перевищення внутрішньовидової варіабельності у 5.1 раза
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Дивергенція <span className="font-tech text-white">0.077</span> замін/сайт (7.8%
                некоригованої дистанції; узгоджується з 7.11% у Sire et al., 2019) надійно відокремлює
                кладу <span className="italic">PSFOR1138-17 / PSFOR160-13</span> на філогенетичному
                дереві (підтримка вузла <span className="font-tech text-emeraldRefugia">aLRT = 0.99</span>).
              </p>
            </div>
            <div className="p-2.5 rounded bg-crimsonClade/15 border border-crimsonClade/35 text-[11px] text-slate-200">
              Номенклатурний акт: офіційне відновлення валідності{' '}
              <strong className="italic text-white">Stenurella sennii</strong> Sama, 2002{' '}
              <span className="font-tech text-amberGlow">nom. res.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
          {/* Left: Morphological Comparison SVG Illustration */}
          <div className="lg:col-span-4 telemetry-card rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="text-[10px] font-tech uppercase tracking-wider text-amberGold w-full">
              МОРФОМЕТРИЧНЕ ЗІСТАВЛЕННЯ ВАУЧЕРІВ
            </div>
            <svg viewBox="0 0 260 190" className="w-full h-[165px]">
              {/* Left Specimen: S. sennii PSFOR1138-17 */}
              <g transform="translate(65, 22)">
                <circle cx="0" cy="68" r="54" fill="rgba(230, 72, 51, 0.12)" stroke="#E64833" strokeDasharray="3 3" />
                <polygon points="-7,12 7,12 9,24 -9,24" fill="#1E293B" stroke="#E64833" />
                <path d="M -9 26 L 9 26 L 14 48 L -14 48 Z" fill="#0F172A" stroke="#E64833" />
                <path d="M -15 50 C -18 76, -14 114, -1 140 L -1 50 Z" fill="#F6BA66" stroke="#E89B3C" />
                <path d="M 15 50 C 18 76, 14 114, 1 140 L 1 50 Z" fill="#E89B3C" stroke="#D97724" />
                <text x="0" y="158" textAnchor="middle" fill="#F87171" fontSize="9" fontFamily="JetBrains Mono, monospace">
                  PSFOR1138-17
                </text>
                <text x="0" y="169" textAnchor="middle" fill="#CBD5E1" fontSize="8" fontFamily="Plus Jakarta Sans, sans-serif">
                  S. sennii nom. res.
                </text>
              </g>

              {/* Equivalence Sign */}
              <text x="130" y="94" textAnchor="middle" fill="#F6BA66" fontSize="18" fontFamily="JetBrains Mono, monospace">
                ≈
              </text>

              {/* Right Specimen: Light-pubescent S. melanura Sm1 */}
              <g transform="translate(195, 22)">
                <circle cx="0" cy="68" r="54" fill="rgba(56, 189, 248, 0.12)" stroke="#38BDF8" strokeDasharray="3 3" />
                <polygon points="-7,12 7,12 9,24 -9,24" fill="#1E293B" stroke="#38BDF8" />
                <path d="M -9 26 L 9 26 L 14 48 L -14 48 Z" fill="#0F172A" stroke="#38BDF8" />
                <path d="M -15 50 C -18 76, -14 114, -1 140 L -1 50 Z" fill="#F6BA66" stroke="#E89B3C" />
                <path d="M 15 50 C 18 76, 14 114, 1 140 L 1 50 Z" fill="#E89B3C" stroke="#D97724" />
                <text x="0" y="158" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="JetBrains Mono, monospace">
                  Гаплогрупа Sm1
                </text>
                <text x="0" y="169" textAnchor="middle" fill="#CBD5E1" fontSize="8" fontFamily="Plus Jakarta Sans, sans-serif">
                  S. melanura (світла)
                </text>
              </g>
            </svg>
            <div className="text-[10px] font-tech text-slate-400 text-center">
              Криптичні види-двійники (зовнішньо нерозрізнювані)
            </div>
          </div>

          <div className="lg:col-span-4 telemetry-card rounded-xl p-4 flex flex-col justify-between border border-crimsonClade/40">
            <div className="space-y-2">
              <div className="text-xs font-tech text-crimsonClade uppercase">
                STENURELLA SENNII NOM. RES. (SAMA, 2002)
              </div>
              <h3 className="font-editorial text-xl font-semibold text-white">
                Ваучери PSFOR1138-17 та PSFOR160-13
              </h3>
              <ul className="space-y-2 text-xs text-slate-200">
                <li>
                  • Повна морфологічна відповідність діагнозу Sama (2002): прямостоячі волоски на
                  голові, передньоспинці, надкрилах та пігідії золотисто-жовті й товстіші.
                </li>
                <li>
                  • Підтверджений ареал за ДНК-баркодами обмежений Центральною Францією (департаменти
                  Канталь та Сарта).
                </li>
                <li>• Молодий криптичний вид-двійник, що дивергував відносно недавно.</li>
              </ul>
            </div>
            <div className="text-[11px] font-tech text-crimsonClade">
              НАДІЙНА ІДЕНТИФІКАЦІЯ: ЛИШЕ АНАЛІЗ COI
            </div>
          </div>

          <div className="lg:col-span-4 telemetry-card rounded-xl p-4 flex flex-col justify-between border border-cyanHaplotype/40">
            <div className="space-y-2">
              <div className="text-xs font-tech text-cyanHaplotype uppercase">
                СВІТЛООПУШЕНА ФОРМА S. MELANURA (Sm1)
              </div>
              <h3 className="font-editorial text-xl font-semibold text-white">
                Фенотиповий двійник у симпатрії
              </h3>
              <ul className="space-y-2 text-xs text-slate-200">
                <li>
                  • Зовнішньо практично невідрізнима від <span className="italic">S. sennii</span>{' '}
                  за габітусом, пропорціями тіла та золотистим опушенням надкрил.
                </li>
                <li>
                  • Широко поширена по всій Європі (включно з Україною, Чехією, Хорватією, Італією).
                </li>
                <li>
                  • Саме світлі особини <span className="font-tech">Sm1</span> (та гібриди зі{' '}
                  <span className="font-tech">Sm2</span>) стали причиною хибних фауністичних
                  вказівок <span className="italic">S. sennii</span>.
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-tech text-amberGlow">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>ВИСОКИЙ РИЗИК ПОМИЛКИ ЗА МОРФОЛОГІЄЮ</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
