import { headerMenuPc } from './modules/headerMenuPc';
import { headerMenuSp } from './modules/headerMenuSp';
import { toggle } from './modules/toggle';
import { jsScroll } from './modules/jsScroll';
import { smoothScroll } from './modules/smoothScroll';

// window.addEventListener('load', () => {
//   //crollに応じてアニメーションしたい時
//   scrollmagic();
  
//   //crollによる処理を間引きしたい時
//   // scrollAction();
// });

headerMenuPc();
headerMenuSp();
toggle();

jsScroll();
smoothScroll();