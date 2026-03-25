export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'ボタンのコンポーネント一覧です。<br>ボタンに幅の固定値は設定していないので、親となる要素で幅を指定し、その中でc-btnを使う想定です。',
      },
    },
  },
};

export const ButtonType01 = () => {
  return `
    <div class="u-w_btn--220">
      <a href="" class="c-btnType01">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>

    <div class="u-w_btn--220 u-mt--10">
      <a href="" class="c-btnType01 c-btnType01--arrow">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>

    <div class="u-w_btn--220 u-mt--10">
      <a href="" class="c-btnType01 c-btnType01--arrow c-btnType01--list">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>

    <div class="u-w_btn--220 u-mt--10">
      <a href="" class="c-btnType01 c-btnType01--download">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>

    <div class="u-w_btn--220 u-mt--10">
      <button type="submit" class="c-btnType01 c-btnType01--search">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </button>
    </div>

    <div class="c-box u-color_bg--darkMain u-mt--10">
      <div class="u-w_btn--220">
        <a href="" class="c-btnType01--blue c-btnType01--arrow c-btnType01--list">
          <span class="c-btnType01_bg"></span>
          <span class="c-btnType01_inner">Button</span>
        </a>
      </div>
    </div>

    <div class="u-w_btn--300 u-mt--10"">
      <a href="" class="c-btnType01 c-btnType01--download">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>
  `;
};

export const ButtonType02 = () => {
  return `
    <button class="c-btnType02 u-w--25p">
      <span class="c-btnType02_inner">Button</span>
    </button>
  `;
};

export const ButtonType03 = () => {
  return `
    <div class="u-w--25p">
      <a href="" class="c-btnType03">Button</a>
    </div>
    <div class="u-w--25p">
      <a href="" class="c-btnType03 c-btnType03--arrow">Button</a>
    </div>
  `;
};

export const ButtonType04 = () => {
  return `
    <button class="c-btnType04 u-w_btn--170">Button</button>
    <button class="c-btnType04--white u-w_btn--170">Button</button>
    <button class="c-btnType04 is-active u-w_btn--170">Button</button>
  `;
};

export const ButtonType05 = () => {
  return `
    <a href="" class="c-btnType05">
      <span class="c-btnType05_inner">Button</span>
    </a>
  `;
};

export const ButtonType06 = () => {
  return `
    <a href="" class="c-btnType06">
      <p class="c-btnType06_ttl--main">TITLE</p>
      <p class="c-btnType06_ttl--sub">タイトル</p>
    </a>
  `;
};

export const ButtonType07 = () => {
  return `
    <div class="u-w--25p">
      <a href="" class="c-btnType07">タイトル</a>
    </div>
    <div class="u-w--25p u-mt--16">
      <a href="" class="c-btnType07--blue">タイトル</a>
    </div>
  `;
};

export const ButtonType08 = () => {
  return `
    <button class="c-btnType08">住所検索</button>
  `;
};