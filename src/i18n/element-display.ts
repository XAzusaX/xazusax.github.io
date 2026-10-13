import type { Element } from "../data/elements";
import type { Locale } from "./config";

export const getElementName = (element: Element, locale: Locale) => {
  switch (locale) {
    case "zh-Hant":
      return element.nameZh;

    case "zh-Hans":
      return element.nameZhHans;

    case "ja":
      return element.nameJa;

    case "en":
    default:
      return element.name;
  }
};

export const getElementSearchText = (element: Element) =>
  [
    element.number,
    element.symbol,
    element.name,
    element.nameZh,
    element.nameZhHans,
    element.nameJa,
  ]
    .join(" ")
    .toLocaleLowerCase();