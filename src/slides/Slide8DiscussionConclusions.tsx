import React from 'react';
import { CheckCircle2, Compass, GitMerge, ShieldAlert, Sparkles } from 'lucide-react';

export const Slide8DiscussionConclusions: React.FC = () => {
  const conclusions = [
    {
      num: '01',
      title: 'Таксономічне відновлення Stenurella sennii nom. res.',
      text: 'Інтеграція філогенетичного аналізу COI (дивергенція 0.077 замін/сайт, t = 72.93, P < 0.0001) із діагностичними ознаками Sama (2002) підтвердила видову самостійність S. sennii та дозволила офіційно вивести вид із синонімії S. melanura.',
      accent: '#E64833',
    },
    {
      num: '02',
      title: 'Ревізія фауністичних списків Центральної та Східної Європи',
      text: 'Оскільки генетично підтверджений S. sennii виявлений лише у Франції (0.8% вибірки), попередні вказівки для України (Zamoroka et al., 2012), Чехії, Хорватії та Італії є наслідком помилкової ідентифікації світлої форми S. melanura (Sm1).',
      accent: '#E89B3C',
    },
    {
      num: '03',
      title: 'Постльодовикова біогеографія та гібридизація S. melanura',
      text: 'Виділено 4 гаплогрупи (Sm1–Sm4), що походять із різних плейстоценових рефугіумів (Пд. Франція, Поволжя/Урал, Піренеї). Невідповідність між мтДНК і кольором опушення доводить інтрогресивну гібридизацію в зонах вторинного контакту.',
      accent: '#38BDF8',
    },
    {
      num: '04',
      title: 'Перспективи подальших молекулярних досліджень',
      text: 'Необхідне розширення ДНК-баркодингу на Східну Європу, Сибір і Середземномор’я, залучення ядерних маркерів для аналізу потоку генів та перевірка статусу підвидів S. m. samai, S. m. pamphyliae та S. m. zehrae.',
      accent: '#34D399',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 md:px-14 py-6">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-[0.2em] text-amberGold">
          <GitMerge className="w-3.5 h-3.5" />
          <span>ОБГОВОРЕННЯ ТА ВИСНОВКИ</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white">
          Розв’язання чвертьвікової таксономічної колізії та значення для біорізноманіття
        </h2>
      </div>

      {/* 4 Structured Conclusion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 flex-1 max-h-[340px]">
        {conclusions.map((item) => (
          <div
            key={item.num}
            className="telemetry-card rounded-xl p-5 flex flex-col justify-between border-t-2"
            style={{ borderTopColor: item.accent }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-tech text-xs font-bold" style={{ color: item.accent }}>
                  ВИСНОВОК {item.num}
                </span>
                <CheckCircle2 className="w-4 h-4" style={{ color: item.accent }} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Synthesis Banner */}
      <div className="telemetry-card telemetry-card-active rounded-xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-amberGlow shrink-0" />
          <p className="text-xs sm:text-sm text-slate-200">
            <strong className="text-white">Головний практичний висновок:</strong> для криптичних
            видів-двійників сапроксильних жуків молекулярна діагностика (COI баркодинг) є
            обов’язковою умовою точної інвентаризації фауни та оцінки природоохоронного статусу.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-tech text-amberGold">
          <ShieldAlert className="w-4 h-4" />
          <span>ІНТЕГРАТИВНА ТАКСОНОМІЯ</span>
        </div>
      </div>
    </div>
  );
};
