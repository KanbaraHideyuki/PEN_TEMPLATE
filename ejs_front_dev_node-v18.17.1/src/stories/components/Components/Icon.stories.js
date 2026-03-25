export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      description: {
        component: 'アイコンのコンポーネント一覧です。',
      },
    },
  },
};

export const IconArrow = () => {
  return `
    <span class="c-ico_arrow"></span>
  `;
};

export const IconPdf = () => {
  return `
    <span class="c-ico_pdf"></span>
  `;
};

export const IconLink = () => {
  return `
    <span class="c-ico_link"></span>
    <span class="c-ico_link--gray"></span>
  `;
};