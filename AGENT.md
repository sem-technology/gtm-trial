# GTM Trial Shopについて
このリポジトリは、Googleタグマネージャーを手軽に試すことができるサイト「GTM Trial Shop」のソースコードです。
Firebase Hostingでホスティングされており、ビルド・デプロイ後は完全な静的サイトを生成します。

## 技術スタック
- **ビルドツール**: Vite
- **テンプレートエンジン**: Pug
- **スタイル**: Sass (SCSS)
- **言語**: TypeScript
- **ホスティング**: Firebase Hosting

## ディレクトリ構造
- `src/pages/`: 各画面のPugファイル。Viteの設定により、これらがHTMLとしてビルドされます。
- `src/layout/`: 共通レイアウト（`_baseof.pug`）。
- `src/includes/`: ヘッダー、フッターなどの共通コンポーネント。
- `src/assets/`: 画像、CSS、外部JSライブラリなどの静的ファイル。
- `src/main.ts`: サイトのメインロジック。GTMの動的注入もここで行われます。

## GTM/gtag 注入の仕組み (重要)
このプロジェクトは、HTMLに直接GTMスニペットを記述するのではなく、**JavaScriptによって動的にGTM/gtagを注入する**という特殊な仕組みを採用しています。

1. **設定**: `/configure/` ページ（`src/pages/configure/index.pug`）からGTMコンテナIDやgtag IDを設定できます。
2. **保存**: 設定内容はブラウザの `localStorage` に保存されます。
3. **実行**: `src/main.ts` が実行される際、`localStorage` から設定を読み取り、以下の処理を動的に行います：
   - `dataLayer` の初期化。
   - `googletagmanager.com/gtm.js` または `gtag/js` の読み込み用 `<script>` タグの生成と `head` への挿入。
   - 設定されたカスタムJavaScriptコード（データレイヤーのプッシュなど）の `eval()` による実行。

> [!IMPORTANT]
> GTMのタグがHTMLソースに見当たらない場合は、`src/main.ts` を確認してください。本番環境やローカルプレビューで動作を確認する際は、まず `/configure/` ページで自身のGTMコンテナIDを設定する必要があります。

## 開発・デプロイ
- **ローカル開発**: `npm run dev`
- **ビルド**: `npm run build`
- **プレビュー**: `npm run preview`
- **デプロイ**: `npm run deploy` (Firebase)
