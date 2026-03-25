## 本環境の動作 ver

- gulp は npm i でローカルインストールされますが、node.js の ver は各位で nodebrew 等で ver 切り替えを行って頂ければと思います。

### node

- 14.15.4

### gulp

- 4.0.2

## タスク起動について

### 1.はじめに

- `npm i`

### 2.起動

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
　 ├ assets
　 │ ├ css
　 │ ├ img
　 │ └ js
　 │
　 └ index.html

#### ソース管理

src
　 ├ ejs
　 ├ img
　 ├ js
　 └ scss

- ejs は`index.html`として出力されます
- img/js/scss は`assets`内にそれぞれ出力されます
- `./assets/css/`内には map ファイルが生成され、map ファイルによって、どのファイルに記述されているかがブラウザ検証で確認することができます

---

- 以下は、デフォルトで入っている scss 設計についての説明となります
- 個々人によって好みの scss 環境があると思いますので、scss ディレクトリの内容は適宜変更・編集して頂けますと幸いです

### scss ディレクトリについて

#### 参考文献

- `https://github.com/hiloki/flocss`の設計手法に則って構造等が構成されています

#### 構造

- 各ディレクトの`_init.scss`で import した後、`style.scss`へ import する流れです
  scss
  　 ├ foundation
  　 │ └ \_init.scss
  　 │
  　 ├ layout
  　 │ └ \_init.scss
  　 │
  　 ├ object
  　 │ ├ \_init.scss
  　 │ ├ component
  　 │ │ └ \_init.scss
  　 │ │
  　 │ ├ project
  　 │ │ └ \_init.scss
  　 │ │
  　 │ └ utility
  　 │ └ \_init.scss
  　 │
  　 └ style.scss

#### foundation ディレクトリ

- reset や variable、mixin といった scss での環境構築に使用する scss ファイルを管理します

#### layout

- いわゆる wrap などの配置を決めるようなファイルを管理します
- header/footer など、特定箇所でのみ使用することが決まっているファイルも含まれます

#### object

- ページをメインで構成する要素たちになります
- object 配下には、component/project/utility の 3 つのディレクトリがあります

##### component

- component では、ボタンやカードリストなどのコンポーネント・エレメント用の scss ファイルを管理します

##### project

- component で作成した内容同士を繋ぎ合わせる、のりのような scss ファイルを管理します
- A コンポーネントと B コンポーネントを使いたいけど、デザイン通りに組むためには別で margin が必要になるなあ...といった、`独自`の記述があった際などに使用します
- /about/ページ用に p-about を使うといったのがイメージしやすいかなと思います。

##### utility

- margin-top だけ局所的につけたい...といった時に使用します
- `.mt-30`などで、`margin-top: 30px;`を付与する、といったイメージです
- ただし、乱用するとメンテナンス性が下がるので気をつけましょう
