/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/gaspScrolltrigger.js":
/*!*********************************************!*\
  !*** ./src/js/modules/gaspScrolltrigger.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gaspScrolltrigger: function() { return /* binding */ gaspScrolltrigger; }
/* harmony export */ });
function gaspScrolltrigger() {
  // プラグインの登録
  gsap.registerPlugin(ScrollTrigger);

  //
  gsap.utils.toArray(".js-trigger").forEach(function (target) {
    gsap.to(target, {
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: target,
        start: "top 90%",
        //markers: true,
        toggleClass: {
          targets: target,
          className: "show"
        }
      }
    });
  });

  //
  gsap.utils.toArray(".js-trigger-delay").forEach(function (target) {
    gsap.to(target, {
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: target,
        start: "top 90%",
        //markers: true,
        toggleClass: {
          targets: target,
          className: "show"
        }
      }
    });
  });
  gsap.utils.toArray(".js-trigger-fadeIn").forEach(function (target) {
    gsap.from(target, {
      autoAlpha: 0,
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: target,
        start: "top 90%",
        //markers: true,
        toggleClass: {
          targets: target,
          className: "show"
        }
      }
    });
  });
  gsap.utils.toArray(".js-trigger-fadeInUp").forEach(function (target) {
    gsap.from(target, {
      y: 40,
      autoAlpha: 0,
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: target,
        start: "top 90%",
        //markers: true,
        toggleClass: {
          targets: target,
          className: "show"
        }
      }
    });
  });
  gsap.utils.toArray(".js-trigger-fadeInScale").forEach(function (target) {
    gsap.from(target, {
      scale: .5,
      autoAlpha: 0,
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: target,
        start: "top 90%",
        //markers: true,
        toggleClass: {
          targets: target,
          className: "show"
        }
      }
    });
  });

  //pin + timeline アニメーション
  var indexAbout = document.querySelector('.p-indexAbout');
  if (indexAbout) {
    var childA = indexAbout.querySelector('.p-indexAbout_row_txt_cont--01');
    var childB = indexAbout.querySelector('.p-indexAbout_row_txt_cont--02');
    var childC = indexAbout.querySelector('.p-indexAbout_row_txt_cont--03');
    var child_imgA = indexAbout.querySelector('.p-indexAbout_row_img--01');
    var child_imgB = indexAbout.querySelector('.p-indexAbout_row_img--02');
    var child_imgC = indexAbout.querySelector('.p-indexAbout_row_img--03');
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: indexAbout,
        start: "top top",
        end: "2000",
        pin: true,
        scrub: true,
        //markers: true,
        toggleClass: {
          targets: indexAbout,
          className: "is-active"
        },
        onEnter: function onEnter() {
          return indexAbout.classList.add("entered");
        },
        onLeave: function onLeave() {
          return indexAbout.classList.remove("entered");
        },
        onEnterBack: function onEnterBack() {
          return indexAbout.classList.add("entered");
        },
        onLeaveBack: function onLeaveBack() {
          return indexAbout.classList.remove("entered");
        }
      },
      defaults: {
        duration: 200 // すべての子アニメーションに1秒のdurationを設定
      }
    });
    tl.set([childB, childC], {
      opacity: 0
    }).set([child_imgB, child_imgC], {
      opacity: 0,
      rotation: -5,
      x: 50
    }).to(childA, {
      opacity: 0,
      delay: 200
    }).to(child_imgA, {
      opacity: 0,
      rotation: 5,
      x: -50,
      y: 50
    }, "<").to(childB, {
      opacity: 1
    }, "<").to(child_imgB, {
      opacity: 1,
      rotation: 0,
      x: 0
    }, "<").to(childB, {
      opacity: 0,
      delay: 200
    }).to(child_imgB, {
      opacity: 0,
      rotation: 5,
      x: -50,
      y: 50
    }, "<").to(childC, {
      opacity: 1
    }, "<").to(child_imgC, {
      opacity: 1,
      rotation: 0,
      x: 0
    }, "<");
  }
}

/***/ }),

/***/ "./src/js/modules/jqAccordion.js":
/*!***************************************!*\
  !*** ./src/js/modules/jqAccordion.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jqAccordion: function() { return /* binding */ jqAccordion; }
/* harmony export */ });
function jqAccordion() {
  jQuery(function ($) {
    $('.ac_panel .ac_heading').on('click', function () {
      $(this).next('.ac_content').slideToggle();
      $(this).toggleClass('is-active');
    });
  });
}

/***/ }),

/***/ "./src/js/modules/jqHeaderHeight.js":
/*!******************************************!*\
  !*** ./src/js/modules/jqHeaderHeight.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jqHeaderHeight: function() { return /* binding */ jqHeaderHeight; }
