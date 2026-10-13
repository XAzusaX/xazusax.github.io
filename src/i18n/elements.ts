import type { Locale } from "./config";

type ElementExplorerCopy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  indexedLabel: string;
  controlsLabel: string;
  elementsUnit: string;
  searchLabel: string;
  searchPlaceholder: string;
  categoryLabel: string;
  allCategories: string;
  periodLabel: string;
  allPeriods: string;
  groupLabel: string;
  allGroups: string;
  blockLabel: string;
  allBlocks: string;
  tableEyebrow: string;
  tableHeading: string;
  tableHint: string;
  lanthanides: string;
  actinides: string;
  atomNumber: string;
  indexedCount: (count: number) => string;
  filteredCount: (count: number) => string;
  noResults: string;
  moreResults: (count: number) => string;
  attribution: string;
  categories: Record<string, string>;
};

export const elementExplorerCopy: Record<Locale, ElementExplorerCopy> = {
  en: {
    title: "Element Explorer — Reverie Archive",
    description:
      "A searchable periodic table and elemental reference database.",
    eyebrow: "ARCHIVE PROJECTS · ELEMENT EXPLORER",
    heading: "Element Explorer",
    intro:
      "Use the periodic table to quickly explore each element's core properties, electron configuration, and physical data.",
    indexedLabel: "ELEMENTS\nINDEXED",
    controlsLabel: "Search & filter",
    elementsUnit: "elements",
    searchLabel: "Search elements",
    searchPlaceholder: "Symbol, name, or atomic number…",
    categoryLabel: "Category",
    allCategories: "All",
    periodLabel: "Period",
    allPeriods: "All periods",
    groupLabel: "Group",
    allGroups: "All groups",
    blockLabel: "Block",
    allBlocks: "All blocks",
    tableEyebrow: "INTERACTIVE TABLE",
    tableHeading: "Periodic table",
    tableHint: "Select any element to view its details.",
    lanthanides: "Lanthanides",
    actinides: "Actinides",
    atomNumber: "Atomic no.",
    indexedCount: (count) => `${count} elements shown`,
    filteredCount: (count) => `${count} filtered elements shown`,
    noResults: "No matching elements found.",
    moreResults: (count) =>
      `${count} more results. Continue typing to narrow them down.`,
    attribution: "Element reference data from",
    categories: {
      "alkali metal": "Alkali metals",
      "alkaline earth metal": "Alkaline earth metals",
      "transition metal": "Transition metals",
      "post-transition metal": "Post-transition metals",
      metalloid: "Metalloids",
      "polyatomic nonmetal": "Nonmetals",
      "diatomic nonmetal": "Nonmetals",
      "noble gas": "Noble gases",
      lanthanide: "Lanthanides",
      actinide: "Actinides",
    },
  },

  "zh-Hant": {
    title: "元素探索者 — Reverie Archive",
    description: "可搜尋、可點擊的元素週期表與基礎元素資料庫。",
    eyebrow: "ARCHIVE PROJECTS · ELEMENT EXPLORER",
    heading: "元素探索者",
    intro:
      "以元素週期表為入口，快速查閱每個元素的基本性質、電子組態與物理資料。",
    indexedLabel: "ELEMENTS\nINDEXED",
    controlsLabel: "搜尋與篩選",
    elementsUnit: "個元素",
    searchLabel: "搜尋元素",
    searchPlaceholder: "符號、名稱或原子序…",
    categoryLabel: "分類",
    allCategories: "全部",
    periodLabel: "週期",
    allPeriods: "全部週期",
    groupLabel: "族",
    allGroups: "全部族",
    blockLabel: "區塊",
    allBlocks: "全部區塊",
    tableEyebrow: "INTERACTIVE TABLE",
    tableHeading: "元素週期表",
    tableHint: "點擊任一元素以開啟詳細資料。",
    lanthanides: "鑭系",
    actinides: "錒系",
    atomNumber: "原子序",
    indexedCount: (count) => `顯示 ${count} 個元素`,
    filteredCount: (count) => `篩選顯示 ${count} 個元素`,
    noResults: "找不到符合的元素。",
    moreResults: (count) => `還有 ${count} 個結果，請再輸入更多內容縮小範圍。`,
    attribution: "元素基礎資料取自",
    categories: {
      "alkali metal": "鹼金屬",
      "alkaline earth metal": "鹼土金屬",
      "transition metal": "過渡金屬",
      "post-transition metal": "後過渡金屬",
      metalloid: "類金屬",
      "polyatomic nonmetal": "多原子非金屬",
      "diatomic nonmetal": "雙原子非金屬",
      "noble gas": "惰性氣體",
      lanthanide: "鑭系元素",
      actinide: "錒系元素",
    },
  },

  "zh-Hans": {
    title: "元素探索者 — Reverie Archive",
    description: "可搜索、可点击的元素周期表与基础元素资料库。",
    eyebrow: "ARCHIVE PROJECTS · ELEMENT EXPLORER",
    heading: "元素探索者",
    intro:
      "以元素周期表为入口，快速查阅每个元素的基本性质、电子排布与物理数据。",
    indexedLabel: "ELEMENTS\nINDEXED",
    controlsLabel: "搜索与筛选",
    elementsUnit: "个元素",
    searchLabel: "搜索元素",
    searchPlaceholder: "符号、名称或原子序数…",
    categoryLabel: "分类",
    allCategories: "全部",
    periodLabel: "周期",
    allPeriods: "全部周期",
    groupLabel: "族",
    allGroups: "全部族",
    blockLabel: "区块",
    allBlocks: "全部区块",
    tableEyebrow: "INTERACTIVE TABLE",
    tableHeading: "元素周期表",
    tableHint: "点击任一元素以打开详细资料。",
    lanthanides: "镧系",
    actinides: "锕系",
    atomNumber: "原子序数",
    indexedCount: (count) => `显示 ${count} 个元素`,
    filteredCount: (count) => `筛选显示 ${count} 个元素`,
    noResults: "找不到符合的元素。",
    moreResults: (count) => `还有 ${count} 个结果，请继续输入以缩小范围。`,
    attribution: "元素基础资料取自",
    categories: {
      "alkali metal": "碱金属",
      "alkaline earth metal": "碱土金属",
      "transition metal": "过渡金属",
      "post-transition metal": "后过渡金属",
      metalloid: "类金属",
      "polyatomic nonmetal": "多原子非金属",
      "diatomic nonmetal": "双原子非金属",
      "noble gas": "稀有气体",
      lanthanide: "镧系元素",
      actinide: "锕系元素",
    },
  },

  ja: {
    title: "元素エクスプローラー — Reverie Archive",
    description: "検索できる周期表と元素の基礎データベース。",
    eyebrow: "ARCHIVE PROJECTS · ELEMENT EXPLORER",
    heading: "元素エクスプローラー",
    intro:
      "周期表を入口に、各元素の基本性質、電子配置、物理データをすばやく確認できます。",
    indexedLabel: "ELEMENTS\nINDEXED",
    controlsLabel: "検索・絞り込み",
    elementsUnit: "元素",
    searchLabel: "元素を検索",
    searchPlaceholder: "記号、名称、原子番号…",
    categoryLabel: "分類",
    allCategories: "すべて",
    periodLabel: "周期",
    allPeriods: "すべての周期",
    groupLabel: "族",
    allGroups: "すべての族",
    blockLabel: "ブロック",
    allBlocks: "すべてのブロック",
    tableEyebrow: "INTERACTIVE TABLE",
    tableHeading: "周期表",
    tableHint: "元素を選択すると詳細を確認できます。",
    lanthanides: "ランタノイド",
    actinides: "アクチノイド",
    atomNumber: "原子番号",
    indexedCount: (count) => `${count} 元素を表示`,
    filteredCount: (count) => `${count} 元素を絞り込み表示`,
    noResults: "一致する元素が見つかりません。",
    moreResults: (count) =>
      `さらに ${count} 件あります。入力を続けて絞り込んでください。`,
    attribution: "元素の基礎データ出典：",
    categories: {
      "alkali metal": "アルカリ金属",
      "alkaline earth metal": "アルカリ土類金属",
      "transition metal": "遷移金属",
      "post-transition metal": "ポスト遷移金属",
      metalloid: "半金属",
      "polyatomic nonmetal": "多原子非金属",
      "diatomic nonmetal": "二原子非金属",
      "noble gas": "貴ガス",
      lanthanide: "ランタノイド",
      actinide: "アクチノイド",
    },
  },
};