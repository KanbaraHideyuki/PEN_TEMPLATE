export default {
  title: 'Components/Pagination',
  parameters: {
    docs: {
      description: {
        component: 'ページネーションのコンポーネントです',
      },
    },
  },
};

export const PaginationType01 = () => {
  return `
    <div class="c-paginationType01">
      <a class="c-paginationType01_arrow--prev is-disable"></a>
      <ul class="c-paginationType01_list">
        <li>
          <span>1</span>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
        ・・・
        <li>
          <a href="">10</a>
        </li>
      </ul>
      <a class="c-paginationType01_arrow--next"></a>
    </div>
  `;
};