import type { Locale } from "./config";

type AttributionCopy = {
  sourcePrefix: string;
  licensePrefix: string;
  suffix: string;
};

export const elementAttributionCopy: Record<Locale, AttributionCopy> = {
  en: {
    sourcePrefix: "Element reference data from ",
    licensePrefix: ", used under ",
    suffix: ".",
  },

  "zh-Hant": {
    sourcePrefix: "元素基礎資料取自",
    licensePrefix: "，依",
    suffix: "使用。",
  },

  "zh-Hans": {
    sourcePrefix: "元素基础资料取自",
    licensePrefix: "，依照",
    suffix: "使用。",
  },

  ja: {
    sourcePrefix: "元素の基礎データは ",
    licensePrefix: " を参照し、",
    suffix: " のもとで使用しています。",
  },
};