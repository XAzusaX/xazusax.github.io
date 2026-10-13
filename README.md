# Reverie Archive

[English](README.md) | [繁體中文](docs/README.zh-Hant.md) | [简体中文](docs/README.zh-Hans.md) | [日本語](docs/README.ja.md)

[Code License: MIT](LICENSE) · [Content Rights & Data Sources](CONTENT-LICENSE.md)

A personal archive for notes, projects, stories, experiments, and works still finding their place.

**Reverie Archive** is built as a quiet, evolving collection rather than a finished portfolio. It includes a public Journal, project records, an interactive Element Explorer, and a private Studio for writing and publishing.

## Features

- Public Journal with search, tag filtering, publication dates, and Markdown rendering.
- Private Studio for creating, editing, publishing, and deleting posts.
- Supabase authentication and row-level security for author-owned content.
- Interactive periodic table with element search, category filters, detail pages, related elements, and learning notes.
- Responsive layout for desktop and mobile.
- English-first interface with Traditional Chinese, Simplified Chinese, and Japanese routes.
- Chinese writing display switcher using OpenCC: readers can switch between Traditional and Simplified Chinese without changing the stored original text.
- Custom archive-style 404 page.
- GitHub Pages deployment.

## Version History

### 0.1 — Foundation

The first version established the visual and structural direction of Reverie Archive.

- Created the core archive identity, wordmark, ambient visual system, and responsive site shell.
- Added the Home page with entry points for Journal and Projects.
- Added the foundational navigation, mobile menu, Header, Footer, and archive card system.
- Established the archive-inspired design language: blue index cards, records, labels, orbital motifs, and soft background light.

### 1.0 — Public Archive and Studio

Version 1.0 turned the initial archive into a functional publishing site.

- Added the public Journal.
- Added post listing, title search, tag filtering, publication dates, and article reading pages.
- Added Markdown article rendering.
- Added the private Studio workspace.
- Added email/password login, authentication callback handling, sign-out, and account display.
- Connected post management to Supabase.
- Added author-only post creation, editing, publishing, and deletion through Row Level Security.
- Added draft and published post states.
- Added the Projects index.
- Added Element Explorer:
  - Interactive periodic table.
  - Element search and category, period, group, and block filters.
  - Element detail pages.
  - Electron configuration, physical properties, related elements, notes, learning cards, safety information, reactions, and isotope data.
  - Previous/next element navigation.
  - Accessible tooltips for chemistry terms.
- Improved responsive layouts across Journal, Studio, Projects, and Element Explorer.

### 1.1 — Resilience and Polish

Version 1.1 focused on small but important quality-of-life improvements.

- Added a custom archive-style 404 page for GitHub Pages.
- Improved navigation behavior and direct-link handling.
- Refined mobile layouts, Header behavior, search panels, cards, and spacing.
- Removed default hyperlink underlines where they conflicted with the visual system.
- Refined scrollbar presentation.
- Improved element search panel behavior, including clearing the current search when its panel closes.

### 2.0 — Multilingual Archive

Version 2.0 introduced the multilingual architecture of Reverie Archive.

Supported interface languages:

- English — default language
- 繁體中文
- 简体中文
- 日本語

#### Routing

- Added language-aware routes for Home, Journal, Projects, Element Explorer, About, Studio, Login, and authentication callback pages.
- English remains the default without an `/en/` prefix.
- Added language-prefixed routes for Traditional Chinese, Simplified Chinese, and Japanese.
- Language switching preserves the current route and query parameters, including:
  - Element symbols such as `?symbol=Fe`
  - Journal article slugs such as `?slug=...`
  - Studio editor IDs such as `?id=...`

#### Interface Localization

- Localized public pages, project pages, element interfaces, Studio, Header, navigation, loading states, validation messages, empty states, and account controls.
- Added a Header language selector for desktop and mobile.
- Preserved the current language when navigating through the site.
- Localized date formatting by interface language.

#### Element Explorer Localization

- Added localized element names for English, Traditional Chinese, Simplified Chinese, and Japanese.
- Localized Element Explorer controls, filters, search results, detail labels, help text, learning content, navigation, and attribution text.
- Preserved scientific notation, symbols, and chemical formulas.

#### Journal Original-Text Policy

Journal works remain stored and displayed as their original writing.

- English and Japanese works remain unchanged.
- Traditional Chinese and Simplified Chinese works can be displayed in either Chinese script.
- Script conversion is handled in the browser with OpenCC.
- Converted text is never written back to Supabase.
- Inline code and fenced code blocks remain unchanged during Chinese script conversion.
- Reader preference is remembered locally in the browser.
- Added `content_locale` to posts so each work records its original language.
- Added Studio controls for selecting an article’s original language when creating or editing a post.

## Technology

- [Astro](https://astro.build/)
- TypeScript
- Supabase Auth and Database
- [opencc-js](https://github.com/nk2028/opencc-js)
- GitHub Pages
- Markdown for article content

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

On Windows PowerShell, use:

```powershell
npm.cmd run dev
npm.cmd run build
```

## Data Sources and Credits

Element data is based on:

- [Bowserinator / Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
- Licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

Chinese script conversion uses:

- [opencc-js](https://github.com/nk2028/opencc-js)

## Planned for 3.0

- Code splitting and bundle-size optimization.
- Further performance auditing.
- Optional Magic Link authentication.
- Continued content expansion for Journal and Element Explorer.
- Additional archive tools and experiments.

## Status

Reverie Archive is actively evolving.

The archive is not a finished product. It is a place for work to be collected, revised, reorganized, and allowed to grow over time.