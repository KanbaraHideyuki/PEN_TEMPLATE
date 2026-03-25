export default {
  title: 'Combination/Kv',
  parameters: {
    docs: {
      description: {
        component: '下層ページのKVのコンポーネントです',
      },
    },
  },
};

export const KvType01 = () => {
  return `
    <div class="c-kvType01 c-border_bottom u-color_border--grayPale u-color_bg--white u-mt--100">
      <div class="c-kvType01_inner l-wrap u-flex u-flex_items--center">
        <h1 class="c-ttlType01">
          <span class="c-ttlType01--main">NEWS</span>
          <span class="c-ttlType01--sub">新着情報</span>
        </h1>
      </div>
    </div>
  `;
};

export const KvType02 = () => {
  return `
    <div class="c-kvType02 c-border_bottom u-color_border--grayPale">
      <div class="c-kvType02_bg">
        <div class="c-kvType02_bgInner">
          <img src="https://placehold.jp/1485x560.png" alt="" class="c-kvType02_bgImg">
          <span class="c-kvType02_bgObject--business">
            <img src="https://placehold.jp/324x217.png" alt="">
          </span>
        </div>
      </div>
      <div class="c-kvType02_inner l-wrap u-flex u-flex_items--center">
        <h1 class="c-kvType02_ttl c-ttlType01 js-scrollAnimation">
          <div class="c-ttlType01--main">
            <span class="c-kvType02_ttlInner c-ttlType01_inner">TITLE</span>
          </div>
          <span class="c-kvType02_ttlInner c-ttlType01--sub c-ttlType01_inner">タイトル</span>
        </h1>
      </div>
    </div>
  `;
};