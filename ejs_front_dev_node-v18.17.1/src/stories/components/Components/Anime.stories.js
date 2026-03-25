export default {
  title: 'Components/Anime',
  parameters: {
    docs: {
      description: {
        component: 'スクロールアニメーションのコンポーネントです<br>.js-scrollAnimationのクラスを付与された要素が画面内に入ると.is-animatedのクラスが付与されてアニメーションが実行されます。',
      },
    },
  },
};

export const SlideRight = () => {
  return `
    <div class="c-anime_slideLeft js-scrollAnimation"></div>
  `;
};

export const FadeUp = () => {
  return `
    <div class="c-anime_fadeUp js-scrollAnimation"></div>
  `;
};