export function jqHeaderMenu() {


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
        scrollpos = $(window).scrollTop()
        $('body').addClass('is-fixed').css({ 'top': -scrollpos })
        state = true;
      } else {
        $('body').removeClass('is-fixed').css({ 'top': 0 }),
          window.scrollTo(0, scrollpos)
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
      })
    }


  });//jQuery
}
