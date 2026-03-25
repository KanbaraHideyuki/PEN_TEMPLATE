export default {
  title: 'Combination/Form',
  parameters: {
    docs: {
      description: {
        component: 'フォーム関連のレイアウトコンポーネント一覧です',
      },
    },
  },
};

export const FormType01 = () => {
  return `
  <dl class="c-formType01">
    <dt class="u-flex u-flex_items--center u-flex_gap--10">
      <p class="c-txt">お名前（漢字）</p>
      <span class="c-tagType03">必須</span>
    </dt>
    <dd class="u-mt--10">
      <input type="text" class="c-form_txt" placeholder="技術　太郎">
    </dd>
  </dl>
  `
}

export const FormType02 = () => {
  return `
  <dd class="c-formType02 u-flex u-flex_wrap--sp">
    <span>
      <input type="number" class="c-form_num" name="tel01" value="" placeholder="03">
    </span>
    <span>
      <input type="number" class="c-form_num" name="tel02" value="" placeholder="3699">
    </span>
    <span>
      <input type="number" class="c-form_num" name="tel03" value="" placeholder="0411">
    </span>
  </dd>
  `
}

export const FormType03 = () => {
  return `
  <div class="c-formType03 u-mt--60 js-formPrivacy">
    <div class="c-formType03 u-flex u-flex_justify--center u-flex_items--center u-flex_gap--10 u-mt--24">
      <label class="c-checkboxType02">
        <input type="checkbox" name="privacy" value="" class="js-formPrivacy--trigger">
        <span class="c-checkboxType02_ico"></span>
      </label>
      <p class="c-txt">「<a href="/company/policy/privacypolicy/" class="u-txt_underline u-color_txt--main" target="_blank">個人情報保護方針</a>」について同意する</p>
      <span class="c-tagType03">必須</span>
    </div>

    <div class="u-w_btn--220 u-m_auto u-mt--60">
      <button type="submit" class="c-form_submit js-formPrivacy--submit" name="submit" disabled>確認画面へ</button>
    </div>
  </div>
  `
}