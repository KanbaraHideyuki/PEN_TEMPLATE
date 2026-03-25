export default {
  title: 'Combination/Search',
  parameters: {
    docs: {
      description: {
        component: '絞り込み検索のレイアウト一覧です。jsで実行されるので、対応されていません。',
      },
    },
  },
};

export const SearchType01 = () => {
  return `<form method="GET" action="" class="js-searchType01">
    <ul class="u-flex u-flex_wrap js-checkGroup">
      <li class="u-w--100p">
        <label class="u-w_btn--170 c-checkboxType01">
        <input type="checkbox" value="すべて" name="usage" data-value="all">
        <span class="c-checkboxType01_inner">すべて</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
        <input type="checkbox" value="医療・介護" name="usage">
        <span class="c-checkboxType01_inner">医療・介護</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
        <input type="checkbox" value="体育施設" name="usage">
        <span class="c-checkboxType01_inner">体育施設</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="体育施設" name="usage">
          <span class="c-checkboxType01_inner">体育施設</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="教育・研究" name="usage">
          <span class="c-checkboxType01_inner">教育・研究</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="商業施設" name="usage">
          <span class="c-checkboxType01_inner">商業施設</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="展示施設" name="usage">
          <span class="c-checkboxType01_inner">展示施設</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="工場" name="usage">
          <span class="c-checkboxType01_inner">工場</span>
        </label>
      </li>

      <li>
        <label class="u-w_btn--170 c-checkboxType01">
          <input type="checkbox" value="事務庁舎" name="usage">
          <span class="c-checkboxType01_inner">事務庁舎</span>
        </label>
      </li>
    </ul>

    <div class="u-mt--60 u-m_auto">
      <button type="submit" class="c-btnType01 c-btnType01--search">
        <span class="c-btnType01_bg"></span>
        <span class="c-btnType01_inner">絞り込み検索</span>
      </button>
    </div>
  </form>`
}