export const siteIdentity = {
  siteName: "Reverie Archive",
  siteSubtitle: "個人檔案館",

  // 右上角登入後顯示的名字；之後只需改這一行
  ownerDisplayName: "Azusa",

  assets: {
    // 圖片準備好後，放進 public/images/
    siteLogo: "/images/site-logo.png",
    ownerAvatar: "/images/avatar.png",

    // 圖片準備好後，放進 public/
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
  },
} as const;