import type { Locale } from "./config";

export const ui: Record<
  Locale,
  {
    navigation: {
      journal: string;
      projects: string;
      allProjects: string;
      elementExplorer: string;
      webLab: string;
      about: string;
    };
    account: {
      signIn: string;
      openStudio: string;
      signOut: string;
      loadingAccount: string;
    };
    language: {
      label: string;
    };
  }
> = {
  en: {
    navigation: {
      journal: "Journal",
      projects: "Projects",
      allProjects: "All projects",
      elementExplorer: "Element Explorer",
      webLab: "Web & experiments",
      about: "About",
    },
    account: {
      signIn: "Sign in",
      openStudio: "Open Studio",
      signOut: "Sign out",
      loadingAccount: "Loading account…",
    },
    language: {
      label: "Language",
    },
  },

  "zh-Hant": {
    navigation: {
      journal: "隨筆",
      projects: "專案",
      allProjects: "所有專案",
      elementExplorer: "元素探索者",
      webLab: "網站與實驗",
      about: "關於",
    },
    account: {
      signIn: "登入",
      openStudio: "進入 Studio",
      signOut: "登出",
      loadingAccount: "正在讀取帳戶資料…",
    },
    language: {
      label: "語言",
    },
  },

  "zh-Hans": {
    navigation: {
      journal: "随笔",
      projects: "项目",
      allProjects: "所有项目",
      elementExplorer: "元素探索者",
      webLab: "网站与实验",
      about: "关于",
    },
    account: {
      signIn: "登录",
      openStudio: "进入 Studio",
      signOut: "退出登录",
      loadingAccount: "正在读取账户资料…",
    },
    language: {
      label: "语言",
    },
  },

  ja: {
    navigation: {
      journal: "ジャーナル",
      projects: "プロジェクト",
      allProjects: "すべてのプロジェクト",
      elementExplorer: "元素エクスプローラー",
      webLab: "ウェブと実験",
      about: "このサイトについて",
    },
    account: {
      signIn: "ログイン",
      openStudio: "Studioへ",
      signOut: "ログアウト",
      loadingAccount: "アカウントを読み込み中…",
    },
    language: {
      label: "言語",
    },
  },
};