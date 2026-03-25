export default {
  title: 'Utility/ColorBorder',
  parameters: {
    docs: {
      description: {
        component: 'borderのカラー用のutility classになります。',
      },
    },
  },
};

export const BorderMain = () => {
  return `
    <div class="u-color_border--main c-border c-box">#005bac</div>
  `;
};

export const BorderBlack = () => {
  return `
    <div class="u-color_border--black c-border c-box">#393639</div>
  `;
};

export const BorderGray = () => {
  return `
    <div class="u-color_border--gray c-border c-box">#8792a3</div>
  `;
};

export const BorderGrayPale = () => {
  return `
    <div class="u-color_border--grayPale c-border c-box">#cfd3da</div>
  `;
};