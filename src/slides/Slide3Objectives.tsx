import React, { useState } from 'react';
import { Target, CheckCircle2, Compass, Microscope, Globe2, ShieldCheck } from 'lucide-react';

export const Slide3Objectives: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<number>(0);

  const tasks = [
    {
      num: '01',
      icon: Microscope,
      title: 'Сформувати пан’європейський масив ДНК-баркодів COI',
      detail:
        'Отримати перші молекулярні послідовності S. melanura з України (НПП «Синьогора», Східні Карпати) методом нанопорового секвенування (ONT MinION) та інтегрувати їх із валідованими даними BOLD Systems і GenBank (разом 250 послідовностей із зовнішньою групою).',
      output: '241 сиквенс S. melanura + 2 S. sennii + 7 outgroup',
    },
    {
      num: '02',
      icon: Compass,
      title: 'Встановити внутрішньовидову гаплогрупову структуру та зв’язок із фенотипом',
      detail:
        'Виконати філогенетичну реконструкцію (Maximum Likelihood у PhyML 3.0), виділити еволюційні кластери (гаплогрупи та гаплотипи) і перевірити кореляцію між мітохондріальними лініями COI та забарвленням опушення надкрил (світла vs темна морфи).',
      output: '4 гаплогрупи (Sm1–Sm4), 16 гаплотипів, виявлення гібридизації',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Перевірити таксономічну валідність Stenurella sennii',
      detail:
        'Оцінити рівень генетичної дивергенції між високодивергентними кладами та номінативним S. melanura за допомогою попарних дистанцій і t-критерію Стьюдента, зіставивши молекулярні клади з першоописом Sama (2002).',
      output: 'Дистанція 0.077 замін/сайт (t = 72.93, P < 0.0001) → nom. res.',
    },
    {
      num: '04',
      icon: Globe2,
      title: 'Реконструювати льодовикові рефугіуми та післяльодовикову експансію',
      detail:
        'Побудувати карти просторового поширення гаплогруп у середовищі DIVA-GIS 7.5 (проєкція WGS 84) для виявлення плейстоценових рефугіумів, шляхів голоценової міграції та зон вторинного контакту в Європі.',
      output: 'Ідентифікація 3 рефугіумів (Пд. Франція, Поволжя/Урал, Іберія)',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Section Kicker + Main Goal Box (mirrors video_1.mp4 00:10 "МЕТА" + "ЗАВДАННЯ" structure) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
          <Target className="w-3.5 h-3.5" />
          <span>МЕТА ТА ЗАВДАННЯ ДОСЛІДЖЕННЯ</span>
        </div>

        <div className="telemetry-card telemetry-card-active rounded-xl p-5 border-l-4 border-l-amberGold">
          <div className="text-[11px] font-tech uppercase tracking-widest text-amberGold mb-1.5">
            ГОЛОВНА МЕТА РОБОТИ
          </div>
          <p className="font-editorial text-2xl sm:text-3xl text-white leading-snug">
            Здійснити комплексний пан’європейський{' '}
            <span className="italic text-amberGlow">молекулярно-філогеографічний аналіз</span>{' '}
            комплекса <span className="italic text-cyanHaplotype">Stenurella melanura</span> на
            основі мітохондріального маркера COI для розв’язання внутрішньовидової структури,
            реконструкції післяльодовикової біогеографії та перевірки видового статусу{' '}
            <span className="italic text-crimsonClade">Stenurella sennii</span>.
          </p>
        </div>
      </div>

      {/* Interactive Numbered Tasks List (01..04) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch my-auto pt-3">
        {/* Left: Task Selector Rows */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-2.5">
          {tasks.map((task, idx) => {
            const active = selectedTask === idx;
            return (
              <div
                key={task.num}
                onClick={() => setSelectedTask(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                  active
                    ? 'bg-[#102226]/95 border-amberGold/60 shadow-[0_0_24px_rgba(232,155,60,0.14)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg font-tech text-sm font-bold flex items-center justify-center shrink-0 transition-colors ${
                    active
                      ? 'bg-amberGold text-[#070D0E]'
                      : 'bg-white/[0.06] text-amberGold border border-amberGold/30'
                  }`}
                >
                  {task.num}
                </div>
                <div className="flex-1">
                  <div className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {task.title}
                  </div>
                  <div className="text-[11px] font-tech text-slate-400 mt-0.5">{task.output}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Card for Active Task */}
        <div className="lg:col-span-5 telemetry-card rounded-xl p-6 flex flex-col justify-between border border-amberGold/30">
          {(() => {
            const ActiveIcon = tasks[selectedTask].icon;
            return (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-amberGold/15 text-amberGlow font-tech text-xs">
                      ЗАВДАННЯ {tasks[selectedTask].num} / 04
                    </span>
                    <ActiveIcon className="w-6 h-6 text-amberGold" />
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-white leading-snug">
                    {tasks[selectedTask].title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {tasks[selectedTask].detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2.5 text-xs font-tech text-emeraldRefugia">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Очікуваний результат: {tasks[selectedTask].output}</span>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
