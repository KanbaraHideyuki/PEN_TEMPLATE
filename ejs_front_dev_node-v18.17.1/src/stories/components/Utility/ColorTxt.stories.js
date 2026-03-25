export default {
  title: 'Utility/ColorTxt',
  parameters: {
    docs: {
      description: {
        component: 'textのカラー用のutility classになります。',
      },
    },
  },
};

export const TxtBlack = () => {
  return `
    <p class="u-color_txt--black">ダミーテキストです。</p>
  `;
};

export const TxtBlack02 = () => {
  return `
    <p class="u-color_txt--black02">ダミーテキストです。</p>
  `;
};

export const TxtMain = () => {
  return `
    <p class="u-color_txt--main">ダミーテキストです。</p>
  `;
};

export const TxtDarkMain = () => {
  return `
    <p class="u-color_txt--darkMain">ダミーテキストです。</p>
  `;
};

export const TxtWhite = () => {
  return `
    <div class="u-color_bg--black c-box">
      <p class="u-color_txt--white">ダミーテキストです。</p>
    </div>
  `;
};

export const TxtGray = () => {
  return `
    <p class="u-color_txt--gray">ダミーテキストです。</p>
  `;
};

export const TxtGreen = () => {
  return `
    <p class="u-color_txt--green">ダミーテキストです。</p>
  `;
};

export const TxtLightGreen = () => {
  return `
    <p class="u-color_txt--lightGreen">ダミーテキストです。</p>
  `;
};