export default {
  title: 'Combination/Contact',
  parameters: {
    docs: {
      description: {
        component: 'お問い合わせ関連のコンポーネントです',
      },
    },
  },
};


export const ContactType01 = () => {
  return `
    <div class="c-contactType01">
      <div class="c-contactType01_inner">
        <a href="/contact/" class="c-contactType01_link u-flex u-flex_justify--end">
          <div class="c-contactType01_container u-flex u-flex_column u-flex_items--center u-color_txt--white u-lh--1">
            <h2 class="c-contactType01_ttl u-font--roboto u-txt_weight--bold">CONTACT</h2>
            <p class="c-contactType01_txt u-txt_weight--bold u-mt--10">お問い合わせはこちら</p>
            <span class="c-contactType01_ico">
              <img src="/assets/img/common/ico_mail.svg" alt="">
            </span>
          </div>
        </a>
      </div>
    </div>
  `;
};