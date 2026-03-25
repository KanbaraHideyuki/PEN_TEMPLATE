export default {
  title: 'Components/Title',
  parameters: {
    docs: {
      description: {
        component: '見出しのコンポーネント一覧です。<br>.js-scrollAnimationのクラスを付与することでスクロールアニメーションが実行されます。',
      },
    },
  },
};

export const TitleType01 = () => {
  return `
    <h1 class="c-ttlType01">
      <span class="c-ttlType01--main">TITLE</span>
      <span class="c-ttlType01--sub">タイトル</span>
    </h1>
  `;
};

export const TitleType02 = () => {
  return `
    <h2 class="c-ttlType02">
      <span class="c-ttlType02--main">TITLE</span>
      <span class="c-ttlType02--sub">タイトル</span>
    </h2>

    <h2 class="c-ttlType02--ja u-mt--16">
      <span class="c-ttlType02--main">タイトル</span>
    </h2>

    <div class="c-box u-color_bg--main u-mt--16">
      <h2 class="c-ttlType02--white">
        <span class="p-homeIr_ttl--en c-ttlType02--main">TITLE</span>
        <span class="p-homeIr_ttl--ja c-ttlType02--sub">タイトル</span>
      </h2>  
    </div>
  `;
};

export const TitleType03 = () => {
  return `
    <h3 class="c-ttlType03">
      <span class="c-ttlType03--main">タイトル</span>
      <span class="c-ttlType03--sub">Title</span>
    </h3>

    <h3 class="c-ttlType03 u-mt--16">
      <span class="c-ttlType03--main">タイトル</span>
    </h3>
  `;
};

export const TitleType04 = () => {
  return `
    <h4 class="c-ttlType04">個別の資料は以下からご確認ください。</h4>
  `;
};

export const TitleType05 = () => {
  return `
    <p class="c-ttlType05">タイトルが入ります。</p>
  `;
};