export default {
  title: 'Utility/Font',
  parameters: {
    docs: {
      description: {
        component: 'font-family用のutility classになります。',
      },
    },
  },
};

export const FontNotoSans = () => {
  return `
    <p class="u-font--notoSans">Noto Sans JPです。</p>
  `;
};

export const FontRoboto = () => {
  return `
    <p class="u-font--roboto">Robotoです。</p>
  `;
};
