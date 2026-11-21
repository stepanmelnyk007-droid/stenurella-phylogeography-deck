export interface HaplogroupInfo {
  id: 'Sm1' | 'Sm2' | 'Sm3' | 'Sm4';
  name: string;
  sequencesCount: number;
  sharePercent: string;
  haplotypes: string[];
  meanIntraDistance: number;
  intraHaplotypeRange: string;
  interHaplotypeRange: string;
  lightPubescencePct: number;
  darkPubescencePct: number;
  color: string;
  accentBg: string;
  primaryRange: string;
  glacialRefugium: string;
  postglacialRoute: string;
  summary: string;
  points: { x: number; y: number; label: string; isHybrid?: boolean }[];
}

export interface PairwiseMatrixRow {
  species: string;
  shortName: string;
  smel: string;
  ssen: string;
  sbif: string;
  adub: string;
}

export const ARTICLE_META = {
  titleEn:
    'Molecular evidence for the taxonomic resurrection of Stenurella sennii nom. res. within the phylogeographic framework of S. melanura (Coleoptera, Cerambycidae)',
  titleUk:
    'Молекулярні докази таксономічного відновлення Stenurella sennii nom. res. у філогеографічній структурі S. melanura (Coleoptera, Cerambycidae)',
  journal: 'Biosystems Diversity',
  volumeIssue: '2026, 34(1), e2602',
  doi: '10.15421/012602',
  issnPrint: '2519-8513',
  issnOnline: '2520-2529',
  dates: {
    received: '05.01.2026',
    revised: '03.02.2026',
    accepted: '18.02.2026',
  },
  authors: [
    { name: 'С. Мельник', affiliation: 1 },
    { name: 'В. Маланій', affiliation: 1 },
    { name: 'Ю.-Й. Касіцький', affiliation: 1 },
    { name: 'О. Піддубний', affiliation: 1 },
    { name: 'О. Позняк', affiliation: 1 },
    { name: 'Л. Фельбаба-Клушина', affiliation: 2 },
    { name: 'В. Шпарик', affiliation: 1 },
    { name: 'О. Зіненко', affiliation: 3 },
    { name: 'А. Заморока', affiliation: 1 },
  ],
  affiliations: [
    { id: 1, name: 'Карпатський національний університет імені Василя Стефаника, Івано-Франківськ' },
    { id: 2, name: 'Ужгородський національний університет, Ужгород' },
    { id: 3, name: 'Харківський національний університет імені В. Н. Каразіна, Харків' },
  ],
};

