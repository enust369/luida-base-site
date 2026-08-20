# LUIDA BASE 公開手順

このフォルダは LUIDA BASE 専用の静的サイトです。TOMONI のフォルダ、GitHub リポジトリ、Cloudflare Pages プロジェクト、DNS 設定には触れず、完全に別プロジェクトとして公開します。

## 公開対象

`/Users/ogasawara/Documents/Codex/2026-06-11/luida-base-jelly-jelly-cafe/outputs/luida-base-site/`

## Cloudflare Pages の設定

1. Cloudflare ダッシュボードで `Workers & Pages` を開く。
2. `Create application` から `Pages` を選ぶ。
3. TOMONI 既存プロジェクトは選ばず、新規プロジェクトを作成する。
4. プロジェクト名は例として `luida-base-site` にする。
5. アップロード方式を使う場合は、このフォルダの中身をまとめてアップロードする。
6. Git 連携を使う場合は、LUIDA BASE 専用の新しい GitHub リポジトリだけを接続する。
7. Build command は空欄、Build output directory は `/` または未指定にする。
8. カスタムドメインを設定する場合も、`tomoni-app.com` は触らない。

## ファイル構成

- `index.html`
- `style.css`
- `script.js`
- `assets/interior-main.jpg`
- `assets/game-shelf.jpg`
- `assets/hero-boardgame-cafe.png`

## 確認事項

- HTML、CSS、JS、画像はすべてこのフォルダ内にあります。
- `index.html` の参照は `./style.css`、`./script.js`、`./assets/...` の相対パスです。
- Cloudflare Pages にアップロードしても、フォルダ構成を保てば画像が表示されます。
- LUIDA BASE 専用プロジェクトとして扱い、TOMONI の設定には触れません。
