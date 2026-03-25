export default {
  title: 'Utility/ColorBg',
  parameters: {
    docs: {
      description: {
        component: 'backgroundのカラー用のutility classになります。',
      },
    },
  },
};

export const BgMain = () => {
  return `
    <div class="u-color_bg--main u-color_txt--white c-box">#005bac</div>
  `;
};

export const BgDarkMain = () => {
  return `
    <div class="u-color_bg--darkMain u-color_txt--white c-box">#042d70</div>
  `;
};

export const BgBlack = () => {
  return `
    <div class="u-color_bg--black u-color_txt--white c-box">#393639</div>
  `;
};

export const BgBlack02 = () => {
  return `
    <div class="u-color_bg--black02 u-color_txt--white c-box">#000000</div>
  `;
};

export const BgGray = () => {
  return `
    <!-- #8792a3 -->
    <div class="u-color_bg--gray u-color_txt--white c-box">#8792a3</div>
  `;
};

export const BgGrayPale = () => {
  return `
    <div class="u-color_bg--grayPale c-box">#cfd3da</div>
  `;
};

export const BgWhite = () => {
  return `
    <div class="u-color_bg--white c-box c-frame_border">#ffffff</div>
  `;
};

export const BgOffWhite = () => {
  return `
    <div class="u-color_bg--offWhite c-box">#f0f3f6</div>
  `;
};

export const BgGreen = () => {
  return `
    <div class="u-color_bg--green u-color_txt--white c-box">#148c9b</div>
  `;
};

export const BgLightGreen = () => {
  return `
    <div class="u-color_bg--lightGreen u-color_txt--white c-box">#48b4be</div>
  `;
};

export const BgNavy = () => {
  return `
    <div class="u-color_bg--navy u-color_txt--white c-box">#148c9b</div>
  `;
};