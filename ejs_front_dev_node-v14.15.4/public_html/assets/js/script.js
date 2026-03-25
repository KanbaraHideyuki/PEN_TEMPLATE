/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/common */ "./src/js/modules/common.js");

Object(_modules_common__WEBPACK_IMPORTED_MODULE_0__["common"])(); //import { limitTxt } from './modules/limitTxt';
//limitTxt();

/***/ }),

/***/ "./src/js/modules/common.js":
/*!**********************************!*\
  !*** ./src/js/modules/common.js ***!
  \**********************************/
/*! exports provided: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common", function() { return common; });
function common() {
  // タブレット表示
  $(function () {
    var ua = navigator.userAgent;
    var viewport = document.querySelector("meta[name=viewport]");

    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
      viewport.setAttribute("content", "width=device-width,initial-scale=1");
    } else {
      viewport.setAttribute("content", "width=1030");
    }
  }); // スマホtel link

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    jQuery(function ($) {
      $('.tel').each(function () {
        var str = $(this).html();

        if ($(this).children().is('img')) {
          $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
        } else {
          $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
        }
      });
    });
  } //正確なvhの取得

  /*-
  使い方: calc(var(--vh, 1vh) * 100);
  -*/


  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }

  setHeight(); //初期化

  window.addEventListener('resize', setHeight); // 再計算
  //ブレイクポイント画像切り替え

  var $elem = $('.sp_img');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 767; //ブレイクポイント指定

  function imageSwitch() {
    var windowWidth = parseInt($(window).width()); //ウィンドウサイズ取得

    $elem.each(function () {
      var $this = $(this);

      if (windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }

  imageSwitch(); // リサイズの実行タイミング設定

  var delayStart;
  var delayTime = 200;
  $(window).on('resize', function () {
    clearTimeout(delayStart);
    delayStart = setTimeout(function () {
      imageSwitch();
    }, delayTime);
  }); //navi PC

  if (window.matchMedia('(min-width: 768px)').matches) {
    jQuery(function ($) {
      $('ul.menu li.menu-item').hover(function () {
        $(this).find('.sub-menu').stop().slideDown();
      }, function () {
        $(this).find('.sub-menu').stop().slideUp();
      });
    });
  } //navi sp


  if (window.matchMedia('(max-width: 1400px)').matches) {
    // 親メニュー処理
    $('.menu-item-has-children').click(function () {
      $(this).toggleClass('menu_open'); // メニュー表示/非表示

      $(this).next('.sub-menu').slideToggle();
    }); // 子メニュー処理

    $('.menu-item-has-children').click(function (e) {
      // メニュー表示/非表示
      $(this).children('.sub-menu').slideToggle();
      e.stopPropagation();
    });
  } //navi SP


  jQuery(function ($) {
    //bodyのスクロール位置の格納
    var state = false;
    var scrollpos;
    $('#toggle').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.l-header').removeClass('active');
        $('.l-header_navArea').fadeOut();
      } else {
        $(this).addClass('active');
        $('.l-header').addClass('active');
        $('.l-header_navArea').fadeIn();
      }

      if (state == false) {
        scrollpos = $(window).scrollTop();
        $('body').addClass('fixed').css({
          'top': -scrollpos
        });
        state = true;
      } else {
        $('body').removeClass('fixed').css({
          'top': 0
        }), window.scrollTo(0, scrollpos);
        state = false;
      }
    });
    $('.menu-item > a').click(function () {
      if ($('.l-header').hasClass('active')) {
        $('.l-header_navArea').fadeOut();
        $('.l-header').removeClass('active');
        $('#toggle').removeClass('active');

        if (state == false) {
          scrollpos = $(window).scrollTop();
          $('body').addClass('fixed').css({
            'top': -scrollpos
          });
          state = true;
        } else {
          $('body').removeClass('fixed').css({
            'top': 0
          }), window.scrollTo(0, scrollpos);
          state = false;
        }
      }
    });
    $('.nav_close').click(function () {
      if ($('.l-header').hasClass('active')) {
        $('.l-header_navArea').fadeOut();
        $('.l-header').removeClass('active');
        $('#toggle').removeClass('active');

        if (state == false) {
          scrollpos = $(window).scrollTop();
          $('body').addClass('fixed').css({
            'top': -scrollpos
          });
          state = true;
        } else {
          $('body').removeClass('fixed').css({
            'top': 0
          }), window.scrollTo(0, scrollpos);
          state = false;
        }
      }
    });
  }); //scroll_header

  var startPos = 0,
      winScrollTop = 0;
  var headerHight = $('.l-header_inner').outerHeight();
  jQuery(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();

    if (jQuery(this).scrollTop() > headerHight) {
      if (winScrollTop >= startPos) {
        jQuery('.scroll_header').addClass('hide').css({
          top: -headerHight
        });
      } else {
        jQuery('.scroll_header').removeClass('hide').css({
          top: 0
        });
      }

      startPos = winScrollTop;
    }
  }); //js-scroll

  var wH = $(window).height();
  var EffectH = wH / 5 * 1;
  jQuery(window).on('scroll load', function () {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    jQuery('.js-scroll, .js-scroll-delay').each(function () {
      var thisPos = $(this).offset().top;

      if (thisPos < effectPos) {
        $.when(jQuery(this).addClass("show")).done(function () {
          jQuery(this).delay(250).queue(function () {
            jQuery(this).addClass("done");
          });
        });
      }
    });
  }); //ページトップ

  var pageTop = $('#pageTop');
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 550);
    return false;
  }); //スムーススクロール

  $('a[href^="#"]').click(function () {
    var speed = 550;
    var href = $(this).attr("href"); //var headerHight = $('.l-header_inner').outerHeight();

    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  }); //アコーディオン

  jQuery(function ($) {
    $('.ac_panel .ac_heading').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next('.ac_content').slideToggle();
      /*矢印の向きを変更*/

      $(this).toggleClass('active');
    });
  }); //タブ切り替え

  jQuery(function ($) {
    $('.tab_head .head_cat').click(function () {
      var index = $('.tab_head .head_cat').index(this);
      $('.tab_head .head_cat').removeClass('current');
      $(this).addClass('current');
      $.when($('.tab_body .body_cat').fadeOut()).done(function () {
        $('.tab_body .body_cat').removeClass('show'), $.when($('.tab_body .body_cat').eq(index).addClass('show')).done(function () {
          $('.tab_body .body_cat').eq(index).fadeIn();
        });
      });
    });
  }); //////住所検索

  jQuery(function ($) {
    $('.zip-button').click(function () {
      AjaxZip3.zip2addr('zip', '', 'address', 'address');
    });
  }); //////mwwpform 同意ボタン checkbox制御

  jQuery(function ($) {
    /* ページ読み込み時のボタン制御処理 */
    if ($('input[id="agreement"]:checked').val()) {
      $('[name="submitConfirm"]').prop("disabled", false);
    } else {
      $('[name="submitConfirm"]').prop("disabled", true);
    }
    /* 同意のチェックボックスをクリックした際のボタン制御処理 */


    $('[id="agreement"]').click(function () {
      if ($('input[id="agreement"]:checked').val()) {
        $('[name="submitConfirm"]').prop("disabled", false);
      } else {
        $('[name="submitConfirm"]').prop("disabled", true);
      }
    });
  });
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map