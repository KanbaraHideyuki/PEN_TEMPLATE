export default {
  title: 'Combination/Case',
  parameters: {
    docs: {
      description: {
        component: '導入事例関連のコンポーネント一覧です',
      },
    },
  },
};

export const CaseType01 = () => {
  return `
    <div class="u-w--33p">
      <a href="" class="c-caseType01">
        <div class="c-caseType01_pic c-frame_radius">
          <img src="https://placehold.jp/312x234.png" alt="">
        </div>
        <p class="c-caseType01_ttl u-color_txt--main u-txt_weight--bold u-mt--24">タイトル</p>
        <span class="c-tagType01--wide u-mt--10">Tag</span>
        <div class="c-caseType01_info u-flex u-flex_column u-mt--10">
          <dl class="u-flex u-flex_gap--10">
            <dt>
              <span class="c-tagType02">用 途</span>
            </dt>
            <dd class="c-caseType01_txt">テキストが入ります</dd>
          </dl>
          <div class="u-flex u-flex_gap--10">
            <dt>
              <span class="c-tagType02">竣 工</span>
            </dt>
            <dd class="c-caseType01_txt">テキストが入ります</dd>
          </div>
        </div>
        <p class="c-caseType01_txt u-mt--10">テキストが入ります</p>
      </a>
    </div>
  `;
};