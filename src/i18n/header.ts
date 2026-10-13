import type { Locale } from "./config";

type HeaderCopy = {
  homeAria: string;
  siteSubtitle: string;
  openMenu: string;
  closeMenu: string;
  navigation: string;
  journal: string;
  projects: string;
  allProjects: string;
  elementExplorer: string;
  about: string;
  language: string;
  accountLoading: string;
  login: string;
  studio: string;
  signOut: string;
  languages: Record<Locale, string>;
};

export const headerCopy = {
  en: {
    homeAria: "Reverie Archive home",
    siteSubtitle: "Personal Archive",
    openMenu: "Open site menu",
    closeMenu: "Close site menu",
    navigation: "Site navigation",
    journal: "Journal",
    projects: "Projects",
    allProjects: "All projects",
    elementExplorer: "Element Explorer",
    about: "About",
    language: "Language",
    accountLoading: "Loading account details…",
    login: "Log in",
    studio: "Open Studio",
    signOut: "Sign out",
    languages: {
      en: "English",
      "zh-Hant": "繁體中文",
      "zh-Hans": "简体中文",
      ja: "日本語",
    },
  },

  "zh-Hant": {
    homeAria: "Reverie Archive 首頁",
    siteSubtitle: "個人檔案",
    openMenu: "開啟網站選單",
    closeMenu: "關閉網站選單",
    navigation: "網站導覽",
    journal: "隨筆",
    projects: "專案",
    allProjects: "所有專案",
    elementExplorer: "元素探索者",
    about: "關於",
    language: "語言",
    accountLoading: "正在讀取帳戶資料…",
    login: "登入",
    studio: "進入 Studio",
    signOut: "登出",
    languages: {
      en: "English",
      "zh-Hant": "繁體中文",
      "zh-Hans": "简体中文",
      ja: "日本語",
    },
  },

  "zh-Hans": {
    homeAria: "Reverie Archive 首页",
    siteSubtitle: "个人档案",
    openMenu: "打开网站菜单",
    closeMenu: "关闭网站菜单",
    navigation: "网站导航",
    journal: "随笔",
    projects: "项目",
    allProjects: "所有项目",
    elementExplorer: "元素探索者",
    about: "关于",
    language: "语言",
    accountLoading: "正在读取账户资料…",
    login: "登录",
    studio: "进入 Studio",
    signOut: "登出",
    languages: {
      en: "English",
      "zh-Hant": "繁體中文",
      "zh-Hans": "简体中文",
      ja: "日本語",
    },
  },

  ja: {
    homeAria: "Reverie Archive ホーム",
    siteSubtitle: "個人アーカイブ",
    openMenu: "サイトメニューを開く",
    closeMenu: "サイトメニューを閉じる",
    navigation: "サイトナビゲーション",
    journal: "ジャーナル",
    projects: "プロジェクト",
    allProjects: "すべてのプロジェクト",
    elementExplorer: "元素エクスプローラー",
    about: "この場所について",
    language: "言語",
    accountLoading: "アカウント情報を読み込んでいます…",
    login: "ログイン",
    studio: "Studio を開く",
    signOut: "ログアウト",
    languages: {
      en: "English",
      "zh-Hant": "繁體中文",
      "zh-Hans": "简体中文",
      ja: "日本語",
    },
  },
} satisfies Record<Locale, HeaderCopy>;