/* harmony export */ });
function jqHeaderHeight() {
  jQuery(function ($) {
    //ヘッダーの高さに連動
    function headerHeightSwitch() {
      var headerHeight = $('.l-header').outerHeight(); //ウィンドウサイズ取得
      $('.header_spacer').css({
        'padding-top': headerHeight
      });
      $('.anchor').css({
        'padding-top': headerHeight
      });
      $('.anchor').css({
        'margin-top': -headerHeight
      });
    }
    //初期ロード
    headerHeightSwitch();
    //横幅リサイズを監視
    var currentWidth = $(window).width();
    $(window).on('resize', function () {
      var newWidth = $(window).width();
      if (newWidth !== currentWidth) {
        currentWidth = newWidth;
        headerHeightSwitch();
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/jqHeaderMenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/jqHeaderMenu.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jqHeaderMenu: function() { return /* binding */ jqHeaderMenu; }
/* harmony export */ });
function jqHeaderMenu() {
  jQuery(function () {
    //navi SP
    var toggle = $(".js-toggle");
    var header = $(".l-header");
    var toggle_target = $(".js-toggle--target");

    //bodyのスクロール位置の格納
    var state = false;
    var scrollpos;

    //open
    function menuOpen() {
      toggle.addClass('is-active');
      header.addClass('is-active');
      toggle_target.slideDown();
    }

    //close
    function menuClose() {
      toggle.removeClass('is-active');
      header.removeClass('is-active');
      toggle_target.slideUp();
      $('.menu').removeClass('is-openchild').removeClass('is-opengrand');
      $('.menu').children().removeClass('is-open');
      $('.menu').children().removeClass('is-active');
    }

    //is-fixedの制御
    function swichFixed() {
      if (state == false) {
        scrollpos = $(window).scrollTop();
        $('body').addClass('is-fixed').css({
          'top': -scrollpos
        });
        state = true;
      } else {
        $('body').removeClass('is-fixed').css({
          'top': 0
        }), window.scrollTo(0, scrollpos);
        state = false;
      }
    }

    //toggle開閉
    toggle.on('click', function () {
      if (header.hasClass('is-active')) {
        menuClose();
      } else {
        menuOpen();
      }
      swichFixed();
    });

    //navi sp
    if (window.matchMedia('(max-width: 767px)').matches) {
      // 親メニュー処理
      $('.menu_item--hasChildren').click(function () {
        $(this).toggleClass('menu_open');
        // メニュー表示/非表示
        $(this).next('.submenu').slideToggle();
      });
      // 子メニュー処理
      $('.menu_item--hasChildren').click(function (e) {
        // メニュー表示/非表示
        $(this).children('.submenu').slideToggle();
        e.stopPropagation();
      });
    }

    //aタグでclose
    $('.l-header a').on('click', function () {
      if (header.hasClass('is-active')) {
        menuClose();
        swichFixed();
      }
    });

    //指定要素でclose
    $('.nav_close').on('click', function () {
      if (header.hasClass('is-active')) {
        menuClose();
        swichFixed();
      }
    });

    //navi PC//////////////////////////////
    if (window.matchMedia('(min-width: 768px)').matches) {
      $(function () {
        $('ul.menu li.menu_item').hover(function () {
          $(this).find('.submenu').stop().slideDown();
        }, function () {
          $(this).find('.submenu').stop().slideUp();
        });
      });
    }
  }); //jQuery
}

/***/ }),

/***/ "./src/js/modules/jsScroll.js":
/*!************************************!*\
  !*** ./src/js/modules/jsScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsScroll: function() { return /* binding */ jsScroll; }
/* harmony export */ });
function jsScroll() {
  // js-scroll
  var wH = window.innerHeight;
  var EffectH = wH / 8 * 1;
  window.addEventListener('scroll', function () {
    var scTop = window.scrollY || document.documentElement.scrollTop;
    var scBottom = scTop + window.innerHeight;
    var effectPos = scBottom - EffectH;
    var scrollElements = document.querySelectorAll('.js-scroll, .js-scroll-delay');
    scrollElements.forEach(function (element) {
      var thisPos = element.offsetTop;
      if (thisPos < effectPos) {
        element.classList.add('show');
        setTimeout(function () {
          element.classList.add('done');
        }, 250);
      }
    });
  });
  window.addEventListener('load', function () {
    var scTop = window.scrollY || document.documentElement.scrollTop;
    var scBottom = scTop + window.innerHeight;
    var effectPos = scBottom - EffectH;
    var scrollElements = document.querySelectorAll('.js-scroll, .js-scroll-delay');
    scrollElements.forEach(function (element) {
      var thisPos = element.offsetTop;
      if (thisPos < effectPos) {
        element.classList.add('show');
        setTimeout(function () {
          element.classList.add('done');
        }, 250);
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: function() { return /* binding */ slider; }
/* harmony export */ });
function slider() {
  //.js-slider01
  var slider01 = document.querySelector('.js-slider01');
  if (slider01) {
    var swiper = new Swiper(slider01, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next--slider01",
        prevEl: ".swiper-button-prev--slider01"
      },
      pagination: {
        el: ".swiper-pagination--slider01",
        clickable: true // クリック有効化
      },
      breakpoints: {
        768: {
          spaceBetween: 30
        }
      }
    });
  }

  //.js-slideType06_modal
  var slider06_modal = document.querySelector('.js-slideType06_modal');
  if (slider06_modal) {
    // モーダルを取得
    var modal = document.getElementById("modal");
    // モーダルを開く
    var openModalBtns = document.querySelectorAll(".modalOpen");
    // モーダルを閉じる
    var closeModalBtns = document.querySelectorAll(".modalClose");
    var _swiper = new Swiper(slider06_modal, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-Type06_modal",
        prevEl: ".swiper-button-prev-Type06_modal"
      },
      spaceBetween: 30 //任意のマージン
    });

    // モーダルのボタンクリック
    openModalBtns.forEach(function (openModalBtn) {
      openModalBtn.addEventListener("click", function () {
        // data-modalで設定したスライド番号を取得
        var modalIndex = openModalBtn.getAttribute('data-modal');
        _swiper.slideTo(modalIndex);
        modal.classList.add("is-active");
      });
    });

    // モーダルの閉じるボタンクリック
    closeModalBtns.forEach(function (closeModalBtn) {
      closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("is-active");
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/smoothScroll.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   smoothScroll: function() { return /* binding */ smoothScroll; }
/* harmony export */ });
function smoothScroll() {
  document.addEventListener('DOMContentLoaded', function () {
    return setTimeout(function () {
      var headerHeight = document.querySelector('.l-header').offsetHeight; // ヘッダーの高さを取得

      function smoothScroll(targetElement) {
        if (!targetElement) return;

        // 現在のスクロール位置とターゲットの位置を取得
        var startY = window.scrollY;
        var targetY = targetElement.getBoundingClientRect().top + startY - headerHeight;
        var duration = 500; // スクロールにかける時間（ミリ秒）
        var startTime = null;
        function scroll(timestamp) {
          if (startTime === null) startTime = timestamp;
          var elapsed = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1); // 0から1の間の進行率
          var nextScroll = startY + (targetY - startY) * progress;
          window.scrollTo(0, nextScroll);
          if (progress < 1) {
            requestAnimationFrame(scroll);
          } else {
            window.scrollTo(0, targetY); // 確実にターゲットに到達するため
            // URLからハッシュを削除
            setTimeout(function () {
              history.replaceState(null, null, ' ');
            }, 0);
          }
        }
        requestAnimationFrame(scroll);
      }

      // ページロード時にハッシュが存在する場合の処理
      if (window.location.hash) {
        var initialTargetElement = document.getElementById(window.location.hash.substring(1));
        if (initialTargetElement) {
          setTimeout(function () {
            window.scrollTo(0, window.scrollY - headerHeight);
            smoothScroll(initialTargetElement);
          }, 0);
        }
      }
      var links = document.querySelectorAll('a[href^="#"], a[href*="#"]');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
          // 現在のページ内リンクか確認
          if (this.pathname === window.location.pathname) {
            event.preventDefault();
            var targetId = this.getAttribute('href').split('#')[1];
            var targetElement = document.getElementById(targetId);
            smoothScroll(targetElement);
          }
        });
      }
    }, 100);
  });
}

