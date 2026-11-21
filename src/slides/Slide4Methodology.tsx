import React, { useState } from 'react';
import { FlaskConical, Cpu, TreePine, Database, Map, ArrowRight } from 'lucide-react';

export const Slide4Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 'ЕТАП 01',
      icon: TreePine,
      title: 'Польовий збір та фіксація',
      subtitle: 'НПП «Синьогора» (Східні Карпати, Україна)',
      color: '#34D399',
      specs: [
        'Експедиційні збори імаго S. melanura у 2020 р. у Східних Карпатах (48.5847°N, 24.1716°E).',
        'Негайна фіксація у 96% етанолі для запобігання деградації ДНК; зберігання за −20 °C.',
        'Ваучерні зразки депоновано у фондовій колекції Карпатського національного університету імені Василя Стефаника (PUIF).',
      ],
    },
    {
      step: 'ЕТАП 02',
      icon: FlaskConical,
      title: 'Прямий лізис та ампліфікація ПЛР',
      subtitle: 'Протокол Korlević et al. (2021) + праймери HCO/LCO',
      color: '#38BDF8',
      specs: [
        'Екстракція ДНК із м’язів задньої ноги у 96-лунковому планшеті в 25 мкл лізуючого буфера C (200 mM Tris pH 8.0, 25 mM EDTA, 0.05% Tween-20, 0.4 мг/мл Proteinase K) за 56 °C (2 год).',
        '10-кратне розведення лізату без очищення; ПЛР (10 мкл) з індексованими праймерами HCO/LCO та DMSO.',
        'Термоциклування: 95 °C (2 хв) → 25–35 циклів [95 °C/30с, 40 °C/30с, 72 °C/45с] → 72 °C (5 хв); контроль у гель-електрофорезі.',
      ],
    },
    {
      step: 'ЕТАП 03',
      icon: Cpu,
      title: 'Секвенування Oxford Nanopore',
      subtitle: 'Платформа MinION + ONTbarcoder 2.0',
      color: '#E89B3C',
      specs: [
        'Пулінг індексованих ПЛР-продуктів та підготовка бібліотек за протоколом Srivathsan et al. (2021).',
        'Секвенування в реальному часі на проточній комірці MinION (Oxford Nanopore Technologies).',
        'Бейсколінг фірмовим ПЗ ONT; демультиплексування та збірка консенсусних сиквенсів у пайплайні ONTbarcoder 2.0 (Srivathsan et al., 2024).',
      ],
    },
    {
      step: 'ЕТАП 04',
      icon: Database,
      title: 'Філогенетична реконструкція',
      subtitle: 'SeaView 5.0 · MUSCLE · PhyML 3.0 (GTR)',
      color: '#A78BFA',
      specs: [
        'Загальний датасет: 250 COI баркодів (241 S. melanura, 2 S. sennii, аутгрупа: 5 S. bifasciata та 2 Anastrangalia dubia з BOLD/GenBank).',
        'Вирівнювання алгоритмом MUSCLE у SeaView 5.0 із ручною редакцією сумнівних ділянок.',
        'Побудова Maximum-Likelihood (ML) дерева в PhyML за моделлю GTR (оптимізація NNI + SPR, довжини гілок BioNJ, підтримка вузлів за тестом aLRT).',
      ],
    },
    {
      step: 'ЕТАП 05',
      icon: Map,
      title: 'ГІС-картографування ареалу',
      subtitle: 'DIVA-GIS 7.5.0.0 · Проєкція WGS 84',
      color: '#E64833',
      specs: [
        'Формування матриці знахідок (241 запис S. melanura + 2 S. sennii) у кодуванні UTF-8.',
        'Стандартизація географічних координат у системі WGS 84 (EPSG:4326).',
        'Просторовий аналіз розподілу гаплогруп Sm1–Sm4 та зіставлення з фотографіями фенотипів опушення надкрил у BOLD Systems.',
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>МАТЕРІАЛИ ТА МЕТОДОЛОГІЯ ДОСЛІДЖЕННЯ</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white">
          Від карпатських біотопів до пан’європейського філогенетичного дерева
        </h2>
      </div>

      {/* Horizontal Interactive Pipeline Flow (mirrors the nerve-to-brain transmission schematic in video_1.mp4 00:10) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-2">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const active = activeStep === idx;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`relative p-3 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[104px] ${
                active
                  ? 'bg-[#102226] border-amberGold shadow-[0_0_20px_rgba(232,155,60,0.18)] -translate-y-0.5'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/25 opacity-80'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-tech" style={{ color: s.color }}>
                  {s.step}
                </span>
                <Icon className="w-4 h-4" style={{ color: s.color }} />
              </div>
              <div className="text-xs sm:text-[13px] font-semibold text-white leading-tight mt-2">
                {s.title}
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amberGold/60 z-10" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Telemetry Card + Dataset Summary Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 max-h-[285px]">
        <div className="lg:col-span-8 telemetry-card telemetry-card-active rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div>
                <span
                  className="text-xs font-tech font-semibold uppercase tracking-wider"
                  style={{ color: steps[activeStep].color }}
                >
                  {steps[activeStep].step} · {steps[activeStep].subtitle}
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-white mt-0.5">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>
            <ul className="space-y-2.5">
              {steps[activeStep].specs.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: steps[activeStep].color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-[11px] font-tech text-slate-400 pt-2 border-t border-white/10">
            Натисніть на будь-який етап пайплайну вгорі, щоб переглянути лабораторні параметри
          </div>
        </div>

        {/* Right: Sample Composition Breakdown (250 total sequences) */}
        <div className="lg:col-span-4 telemetry-card rounded-xl p-5 flex flex-col justify-between">
          <div className="text-[11px] font-tech uppercase tracking-wider text-amberGold">
            СТРУКТУРА ВИБІРКИ (N = 250)
          </div>
          <div className="space-y-3 my-auto">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white font-medium italic">Stenurella melanura</span>
                <span className="font-tech text-cyanHaplotype">241 (96.4%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-cyanHaplotype rounded-full" style={{ width: '96.4%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white font-medium italic">Stenurella sennii nom. res.</span>
                <span className="font-tech text-crimsonClade">2 (0.8%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-crimsonClade rounded-full" style={{ width: '4%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">
                  Outgroup (<span className="italic">S. bifasciata</span> +{' '}
                  <span className="italic">A. dubia</span>)
                </span>
                <span className="font-tech text-amberGold">7 (2.8%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-amberGold rounded-full" style={{ width: '7%' }} />
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 leading-snug border-t border-white/10 pt-2.5">
            Джерела даних: власні сиквенси з України (GenBank PV658013 та ін.) + валідовані записи
            BOLD Systems (BS) та GenBank (GB).
          </div>
        </div>
      </div>
    </div>
  );
};