export const HAPLOGROUPS: HaplogroupInfo[] = [
  {
    id: 'Sm1',
    name: 'Гаплогрупа Sm1',
    sequencesCount: 148,
    sharePercent: '61.4%',
    haplotypes: ['Sm1-h1', 'Sm1-h2', 'Sm1-h3', 'Sm1-h4'],
    meanIntraDistance: 0.009,
    intraHaplotypeRange: '0.001–0.006',
    interHaplotypeRange: '0.007–0.015',
    lightPubescencePct: 79,
    darkPubescencePct: 21,
    color: '#38BDF8',
    accentBg: 'rgba(56, 189, 248, 0.14)',
    primaryRange: 'Західна та Центральна Європа (рівнини й низькогір’я); на півдні — Піренеї та Приморські Альпи',
    glacialRefugium: 'Південна Франція (основний рефугіум)',
    postglacialRoute: 'Голоценова експансія на північ та схід Європи (включно з Українськими Карпатами — PV658013)',
    summary:
      'Наймасовіша європейська лінія (n = 148). Домінують особини зі світло-жовтим або золотистим опушенням надкрил (79% серед 47 морфологічно оцінених зразків).',
    points: [
      { x: 245, y: 265, label: 'Пд. Франція (рефугіум)' },
      { x: 215, y: 215, label: 'Центр. Франція' },
      { x: 205, y: 165, label: 'Велика Британія' },
      { x: 280, y: 185, label: 'Німеччина / Альпи' },
      { x: 315, y: 195, label: 'Австрія / Чехія' },
      { x: 355, y: 165, label: 'Польща (BSBPL)' },
      { x: 392, y: 210, label: 'Україна (НПП «Синьогора»)' },
      { x: 350, y: 95, label: 'Фінляндія (COLFA529-12 — темна морфа)', isHybrid: true },
      { x: 365, y: 118, label: 'Аландські о-ви (PLPOL818 — темна морфа)', isHybrid: true },
      { x: 210, y: 265, label: 'Піренеї (CLPFR018 — темна морфа)', isHybrid: true },
    ],
  },
  {
    id: 'Sm2',
    name: 'Гаплогрупа Sm2',
    sequencesCount: 34,
    sharePercent: '14.1%',
    haplotypes: ['Sm2-h1', 'Sm2-h2', 'Sm2-h3', 'Sm2-h4', 'Sm2-h5', 'Sm2-h6'],
    meanIntraDistance: 0.023,
    intraHaplotypeRange: '0.000–0.006',
    interHaplotypeRange: '0.007–0.021',
    lightPubescencePct: 45,
    darkPubescencePct: 55,
    color: '#E89B3C',
    accentBg: 'rgba(232, 155, 60, 0.14)',
    primaryRange: 'Північна та Східна Європа (рівнини), у Центральній і Південній Європі — виключно прохолодні гірські біотопи',
    glacialRefugium: 'Поволжя або Південний Урал (східноєвропейський бореальний рефугіум)',
    postglacialRoute: 'Післяльодовикова міграція зі сходу на захід північним маршрутом із подальшим проникненням у гірські системи Європи',
    summary:
      'Бореально-гірська лінія (n = 34) із найвищим внутрішньогруповим різноманіттям (6 гаплотипів). Переважають темноопушені особини (55%, а в кластері Sm2-h2 — до 90%).',
    points: [
      { x: 380, y: 92, label: 'Фенноскандія' },
      { x: 305, y: 105, label: 'Пд. Норвегія' },
      { x: 365, y: 135, label: 'Балтійський регіон' },
      { x: 385, y: 160, label: 'Біловезька Пуща (Польща)' },
      { x: 295, y: 175, label: 'Німеччина (GBCOU5055 — світла морфа)', isHybrid: true },
      { x: 322, y: 205, label: 'Альпи (TDAOE3219 — світла морфа)', isHybrid: true },
      { x: 332, y: 242, label: 'Динарські Альпи (ICRYO015 — світла морфа)', isHybrid: true },
      { x: 215, y: 268, label: 'Піренеї (CLPFR019 — світла морфа)', isHybrid: true },
    ],
  },
  {
    id: 'Sm3',
    name: 'Гаплогрупа Sm3',
    sequencesCount: 4,
    sharePercent: '1.7%',
    haplotypes: ['Sm3-h1'],
    meanIntraDistance: 0.023,
    intraHaplotypeRange: '0.001',
    interHaplotypeRange: '— (компактний кластер)',
    lightPubescencePct: 50,
    darkPubescencePct: 50,
    color: '#34D399',
    accentBg: 'rgba(52, 211, 153, 0.14)',
    primaryRange: 'Вузька меридіональна смуга Західної Європи: від Південної Норвегії через Німеччину та Велику Британію до Південної Франції',
    glacialRefugium: 'Атлантично-західноєвропейський мікрорефугіум (потребує додаткового семплінгу)',
    postglacialRoute: 'Меридіональне розселення вздовж атлантичного сектору Західної Європи',
    summary:
      'Рідкісна західноєвропейська лінія (n = 4), що формує один компактний кластер (Sm3-h1) зі значною внутрішньогруповою дивергенцією (0.023 замін/сайт).',
    points: [
      { x: 298, y: 108, label: 'Пд. Норвегія (NOCLP2021-20)' },
      { x: 202, y: 162, label: 'Велика Британія (DTNHM5191-23)' },
      { x: 272, y: 175, label: 'Зах. Німеччина (GMGMK788-14)' },
      { x: 242, y: 245, label: 'Пд. Франція (CBGPC637-21)' },
    ],
  },
  {
    id: 'Sm4',
    name: 'Гаплогрупа Sm4',
    sequencesCount: 53,
    sharePercent: '22.0%',
    haplotypes: ['Sm4-h1', 'Sm4-h2', 'Sm4-h3', 'Sm4-h4', 'Sm4-h5'],
    meanIntraDistance: 0.006,
    intraHaplotypeRange: '0.000–0.005',
    interHaplotypeRange: '0.002–0.011',
    lightPubescencePct: 68,
    darkPubescencePct: 32,
    color: '#A78BFA',
    accentBg: 'rgba(167, 139, 250, 0.14)',
    primaryRange: 'Південно-Західна Європа: висока частота у Південній Франції (між Піренеями, Альпами та Центральним масивом)',
    glacialRefugium: 'Піренейський півострів (північно-західне Середземномор’я)',
    postglacialRoute: 'Обмежена післяльодовикова експансія з Піренейського рефугіуму до гірських систем Південної Франції та Пн.-Зх. Середземномор’я',
    summary:
      'Друга за чисельністю лінія (n = 53; 5 гаплотипів) із найнижчою середньою внутрішньогруповою генетичною дистанцією (0.006 замін/сайт), приурочена до Пд.-Зх. Європи.',
    points: [
      { x: 175, y: 278, label: 'Піренейський п-ів (ймовірний рефугіум)' },
      { x: 222, y: 255, label: 'Центральний масив (Франція)' },
      { x: 252, y: 252, label: 'Приморські Альпи (CBGPC)' },
      { x: 262, y: 235, label: 'Юра / Зах. Альпи' },
      { x: 215, y: 222, label: 'Басейн Луари (CBGPC2295-21)' },
    ],
  },
];

