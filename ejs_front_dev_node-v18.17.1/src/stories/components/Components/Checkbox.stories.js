export default {
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      description: {
        component: 'チェックボックスのコンポーネント一覧です。横幅は100%ですので、親要素やコンポーネントに横幅を設定してください',
      },
    },
  },
};

export const CheckboxType01 = () => {
  return `<label class="c-checkboxType01">
  <input type="checkbox" value="ダミー" name="">
  <span class="c-checkboxType01_inner js-checkBtn">ダミー</span>
</label>`
}

export const CheckboxType02 = () => {
  return `
  <label class="c-checkboxType02">
    <input type="checkbox" name="privacy" value="" class="js-formPrivacy--trigger">
    <span class="c-checkboxType02_ico"></span>
  </label>
  `
}