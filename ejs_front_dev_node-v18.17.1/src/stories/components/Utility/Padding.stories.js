export default {
  title: 'Utility/Padding',
  parameters: {
    docs: {
      description: {
        component: 'padding用のutility classになります。',
      },
    },
  },
};

export const Padding = () => {
  return `
    <div class="u-ptb--40 u-color_bg--black u-color_txt--white">padding: 40px 0;</div>
    <div class="u-ptb--60 u-color_bg--black u-color_txt--white u-mt--16">padding: 60px 0;</div>
    <div class="u-ptb--100 u-color_bg--black u-color_txt--white u-mt--16">padding: 100px 0;</div>
    <div class="u-ptb--120 u-color_bg--black u-color_txt--white u-mt--16">padding: 120px 0;</div>
  `;
};


export const PaddingTop = () => {
  return `
    <div class="u-pt--60 u-color_bg--black u-color_txt--white">padding-top: 60px;</div>
    <div class="u-pt--120 u-color_bg--black u-color_txt--white u-mt--16">padding-top: 120px;</div>
  `;
};

export const PaddingBottom = () => {
  return `
    <div class="u-pb--120 u-color_bg--black u-color_txt--white">padding-bottom: 120px;</div>
  `;
};