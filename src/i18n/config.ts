export const locales = ["en", "zh-Hant", "zh-Hans", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeInfo: Record<
  Locale,
  {
    path: string;
    shortLabel: string;
    label: string;
    htmlLang: string;
  }
> = {
  en: {
    path: "",
    shortLabel: "EN",
    label: "English",
    htmlLang: "en",
  },
  "zh-Hant": {
    path: "zh-hant",
    shortLabel: "繁",
    label: "繁體中文",
    htmlLang: "zh-Hant",
  },
  "zh-Hans": {
    path: "zh-hans",
    shortLabel: "简",
    label: "简体中文",
    htmlLang: "zh-Hans",
  },
  ja: {
    path: "ja",
    shortLabel: "日",
    label: "日本語",
    htmlLang: "ja",
  },
};

export const getLocaleFromPath = (pathname: string): Locale => {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  const found = locales.find(
    (locale) => localeInfo[locale].path === firstSegment,
  );

  return found ?? defaultLocale;
};

export const removeLocaleFromPath = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);

  const firstSegment = segments[0];

  const isLocalePath = locales.some(
    (locale) => localeInfo[locale].path === firstSegment,
  );

  if (isLocalePath) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
};

export const localizePath = (locale: Locale, pathname: string) => {
  const basePath = removeLocaleFromPath(pathname);
  const prefix = localeInfo[locale].path;

  if (!prefix) {
    return basePath;
  }

  return basePath === "/"
    ? `/${prefix}/`
    : `/${prefix}${basePath}`;
};