export default {
  title: 'Utility/Flex',
  parameters: {
    docs: {
      description: {
        component: 'flex用のutility classになります。',
      },
    },
  },
};

export const Flex = () => {
  return `
    <div class="u-flex">display: flex;</div>
    <div class="u-flex--pc">display: flex; - pc only</div>
    <div class="u-flex--sp">display: flex; - sp only</div>
  `;
};

export const FlexColumn = () => {
  return `
    <div class="u-flex_column">flex-direction: column;</div>
    <div class="u-flex_column--pc">flex-direction: column; - pc only</div>
    <div class="u-flex_column--sp">flex-direction: column; - sp only</div>
  `;
};

export const FlexReverse = () => {
  return `
    <div class="u-flex_reverse">flex-direction: row-reverse;</div>
    <div class="u-flex_reverse--pc">flex-direction: row-reverse; - pc only</div>
    <div class="u-flex_reverse--sp">flex-direction: row-reverse; - sp only</div>
  `;
};

export const FlexWrap = () => {
  return `
    <div class="u-flex_wrap">flex-wrap: wrap;</div>
    <div class="u-flex_wrap--pc">flex-wrap: wrap; - pc only</div>
    <div class="u-flex_wrap--sp">flex-wrap: wrap; - sp only</div>
  `;
};

export const JustifyContentCenter = () => {
  return `
    <div class="u-flex_justify--center">justify-content: center;</div>
    <div class="u-flex_justify--center--pc">justify-content: center; - pc only</div>
    <div class="u-flex_justify--center--sp">justify-content: center; - sp only</div>
  `;
};

export const JustifyContentBetween = () => {
  return `
    <div class="u-flex_justify--between">justify-content: space-between;</div>
    <div class="u-flex_justify--between--pc">justify-content: space-between; - pc only</div>
    <div class="u-flex_justify--between--sp">justify-content: space-between; - sp only</div>
  `;
};

export const JustifyContentEnd = () => {
  return `
    <div class="u-flex_justify--end">justify-content: flex-end;</div>
    <div class="u-flex_justify--end--pc">justify-content: flex-end; - pc only</div>
    <div class="u-flex_justify--end--sp">justify-content: flex-end; - sp only</div>
  `;
};

export const AlignItemsCenter = () => {
  return `
    <div class="u-flex_items--center">align-items: center;</div>
    <div class="u-flex_items--center--pc">align-items: center; - pc only</div>
    <div class="u-flex_items--center--sp">align-items: center; - sp only</div>
  `;
};

export const AlignItemsStart = () => {
  return `
    <div class="u-flex_items--start">align-items: flex-start;</div>
    <div class="u-flex_items--start--pc">align-items: flex-start; - pc only</div>
    <div class="u-flex_items--start--sp">align-items: flex-start; - sp only</div>
  `;
};

export const AlignItemsEnd = () => {
  return `
    <div class="u-flex_items--end">align-items: flex-end;</div>
    <div class="u-flex_items--end--pc">align-items: flex-end; - pc only</div>
    <div class="u-flex_items--end--sp">align-items: flex-end; - sp only</div>
  `;
};

export const FlexGap = () => {
  return `
    <ul class="u-flex u-flex_gap--10">
      <li class="c-block u-color_bg--black"></li>
      <li class="c-block u-color_bg--black"></li>
    </ul>

    <ul class="u-flex u-flex_gap--20 u-mt--16">
      <li class="c-block u-color_bg--black"></li>
      <li class="c-block u-color_bg--black"></li>
    </ul>

    <ul class="u-flex u-flex_gap--30 u-mt--16">
      <li class="c-block u-color_bg--black"></li>
      <li class="c-block u-color_bg--black"></li>
    </ul>

    <ul class="u-flex u-flex_gap--40 u-mt--16">
      <li class="c-block u-color_bg--black"></li>
      <li class="c-block u-color_bg--black"></li>
    </ul>
  `;
};