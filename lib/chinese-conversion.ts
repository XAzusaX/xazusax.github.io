import OpenCC from "opencc-js";

export type ContentLocale = "zh-Hant" | "zh-Hans" | "en" | "ja";

export type ChineseDisplayMode =
  | "original"
  | "zh-Hant"
  | "zh-Hans";

const traditionalToSimplified = OpenCC.Converter({
  from: "tw",
  to: "cn",
});

const simplifiedToTraditional = OpenCC.Converter({
  from: "cn",
  to: "tw",
});

export const supportsChineseConversion = (
  contentLocale: ContentLocale,
) => contentLocale === "zh-Hant" || contentLocale === "zh-Hans";

export const convertChineseText = (
  text: string,
  contentLocale: ContentLocale,
  displayMode: ChineseDisplayMode,
) => {
  if (
    !text ||
    displayMode === "original" ||
    !supportsChineseConversion(contentLocale)
  ) {
    return text;
  }

  if (
    contentLocale === "zh-Hant" &&
    displayMode === "zh-Hans"
  ) {
    return traditionalToSimplified(text);
  }

  if (
    contentLocale === "zh-Hans" &&
    displayMode === "zh-Hant"
  ) {
    return simplifiedToTraditional(text);
  }

  return text;
};