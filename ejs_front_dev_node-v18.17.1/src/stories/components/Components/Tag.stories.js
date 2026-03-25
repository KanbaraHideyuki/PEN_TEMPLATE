export default {
  title: 'Components/Tag',
  parameters: {
    docs: {
      description: {
        component: 'タグのコンポーネント一覧です。',
      },
    },
  },
};

export const TagType01 = () => {
  return `
    <span class="c-tagType01">Tag</span>
    <span class="c-tagType01--wide">Tag</span>
  `;
};

export const TagType02 = () => {
  return `
    <span class="c-tagType02">用 途</span>
    <span class="c-tagType02 u-mt--10">竣 工</span>
  `;
};

export const TagType03 = () => {
  return `
    <span class="c-tagType03">必須</span>
  `;
};