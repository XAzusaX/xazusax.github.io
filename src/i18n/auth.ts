import type { Locale } from "./config";

type AuthCopy = {
  login: {
    title: string;
    description: string;
    introEyebrow: string;
    headingFirst: string;
    headingSecond: string;
    intro: string;
    statusLabel: string;
    statusValue: string;
    formEyebrow: string;
    formTitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    submit: string;
    verifying: string;
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    failed: string;
  };
  callback: {
    title: string;
    heading: string;
    waiting: string;
    missingCode: string;
    failed: string;
  };
};

export const authCopy: Record<Locale, AuthCopy> = {
  en: {
    login: {
      title: "Login — Reverie Archive",
      description: "Sign in to Reverie Archive Studio.",
      introEyebrow: "ARCHIVE STUDIO · PRIVATE ACCESS",
      headingFirst: "Return to",
      headingSecond: "the archive.",
      intro:
        "This is Archive's private workspace. Sign in to draft, organise, and publish your writing.",
      statusLabel: "WRITER ACCESS",
      statusValue: "RESTRICTED",
      formEyebrow: "IDENTITY VERIFICATION",
      formTitle: "Sign in to Studio",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      submit: "Sign in to Studio",
      verifying: "Verifying…",
      emailRequired: "Enter your email address.",
      emailInvalid: "Enter a valid email address.",
      passwordRequired: "Enter your password.",
      failed: "Sign-in failed. Check your email address and password.",
    },
    callback: {
      title: "Verifying sign-in — Reverie Archive",
      heading: "Verifying your sign-in…",
      waiting: "Please wait and keep this page open.",
      missingCode: "No sign-in verification data was found. Please return to the login page and try again.",
      failed: "Sign-in could not be completed. Please return to the login page and try again.",
    },
  },

  "zh-Hant": {
    login: {
      title: "登入 — Reverie Archive",
      description: "Reverie Archive Studio 登入頁面。",
      introEyebrow: "ARCHIVE STUDIO · PRIVATE ACCESS",
      headingFirst: "回到",
      headingSecond: "檔案館。",
      intro:
        "這裡是 Archive 的私人工作區。登入後可以建立草稿、整理文章與發布內容。",
      statusLabel: "WRITER ACCESS",
      statusValue: "RESTRICTED",
      formEyebrow: "身份驗證",
      formTitle: "登入 Studio",
      emailLabel: "電子郵件",
      emailPlaceholder: "you@example.com",
      passwordLabel: "密碼",
      passwordPlaceholder: "輸入密碼",
      submit: "登入並進入 Studio",
      verifying: "正在驗證…",
      emailRequired: "請輸入電子郵件地址。",
      emailInvalid: "請輸入有效的電子郵件格式。",
      passwordRequired: "請輸入密碼。",
      failed: "登入失敗，請確認電子郵件與密碼是否正確。",
    },
    callback: {
      title: "正在確認登入 — Reverie Archive",
      heading: "正在確認登入…",
      waiting: "請稍候，不要關閉這個頁面。",
      missingCode: "找不到登入驗證資料，請回到登入頁重新操作。",
      failed: "登入失敗，請回到登入頁重新操作。",
    },
  },

  "zh-Hans": {
    login: {
      title: "登录 — Reverie Archive",
      description: "Reverie Archive Studio 登录页面。",
      introEyebrow: "ARCHIVE STUDIO · PRIVATE ACCESS",
      headingFirst: "回到",
      headingSecond: "档案馆。",
      intro:
        "这里是 Archive 的私人工作区。登录后可以建立草稿、整理文章与发布内容。",
      statusLabel: "WRITER ACCESS",
      statusValue: "RESTRICTED",
      formEyebrow: "身份验证",
      formTitle: "登录 Studio",
      emailLabel: "电子邮件",
      emailPlaceholder: "you@example.com",
      passwordLabel: "密码",
      passwordPlaceholder: "输入密码",
      submit: "登录并进入 Studio",
      verifying: "正在验证…",
      emailRequired: "请输入电子邮件地址。",
      emailInvalid: "请输入有效的电子邮件格式。",
      passwordRequired: "请输入密码。",
      failed: "登录失败，请确认电子邮件与密码是否正确。",
    },
    callback: {
      title: "正在确认登录 — Reverie Archive",
      heading: "正在确认登录…",
      waiting: "请稍候，不要关闭这个页面。",
      missingCode: "找不到登录验证资料，请回到登录页面重新操作。",
      failed: "登录失败，请回到登录页面重新操作。",
    },
  },

  ja: {
    login: {
      title: "ログイン — Reverie Archive",
      description: "Reverie Archive Studio のログインページ。",
      introEyebrow: "ARCHIVE STUDIO · PRIVATE ACCESS",
      headingFirst: "アーカイブへ",
      headingSecond: "戻る。",
      intro:
        "ここは Archive のプライベートな作業空間です。ログインすると、下書きの作成、記事の整理、公開ができます。",
      statusLabel: "WRITER ACCESS",
      statusValue: "RESTRICTED",
      formEyebrow: "本人確認",
      formTitle: "Studio にログイン",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      passwordLabel: "パスワード",
      passwordPlaceholder: "パスワードを入力",
      submit: "Studio にログイン",
      verifying: "確認しています…",
      emailRequired: "メールアドレスを入力してください。",
      emailInvalid: "有効なメールアドレスを入力してください。",
      passwordRequired: "パスワードを入力してください。",
      failed: "ログインに失敗しました。メールアドレスとパスワードを確認してください。",
    },
    callback: {
      title: "ログインを確認中 — Reverie Archive",
      heading: "ログインを確認しています…",
      waiting: "このページを閉じずにお待ちください。",
      missingCode: "ログイン確認情報が見つかりません。ログインページに戻ってもう一度お試しください。",
      failed: "ログインを完了できませんでした。ログインページに戻ってもう一度お試しください。",
    },
  },
};