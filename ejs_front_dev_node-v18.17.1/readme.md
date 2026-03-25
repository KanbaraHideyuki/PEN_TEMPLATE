# 【本環境について】

## 1 nodeとgulpのver
### 1.1 node
- `ver16`以降

### 1.2 gulp
- `ver 4.0.2`

## 2. タスク起動について
### 2.1 はじめに
- `npm i`

### 2.2 起動
- `gulp` or `npm run start`
- どちらでも動きます

### 2.3 その他の処理
#### 2.3.1 画像の圧縮
- `gulp imagemin` or `npm run imagemin`
- 画像が`./src/img/`から、`./public_html/img/`へ出力されます

#### 2.3.2 mapファイルの削除
- `gulp mapclean` or `npm run mapclean`
- cssとjsで出力されるmapファイルが削除されます

#### 2.3.3 ビルド
- `gulp build` or `npm run build`
- 処理手順は以下になります
  1. `gulpfile.js`の`distPath`で指定されている内容を削除
  2. 画像圧縮
  3. デフォルトタスク実行
  4. 各mapファイル削除
- テストアップ前や納品前などに実行想定のコマンドになります

## 3 開発環境について
### 3.1 ディレクトリ構造
#### 3.1.1 出力先
```html:public_html構成
public_html
　 ├ /assets
　 │  ├ css
　 │  ├ img
　 │  └ js
　 │
　 └ index.html
```

#### 3.1.2 ソース管理
```html:src構成
src
　 ├ /ejs
　 │   ├ /_layout
　 │   │  ├ _footer.ejs
　 │   │  └ _header.ejs
　 │   │
　 │   └ index.ejs
　 │
　 ├ /img
　 ├ /js
　 └ /scss
```

### 3.2 scss ディレクトリについて
#### 3.2.1 参考文献
- `https://github.com/hiloki/flocss`の設計手法に則って構造等が構成されています
- `@import`が遅くとも2022年10月1日にサポート終了するのに伴い、`@use` / `@forward`を用いた運用へ移行するため、従来のflocss構造に加えてglobalディレクトリを追加しています

#### 3.2.2 構造
- 各ディレクトリの`_init.scss`でscssファイルを`@forward`でまとめ、さらに各`_init.scss`を`style.scss`へ`@use`でまとめています
- 各ファイルで変数とmixinを使用したい場合は、global内の`_mixin.scss`と`_variable.scss`を`@use`してください

  ```scss:scss構造
  src/scss
  　 ├ /foundation
  　 │   ├ _base.scss
  　 │   ├ _reset.scss
  　 │   └ _init.scss
  　 │
  　 ├ /global
  　 │   ├ _mixin.scss
  　 │   └ _variable.scss
  　 │
  　 ├ /layout
  　 │   ├ _footer.scss
  　 │   ├ _header.scss
  　 │   ├ _section.scss
  　 │   ├ _wrap.scss
  　 │   └ _init.scss
  　 │
  　 ├ /object
  　 │   ├ _init.scss
  　 │   │
  　 │   ├ component
  　 │   │    └ _init.scss
  　 │   │
  　 │   ├ project
  　 │   │    └ _init.scss
  　 │   │
  　 │   └ utility
  　 │        └ _init.scss
  　 │
  　 └ style.scss
  ```


#### 3.2.3 foundation ディレクトリ
- `_reset`や`_base`といった、各ブラウザ毎でタグの性質がばらついているのを整えるscssファイルを管理しています
- `_base`では、class名に接頭辞を使用しない共通classを設定したりもします（例：pc/spのみ`display:block`にする`.pc/.sp`など）

#### 3.2.4 global
- 変数とmixinを管理します

#### 3.2.5 layout
- header / footer / wrapなど、Webサイトで大枠として配置されるレイアウトの調整に使用します

#### 3.2.6 object
- 各コンポーネントを管理します
- object配下には、component/project/utilityの3つのディレクトリで各用途に分かれたscssファイルを管理しています

#### 3.2.7 component
- componentでは、ボタンやカードリストといった全ページ共通で使用できるコンポーネントを管理します

#### 3.2.8 project
- 基本的には、各ページ個別で使用するclassを使用します
- 例 : aboutページ用
  - ファイル名 : `_about.scss`
  - class名 : `p-about`

#### 3.2.9 utility
- 1つのclassに1つのプロパティのみ適用するclassを管理します
- 例1 : margin-top
  - ファイル名 : `_mt.scss`
  - class名 : `u-mt`
- 例2 : text-align
  - ファイル名 : `_ta.scss`
  - class名 : `u-ta`