export default {
  title: 'Combination/Tab',
  parameters: {
    docs: {
      description: {
        component: 'タブ切り替えのコンポーネントです。<br>jsで動きます。',
      },
    },
  },
};

export const TabDefault = () => {
  return `
    <div class="c-tabType01 js-tab01">
      <ul>
        <li class="c-tabType01_tab is-active js-tab01--trigger" data-target="tab01">Tab01</li>
        <li class="c-tabType01_tab js-tab01--trigger" data-target="tab02">Tab02</li>
        <li class="c-tabType01_tab js-tab01--trigger" data-target="tab03">Tab03</li>
        <li class="c-tabType01_tab js-tab01--trigger" data-target="tab04">Tab04</li>
      </ul>

      <ul>
        <li id="tab01" class="c-tabType01_panel is-active js-tab01--panel">Panel01</li>
        <li id="tab02" class="c-tabType01_panel js-tab01--panel">Panel02</li>
        <li id="tab03" class="c-tabType01_panel js-tab01--panel">Panel03</li>
        <li id="tab04" class="c-tabType01_panel js-tab01--panel">Panel04</li>
      </ul>
    </div>
  `;
};

export const TabType01 = () => {
  return `
    <div class="c-tabType01 js-tab01">
      <ul class="c-layoutType05 u-flex u-flex_wrap">
        <li class="c-layoutType05_item">
          <button class="c-btnType02 c-tabType01_tab is-active js-tab01--trigger" data-target="tab01">
            <span class="c-btnType02_inner">Tab01</span>
          </button>
        </li>
        <li class="c-layoutType05_item">
          <button class="c-btnType02 c-tabType01_tab js-tab01--trigger" data-target="tab02">
            <span class="c-btnType02_inner">Tab02</span>
          </button>
        </li>
        <li class="c-layoutType05_item">
          <button class="c-btnType02 c-tabType01_tab js-tab01--trigger" data-target="tab03">
            <span class="c-btnType02_inner">Tab03</span>
          </button>
        </li>
        <li class="c-layoutType05_item">
          <button class="c-btnType02 c-tabType01_tab js-tab01--trigger" data-target="tab04">
            <span class="c-btnType02_inner">Tab04</span>
          </button>
        </li>
      </ul>

      <ul>
        <li id="tab01" class="c-tabType01_panel is-active js-tab01--panel">Panel01</li>
        <li id="tab02" class="c-tabType01_panel js-tab01--panel">Panel02</li>
        <li id="tab03" class="c-tabType01_panel js-tab01--panel">Panel03</li>
        <li id="tab04" class="c-tabType01_panel js-tab01--panel">Panel04</li>
      </ul>
    </div>
  `;
};

export const TabSelectBox = () => {
  return `
    <div class="c-tabType01 js-tab01">
      <div class="c-selectType01 js-select01">
        <div class="c-selectType01_box js-select01--trigger">
          <span class="js-select01--select">選択してください</span>
        </div>

        <div class="c-selectType01_option js-select01--panel">
          <span class="c-selectType01_optionItem is-active js-select01--option js-tab01--trigger" data-value="Tab01" data-target="tab01">Tab01</span>
          <span class="c-selectType01_optionItem js-select01--option js-tab01--trigger" data-value="Tab02" data-target="tab02">Tab02</span>
          <span class="c-selectType01_optionItem js-select01--option js-tab01--trigger" data-value="Tab03" data-target="tab03">Tab03</span>
          <span class="c-selectType01_optionItem js-select01--option js-tab01--trigger" data-value="Tab04" data-target="tab04">Tab04</span>
          <span class="c-selectType01_optionItem js-select01--option js-tab01--trigger" data-value="Tab05" data-target="tab05">Tab05</span>
        </div>
      </div>

      <div>
        <div id="tab01" class="c-tabType01_panel is-active js-tab01--panel">Panel01</div>
        <div id="tab02" class="c-tabType01_panel js-tab01--panel">Panel02</div>
        <div id="tab03" class="c-tabType01_panel js-tab01--panel">Panel03</div>
        <div id="tab04" class="c-tabType01_panel js-tab01--panel">Panel04</div>
        <div id="tab05" class="c-tabType01_panel js-tab01--panel">Panel05</div>
      </div>
    </div>
  `;
};