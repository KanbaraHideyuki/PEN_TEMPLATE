export default {
  title: 'Components/Border',
  parameters: {
    docs: {
      description: {
        component: '要素間に引かれるborder用のコンポーネントです。<br>太さは0.1rem(1px)です。',
      },
    },
  },
};

export const Border = () => {
  return `
    <div class="c-border c-block"></div>
  `;
};

export const BorderTop = () => {
  return `
    <div class="c-border_top c-block"></div>
  `;
};

export const BorderBottom = () => {
  return `
    <div class="c-border_bottom c-block"></div>
  `;
};

export const BorderLeft = () => {
  return `
    <div class="c-border_left c-block"></div>
  `;
};

export const BorderRight = () => {
  return `
    <div class="c-border_right c-block"></div>
  `;
};