import type { Locale } from "./config";

type HomeCopy = {
  title: string;
  description: string;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  intro: string;
  explore: string;
  artifactLabel: string;
  collectionsEyebrow: string;
  collectionsTitle: string;
  journalTitle: string;
  journalDescription: string;
  projectsTitle: string;
  projectsDescription: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    title: "Reverie Archive — Azusa",
    description: "Azusa's personal notes, projects, and creative archive.",
    eyebrow: "PERSONAL ARCHIVE · 2026",
    headingTop: "Hello, I'm",
    headingBottom: "Azusa.",
    intro:
      "A place for my notes, projects, stories, and everything else that has not found a category yet.",
    explore: "Start exploring",
    artifactLabel: "Archive homepage visual",
    collectionsEyebrow: "ARCHIVE INDEX",
    collectionsTitle: "Start here.",
    journalTitle: "Journal",
    journalDescription:
      "Records of learning, life, games, and the process of building things.",
    projectsTitle: "Projects",
    projectsDescription:
      "Sites, tools, experiments, and work I want to keep improving.",
  },

  "zh-Hant": {
    title: "Reverie Archive — Azusa",
    description: "Azusa 的個人筆記、專案與創作收藏。",
    eyebrow: "個人檔案館 · 2026",
    headingTop: "你好，我是",
    headingBottom: "Azusa。",
    intro:
      "這裡放著我的筆記、專案、故事，還有其他暫時找不到分類的東西。",
    explore: "開始瀏覽",
    artifactLabel: "Archive 首頁視覺",
    collectionsEyebrow: "收藏分類",
    collectionsTitle: "從這裡開始。",
    journalTitle: "隨筆",
    journalDescription: "學習、生活、遊戲與開發過程中的記錄。",
    projectsTitle: "專案",
    projectsDescription: "網站、工具、實驗，以及想繼續完善的作品。",
  },

  "zh-Hans": {
    title: "Reverie Archive — Azusa",
    description: "Azusa 的个人笔记、项目与创作收藏。",
    eyebrow: "个人档案馆 · 2026",
    headingTop: "你好，我是",
    headingBottom: "Azusa。",
    intro:
      "这里放着我的笔记、项目、故事，还有其他暂时找不到分类的东西。",
    explore: "开始浏览",
    artifactLabel: "Archive 首页视觉",
    collectionsEyebrow: "收藏分类",
    collectionsTitle: "从这里开始。",
    journalTitle: "随笔",
    journalDescription: "学习、生活、游戏与开发过程中的记录。",
    projectsTitle: "项目",
    projectsDescription: "网站、工具、实验，以及想继续完善的作品。",
  },

  ja: {
    title: "Reverie Archive — Azusa",
    description: "Azusaの個人的なノート、プロジェクト、創作物のアーカイブ。",
    eyebrow: "個人アーカイブ · 2026",
    headingTop: "こんにちは、",
    headingBottom: "Azusaです。",
    intro:
      "ノート、プロジェクト、物語、そしてまだ分類できていないものを置いています。",
    explore: "探索を始める",
    artifactLabel: "Archive ホームページのビジュアル",
    collectionsEyebrow: "アーカイブ分類",
    collectionsTitle: "ここから始めよう。",
    journalTitle: "ジャーナル",
    journalDescription: "学習、日常、ゲーム、開発過程の記録。",
    projectsTitle: "プロジェクト",
    projectsDescription:
      "ウェブサイト、ツール、実験、そしてこれから育てていく作品。",
  },
};