import type { Locale } from "./config";

type ElementDetailCopy = {
  pageTitle: string;
  pageDescription: string;
  backToTable: string;
  loading: string;
  record: string;
  labels: {
    atomicNumber: string;
    atomicMass: string;
    category: string;
    phase: string;
    position: string;
    periodicPosition: string;
    period: string;
    group: string;
    block: string;
    electronegativity: string;
    electronStructure: string;
    electronConfiguration: string;
    electronShells: string;
    periodicFamily: string;
    sameGroup: string;
    archiveNotes: string;
    propertiesAndUses: string;
    learningNotes: string;
    furtherLearning: string;
    physicalPropertiesEyebrow: string;
    physicalProperties: string;
    density: string;
    meltingPoint: string;
    boilingPoint: string;
    navigation: string;
    previous: string;
    next: string;
  };
  helpLabel: (label: string) => string;
  help: {
    period: string;
    group: string;
    block: string;
    electronegativity: string;
    electronConfiguration: string;
  };
};

export const elementDetailCopy: Record<Locale, ElementDetailCopy> = {
  en: {
    pageTitle: "Element details — Element Explorer",
    pageDescription: "Element reference details from Element Explorer.",
    backToTable: "← Back to periodic table",
    loading: "Loading element data…",
    record: "ELEMENT RECORD",
    labels: {
      atomicNumber: "Atomic number",
      atomicMass: "Atomic mass",
      category: "Category",
      phase: "Phase at room temperature",
      position: "POSITION",
      periodicPosition: "Position in the periodic table",
      period: "Period",
      group: "Group",
      block: "Block",
      electronegativity: "Pauling electronegativity",
      electronStructure: "ELECTRON STRUCTURE",
      electronConfiguration: "Electron configuration",
      electronShells: "Electron shell distribution:",
      periodicFamily: "PERIODIC FAMILY",
      sameGroup: "Elements in the same group",
      archiveNotes: "ARCHIVE NOTES",
      propertiesAndUses: "Properties and uses",
      learningNotes: "LEARNING NOTES",
      furtherLearning: "Further learning",
      physicalPropertiesEyebrow: "PHYSICAL PROPERTIES",
      physicalProperties: "Physical properties",
      density: "Density",
      meltingPoint: "Melting point",
      boilingPoint: "Boiling point",
      navigation: "Element navigation",
      previous: "← Previous element",
      next: "Next element →",
    },
    helpLabel: (label) => `Help: ${label}`,
    help: {
      period:
        "A period is a horizontal row in the periodic table. Elements in the same period have the same number of electron shells.",
      group:
        "A group is a vertical column in the periodic table. Elements in the same group often have similar outer electron arrangements and chemical properties.",
      block:
        "A block indicates the type of orbital receiving the final electron. The four blocks are s, p, d, and f.",
      electronegativity:
        "Electronegativity describes how strongly an atom attracts shared electrons in a chemical bond. A larger value generally means a stronger attraction.",
      electronConfiguration:
        "Electron configuration shows how electrons are distributed across energy levels and orbitals, helping explain an element's chemical behavior.",
    },
  },

  "zh-Hant": {
    pageTitle: "元素資料 — 元素探索者",
    pageDescription: "元素探索者的元素基本資料。",
    backToTable: "← 返回元素週期表",
    loading: "正在讀取元素資料…",
    record: "ELEMENT RECORD",
    labels: {
      atomicNumber: "原子序",
      atomicMass: "原子量",
      category: "分類",
      phase: "常溫狀態",
      position: "POSITION",
      periodicPosition: "週期表位置",
      period: "週期",
      group: "族",
      block: "區塊",
      electronegativity: "鮑林電負度",
      electronStructure: "ELECTRON STRUCTURE",
      electronConfiguration: "電子組態",
      electronShells: "電子殼層分布：",
      periodicFamily: "PERIODIC FAMILY",
      sameGroup: "同族元素",
      archiveNotes: "ARCHIVE NOTES",
      propertiesAndUses: "性質與用途",
      learningNotes: "LEARNING NOTES",
      furtherLearning: "延伸資料",
      physicalPropertiesEyebrow: "PHYSICAL PROPERTIES",
      physicalProperties: "物理性質",
      density: "密度",
      meltingPoint: "熔點",
      boilingPoint: "沸點",
      navigation: "元素導覽",
      previous: "← 上一個元素",
      next: "下一個元素 →",
    },
    helpLabel: (label) => `說明：${label}`,
    help: {
      period:
        "週期是週期表中的橫列；同一週期的元素擁有相同數目的電子層。",
      group:
        "族是週期表中的直欄；同族元素的最外層電子排列相近，化學性質通常也較相似。",
      block:
        "區塊表示元素最後填入電子的軌域種類，分為 s、p、d、f 區。",
      electronegativity:
        "電負度是原子在化學鍵中吸引共享電子的能力；數值越大，吸引能力通常越強。",
      electronConfiguration:
        "電子組態用來表示電子分布在哪些能階與軌域，是理解元素化學性質的重要線索。",
    },
  },

  "zh-Hans": {
    pageTitle: "元素资料 — 元素探索者",
    pageDescription: "元素探索者的元素基本资料。",
    backToTable: "← 返回元素周期表",
    loading: "正在读取元素资料…",
    record: "ELEMENT RECORD",
    labels: {
      atomicNumber: "原子序数",
      atomicMass: "原子量",
      category: "分类",
      phase: "常温状态",
      position: "POSITION",
      periodicPosition: "元素周期表位置",
      period: "周期",
      group: "族",
      block: "区块",
      electronegativity: "鲍林电负性",
      electronStructure: "ELECTRON STRUCTURE",
      electronConfiguration: "电子排布",
      electronShells: "电子层分布：",
      periodicFamily: "PERIODIC FAMILY",
      sameGroup: "同族元素",
      archiveNotes: "ARCHIVE NOTES",
      propertiesAndUses: "性质与用途",
      learningNotes: "LEARNING NOTES",
      furtherLearning: "延伸资料",
      physicalPropertiesEyebrow: "PHYSICAL PROPERTIES",
      physicalProperties: "物理性质",
      density: "密度",
      meltingPoint: "熔点",
      boilingPoint: "沸点",
      navigation: "元素导航",
      previous: "← 上一个元素",
      next: "下一个元素 →",
    },
    helpLabel: (label) => `说明：${label}`,
    help: {
      period:
        "周期是元素周期表中的横列；同一周期的元素拥有相同数目的电子层。",
      group:
        "族是元素周期表中的直栏；同族元素的最外层电子排布相近，化学性质通常也较相似。",
      block:
        "区块表示元素最后填入电子的轨道种类，分为 s、p、d、f 区。",
      electronegativity:
        "电负性是原子在化学键中吸引共享电子的能力；数值越大，吸引能力通常越强。",
      electronConfiguration:
        "电子排布用来表示电子分布在哪些能级与轨道，是理解元素化学性质的重要线索。",
    },
  },

  ja: {
    pageTitle: "元素データ — 元素エクスプローラー",
    pageDescription: "元素エクスプローラーの元素基礎データ。",
    backToTable: "← 周期表に戻る",
    loading: "元素データを読み込んでいます…",
    record: "ELEMENT RECORD",
    labels: {
      atomicNumber: "原子番号",
      atomicMass: "原子量",
      category: "分類",
      phase: "常温での状態",
      position: "POSITION",
      periodicPosition: "周期表での位置",
      period: "周期",
      group: "族",
      block: "ブロック",
      electronegativity: "ポーリングの電気陰性度",
      electronStructure: "ELECTRON STRUCTURE",
      electronConfiguration: "電子配置",
      electronShells: "電子殻分布：",
      periodicFamily: "PERIODIC FAMILY",
      sameGroup: "同じ族の元素",
      archiveNotes: "ARCHIVE NOTES",
      propertiesAndUses: "性質と用途",
      learningNotes: "LEARNING NOTES",
      furtherLearning: "関連資料",
      physicalPropertiesEyebrow: "PHYSICAL PROPERTIES",
      physicalProperties: "物理的性質",
      density: "密度",
      meltingPoint: "融点",
      boilingPoint: "沸点",
      navigation: "元素ナビゲーション",
      previous: "← 前の元素",
      next: "次の元素 →",
    },
    helpLabel: (label) => `${label}の説明`,
    help: {
      period:
        "周期は周期表の横の列です。同じ周期の元素は、同じ数の電子殻を持ちます。",
      group:
        "族は周期表の縦の列です。同じ族の元素は最外殻電子の配置が似ており、化学的性質も似ていることが多いです。",
      block:
        "ブロックは、最後の電子が入る軌道の種類を示します。s、p、d、f ブロックがあります。",
      electronegativity:
        "電気陰性度は、化学結合において原子が共有電子を引き寄せる強さを示します。一般に数値が大きいほど引き寄せる力が強くなります。",
      electronConfiguration:
        "電子配置は、電子がどのエネルギー準位と軌道に分布しているかを示し、元素の化学的性質を理解する手がかりになります。",
    },
  },
};