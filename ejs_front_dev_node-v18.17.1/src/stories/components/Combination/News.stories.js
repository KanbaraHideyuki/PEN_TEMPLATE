export default {
  title: 'Combination/News',
  parameters: {
    docs: {
      description: {
        component: '新着情報一覧用のコンポーネントです。',
      },
    },
  },
};

export const NewsType01 = () => {
  return `
    <ul>
      <li>
        <a href="" class="c-newsType01 c-border_bottom u-color_border--grayPale">
          <div class="c-newsType01_info u-flex u-flex_items--center">
            <p class="c-txt_date">2024.00.00</p>
            <span class="c-tagType01">Tag</span>
          </div>
          <p class="c-newsType01_txt u-mt--10">タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります <span class="c-newsType01_ico--pdf"></span></p>
        </a>
      </li>

      <li>
        <a href="" class="c-newsType01 c-border_bottom u-color_border--grayPale">
          <div class="c-newsType01_info u-flex u-flex_items--center">
            <p class="c-txt_date">2024.00.00</p>
            <span class="c-tagType01">Tag</span>
          </div>
          <p class="c-newsType01_txt u-mt--10">タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります <span class="c-newsType01_ico--anchor"></span></p>
        </a>
      </li>
      
      <li>
        <a href="" class="c-newsType01 c-border_bottom u-color_border--grayPale">
          <div class="c-newsType01_info u-flex u-flex_items--center">
            <p class="c-txt_date">2024.00.00</p>
            <span class="c-tagType01">Tag</span>
          </div>
          <p class="c-newsType01_txt u-mt--10">タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります</p>
        </a>
      </li>
    </ul>
  `;
};