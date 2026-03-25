export function vhHeight() {

  //正確なvhの取得
  /*-
  使い方: calc(var(--vh, 1vh) * 100);
  -*/
  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();//初期化
  window.addEventListener('resize', setHeight);// 再計算
  
}
