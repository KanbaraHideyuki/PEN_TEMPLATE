import ScrollMagic from 'scrollmagic';

export function scrollmagic() {

  //Enter処理
  let controllerEnter = new ScrollMagic.Controller();

  let scrollEnter = document.querySelectorAll('.js-scrollAnimation');

  for (let i = 0; i < scrollEnter.length; i++) {
    let tag = scrollEnter[i];

    new ScrollMagic.Scene({
      triggerElement: tag,
      triggerHook: 'onEnter',
      offset: 150,
    })
      .setClassToggle(tag, 'is-animated')
      .addTo(controllerEnter);
  }

  //Center処理
  // let controllerCenter = new ScrollMagic.Controller();

  // let scrollCenter = document.querySelectorAll('.js-scrollAnimation02');

  // for (let i = 0; i < scrollCenter.length; i++) {
  //   let tag = scrollCenter[i];

  //   new ScrollMagic.Scene({
  //     triggerElement: tag,
  //     triggerHook: 'onCenter',
  //     offset: 0,
  //   })
  //     .setClassToggle(tag, 'is-animated')
  //     .addTo(controllerCenter);
  // }

  //Leave処理
  // let controllerLeave = new ScrollMagic.Controller();

  // let scrollLeave = document.querySelectorAll('.js-scrollAnimation03');

  // for (let i = 0; i < scrollLeave.length; i++) {
  //   let tag = scrollLeave[i];

  //   new ScrollMagic.Scene({
  //     triggerElement: tag,
  //     triggerHook: 'onLeave',
  //     offset: 0,
  //   })
  //     .setClassToggle(tag, 'is-animated')
  //     .addTo(controllerLeave);
  // }
}
