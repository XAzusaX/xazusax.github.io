# Reverie Archive

[English](../README.md) | [繁體中文](README.zh-Hant.md) | [简体中文](README.zh-Hans.md) | [日本語](README.ja.md)

[Code License: MIT](../LICENSE) · [Content Rights & Data Sources](../CONTENT-LICENSE.md)

ノート、プロジェクト、物語、実験、そしてまだ居場所を見つけていない作品を収める個人アーカイブです。

**Reverie Archive** は完成したポートフォリオではありません。作品を少しずつ整理し、書き直し、育てていくための場所です。公開 Journal、プロジェクト記録、インタラクティブな元素エクスプローラー、執筆と公開のための非公開 Studio を備えています。

## 機能

- 検索、タグ絞り込み、公開日、Markdown 表示に対応した公開 Journal。
- 記事の作成、編集、公開、削除ができる非公開 Studio。
- Supabase Auth と Database、および著者専用コンテンツを保護する Row Level Security。
- 検索、分類絞り込み、詳細データに対応したインタラクティブな周期表。
- デスクトップとモバイルに対応したレスポンシブデザイン。
- 英語を既定として、繁體中文、简体中文、日本語の UI を提供。
- 中国語の記事は繁体字／簡体字を切り替え可能。ただし保存された原文は変更しません。
- Archive スタイルのカスタム 404 ページ。
- GitHub Pages で公開。

## バージョン履歴

### 0.1 — 基盤

- サイトのアイデンティティ、ワードマーク、環境光の表現、レスポンシブなサイト構造を作成。
- Home、Journal、Projects の入口を作成。
- Header、Footer、モバイルメニュー、Archive カードシステムを作成。
- 青いインデックスカード、記録ラベル、軌道モチーフ、柔らかな背景光によるアーカイブの視覚言語を確立。

### 1.0 — 公開アーカイブと Studio

- 公開 Journal を追加。
- 記事一覧、タイトル検索、タグ絞り込み、公開日、閲覧ページを追加。
- Markdown 記事に対応。
- 非公開の Studio 執筆ワークスペースを追加。
- メールアドレス／パスワードログイン、認証 callback、ログアウト、アカウント表示を追加。
- Supabase による記事管理と、著者専用 Row Level Security を接続。
- 下書きと公開済みの状態を追加。
- Projects インデックスを追加。
- インタラクティブな周期表、検索、絞り込み、元素詳細、学習コンテンツ、前後の元素ナビゲーションを持つ元素エクスプローラーを追加。
- Journal、Studio、Projects、元素エクスプローラーのモバイル表示を改善。

### 1.1 — 安定性と細部の改善

- GitHub Pages 用の Archive スタイル 404 ページを追加。
- ナビゲーション動作と直接リンクの処理を改善。
- モバイルの Header、検索パネル、カード、余白を調整。
- 視覚システムに合わない既定のリンク下線を削除。
- スクロールバー表示を調整。
- 元素検索パネルを改善し、閉じる際に検索文字を消去するように変更。

### 2.0 — 多言語アーカイブ

対応 UI 言語：

- English（既定）
- 繁體中文
- 简体中文
- 日本語

#### ルーティング

- Home、Journal、Projects、元素エクスプローラー、About、Studio、ログイン、認証 callback に言語別ルートを追加。
- 英語には `/en/` 接頭辞を使用しません。
- 繁体字中国語、簡体字中国語、日本語にはそれぞれの言語接頭辞を使用します。
- 言語切替時も、`?symbol=Fe`、`?slug=...`、`?id=...` など現在のページとクエリパラメータを維持します。

#### UI のローカライズ

- 公開ページ、プロジェクトページ、元素 UI、Studio、Header、ナビゲーション、読み込み状態、検証メッセージ、空状態、アカウント操作をローカライズ。
- デスクトップとモバイルで使える Header 言語メニューを追加。
- サイト内リンクは現在の UI 言語を維持。
- 日付は現在の UI 言語に合わせて表示。

#### 元素エクスプローラーのローカライズ

- 英語、繁體中文、简体中文、日本語の元素名を追加。
- 検索、絞り込み、詳細データ、補足、学習コンテンツ、ナビゲーション、出典表記をローカライズ。
- 科学表記、元素記号、化学式はそのまま維持。

#### Journal の原文方針

作品は常に原文のまま保存されます。

- 英語と日本語の作品は変更されません。
- 繁体字中国語と簡体字中国語の作品は、もう一方の表記へ切り替え可能です。
- 変換はブラウザ内で OpenCC を使って実行されます。
- 変換結果が Supabase に書き戻されることはありません。
- インラインコードと fenced code block は繁簡変換の対象外です。
- 表記の設定はブラウザ内に保存されます。
- 記事の原文言語は `content_locale` に記録されます。
- Studio で記事を作成・編集する際に原文言語を設定できます。

## 技術

- [Astro](https://astro.build/)
- TypeScript
- Supabase Auth / Database
- [opencc-js](https://github.com/nk2028/opencc-js)
- GitHub Pages
- Markdown

## ローカル開発

依存関係のインストール：

```bash
npm install
```

開発サーバーの起動：

```bash
npm run dev
```

本番ビルド：

```bash
npm run build
```

Windows PowerShell では以下を使用します：

```powershell
npm.cmd run dev
npm.cmd run build
```

## データソースと謝辞

元素データ：

- [Bowserinator / Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
- [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) ライセンス。

中国語の繁体字／簡体字変換：

- [opencc-js](https://github.com/nk2028/opencc-js)

## 3.0 の予定

- コード分割と bundle サイズの最適化。
- 追加のパフォーマンス監査。
- 任意の Magic Link 認証。
- Journal と元素エクスプローラーの継続的なコンテンツ拡充。
- さらなる Archive ツールと実験。

## ステータス

Reverie Archive は現在も成長中です。

これは完成品ではありません。作品を収め、書き直し、再分類し、少しずつ育てていくための場所です。