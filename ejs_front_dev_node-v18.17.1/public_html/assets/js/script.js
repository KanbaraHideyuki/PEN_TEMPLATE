/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/headerMenuPc.js":
/*!****************************************!*\
  !*** ./src/js/modules/headerMenuPc.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerMenuPc: function() { return /* binding */ headerMenuPc; }
/* harmony export */ });
function headerMenuPc() {
  // const header = document.querySelector('.l-header_inner');
  // const globalNav = document.querySelector('.l-headerGlobal');
  // const triggers = document.querySelectorAll('.js-globalMenu--trigger');
  // const targets = document.querySelectorAll('.js-globalMenu--target');
  // const closeBtn = document.querySelector('.js-globalMenu--close');

  //const header = document.querySelector('.l-header');
  //const globalNav = document.querySelector('.l-headerGlobal');
  var dropdowns = document.querySelectorAll('.js-dropdown');
  // const targets = document.querySelectorAll('.js-globalMenu--target');
  //const closeBtn = document.querySelector('.js-globalMenu--close');

  // triggers.forEach(trigger => {
  //     trigger.addEventListener('mouseover', function () {
  //     triggers.forEach(trigger => {
  //         trigger.classList.remove('is-active');
  //     });
  //     this.classList.add('is-active');

  //     const submenu = trigger.querySelector(".submenu");
  //     if (submenu) {
  //         submenu.classList.add("is-view");
  //         submenu.style.maxHeight = submenu.scrollHeight + 'px';
  //       }
  //     })
  // });

  // triggers.forEach(trigger => {
  //     trigger.addEventListener('mouseleave', function () {
  //         this.classList.remove('is-active');

  //         const submenu = trigger.querySelector(".submenu");
  //         if (submenu) {
  //             submenu.classList.remove('is-view');
  //         }
  //     })
  // });

  var showSubMenu = function showSubMenu(event) {
    var subMenu = event.target.querySelector(".submenu");
    subMenu.classList.add('is-view');
  };
  var hideSubMenu = function hideSubMenu(event) {
    var subMenu = event.target.querySelector(".submenu");
    subMenu.classList.remove('is-view');
  };
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', showSubMenu);
    dropdown.addEventListener('mouseleave', hideSubMenu);
  });

  // const close = () => {
  //     //globalNav.classList.remove('is-open');
  //     targets.forEach(target => {
  //     target.classList.remove('is-view');
  //     });
  //     triggers.forEach(trigger => {
  //     trigger.classList.remove('is-active')
  //     });
  // }

  // header.addEventListener('mouseleave', function() {
  //     close();
  // })

  // closeBtn.addEventListener('mouseover', () => {
  //     close();
  // })

  // document.addEventListener('touchstart', (e) => {

  //     const dropdowns = document.querySelectorAll('.js-dropdown');
  //     dropdowns.forEach(dropdown => {
  //         if (!dropdown.classList.contains('is-active')) {
  //         return;
  //         }
  //         if (!e.target.closest('.js-dropdown')) {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         dropdown.classList.remove('is-active');
  //         }
  //     });
  // }, { passive: false });

  setSubMenuHeightEventListeners();
  function setSubMenuHeightEventListeners() {
    //サブメニューの高さ設定
    var menuItems = document.querySelectorAll('.js-dropdown');
    menuItems.forEach(function (menuItem) {
      var subMenu = menuItem.querySelector('.submenu');
      if (subMenu) {
        var subMenuHeight = subMenu.scrollHeight;
        subMenu.style.maxHeight = subMenuHeight + 'px';
      }
    });
  }

  //ページ全体の読み込み完了時
  window.addEventListener("load", function () {
    setSubMenuHeightEventListeners();
  });

  //リサイズ時
  window.addEventListener("resize", function () {
    setSubMenuHeightEventListeners();
  });
}

/***/ }),

/***/ "./src/js/modules/headerMenuSp.js":
/*!****************************************!*\
  !*** ./src/js/modules/headerMenuSp.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerMenuSp: function() { return /* binding */ headerMenuSp; }
/* harmony export */ });
function headerMenuSp() {}

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

/***/ "./src/js/modules/toggle.js":
/*!**********************************!*\
  !*** ./src/js/modules/toggle.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: function() { return /* binding */ toggle; }
/* harmony export */ });
function toggle() {
  var toggle = document.querySelector('.js-toggle');
  var toggle_header = document.querySelector('.l-header');
  var body = document.querySelector('body');
  var openMenu = function openMenu() {
    toggle.classList.add('is-active');
    toggle_header.classList.add('is-active');
    body.classList.add('is-fixed');
  };
  var closeMenu = function closeMenu() {
    toggle.classList.remove('is-active');
    toggle_header.classList.remove('is-active');
    body.classList.remove('is-fixed');
  };
  toggle.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  //aタグのクリックで閉じる
  if (toggle_header.classList.contains('is-active')) {
    var links = header.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  //リサイズで閉じる
  function checkWidth() {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  }

  // 初期
  checkWidth();

  // リサイズ
  window.addEventListener('resize', checkWidth);
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
/* harmony import */ var _modules_headerMenuPc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerMenuPc */ "./src/js/modules/headerMenuPc.js");
/* harmony import */ var _modules_headerMenuSp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headerMenuSp */ "./src/js/modules/headerMenuSp.js");
/* harmony import */ var _modules_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggle */ "./src/js/modules/toggle.js");
/* harmony import */ var _modules_jsScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/jsScroll */ "./src/js/modules/jsScroll.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/js/modules/smoothScroll.js");






// window.addEventListener('load', () => {
//   //crollに応じてアニメーションしたい時
//   scrollmagic();

//   //crollによる処理を間引きしたい時
//   // scrollAction();
// });

(0,_modules_headerMenuPc__WEBPACK_IMPORTED_MODULE_0__.headerMenuPc)();
(0,_modules_headerMenuSp__WEBPACK_IMPORTED_MODULE_1__.headerMenuSp)();
(0,_modules_toggle__WEBPACK_IMPORTED_MODULE_2__.toggle)();
(0,_modules_jsScroll__WEBPACK_IMPORTED_MODULE_3__.jsScroll)();
(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__.smoothScroll)();
}();
/******/ })()
;
//# sourceMappingURL=script.js.map