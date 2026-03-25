export default {
  title: 'Combination/Slider',
  parameters: {
    docs: {
      description: {
        component: 'スライダーのコンポーネント一覧です。<br>スライダーにはswiperを使っています<br>SliderType01は幅1200pxの親要素で囲むとコンテンツ幅が1000pxになるように設定してます',
      },
    },
  },
};

export const SliderType01 = () => {
  return `
  <div class="c-slideType01">
  <div class="c-slideType01_container">
    <div class="swiper js-slider01">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="" class="c-caseType01">
            <div class="c-caseType01_pic c-frame_radius">
              <img src="https://placehold.jp/312x234.png" alt="">
            </div>
            <p class="c-caseType01_ttl u-color_txt--main u-txt_weight--bold u-mt--24">タイトル</p>
            <span class="c-tagType01--wide u-mt--10">Tag</span>
            <div class="c-caseType01_info u-flex u-flex_column u-mt--10">
              <dl class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">用 途</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </dl>
              <div class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">竣 工</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </div>
            </div>
            <p class="c-caseType01_txt u-mt--10">テキストが入ります</p>
          </a>
        </div>

        <div class="swiper-slide">
          <a href="" class="c-caseType01">
            <div class="c-caseType01_pic c-frame_radius">
              <img src="https://placehold.jp/312x234.png" alt="">
            </div>
            <p class="c-caseType01_ttl u-color_txt--main u-txt_weight--bold u-mt--24">タイトル</p>
            <span class="c-tagType01--wide u-mt--10">Tag</span>
            <div class="c-caseType01_info u-flex u-flex_column u-mt--10">
              <dl class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">用 途</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </dl>
              <div class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">竣 工</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </div>
            </div>
            <p class="c-caseType01_txt u-mt--10">テキストが入ります</p>
          </a>
        </div>

        <div class="swiper-slide">
          <a href="" class="c-caseType01">
            <div class="c-caseType01_pic c-frame_radius">
              <img src="https://placehold.jp/312x234.png" alt="">
            </div>
            <p class="c-caseType01_ttl u-color_txt--main u-txt_weight--bold u-mt--24">タイトル</p>
            <span class="c-tagType01--wide u-mt--10">Tag</span>
            <div class="c-caseType01_info u-flex u-flex_column u-mt--10">
              <dl class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">用 途</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </dl>
              <div class="u-flex u-flex_gap--10">
                <dt>
                  <span class="c-tagType02">竣 工</span>
                </dt>
                <dd class="c-caseType01_txt">テキストが入ります</dd>
              </div>
            </div>
            <p class="c-caseType01_txt u-mt--10">テキストが入ります</p>
          </a>
        </div>
      </div>
    </div>

    <div class="c-slideType01_arrow--prev swiper-button-prev u-dn--sp"></div>
    <div class="c-slideType01_arrow--next swiper-button-next u-dn--sp"></div>
  </div>

  <div class="c-slideType01_pagination swiper-pagination u-mt--60 u-db--pc"></div>

  <div class="c-slideType01_scrollbar swiper-scrollbar u-m_auto u-mt--40 u-db--sp"></div>
</div>
  `;
};

export const SliderType02 = () => {
  return `
    <div class="c-slideType02 swiper js-slider02">
      <div class="c-slideType02_wrap swiper-wrapper">
        <div class="c-slideType02_item swiper-slide">
          <div class="c-slideType02_itemInner">
            <img src="https://placehold.jp/280x240.png" alt="">
          </div>
        </div>
        <div class="c-slideType02_item swiper-slide">
          <div class="c-slideType02_itemInner">
            <img src="https://placehold.jp/280x240.png" alt="">
          </div>
        </div>
        <div class="c-slideType02_item swiper-slide">
          <div class="c-slideType02_itemInner">
            <img src="https://placehold.jp/280x240.png" alt="">
          </div>
        </div>
        <div class="c-slideType02_item swiper-slide">
          <div class="c-slideType02_itemInner">
            <img src="https://placehold.jp/280x240.png" alt="">
          </div>
        </div>
      </div>
    </div>
  `;
};

export const SliderType03 = () => {
  return `
  <div class="c-slideType03 swiper js-slider03">
    <div class="c-slideType03_wrap swiper-wrapper">
      <div class="c-slideType03_item swiper-slide">
        <div class="c-slideType03_itemWrap u-flex">
          <div class="c-slideType03_pic--left u-w--50p">
            <div class="c-slideType03_picInner">
              <img src="./assets/img/pic_recruit_01.jpg" alt="">
            </div>
          </div>
          <div class="c-slideType03_pic--right u-w--50p">
            <div class="c-slideType03_picInner">
              <img src="./assets/img/pic_recruit_02.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="c-slideType03_item swiper-slide">
        <div class="c-slideType03_itemWrap u-flex">
          <div class="c-slideType03_pic--left u-w--50p">
            <div class="c-slideType03_picInner">
              <img src="./assets/img/pic_recruit_03.jpg" alt="">
            </div>
          </div>
          <div class="c-slideType03_pic--right u-w--50p">
            <div class="c-slideType03_picInner">
              <img src="./assets/img/pic_recruit_04.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

export const SliderType04 = () => {
  return `
  <div class="c-slideType04 js-slider04 swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://placehold.jp/312x200.png" alt="">
      </div>
    </div>

    <div class="c-slideType04_bar swiper-scrollbar u-mt--40 u-dn--pc"></div>

    <div class="c-slideType04_navi u-flex u-flex_justify--center u-flex_items--center u-mt--40">
      <div class="c-slideType04_naviArrow--prev swiper-button-prev"></div>
      <div class="u-w_btn--220">
        <a href="" class="c-btnType01 c-btnType01--arrow c-btnType01--list">
          <span class="c-btnType01_bg"></span>
          <span class="c-btnType01_inner">一覧へ</span>
        </a>
      </div>
      <div class="c-slideType04_naviArrow--next swiper-button-next"></div>
    </div>
  </div>
  `;
};