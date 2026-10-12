import DOMPurify from "dompurify";
import { marked } from "marked";

export const renderMarkdown = (source: string) => {
  const rawHtml = marked.parse(source, {
    breaks: true,
    gfm: true,
  }) as string;

  return DOMPurify.sanitize(rawHtml, {
    USE_PROFILES: { html: true },
  });
};