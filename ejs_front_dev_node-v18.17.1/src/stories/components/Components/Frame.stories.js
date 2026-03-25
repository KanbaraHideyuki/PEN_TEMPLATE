export default {
  title: 'Components/Frame',
  parameters: {
    docs: {
      description: {
        component: '要素の枠組みのコンポーネントです',
      },
    },
  },
};

export const BorderRadius = () => {
  return `
    <div class="c-frame_radius c-box u-color_bg--black u-color_txt--white">border-radius: 1rem;</div>
  `;
};

export const Shadow = () => {
  return `
    <div class="c-frame_shadow">
      <div class="c-frame_shadowInner c-box"></div>
    </div>

    <div class="c-frame_shadow--radius u-mt--32">
      <div class="c-frame_shadowInner c-box"></div>
    </div>
  `;
};