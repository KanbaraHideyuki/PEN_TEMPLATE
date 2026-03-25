export default {
  title: 'Utility/Width',
  parameters: {
    docs: {
      description: {
        component: 'width用のutility classになります。',
      },
    },
  },
};

export const Width100 = () => {
  return `
    <div class="u-w--100p c-block u-color_bg--black u-color_txt--white">width: 100%</div>
    <div class="u-w--100p--pc c-block u-color_bg--black u-color_txt--white u-mt--16">width: 100%; -- pcのみ</div>
    <div class="u-w--100p--sp c-block u-color_bg--black u-color_txt--white u-mt--16">width: 100%; -- spのみ</div>
  `;
};

export const Width50 = () => {
  return `
    <div class="u-w--50p c-block u-color_bg--black u-color_txt--white">width: 50%;</div>
    <div class="u-w--50p--pc c-block u-color_bg--black u-color_txt--white u-mt--16">width: 50%; -- pcのみ</div>
    <div class="u-w--50p--sp c-block u-color_bg--black u-color_txt--white u-mt--16">width: 50%; -- spのみ</div>
  `;
};

export const Width33 = () => {
  return `
    <div class="u-w--33p c-block u-color_bg--black u-color_txt--white">width: 33.33%;</div>
    <div class="u-w--33p--pc c-block u-color_bg--black u-color_txt--white u-mt--16">width: 33.33%; -- pcのみ</div>
    <div class="u-w--33p--sp c-block u-color_bg--black u-color_txt--white u-mt--16">width: 33.33%; -- spのみ</div>
  `;
};

export const Width25 = () => {
  return `
    <div class="u-w--25p c-block u-color_bg--black u-color_txt--white">width: 25%;</div>
    <div class="u-w--25p--pc c-block u-color_bg--black u-color_txt--white u-mt--16">width: 25%; -- pcのみ</div>
    <div class="u-w--25p--sp c-block u-color_bg--black u-color_txt--white u-mt--16">width: 25%; -- spのみ</div>
  `;
};

export const WidthBtn220 = () => {
  return `
    <div class="u-w_btn--220">
      <a href="" class="c-btnType01 c-btnType01--arrow">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>
  `;
};

export const WidthBtn170 = () => {
  return `
    <div class="u-w_btn--170">
      <button class="c-btnType04">Button</button>
    </div>
  `;
};

export const WidthBtn300 = () => {
  return `
    <div class="u-w_btn--300">
      <a href="" class="c-btnType01 c-btnType01--download">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">Button</span>
      </a>
    </div>
  `;
};