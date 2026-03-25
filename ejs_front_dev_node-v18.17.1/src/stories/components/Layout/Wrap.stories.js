export default {
  title: 'Layout/Wrap',
};

export const Wrap = () => {
  return `
    <div class="l-wrap c-block u-color_bg--black"></div>
      max幅 : 1080px<br>コンテンツ幅 : 1000px
  `;
};

export const WrapWide = () => {
  return `
    <div class="l-wrap_wide"></div>
      max幅 : 1400px（ほぼ100%扱い）
  `;
};

export const Wrap880 = () => {
  return `
    <div class="l-wrap_880"></div>
      コンテンツ幅 : 880px;
  `;
};