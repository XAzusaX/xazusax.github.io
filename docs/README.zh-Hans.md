# Reverie Archive

[English](../README.md) | [繁體中文](README.zh-Hant.md) | [简体中文](README.zh-Hans.md) | [日本語](README.ja.md)

[Code License: MIT](../LICENSE) · [Content Rights & Data Sources](../CONTENT-LICENSE.md)

一个收藏笔记、项目、故事、实验，以及尚未找到归属作品的个人档案馆。

**Reverie Archive** 不是一个完成品，而是一个能够持续整理、修改与生长的地方。网站包含公开 Journal、项目记录、互动式元素探索者，以及用于写作与发布的私人 Studio。

## 功能

- 公开 Journal：支持搜索、标签筛选、发布日期与 Markdown 显示。
- 私人 Studio：可建立、编辑、发布与删除文章。
- Supabase 登录与数据库，通过 Row Level Security 保护作者专属内容。
- 互动式元素周期表：支持元素搜索、分类筛选与详细资料。
- 桌面与手机版响应式界面。
- 英文默认，支持繁體中文、简体中文与日本語界面。
- 中文文章可切换繁／简显示，但不改动数据库中的原文。
- Archive 风格的自订 404 页面。
- 部署于 GitHub Pages。

## 版本历史

### 0.1 — 基础建置

- 建立网站识别、字标、环境光效果与响应式网站骨架。
- 建立首页，以及 Journal、Projects 的入口。
- 建立 Header、Footer、手机菜单与 Archive 卡片系统。
- 确立档案馆风格：蓝色索引卡、记录标签、轨道元素与柔和背景光。

### 1.0 — 公开档案馆与 Studio

- 建立公开 Journal。
- 加入文章列表、标题搜索、标签筛选、发布日期与阅读页。
- 支持 Markdown 文章内容。
- 建立私人 Studio 写作工作区。
- 加入电子邮件／密码登录、验证 callback、登出与账户显示。
- 串接 Supabase 文章管理与作者专属 Row Level Security。
- 支持草稿与已发布状态。
- 建立 Projects 索引。
- 建立元素探索者，包含互动式周期表、搜索、筛选、元素详细资料、学习内容与前后元素导航。
- 改善 Journal、Studio、Projects 与元素探索者的手机版体验。

### 1.1 — 稳定性与细节调整

- 加入 GitHub Pages 专用的 Archive 风格 404 页面。
- 改善导航行为与直接链接处理。
- 调整手机版 Header、搜索面板、卡片与页面间距。
- 移除不符合视觉系统的默认超链接底线。
- 调整滚动条呈现。
- 改善元素搜索面板；关闭面板时会清除搜索文字。

### 2.0 — 多语言档案馆

支持界面语言：

- English（默认）
- 繁體中文
- 简体中文
- 日本語

#### 路由

- 为首页、Journal、Projects、元素探索者、About、Studio、登录与验证 callback 建立语言路由。
- 英文不使用 `/en/` 前缀。
- 繁中、简中、日文使用各自语言前缀。
- 切换语言时保留目前页面与查询参数，例如 `?symbol=Fe`、`?slug=...` 与 `?id=...`。

#### 界面本地化

- 本地化公开页面、项目页、元素界面、Studio、Header、导航、加载状态、验证消息、空状态与账户控制。
- 加入桌面与手机可用的 Header 语言菜单。
- 导航链接会维持目前选择的界面语言。
- 日期依目前界面语言格式化。

#### 元素探索者本地化

- 加入英文、繁體中文、简体中文与日文元素名称。
- 本地化元素搜索、筛选、详细资料、提示、学习内容、导航与来源标示。
- 保留科学记号、元素符号与化学式。

#### Journal 原文政策

作品永远以原文储存。

- 英文与日文作品完全维持原样。
- 繁中与简中作品可切换为另一种中文字形。
- 转换在浏览器端通过 OpenCC 执行。
- 转换后文字不会写回 Supabase。
- 行内代码与 fenced code block 不会被繁简转换。
- 用户偏好会保存在浏览器本机。
- 文章以 `content_locale` 记录原文语言。
- Studio 可在新增或编辑文章时设定原文语言。

## 技术

- [Astro](https://astro.build/)
- TypeScript
- Supabase Auth 与 Database
- [opencc-js](https://github.com/nk2028/opencc-js)
- GitHub Pages
- Markdown

## 本机开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

建立正式版本：

```bash
npm run build
```

Windows PowerShell 请使用：

```powershell
npm.cmd run dev
npm.cmd run build
```

## 数据来源与致谢

元素资料基于：

- [Bowserinator / Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
- 采用 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 授权。

中文繁简转换使用：

- [opencc-js](https://github.com/nk2028/opencc-js)

## 3.0 预定项目

- 代码分割与 bundle 体积优化。
- 进一步性能检查。
- 可选的 Magic Link 登录。
- 持续扩充 Journal 与元素探索者内容。
- 更多 Archive 工具与实验。

## 状态

Reverie Archive 正在持续成长。

它不是完成品；它是一个让作品被收藏、修改、重新分类，并慢慢生长的地方。