export const PAIRWISE_MATRIX: PairwiseMatrixRow[] = [
  {
    species: 'Stenurella melanura',
    shortName: 'S. melanura',
    smel: '0.015',
    ssen: 't = 72.93 (P = 1.77×10⁻²⁰²)',
    sbif: 't = 327.59 (P ≈ 0)',
    adub: 't = 426.99 (P ≈ 0)',
  },
  {
    species: 'Stenurella sennii nom. res.',
    shortName: 'S. sennii',
    smel: '0.077',
    ssen: '0.000',
    sbif: 't = 103.24 (P = 6.00×10⁻²⁸⁰)',
    adub: 't = 147.28 (P = 9.22×10⁻²⁷²)',
  },
  {
    species: 'Stenurella bifasciata',
    shortName: 'S. bifasciata',
    smel: '0.160',
    ssen: '0.150',
    sbif: '0.018',
    adub: 't = 84.22 (P = 4.01×10⁻²⁸⁷)',
  },
  {
    species: 'Anastrangalia dubia',
    shortName: 'A. dubia',
    smel: '0.193',
    ssen: '0.190',
    sbif: '0.175',
    adub: '0.000',
  },
];

export const REFERENCES_LIST = [
  'Anisimova, M., & Gascuel, O. (2006). Approximate likelihood ratio test for branches: A fast, accurate and powerful alternative. Systematic Biology, 55(4), 539–552.',
  'Crowley, L. M., Poloni, R., Broad, G. R., Boyes, D., & Darwin Tree of Life Consortium (2024). The genome sequence of a longhorn beetle, Stenurella melanura (Linnaeus, 1758). Wellcome Open Research, 9, 414.',
  'Danilevsky, M. L. (2014). Longicorn beetles (Coleoptera, Cerambycoidea) of Russia and adjacent countries. Part 1. Moscow: HSC.',
  'Gouy, M., Tannier, E., Comte, N., & Parsons, D. P. (2021). SeaView version 5: A multiplatform software for multiple sequence alignment, molecular phylogenetic analyses, and tree reconciliation. Methods in Molecular Biology, 2231, 241–260.',
  'Guindon, S., Dufayard, J.-F., Lefort, V., Anisimova, M., Hordijk, W., & Gascuel, O. (2010). New algorithms and methods to estimate maximum-likelihood phylogenies: Assessing the performance of PhyML 3.0. Systematic Biology, 59(3), 307–321.',
  'Korlević, P., McAlister, E., Mayho, M., Makunin, A., Flicek, P., & Lawniczak, M. K. N. (2021). A minimally morphologically destructive approach for DNA retrieval and whole-genome shotgun sequencing of pinned historic dipteran vector species. Genome Biology and Evolution, 13(10), evab226.',
  'Özdikmen, H., Mercan, N., & Cihan, N. (2012). A new species of the genus Stenurella Villiers, 1974 from Turkey (Coleoptera: Cerambycidae: Lepturinae). Munis Entomology and Zoology, 7(1), 18–21.',
  'Rapuzzi, P., Konvička, O., & Vít, D. (2011). The longhorn beetle Stenurella sennii (Coleoptera: Cerambycidae) in the Czech Republic and Croatia. Klapalekiana, 47, 237–238.',
  'Sama, G. (2002). Atlas of the Cerambycidae of Europe and the Mediterranean Area. Vol. 1. Zlín: Nakladatelství Kabourek.',
  'Sire, L., Gey, D., Debruyne, R., Noblecourt, T., Soldati, F., Barnouin, T., ... & Rougerie, R. (2019). The challenge of DNA barcoding saproxylic beetles in natural history collections. Frontiers in Ecology and Evolution, 7, 495.',
  'Srivathsan, A., Lee, L., Katoh, K., Hartop, E., Kutty, S. N., Wong, J., Yeo, D., & Meier, R. (2021). ONTbarcoder and MinION barcodes aid biodiversity discovery and identification by everyone, for everyone. BMC Biology, 19(1), 217.',
  'Srivathsan, A., Feng, V., Suárez, D., Emerson, B., & Meier, R. (2024). ONTbarcoder 2.0: Rapid species discovery and identification with real-time barcoding facilitated by Oxford Nanopore R10.4. Cladistics, 40(2), 192–203.',
  'Vitali, F. (2018). Atlas of the insects of the Grand Duchy of Luxembourg: Coleoptera, Cerambycidae. Ferrantia, 79.',
  'Zamoroka, A. M., Trócoli, S., Shparyk, V. Y., & Semaniuk, D. V. (2022). Polyphyly of the genus Stenurella (Coleoptera: Cerambycidae): Consensus of morphological and molecular data. Biosystems Diversity, 30(2), 119–136.',
  'Zamoroka, A., & Zinenko, O. (2025). Molecular cross-validation of intraspecific structure of Rutpela maculata (Insecta: Coleoptera: Cerambycidae). Journal of Vasyl Stefanyk Precarpathian National University. Biology, 12, 46–59.',
];
