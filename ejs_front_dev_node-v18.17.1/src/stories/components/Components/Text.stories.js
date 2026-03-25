export default {
  title: 'Components/Text',
  parameters: {
    docs: {
      description: {
        component: 'テキストのコンポーネント一覧です。',
      },
    },
  },
};

export const Text = () => {
  return `
    <p class="c-txt">font-size: 16px;<br>line-height: 2.125;</p>
    <p class="c-txt--large u-mt--16">font-size: 20px;<br>line-height: 1.6;</p>
  `;
};

export const TextLead = () => {
  return `
    <p class="c-txt_lead">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
  `;
};

export const TextCaption = () => {
  return `
    <p class="c-txt_caption">※ font-size: 14px; line-height: 1.71;</p>
    <p class="c-txt_caption c-txt_indent--1 u-mt--16">※font-size: 14px;<br>line-height: 1.71;</p>
  `;
};

export const TextDate = () => {
  return `
    <p class="c-txt_date">2023.00.00</p>
  `;
};

export const TextListLink = () => {
  return `
    <ul class="c-txt_list">
      <li>
        <a href="" class="c-txt_listLink">株主総会</a>
      </li>
      <li>
        <a href="" class="c-txt_listLink c-txt_listLink--arrow">株主総会</a>
      </li>
      <li>
        <a href="" class="c-txt_listLink c-txt_listLink--target">株価情報</a>
      </li>
    </ul>
  `;
};

export const TextLink = () => {
  return `
    <p>
      <a href="" class="c-txtLink--arrow">タイトル<span class="c-ico_arrow"></span></a>
    </p>
    <p class="u-mt--16">
      <a href="" target="_blank" class="c-txtLink--pdf">タイトル<span class="c-ico_pdf"></span></a>
    </p>
    <p class="u-mt--16">
      <a href="" target="_blank" class="c-txtLink--target">タイトル<span class="c-ico_link"></span></a>
    </p>
  `;
};

export const TextDisc = () => {
  return `
    <p class="c-txt_disc c-txt">決算短信等の訂正が発表された場合、本データの記載内容は即時反映されません。</p>
  `;
};