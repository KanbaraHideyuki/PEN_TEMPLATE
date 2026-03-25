export function jqHeaderHeight() {
  
  jQuery(function ($) {
  //ヘッダーの高さに連動
    function headerHeightSwitch() {
      var headerHeight = $('.l-header').outerHeight(); //ウィンドウサイズ取得
      $('.header_spacer').css({'padding-top': headerHeight});
      $('.anchor').css({'padding-top': headerHeight});
      $('.anchor').css({'margin-top': -headerHeight});
    }
    //初期ロード
    headerHeightSwitch();
    //横幅リサイズを監視
    let currentWidth = $(window).width();
    $(window).on('resize', function() {
        let newWidth = $(window).width();
        if (newWidth !== currentWidth) {
            currentWidth = newWidth;
            headerHeightSwitch();
        }
    });

  });

}