import type { Locale } from "./config";

type JournalCopy = {
  title: string;
  description: string;
  dateLocale: string;

  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;

  controlsLabel: string;
  loadingPosts: string;
  searchTitle: string;
  searchPlaceholder: string;
  clearSearch: string;
  clearSearchAria: string;
  filterByTag: string;
  allTags: string;

  publishedEyebrow: string;
  publishedTitle: string;
  loadingArticle: string;
  readArticle: string;
  readArticleAria: (title: string) => string;

  emptyFiltered: string;
  emptyPosts: string;
  loadError: string;
  shownPosts: (count: number) => string;
  filteredPosts: (count: number) => string;
  totalPosts: (count: number) => string;

  scriptLabel: string;
  traditional: string;
  simplified: string;
  traditionalAria: string;
  simplifiedAria: string;

  articleTitle: string;
  articleDescription: string;
  backToJournal: string;
  missingSlug: string;
  articleNotFound: string;
};

export const journalCopy: Record<Locale, JournalCopy> = {
  en: {
    title: "Journal — Reverie Archive",
    description: "Articles, notes, and development records from Reverie Archive.",
    dateLocale: "en-US",

    heroEyebrow: "ARCHIVE · PUBLIC RECORDS",
    heroTitle: "Journal",
    heroIntro: "Writing records that are still being organised and allowed to grow.",

    controlsLabel: "Search & filter",
    loadingPosts: "Loading posts…",
    searchTitle: "Search titles",
    searchPlaceholder: "Enter an article title…",
    clearSearch: "Clear",
    clearSearchAria: "Clear search text",
    filterByTag: "Filter by tag",
    allTags: "All",

    publishedEyebrow: "PUBLISHED RECORDS",
    publishedTitle: "Published writing",
    loadingArticle: "Loading article…",
    readArticle: "Read article →",
    readArticleAria: (title) => `Read: ${title}`,

    emptyFiltered: "No articles match the current search or tag filter.",
    emptyPosts: "There are no public articles yet. The first record is still being prepared.",
    loadError: "Articles cannot be loaded right now. Please try again later.",
    shownPosts: (count) => `${count} articles shown`,
    filteredPosts: (count) => `${count} filtered articles`,
    totalPosts: (count) => `${count} articles`,

    scriptLabel: "Script",
    traditional: "繁",
    simplified: "简",
    traditionalAria: "Display Chinese text in Traditional Chinese",
    simplifiedAria: "Display Chinese text in Simplified Chinese",

    articleTitle: "Article — Journal",
    articleDescription: "An article from Reverie Archive.",
    backToJournal: "← Back to Journal",
    missingSlug: "No article address was found. Please reopen the article from the Journal list.",
    articleNotFound: "This article could not be found, or it is not public yet.",
  },

  "zh-Hant": {
    title: "Journal — Reverie Archive",
    description: "Reverie Archive 的文章、筆記與開發記錄。",
    dateLocale: "zh-TW",

    heroEyebrow: "ARCHIVE · PUBLIC RECORDS",
    heroTitle: "Journal",
    heroIntro: "一些正在整理、持續生長的文字檔案。",

    controlsLabel: "搜尋與篩選",
    loadingPosts: "正在讀取文章…",
    searchTitle: "搜尋標題",
    searchPlaceholder: "輸入文章標題…",
    clearSearch: "清除",
    clearSearchAria: "清除搜尋文字",
    filterByTag: "依標籤篩選",
    allTags: "全部",

    publishedEyebrow: "PUBLISHED RECORDS",
    publishedTitle: "已發布文章",
    loadingArticle: "正在讀取文章…",
    readArticle: "閱讀文章 →",
    readArticleAria: (title) => `閱讀：${title}`,

    emptyFiltered: "沒有符合目前搜尋或標籤篩選的文章。",
    emptyPosts: "目前還沒有公開文章。第一份檔案正在整理中。",
    loadError: "暫時無法讀取文章，請稍後再試。",
    shownPosts: (count) => `顯示 ${count} 篇文章`,
    filteredPosts: (count) => `已篩選 · ${count} 篇`,
    totalPosts: (count) => `${count} 篇文章`,

    scriptLabel: "文字",
    traditional: "繁",
    simplified: "简",
    traditionalAria: "以繁體中文顯示文章",
    simplifiedAria: "以簡體中文顯示文章",

    articleTitle: "文章 — Journal",
    articleDescription: "Reverie Archive 的文章內容。",
    backToJournal: "← 返回 Journal",
    missingSlug: "找不到文章網址代號。請從 Journal 列表重新開啟文章。",
    articleNotFound: "找不到這篇文章，或它目前尚未公開。",
  },

  "zh-Hans": {
    title: "Journal — Reverie Archive",
    description: "Reverie Archive 的文章、笔记与开发记录。",
    dateLocale: "zh-CN",

    heroEyebrow: "ARCHIVE · PUBLIC RECORDS",
    heroTitle: "Journal",
    heroIntro: "一些正在整理、持续生长的文字档案。",

    controlsLabel: "搜索与筛选",
    loadingPosts: "正在读取文章…",
    searchTitle: "搜索标题",
    searchPlaceholder: "输入文章标题…",
    clearSearch: "清除",
    clearSearchAria: "清除搜索文字",
    filterByTag: "依标签筛选",
    allTags: "全部",

    publishedEyebrow: "PUBLISHED RECORDS",
    publishedTitle: "已发布文章",
    loadingArticle: "正在读取文章…",
    readArticle: "阅读文章 →",
    readArticleAria: (title) => `阅读：${title}`,

    emptyFiltered: "没有符合当前搜索或标签筛选的文章。",
    emptyPosts: "目前还没有公开文章。第一份档案正在整理中。",
    loadError: "暂时无法读取文章，请稍后再试。",
    shownPosts: (count) => `显示 ${count} 篇文章`,
    filteredPosts: (count) => `已筛选 · ${count} 篇`,
    totalPosts: (count) => `${count} 篇文章`,

    scriptLabel: "文字",
    traditional: "繁",
    simplified: "简",
    traditionalAria: "以繁体中文显示文章",
    simplifiedAria: "以简体中文显示文章",

    articleTitle: "文章 — Journal",
    articleDescription: "Reverie Archive 的文章内容。",
    backToJournal: "← 返回 Journal",
    missingSlug: "找不到文章网址代号。请从 Journal 列表重新打开文章。",
    articleNotFound: "找不到这篇文章，或它目前尚未公开。",
  },

  ja: {
    title: "Journal — Reverie Archive",
    description: "Reverie Archive の記事、ノート、開発記録。",
    dateLocale: "ja-JP",

    heroEyebrow: "ARCHIVE · PUBLIC RECORDS",
    heroTitle: "Journal",
    heroIntro: "整理を続けながら、少しずつ育っていく文章の記録。",

    controlsLabel: "検索・絞り込み",
    loadingPosts: "記事を読み込んでいます…",
    searchTitle: "タイトルを検索",
    searchPlaceholder: "記事タイトルを入力…",
    clearSearch: "クリア",
    clearSearchAria: "検索文字をクリア",
    filterByTag: "タグで絞り込む",
    allTags: "すべて",

    publishedEyebrow: "PUBLISHED RECORDS",
    publishedTitle: "公開済みの記事",
    loadingArticle: "記事を読み込んでいます…",
    readArticle: "記事を読む →",
    readArticleAria: (title) => `読む：${title}`,

    emptyFiltered: "現在の検索またはタグ条件に一致する記事はありません。",
    emptyPosts: "公開済みの記事はまだありません。最初の記録を準備しています。",
    loadError: "現在、記事を読み込めません。しばらくしてからもう一度お試しください。",
    shownPosts: (count) => `${count} 件の記事を表示`,
    filteredPosts: (count) => `${count} 件に絞り込み中`,
    totalPosts: (count) => `${count} 件の記事`,

    scriptLabel: "表記",
    traditional: "繁",
    simplified: "简",
    traditionalAria: "中国語本文を繁体字で表示",
    simplifiedAria: "中国語本文を簡体字で表示",

    articleTitle: "記事 — Journal",
    articleDescription: "Reverie Archive の記事内容。",
    backToJournal: "← Journal に戻る",
    missingSlug: "記事のURL識別子が見つかりません。Journal の一覧からもう一度開いてください。",
    articleNotFound: "この記事は見つからないか、まだ公開されていません。",
  },
};