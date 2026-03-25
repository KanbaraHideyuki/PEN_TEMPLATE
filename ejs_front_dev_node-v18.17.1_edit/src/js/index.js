import { jqHeaderMenu } from './modules/jqHeaderMenu';
import { jqHeaderHeight } from './modules/jqHeaderHeight';
import { jsScroll } from './modules/jsScroll';
import { smoothScroll } from './modules/smoothScroll';
import { tabletViewport } from './modules/tabletViewport';
import { gaspScrolltrigger } from './modules/gaspScrolltrigger';
import { slider } from './modules/slider';
import { jqAccordion } from './modules/jqAccordion';

// window.addEventListener('load', () => {
//   //crollに応じてアニメーションしたい時
//   scrollmagic();
  
//   //crollによる処理を間引きしたい時
//   // scrollAction();
// });


jqHeaderMenu();
jqHeaderHeight();
jsScroll();
smoothScroll();
tabletViewport();
gaspScrolltrigger();
slider();
jqAccordion();