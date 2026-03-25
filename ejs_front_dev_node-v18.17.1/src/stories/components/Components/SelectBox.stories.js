export default {
  title: 'Components/SelectBox',
  parameters: {
    docs: {
      description: {
        component: 'セレクトボタンのコンポーネントです<br>jsで動くため、コードをそのままhtmlファイルに貼り付けてください。',
      },
    },
  },
};

export const SelectType01 = () => {
  return `
    <div class="c-selectType01 js-select01">
      <div class="c-selectType01_box js-select01--trigger is-notselected">
        <span class="js-select01--select">選択してください</span>
      </div>

      <div class="c-selectType01_option js-select01--panel">
        <span class="c-selectType01_optionItem is-active js-select01--option" data-value="Option01">Option01</span>
        <span class="c-selectType01_optionItem js-select01--option" data-value="Option02">Option02</span>
        <span class="c-selectType01_optionItem js-select01--option" data-value="Option03">Option03</span>
        <span class="c-selectType01_optionItem js-select01--option" data-value="Option04">Option04</span>
        <span class="c-selectType01_optionItem js-select01--option" data-value="Option05">Option05</span>
      </div>
    </div>
  `;
};