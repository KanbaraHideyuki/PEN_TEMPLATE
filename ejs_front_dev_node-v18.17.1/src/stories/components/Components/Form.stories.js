export default {
  title: 'Components/Form',
  parameters: {
    docs: {
      description: {
        component: 'フォーム関連のコンポーネント一覧です。',
      },
    },
  },
};

export const FormText = () => {
  return `
    <input type="text" class="c-form_txt" name="" value="" placeholder="">
  `;
};

export const FormTel = () => {
  return `
    <input type="number" class="c-form_num" name="tel01" value="" placeholder="03">
  `;
};

export const FormContent = () => {
  return `
    <textarea class="c-form_content" placeholder="お問い合わせ内容をご記入ください。※全角1,000文字以内" maxlength="1000"></textarea>
  `;
};

export const FormSubmit = () => {
  return `
    <button type="submit" class="c-form_submit js-formPrivacy--submit" name="submit" disabled>確認画面へ</button>
  `;
};

export const FormAddress = () => {
  return `
    <button class="c-form_address">住所検索</button>
  `;
};
