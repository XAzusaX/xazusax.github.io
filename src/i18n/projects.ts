import type { Locale } from "./config";

type ProjectsCopy = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  activeRecords: string;
  activeProjects: string;
  statusLive: string;
  projectType: string;
  elementExplorer: string;
  elementDescription: string;
  openElementExplorer: string;
};

export const projectsCopy: Record<Locale, ProjectsCopy> = {
  en: {
    title: "Projects — Reverie Archive",
    description: "Websites, tools, and ongoing experiments by Azusa.",
    eyebrow: "ARCHIVE · PROJECT INDEX",
    intro: "Finished work, works in progress, and things still slowly taking shape.",
    activeRecords: "ACTIVE RECORDS",
    activeProjects: "Current projects",
    statusLive: "LIVE",
    projectType: "LEARNING TOOL · CHEMISTRY",
    elementExplorer: "Element Explorer",
    elementDescription:
      "A student reference built around the periodic table. Each element includes quick access to core properties, electron configuration, uses, and related elements.",
    openElementExplorer: "Open Element Explorer",
  },

  "zh-Hant": {
    title: "專案 — Reverie Archive",
    description: "Azusa 的網站、工具與持續進行中的實驗。",
    eyebrow: "ARCHIVE · PROJECT INDEX",
    intro: "一些已完成、正在整理，或還在慢慢成形的作品。",
    activeRecords: "ACTIVE RECORDS",
    activeProjects: "進行中的專案",
    statusLive: "線上運作中",
    projectType: "學習工具 · 化學",
    elementExplorer: "元素探索者",
    elementDescription:
      "一個以元素週期表為入口的學生資料庫。每個元素都有可快速查閱的基本性質、電子組態、用途與相關元素。",
    openElementExplorer: "開啟元素探索者",
  },

  "zh-Hans": {
    title: "项目 — Reverie Archive",
    description: "Azusa 的网站、工具与持续进行中的实验。",
    eyebrow: "ARCHIVE · PROJECT INDEX",
    intro: "一些已经完成、正在整理，或还在慢慢成形的作品。",
    activeRecords: "ACTIVE RECORDS",
    activeProjects: "进行中的项目",
    statusLive: "在线运行中",
    projectType: "学习工具 · 化学",
    elementExplorer: "元素探索者",
    elementDescription:
      "一个以元素周期表为入口的学生资料库。每个元素都有可快速查阅的基本性质、电子排布、用途与相关元素。",
    openElementExplorer: "打开元素探索者",
  },

  ja: {
    title: "プロジェクト — Reverie Archive",
    description: "Azusa によるウェブサイト、ツール、継続中の実験。",
    eyebrow: "ARCHIVE · PROJECT INDEX",
    intro: "完成したもの、整理中のもの、ゆっくり形になっていく作品たち。",
    activeRecords: "ACTIVE RECORDS",
    activeProjects: "進行中のプロジェクト",
    statusLive: "公開中",
    projectType: "学習ツール · 化学",
    elementExplorer: "元素エクスプローラー",
    elementDescription:
      "周期表を入口にした学生向けの資料庫です。各元素の基本性質、電子配置、用途、関連元素をすばやく確認できます。",
    openElementExplorer: "元素エクスプローラーを開く",
  },
};