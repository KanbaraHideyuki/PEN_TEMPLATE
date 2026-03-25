export default {
  title: 'Utility/LineHeight',
  parameters: {
    docs: {
      description: {
        component: 'line-height用のutility classになります。',
      },
    },
  },
};

export const LhType01 = () => {
  return `
    <p class="u-lh--1">line-height: 1;</p>
  `;
};

export const LhType1dot5 = () => {
  return `
    <p class="u-lh--1dot5">line-height: 1.5;</p>
  `;
};

export const LhType1dot6 = () => {
  return `
    <p class="u-lh--1dot6">line-height: 1.6;</p>
  `;
};