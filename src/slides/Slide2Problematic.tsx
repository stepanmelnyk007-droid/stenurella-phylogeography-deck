import React, { useState } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AlertTriangle, GitBranch, Layers, EyeOff } from 'lucide-react';

export const Slide2Problematic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'polyphyly' | 'plasticity' | 'synonymy'>('plasticity');

  const cards = [
    {
      id: 'polyphyly' as const,
      icon: GitBranch,
      tag: '01 · РЕВІЗІЯ РОДУ STENURELLA',
      title: 'Поліфілія роду та перегляд меж таксонів',
      metric: '2 еволюційні гілки',
      body: 'Молекулярно-філогенетичні дослідження (16S rRNA, COI, 28S rRNA; Zamoroka et al., 2022) довели поліфілію роду Stenurella Villiers, 1974: види S. nigra, S. septempunctata та S. vaucheri перенесено до роду Rutpela. Проте внутрішньовидова структура самого S. melanura залишалася нерозв’язаною.',
    },
    {
      id: 'plasticity' as const,
      icon: Layers,
      tag: '02 · МОРФОЛОГІЧНА ПЛАСТИЧНІСТЬ',
      title: 'Хроматичний поліморфізм і криптичні види',
      metric: '4 спірні таксони',
      body: 'S. melanura поширений від Атлантики до Тихого океану й демонструє значну мінливість забарвлення опушення та скульптури покривів. Через це описані таксони S. samai, S. sennii, S. pamphyliae та S. zehrae були зведені в синоніми або підвиди без генетичної перевірки.',
    },
    {
      id: 'synonymy' as const,
      icon: EyeOff,
      tag: '03 · ДИЛЕМА STENURELLA SENNII',
      title: 'Помилкова синонімізація та фауністичні хиби',
      metric: '24 роки дискусій',
      body: 'Описаний Джамфранко Самою (Sama, 2002) вид S. sennii спирався на забарвлення щетинок, а не будову геніталій. Через симпатрію та зовнішню подібність до світлої форми S. melanura вид синонімізували (Danilevsky, 2014; Vitali, 2018), а давні вказівки для України, Чехії, Хорватії та Італії виявилися сумнівними.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="space-y-2 max-w-4xl">
        <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>ПРОБЛЕМАТИКА ТА АКТУАЛЬНІСТЬ ДОСЛІДЖЕННЯ</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white leading-tight">
          Чому традиційна морфологія не здатна розмежувати комплекс{' '}
          <span className="italic text-amberGlow">Stenurella melanura</span>?
        </h2>
      </div>

      {/* Big Animated KPI Strip (inspired by video_1.mp4 00:10 large counters) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-amberGold">
          <div className="text-3xl sm:text-4xl font-semibold text-white">
            <AnimatedCounter target={24} suffix=" роки" />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            таксономічної невизначеності статусу <span className="italic">S. sennii</span> з моменту опису (2002–2026)
          </div>
        </div>
        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-cyanHaplotype">
          <div className="text-3xl sm:text-4xl font-semibold text-cyanHaplotype">
            <AnimatedCounter target={1} prefix="лише " suffix=" геном" />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            був доступний на популяційному рівні (Crowley et al., 2024, Велика Британія) до цієї роботи
          </div>
        </div>
        <div className="telemetry-card rounded-xl p-4 border-l-2 border-l-crimsonClade">
          <div className="text-3xl sm:text-4xl font-semibold text-crimsonClade">
            <AnimatedCounter target={0} suffix=" даних" />
          </div>
          <div className="text-xs text-slate-300 mt-1">
            молекулярних баркодів <span className="italic">S. melanura</span> з території України існувало до 2026 року
          </div>
        </div>
      </div>

      {/* Interactive 3-Pillar Problem Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 max-h-[290px]">
        {cards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeTab === card.id;
          return (
            <div
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className={`telemetry-card rounded-xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                isSelected ? 'telemetry-card-active -translate-y-1' : 'opacity-85 hover:opacity-100'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-tech tracking-wider text-amberGold">
                    {card.tag}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amberGlow' : 'text-slate-400'}`} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">{card.body}</p>
              </div>
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-tech">
                <span className="text-slate-400">КЛЮЧОВИЙ ФАКТОР</span>
                <span className="text-amberGlow">{card.metric}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
