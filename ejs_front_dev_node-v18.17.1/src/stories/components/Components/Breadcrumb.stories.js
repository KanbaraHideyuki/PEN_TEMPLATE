export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      description: {
        component: 'パンくずリストのコンポーネントです',
      },
    },
  },
};

export const Breadcrumb = () => {
  return `
    <ul class="c-breadcrumb">
      <li>
        <a href="/">トップページ</a>
      </li>
      <li>
        <span>新着情報</span>
      </li>
    </ul>
  `;
};