/***/ }),

/***/ "./src/js/modules/tabletViewport.js":
/*!******************************************!*\
  !*** ./src/js/modules/tabletViewport.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabletViewport: function() { return /* binding */ tabletViewport; }
/* harmony export */ });
function tabletViewport() {
  document.addEventListener('DOMContentLoaded', function () {
    var ua = navigator.userAgent;
    var viewport = document.querySelector("meta[name=viewport]");
    if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1) {
      viewport.setAttribute("content", "width=device-width,initial-scale=1");
    } else {
      viewport.setAttribute("content", "width=1080");
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_jqHeaderMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/jqHeaderMenu */ "./src/js/modules/jqHeaderMenu.js");
/* harmony import */ var _modules_jqHeaderHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/jqHeaderHeight */ "./src/js/modules/jqHeaderHeight.js");
/* harmony import */ var _modules_jsScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/jsScroll */ "./src/js/modules/jsScroll.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/js/modules/smoothScroll.js");
/* harmony import */ var _modules_tabletViewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabletViewport */ "./src/js/modules/tabletViewport.js");
/* harmony import */ var _modules_gaspScrolltrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/gaspScrolltrigger */ "./src/js/modules/gaspScrolltrigger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_jqAccordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/jqAccordion */ "./src/js/modules/jqAccordion.js");









// window.addEventListener('load', () => {
//   //crollに応じてアニメーションしたい時
//   scrollmagic();

//   //crollによる処理を間引きしたい時
//   // scrollAction();
// });

(0,_modules_jqHeaderMenu__WEBPACK_IMPORTED_MODULE_0__.jqHeaderMenu)();
(0,_modules_jqHeaderHeight__WEBPACK_IMPORTED_MODULE_1__.jqHeaderHeight)();
(0,_modules_jsScroll__WEBPACK_IMPORTED_MODULE_2__.jsScroll)();
(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.smoothScroll)();
(0,_modules_tabletViewport__WEBPACK_IMPORTED_MODULE_4__.tabletViewport)();
(0,_modules_gaspScrolltrigger__WEBPACK_IMPORTED_MODULE_5__.gaspScrolltrigger)();
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)();
(0,_modules_jqAccordion__WEBPACK_IMPORTED_MODULE_7__.jqAccordion)();
}();
/******/ })()
;
//# sourceMappingURL=script.js.map