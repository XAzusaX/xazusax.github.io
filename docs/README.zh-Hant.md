# Reverie Archive

[English](README.md) | [繁體中文](README.zh-Hant.md) | [简体中文](README.zh-Hans.md) | [日本語](README.ja.md)

[Code License: MIT](../LICENSE) · [Content Rights & Data Sources](../CONTENT-LICENSE.md)

一座收藏筆記、專案、故事、實驗，以及尚未找到歸屬作品的個人檔案館。

**Reverie Archive** 不是一個完成品，而是一個能夠持續整理、修改與生長的地方。網站包含公開 Journal、專案記錄、互動式元素探索者，以及用於寫作與發布的私人 Studio。

## 功能

- 公開 Journal：支援搜尋、標籤篩選、發布日期與 Markdown 顯示。
- 私人 Studio：可建立、編輯、發布與刪除文章。
- Supabase 登入與資料庫，透過 Row Level Security 保護作者專屬內容。
- 互動式元素週期表：支援元素搜尋、分類篩選與詳細資料。
- 桌面與手機版響應式介面。
- 英文預設，支援繁體中文、简体中文與日本語介面。
- 中文文章可切換繁／简顯示，但不改動資料庫中的原文。
- Archive 風格的自訂 404 頁面。
- 部署於 GitHub Pages。

## 版本歷程

### 0.1 — 基礎建置

- 建立網站識別、字標、環境光效果與響應式網站骨架。
- 建立首頁，以及 Journal、Projects 的入口。
- 建立 Header、Footer、手機選單與 Archive 卡片系統。
- 確立檔案館風格：藍色索引卡、紀錄標籤、軌道元素與柔和背景光。

### 1.0 — 公開檔案館與 Studio

- 建立公開 Journal。
- 加入文章列表、標題搜尋、標籤篩選、發布日期與閱讀頁。
- 支援 Markdown 文章內容。
- 建立私人 Studio 寫作工作區。
- 加入電子郵件／密碼登入、驗證 callback、登出與帳戶顯示。
- 串接 Supabase 文章管理與作者專屬 Row Level Security。
- 支援草稿與已發布狀態。
- 建立 Projects 索引。
- 建立元素探索者：
  - 互動式元素週期表。
  - 元素搜尋，以及分類、週期、族、區塊篩選。
  - 元素詳細資料頁。
  - 電子組態、物理性質、同族元素、學習資料、安全提醒、反應式與同位素資料。
  - 前後元素導覽。
  - 化學術語的無障礙提示說明。
- 改善 Journal、Studio、Projects 與元素探索者的手機版體驗。

### 1.1 — 穩定性與細節調整

- 加入 GitHub Pages 專用的 Archive 風格 404 頁。
- 改善導覽行為與直接連結處理。
- 調整手機版 Header、搜尋面板、卡片與頁面間距。
- 移除不符合視覺系統的預設超連結底線。
- 調整捲動條呈現。
- 改善元素搜尋面板；關閉面板時會清除搜尋文字。

### 2.0 — 多語檔案館

支援介面語言：

- English（預設）
- 繁體中文
- 简体中文
- 日本語

#### 路由

- 為首頁、Journal、Projects、元素探索者、About、Studio、登入與驗證 callback 建立語言路由。
- 英文不使用 `/en/` 前綴。
- 繁中、簡中、日文使用各自語言前綴。
- 切換語言時保留目前頁面與查詢參數，例如：
  - `?symbol=Fe`
  - `?slug=...`
  - `?id=...`

#### 介面本地化

- 本地化公開頁面、專案頁、元素介面、Studio、Header、導覽、載入狀態、驗證訊息、空狀態與帳戶控制。
- 加入桌面與手機可用的 Header 語言選單。
- 導覽連結會維持目前選取的介面語言。
- 日期依目前介面語言格式化。

#### 元素探索者本地化

- 加入英文、繁體中文、简体中文與日文元素名稱。
- 本地化元素搜尋、篩選、詳細資料、提示、學習內容、導覽與來源標示。
- 保留科學記號、元素符號與化學式。

#### Journal 原文政策

作品永遠以原文儲存。

- 英文與日文作品完全維持原樣。
- 繁中與簡中作品可切換為另一種中文字體。
- 轉換在瀏覽器端透過 OpenCC 執行。
- 轉換後文字不會寫回 Supabase。
- 行內程式碼與 fenced code block 不會被繁簡轉換。
- 使用者偏好會保存在瀏覽器本機。
- 文章以 `content_locale` 記錄原文語言。
- Studio 可在新增或編輯文章時設定原文語言。

## 技術

- [Astro](https://astro.build/)
- TypeScript
- Supabase Auth 與 Database
- [opencc-js](https://github.com/nk2028/opencc-js)
- GitHub Pages
- Markdown

## 本機開發

安裝依賴：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

建立正式版本：

```bash
npm run build
```

Windows PowerShell 請使用：

```powershell
npm.cmd run dev
npm.cmd run build
```

## 資料來源與致謝

元素資料基於：

- [Bowserinator / Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
- 採用 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 授權。

中文繁簡轉換使用：

- [opencc-js](https://github.com/nk2028/opencc-js)

## 3.0 預定項目

- 程式碼分割與 bundle 體積最佳化。
- 進一步效能檢查。
- 可選的 Magic Link 登入。
- 持續擴充 Journal 與元素探索者內容。
- 更多 Archive 工具與實驗。

## 狀態

Reverie Archive 正在持續成長。

它不是完成品；它是一個讓作品被收藏、修改、重新分類，並慢慢生長的地方。