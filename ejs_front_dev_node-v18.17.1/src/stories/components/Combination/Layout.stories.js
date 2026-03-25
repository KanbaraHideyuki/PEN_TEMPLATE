export default {
  title: 'Combination/Layout',
  parameters: {
    docs: {
      description: {
        component: 'flexボックスを利用した横並びのレイアウトコンポーネント一覧です。<br>SPで縦並びになります。<br>記載しているコンテンツ幅は親要素の横幅が1000pxの場合のものです。',
      },
    },
  },
};

export const LayoutType01 = () => {
  return `
    <div class="c-layoutType01 u-flex_justify--between u-flex_wrap u-flex u-flex_column--sp">
      <div class="c-layoutType01_left c-box u-color_bg--offWhite">コンテンツ幅: 560px</div>
      <div class="c-layoutType01_right c-box u-color_bg--offWhite">コンテンツ幅: 380px</div>
    </div>
  `;
};

export const LayoutType02 = () => {
  return `
    <div class="c-layoutType02 u-flex u-flex_justify--between u-flex_wrap u-flex_column--sp">
      <div class="c-layoutType02_item c-box u-color_bg--offWhite">コンテンツ幅: 480px</div>
      <div class="c-layoutType02_item c-box u-color_bg--offWhite">コンテンツ幅: 480px</div>
    </div>
  `;
};

export const LayoutType03 = () => {
  return `
    <div class="c-layoutType03 u-flex u-flex_justify--between u-flex_wrap u-flex_column--sp">
      <div class="c-layoutType03_item c-box u-color_bg--offWhite">コンテンツ幅: 460px</div>
      <div class="c-layoutType03_item c-box u-color_bg--offWhite">コンテンツ幅: 460px</div>
    </div>
  `;
};

export const LayoutType04 = () => {
  return `
    <ul class="c-layoutType04 u-flex u-flex_wrap u-flex_gap--10">
      <li class="u-w--100p--sp">
        <div class="u-w_btn--170">
          <button class="c-btnType04 is-active">すべて</button>
        </div>
      </li>
      <li>
        <div class="u-w_btn--170">
          <button class="c-btnType04">お知らせ</button>
        </div>
      </li>
      <li>
        <div class="u-w_btn--170">
          <button class="c-btnType04">プレスリリース</button>
        </div>
      </li>
      <li>
        <div class="u-w_btn--170">
          <button class="c-btnType04">サステナビリティ</button>
        </div>
      </li>
      <li>
        <div class="u-w_btn--170">
          <button class="c-btnType04">IRニュース</button>
        </div>
      </li>
    </ul>
  `;
};

export const LayoutType05 = () => {
  return `
    <ul class="c-layoutType05 u-flex u-flex_wrap">
      <li class="c-layoutType05_item">
        <a href="" class="c-btnType02">
          <span class="c-btnType02_inner">Button</span>
        </a>
      </li>
      <li class="c-layoutType05_item">
        <a href="" class="c-btnType02">
          <span class="c-btnType02_inner">Button</span>
        </a>
      </li>
      <li class="c-layoutType05_item">
        <a href="" class="c-btnType02">
          <span class="c-btnType02_inner">Button</span>
        </a>
      </li>
      <li class="c-layoutType05_item">
        <a href="" class="c-btnType02">
          <span class="c-btnType02_inner">Button</span>
        </a>
      </li>
    </ul>
  `;
};

export const LayoutType06 = () => {
  return `
  <div id="pipe" class="c-layoutType06 u-flex u-flex_wrap u-flex_justify--between--pc u-flex_column--sp u-flex_reverse--pc">
    <div class="c-layoutType06_item--01 c-box u-color_bg--offWhite">コンテンツ幅: 480px</div>
    <div class="c-layoutType06_item--02 c-box u-color_bg--offWhite">コンテンツ幅: 460px</div>
  </div>
  `;
};

export const LayoutType07 = () => {
  return `
  <dl class="c-layoutType07 u-flex u-flex_gap--10">
    <dt><span class="c-tagType02">用 途</span></dt>
    <dd>医療・介護</dd>
  </dl>
  <dl class="c-layoutType07 u-flex u-flex_gap--10 u-mt--10">
    <dt><span class="c-tagType02">竣 工</span></dt>
    <dd>2024.00</dd>
  </dl>
  `;
};

export const LayoutType08 = () => {
  return `
  <div class="c-layoutType08 u-flex u-flex_column--sp">
    <div class="c-layoutType08_item--01">
      <p class="c-ttlType05 u-color_txt--main u-txt_weight--bold">建物概要</p>
    </div>
    <div class="c-layoutType08_item--02">
      <p class="c-txt">公立西知多総合病院は東海市民病院と知多市民病院が統合して開設された医療機関です。知多半島医療圏の北西部地域における中核病院として地下1階地上9階建468床、免震構造で屋上にはヘリポートが設置されております。集学的治療体制の充実を図ることを目的とした放射線治療施設の増築整備を行い、同施設については2019年度の開設を目指しています。</p>
    </div>
  </div>
  `;
};
