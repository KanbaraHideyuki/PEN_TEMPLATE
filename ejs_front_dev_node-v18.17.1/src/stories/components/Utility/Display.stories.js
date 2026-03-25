export default {
  title: 'Utility/Display',
  parameters: {
    docs: {
      description: {
        component: '表示/非表示用のutility classになります。',
      },
    },
  },
};

export const DisplayNone = () => {
  return `
    <div class="u-dn">全面非表示</div>
    <div class="u-dn--pc">PCのみ非表示</div>
    <div class="u-dn--sp">SPのみ非表示</div>
  `;
};

export const DisplayBlock = () => {
  return `
    <div class="u-db--pc">PCのみ表示</div>
    <div class="u-db--tab">Tabのみ表示</div>
    <div class="u-db--sp">SPのみ表示</div>
  `;
};