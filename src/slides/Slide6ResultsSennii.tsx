import React, { useState } from 'react';
import { PAIRWISE_MATRIX } from '../data/studyData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Fingerprint, Scale, AlertCircle } from 'lucide-react';

export const Slide6ResultsSennii: React.FC = () => {
  const [viewMode, setViewMode] = useState<'divergence' | 'morphology'>('divergence');

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-crimsonClade">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>РЕЗУЛЬТАТИ · ЧАСТИНА II: ВІДНОВЛЕННЯ ТАКСОНОМІЧНОГО СТАТУСУ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white mt-1">
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

      {/* Top 3 High-Impact Statistical Counters (mirrors video_1.mp4 big metric counters) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-1.5">
        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-crimsonClade">
          <div className="text-3xl sm:text-4xl font-semibold text-crimsonClade">
            <AnimatedCounter target={0.077} decimals={3} />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            середня генетична дистанція COI (замін/сайт; діапазон <span className="font-tech">0.062–0.186</span>) від{' '}
            <span className="italic">S. melanura</span>
          </div>
        </div>

        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-amberGold">
          <div className="text-3xl sm:text-4xl font-semibold text-amberGlow">
            <AnimatedCounter target={72.93} decimals={2} prefix="t = " />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            критерій Стьюдента (<span className="font-tech">P = 1.77 × 10⁻²⁰²</span>) — високодостовірна видова ізоляція клади
          </div>
        </div>

        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-cyanHaplotype">
          <div className="text-3xl sm:text-4xl font-semibold text-cyanHaplotype">
            <AnimatedCounter target={0.8} decimals={1} suffix="%" />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            частка у вибірці: лише 2 самці (<span className="font-tech">PSFOR1138-17</span> та{' '}
            <span className="font-tech">PSFOR160-13</span>) із Центральної Франції
          </div>
        </div>
      </div>

      {/* Main Panel: Either Pairwise Distance Matrix Table 2 OR Cryptic Sibling Species Diagnostic Comparison */}
      {viewMode === 'divergence' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 max-h-[295px]">
          <div className="lg:col-span-8 telemetry-card rounded-xl p-4 flex flex-col justify-between overflow-x-auto">
            <div className="flex items-center justify-between mb-2">
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
                    <td className="py-2.5 pr-2 font-sans italic font-semibold">{row.shortName}</td>
                    <td
                      className={`py-2.5 px-2 ${
                        rIdx === 1 ? 'text-crimsonClade font-bold text-sm' : 'text-slate-300'
                      }`}
                    >
                      {row.smel}
                    </td>
                    <td
                      className={`py-2.5 px-2 ${
                        rIdx === 0 ? 'text-amberGlow font-semibold' : 'text-slate-300'
                      }`}
                    >
                      {row.ssen}
                    </td>
                    <td className="py-2.5 px-2 text-slate-300">{row.sbif}</td>
                    <td className="py-2.5 pl-2 text-slate-300">{row.adub}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/10">
              Для порівняння: середня дистанція всередині <span className="italic">S. melanura</span>{' '}
              становить лише <span className="font-tech text-cyanHaplotype">0.015</span> (макс. 0.050),
              а між підродами (<span className="italic">S. melanura</span> vs{' '}
              <span className="italic">S. bifasciata</span>) —{' '}
              <span className="font-tech text-amberGold">0.160</span>.
            </div>
          </div>

          <div className="lg:col-span-4 telemetry-card telemetry-card-active rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-3">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 max-h-[295px]">
          <div className="telemetry-card rounded-xl p-5 flex flex-col justify-between border border-crimsonClade/40">
            <div className="space-y-2.5">
              <div className="text-xs font-tech text-crimsonClade uppercase">
                STENURELLA SENNII NOM. RES. (SAMA, 2002)
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-white">
                Ваучери PSFOR1138-17 та PSFOR160-13
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li>
                  • Повна морфологічна відповідність діагнозу Sama (2002): прямостоячі волоски на
                  голові, передньоспинці, надкрилах та пігідії золотисто-жовті й товстіші.
                </li>
                <li>
                  • Підтверджений ареал за ДНК-баркодами обмежений Центральною Францією (департаменти
                  Канталь та Сарта).
                </li>
                <li>
                  • Молодий криптичний вид-двійник, що дивергував відносно недавно.
                </li>
              </ul>
            </div>
            <div className="text-[11px] font-tech text-crimsonClade">
              НАДІЙНА ІДЕНТИФІКАЦІЯ: ЛИШЕ МОЛЕКУЛЯРНИЙ АНАЛІЗ COI
            </div>
          </div>

          <div className="telemetry-card rounded-xl p-5 flex flex-col justify-between border border-cyanHaplotype/40">
            <div className="space-y-2.5">
              <div className="text-xs font-tech text-cyanHaplotype uppercase">
                СВІТЛООПУШЕНА ФОРМА S. MELANURA (ГАПЛОГРУПА Sm1)
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-white">
                Фенотиповий двійник у симпатрії
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
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
                  вказівок <span className="italic">S. sennii</span> у Центральній та Східній Європі.
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-tech text-amberGlow">
              <AlertCircle className="w-4 h-4" />
              <span>ВИСОКИЙ РИЗИК ПОМИЛКОВОГО ВИЗНАЧЕННЯ ЗА МОРФОЛОГІЄЮ</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
