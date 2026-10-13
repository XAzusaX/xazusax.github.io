import type { Locale } from "./config";

type AboutCopy = {
  title: string;
  description: string;
  eyebrow: string;
  headingFirst: string;
  headingSecond: string;
  intro: string;
  navigationLabel: string;
  journalTitle: string;
  journalDescription: string;
  journalLink: string;
  projectsTitle: string;
  projectsDescription: string;
  projectsLink: string;
  nowTitle: string;
  nowDescription: string;
  noteEyebrow: string;
  note: string;
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  en: {
    title: "About — Reverie Archive",
    description: "About Reverie Archive and this personal archive.",
    eyebrow: "ARCHIVE · ABOUT THIS PLACE",
    headingFirst: "A personal archive",
    headingSecond: "still growing.",
    intro:
      "Archive holds notes, projects, creative work, and everything that has not found a home yet. It is not a finished product, but a place to sort through things slowly and keep updating over time.",
    navigationLabel: "Archive navigation",
    journalTitle: "Journal",
    journalDescription: "Public articles, short stories, and poetry.",
    journalLink: "Visit Journal →",
    projectsTitle: "Projects",
    projectsDescription: "A collection of projects and experimental work.",
    projectsLink: "Browse projects →",
    nowTitle: "Now",
    nowDescription:
      "The site is still evolving, with more content being added over time.",
    noteEyebrow: "A SMALL NOTE",
    note:
      "Things here may be revised, reorganised, or disappear for a while before returning. That is part of the process, and part of why Reverie Archive exists.",
  },

  "zh-Hant": {
    title: "關於 — Reverie Archive",
    description: "關於 Reverie Archive 與這座個人檔案館。",
    eyebrow: "ARCHIVE · ABOUT THIS PLACE",
    headingFirst: "一座還在生長的",
    headingSecond: "個人檔案館。",
    intro:
      "Archive 用來收藏隨筆、專案、創作與尚未想好該放在哪裡的東西。它不是完成品，而是一個可以慢慢整理、持續更新的地方。",
    navigationLabel: "Archive 導覽",
    journalTitle: "隨筆",
    journalDescription: "公開的文章、小說與詩歌。",
    journalLink: "前往 Journal →",
    projectsTitle: "專案",
    projectsDescription: "各種各樣的專案與實驗性內容。",
    projectsLink: "瀏覽專案 →",
    nowTitle: "現在",
    nowDescription: "網頁持續更新中，正在添加更多內容。",
    noteEyebrow: "A SMALL NOTE",
    note:
      "這裡的內容可能會被修改、重新分類，或暫時消失後再出現。這是整理的過程，也是 Reverie Archive 存在的原因。",
  },

  "zh-Hans": {
    title: "关于 — Reverie Archive",
    description: "关于 Reverie Archive 与这座个人档案馆。",
    eyebrow: "ARCHIVE · ABOUT THIS PLACE",
    headingFirst: "一座仍在生长的",
    headingSecond: "个人档案馆。",
    intro:
      "Archive 用来收藏随笔、项目、创作与尚未想好该放在哪里的东西。它不是完成品，而是一个可以慢慢整理、持续更新的地方。",
    navigationLabel: "Archive 导览",
    journalTitle: "随笔",
    journalDescription: "公开的文章、小说与诗歌。",
    journalLink: "前往 Journal →",
    projectsTitle: "项目",
    projectsDescription: "各种各样的项目与实验性内容。",
    projectsLink: "浏览项目 →",
    nowTitle: "现在",
    nowDescription: "网页持续更新中，正在添加更多内容。",
    noteEyebrow: "A SMALL NOTE",
    note:
      "这里的内容可能会被修改、重新分类，或暂时消失后再出现。这是整理的过程，也是 Reverie Archive 存在的原因。",
  },

  ja: {
    title: "この場所について — Reverie Archive",
    description: "Reverie Archive とこの個人アーカイブについて。",
    eyebrow: "ARCHIVE · ABOUT THIS PLACE",
    headingFirst: "今も育ち続ける",
    headingSecond: "個人アーカイブ。",
    intro:
      "Archive は、ノート、プロジェクト、創作、そしてまだ置き場所の決まっていないものを収める場所です。完成品ではなく、少しずつ整理し、更新を続けられる場所です。",
    navigationLabel: "Archive ナビゲーション",
    journalTitle: "ジャーナル",
    journalDescription: "公開記事、短編小説、詩。",
    journalLink: "Journal を見る →",
    projectsTitle: "プロジェクト",
    projectsDescription: "さまざまなプロジェクトと実験的な制作物。",
    projectsLink: "プロジェクトを見る →",
    nowTitle: "いま",
    nowDescription:
      "サイトは現在も更新中で、これからさらにコンテンツを追加していきます。",
    noteEyebrow: "A SMALL NOTE",
    note:
      "ここにある内容は、修正されたり、再分類されたり、一度姿を消してから戻ってきたりするかもしれません。それも整理の過程であり、Reverie Archive が存在する理由の一部です。",
  },
};