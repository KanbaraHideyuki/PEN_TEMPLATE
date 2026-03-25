export default {
  title: 'Utility/Text',
  parameters: {
    docs: {
      description: {
        component: 'text用のutility classになります。',
      },
    },
  },
};

export const TextLight = () => {
  return `
    <p class="u-txt_weight--light">ダミーテキストです。</p>
  `;
};

export const TextNormal = () => {
  return `
    <p class="u-txt_weight--normal">ダミーテキストです。</p>
  `;
};

export const TextMedium = () => {
  return `
    <p class="u-txt_weight--medium">ダミーテキストです。</p>
  `;
};


export const TextBold = () => {
  return `
    <p class="u-txt_weight--bold">ダミーテキストです。</p>
  `;
};

export const TextCenter = () => {
  return `
    <p class="u-txt_align--center">ダミーテキストです。</p>
    <p class="u-txt_align--center--pc">ダミーテキストです。（PCのみ）</p>
    <p class="u-txt_align--center--sp">ダミーテキストです。（Spのみ）</p>
  `;
};

export const TextRight = () => {
  return `
    <p class="u-txt_align--right">ダミーテキストです。</p>
    <p class="u-txt_align--right--pc">ダミーテキストです。</p>
    <p class="u-txt_align--right--sp">ダミーテキストです。</p>
  `;
};

export const TextUnderline = () => {
  return `
    <p class="u-txt_underline">text-decoration: underline;</p>
  `;
};