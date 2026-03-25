export default {
  title: 'Components/Box',
  parameters: {
    docs: {
      description: {
        component: '四角型のコンポーネント一覧です。<br>幅の固定値は設定していないので、親となる要素で幅を指定してください',
      },
    },
  },
};

export const BoxType01 = () => {
  return `
  <div>
    <a href="https://www.i-central.co.jp/" target="_blank" class="c-boxType01">
      <div class="c-boxType01_inner">
        <div class="c-boxType01_logo--01">
          <img src="/assets/img/logo_otegaru.png" alt="「O/tegaru（おてがる）」">
        </div>
        <div class="c-boxType01_txt">会員様向け商品販売サイト「O/tegaru（おてがる）」<br>簡単操作で、いつでも注文・<br class="u-db--sp">在庫検索が可能です。</div>
        <div class="c-boxType01_arrow"></div>
        <div class="c-boxType01_object--01">
          <img src="/assets/img/common/img_truck.svg" class="u-db--pc" alt="">
          <img src="/assets/img/common/img_truck_sp.svg" class="u-db--sp" alt="">
        </div>
      </div>
    </a>
  </div>

  <div class="u-mt--24">
    <a href="https://shop.o-tec.co.jp/shop/default.aspx" target="_blank" class="c-boxType01">
      <div class="c-boxType01_inner">
        <div class="c-boxType01_logo--02">
          <img src="/assets/img/logo_intercentral.png" alt="株式会社インターセントラル">
        </div>
        <div class="c-boxType01_txt">対流感の少ない放射による <br class="u-db--sp">冷暖房設備・<br class="u-db--pc">電気暖房器を<br class="u-db--sp">ご提案します。</div>
        <div class="c-boxType01_arrow"></div>
      </div>
    </a>
  </div>
  `;
};

export const BoxType02 = () => {
  return `
    <div class="c-boxType02">
      <div class="c-boxType02_inner">
        <div class="c-boxType02_pic">
          <img src="https://placehold.jp/520x200.png" alt="">
        </div>
        <div class="c-boxType02_desc">
          <h2 class="c-boxType02_ttl">タイトル</h2>
          <div class="c-boxType02_btn">
            <a href="" class="c-btnType01 c-btnType01--arrow">
              <span class="c-btnType01_bg"></span>
              <span class="c-btnType01_inner">Button</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
};
