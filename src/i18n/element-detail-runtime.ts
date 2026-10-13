import type { Locale } from "./config";

type ElementDetailRuntimeCopy = {
  missingData: string;
  missingSymbol: string;
  notFound: string;
  documentTitle: (name: string, symbol: string) => string;
  period: (value: number) => string;
  group: (value: number) => string;
  block: (value: string) => string;
  fullConfiguration: (value: string) => string;
  sameGroupIntro: (value: number) => string;
  openRelatedElement: (name: string, symbol: string) => string;
  safetyLevels: Record<string, string>;
  phases: Record<string, string>;
  learning: {
    appearance: string;
    lifeRole: string;
    compounds: string;
    reactions: string;
    safety: string;
    isotopes: string;
    reliability: string;
    conditions: (value: string) => string;
  };
};

export const elementDetailRuntimeCopy: Record<
  Locale,
  ElementDetailRuntimeCopy
> = {
  en: {
    missingData: "No data available",
    missingSymbol: "No element symbol was provided. Please choose an element from the periodic table.",
    notFound: "This element could not be found. Please choose an element from the periodic table.",
    documentTitle: (name, symbol) =>
      `${name} (${symbol}) — Element Explorer`,
    period: (value) => `Period ${value}`,
    group: (value) => `Group ${value}`,
    block: (value) => `${value} block`,
    fullConfiguration: (value) => `Full electron configuration: ${value}`,
    sameGroupIntro: (value) => `Other elements in group ${value}.`,
    openRelatedElement: (name, symbol) =>
      `Open details for ${name} (${symbol})`,
    safetyLevels: {
      low: "Low",
      medium: "Moderate",
      high: "High",
    },
    phases: {
      Solid: "Solid",
      Liquid: "Liquid",
      Gas: "Gas",
      Unknown: "Unknown",
    },
    learning: {
      appearance: "Appearance",
      lifeRole: "Everyday life and the human body",
      compounds: "Common compounds",
      reactions: "Reaction examples",
      safety: "Safety notes",
      isotopes: "Isotopes and uses",
      reliability: "Data reliability",
      conditions: (value) => `Conditions: ${value}`,
    },
  },

  "zh-Hant": {
    missingData: "暫無資料",
    missingSymbol: "找不到元素符號。請從元素週期表重新選擇元素。",
    notFound: "找不到這個元素。請從元素週期表重新選擇元素。",
    documentTitle: (name, symbol) => `${name}（${symbol}）— 元素探索者`,
    period: (value) => `第 ${value} 週期`,
    group: (value) => `第 ${value} 族`,
    block: (value) => `${value} 區`,
    fullConfiguration: (value) => `完整電子組態：${value}`,
    sameGroupIntro: (value) => `同在第 ${value} 族的其他元素。`,
    openRelatedElement: (name, symbol) => `開啟 ${name}（${symbol}）的資料`,
    safetyLevels: {
      low: "低",
      medium: "中",
      high: "高",
    },
    phases: {
      Solid: "固體",
      Liquid: "液體",
      Gas: "氣體",
      Unknown: "未知",
    },
    learning: {
      appearance: "外觀",
      lifeRole: "生活與人體",
      compounds: "常見化合物",
      reactions: "反應式範例",
      safety: "安全注意事項",
      isotopes: "同位素與用途",
      reliability: "資料可靠性",
      conditions: (value) => `條件：${value}`,
    },
  },

  "zh-Hans": {
    missingData: "暂无资料",
    missingSymbol: "找不到元素符号。请从元素周期表重新选择元素。",
    notFound: "找不到这个元素。请从元素周期表重新选择元素。",
    documentTitle: (name, symbol) => `${name}（${symbol}）— 元素探索者`,
    period: (value) => `第 ${value} 周期`,
    group: (value) => `第 ${value} 族`,
    block: (value) => `${value} 区`,
    fullConfiguration: (value) => `完整电子排布：${value}`,
    sameGroupIntro: (value) => `同在第 ${value} 族的其他元素。`,
    openRelatedElement: (name, symbol) => `打开 ${name}（${symbol}）的资料`,
    safetyLevels: {
      low: "低",
      medium: "中",
      high: "高",
    },
    phases: {
      Solid: "固体",
      Liquid: "液体",
      Gas: "气体",
      Unknown: "未知",
    },
    learning: {
      appearance: "外观",
      lifeRole: "生活与人体",
      compounds: "常见化合物",
      reactions: "反应式示例",
      safety: "安全提醒",
      isotopes: "同位素与用途",
      reliability: "资料可靠度",
      conditions: (value) => `条件：${value}`,
    },
  },

  ja: {
    missingData: "データはありません",
    missingSymbol: "元素記号が見つかりません。周期表から元素を選択してください。",
    notFound: "この元素は見つかりません。周期表から元素を選択してください。",
    documentTitle: (name, symbol) =>
      `${name}（${symbol}）— 元素エクスプローラー`,
    period: (value) => `第 ${value} 周期`,
    group: (value) => `第 ${value} 族`,
    block: (value) => `${value} ブロック`,
    fullConfiguration: (value) => `完全な電子配置：${value}`,
    sameGroupIntro: (value) => `第 ${value} 族のほかの元素です。`,
    openRelatedElement: (name, symbol) =>
      `${name}（${symbol}）の詳細を開く`,
    safetyLevels: {
      low: "低",
      medium: "中",
      high: "高",
    },
    phases: {
      Solid: "固体",
      Liquid: "液体",
      Gas: "気体",
      Unknown: "不明",
    },
    learning: {
      appearance: "外観",
      lifeRole: "暮らしと人体",
      compounds: "よく見られる化合物",
      reactions: "反応式の例",
      safety: "安全上の注意",
      isotopes: "同位体と用途",
      reliability: "データの信頼性",
      conditions: (value) => `条件：${value}`,
    },
  },
};