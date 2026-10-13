import { elementNotes } from "../data/element-notes";
import { elementNoteTranslations } from "../data/element-note-translations";
import type { Locale } from "./config";

type ElementNote = (typeof elementNotes)[keyof typeof elementNotes];

type TranslatedLocale = Exclude<Locale, "zh-Hant">;

const translatedNotes =
  elementNoteTranslations as unknown as Record<
    TranslatedLocale,
    Record<string, ElementNote>
  >;

export const getLocalizedElementNote = (
  symbol: string,
  locale: Locale,
): ElementNote | undefined => {
  const sourceNote =
    elementNotes[symbol as keyof typeof elementNotes];

  if (locale === "zh-Hant") {
    return sourceNote;
  }

  return translatedNotes[locale]?.[symbol] ?? sourceNote;
};