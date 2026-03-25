## タスク起動について
### 1.はじめに
- `npm i`

### 2.起動
- 起動する際には、xamppやmampなど各位の環境で使用しているローカルサーバ環境ソフトを立ち上げてください
- gulpfile.js内の`各ローカルサーバー立ち上げ時のurlを入れてください`の箇所に、ローカルサーバー立ち上げ時のurlを設定してください
- `gulp` or `npm run start`
- どちらでも動きます

### 3.その他の処理
#### 3-1.画像の圧縮
- `gulp imagemin` or `npm run imagemin`
- 画像が`./src/img/`から、`./public_html/assets/img/`へ出力されます


## 開発環境について
### ディレクトリ構造
#### 出力先
public_html
　└ wp-content
　    └ themes
　        └ theme_name
　            └ assets
　                ├ css
　                ├ img
　                └ js


#### ソース管理
##### php
public_html
　└ wp-content
　    └ themes
　        └ theme_name
　            └ 各phpファイル

##### assets
src
　├ img
　├ js
　└ scss

- img/js/scssは`assets`内にそれぞれ出力されます
- `./assets/css/`内にはmapファイルが生成され、mapファイルによって、どのファイルに記述されているかがブラウザ検証で確認することができます



---------------------------------------------------------------------------------

- 以下は、デフォルトで入っているscss設計についての説明となります
- 個々人によって好みのscss環境があると思いますので、scssディレクトリの内容は適宜変更・編集して頂けますと幸いです



### scssディレクトリについて

#### 参考文献
- `https://github.com/hiloki/flocss`の設計手法に則って構造等が構成されています

#### 構造
- 各ディレクトの`_init.scss`でimportした後、`style.scss`へimportする流れです
scss
　├ foundation
　│   └ _init.scss
　│
　├ layout
　│   └ _init.scss
　│
　├ object
　│   ├ _init.scss
　│   ├ component
　│   │   └ _init.scss
　│   │
　│   ├ project
　│   │   └ _init.scss
　│   │
　│   └ utility
　│       └ _init.scss
　│
　└ style.scss

#### foundationディレクトリ
- resetやvariable、mixinといったscssでの環境構築に使用するscssファイルを管理します

#### layout
- いわゆるwrapなどの配置を決めるようなファイルを管理します
- header/footerなど、特定箇所でのみ使用することが決まっているファイルも含まれます

#### object
- ページをメインで構成する要素たちになります
- object配下には、component/project/utilityの3つのディレクトリがあります

##### component
- componentでは、ボタンやカードリストなどのコンポーネント・エレメント用のscssファイルを管理します

##### project
- componentで作成した内容同士を繋ぎ合わせる、のりのようなscssファイルを管理します
- AコンポーネントとBコンポーネントを使いたいけど、デザイン通りに組むためには別でmarginが必要になるなあ...といった、`独自`の記述があった際などに使用します

##### utility
- margin-topだけ局所的につけたい...といった時に使用します
- `.mt-30`などで、`margin-top: 30px;`を付与する、といったイメージです