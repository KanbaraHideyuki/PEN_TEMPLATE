export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: 'カードのコンポーネント一覧です。<br>幅の固定値は設定していないので、親となる要素で幅を指定してください',
      },
    },
  },
};

export const CardType01 = () => {
  return `
    <div class="u-w--50p">
      <a href="" class="c-cardType01">
        <div class="c-cardType01_inner">
          <div class="c-cardType01_pic">
            <img src="https://placehold.jp/480x360.png" class="u-db--pc" alt="">
            <img src="https://placehold.jp/335x190.png" class="u-db--sp" alt="">
          </div>
          <div class="c-cardType01_desc">
            <p class="c-cardType01_ttl">タイトル</p>
          </div>
          <div class="c-cardType01_object--01">
            <img src="/assets/img/img_business_01.svg" alt="">
          </div>
        </div>
      </a>
    </div>

    <div class="u-w--50p u-mt--20">
      <a href="" class="c-cardType01">
        <div class="c-cardType01_inner">
          <div class="c-cardType01_pic">
            <img src="https://placehold.jp/480x360.png" class="u-db--pc" alt="">
            <img src="https://placehold.jp/335x190.png" class="u-db--sp" alt="">
          </div>
          <div class="c-cardType01_desc">
            <p class="c-cardType01_ttl">タイトル</p>
          </div>
          <div class="c-cardType01_object--02">
            <img src="/assets/img/img_business_02.svg" alt="">
          </div>
        </div>
      </a>
    </div>
  `;
};

export const CardType02 = () => {
  return `
    <div class="u-w--50p">
      <a href="../sustainability/" class="c-cardType02">
        <div class="c-cardType02_inner">
          <div class="c-cardType02_pic">
            <img src="https://placehold.jp/480x260.png" alt="">
          </div>
          <div class="c-cardType02_desc">
            <div class="c-cardType02_ttl">
              <p class="c-cardType02_ttl--en">TITLE</p>
              <p class="c-cardType02_ttl--ja">タイトル</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
};

export const CardType03 = () => {
  return `
    <div class="c-block u-color_bg--offWhite">
      <div class="c-cardType03">
        <div class="c-cardType03_heading">
          <a href="" class="c-btnType05">
            <span class="c-btnType05_inner">タイトル</span>
          </a>
        </div>
        <div class="c-cardType03_inner">
          <span class="c-tagType01">最新資料</span>
          <p class="c-txt_date u-mt--16">2024.00.00</p>
          <p class="c-cardType03_txt u-txt_weight--medium u-mt--10">
            <a href="" target="_blank" class="c-txtLink--pdf">タイトル<span class="c-ico_pdf"></span></a>
          </p>
        </div>
      </div>
    </div>
  `;
};

export const CardType04 = () => {
  return `
  <a href="" class="c-cardType04">
    <div class="c-frame_radius">
      <div class="c-cardType04_pic c-anime_slideLeft js-scrollAnimation">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
    </div>
    <span class="c-tagType01 u-mt--32">Tag</span>
    <p class="c-txt_date u-mt--16">0000.00.00</p>
    <p class="c-cardType04_txt u-mt--16 u-txt_weight--medium">タイトルが入ります。</p>
  </a>
  `;
};

export const CardType05 = () => {
  return `
  <div class="c-cardType05">
    <div class="c-cardType05_ico">
      <span class="c-cardType05_icoInner">E</span>
    </div>
    <div class="c-cardType05_head u-color_bg--main">
      <h2 class="c-cardType05_ttl">タイトル<span>Title</span></h2>
    </div>
    <div class="c-cardType05_pic">
      <img src="https://placehold.jp/312x200.png" alt="">  
    </div>
    <div class="c-cardType05_desc">
      <ul class="c-cardType05_list">
        <li><span class="u-color_txt--main">●</span>テキストが入ります。</li>
      </ul>

      <ul class="c-cardType05_btn">
        <li>
          <a href="" class="c-btnType01 c-btnType01--arrow">
            <span class="c-btnType01_bg"></span>
            <span class="c-btnType01_inner">Button</span>
          </a>
        </li>
        <li>
          <a href="" class="c-btnType01 c-btnType01--arrow">
            <span class="c-btnType01_bg"></span>
            <span class="c-btnType01_inner">Button</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  `;
};