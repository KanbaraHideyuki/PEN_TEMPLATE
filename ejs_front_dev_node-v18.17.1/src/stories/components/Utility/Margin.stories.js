export default {
  title: 'Utility/Margin',
  parameters: {
    docs: {
      description: {
        component: 'margin用のutility classになります。',
      },
    },
  },
};

export const MarginAuto = () => {
  return `
    <div class="u-m_auto">margin: 0 auto;</div>
  `;
};

export const MarginTopBottom = () => {
  return `
    <div class="u-mtb--120">margin: 120px 0;</div>
  `;
};

export const MarginTop = () => {
  return `
    <div class="u-mt--10">margin-top: 10px;</div>
    <div class="u-mt--16">margin-top: 16px;</div>
    <div class="u-mt--20">margin-top: 20px;</div>
    <div class="u-mt--24">margin-top: 24px;</div>
    <div class="u-mt--32">margin-top: 32px;</div>
    <div class="u-mt--40">margin-top: 40px;</div>
    <div class="u-mt--60">margin-top: 60px;</div>
    <div class="u-mt--80">margin-top: 80px;</div>
    <div class="u-mt--120">margin-top: 120px;</div>
    <div class="u-mt--200">margin-top: 200px;</div>
  `;
};

export const MarginBottom = () => {
  return `
    <div class="u-mb--120">margin-bottom: 120px;</div>
  `;
};