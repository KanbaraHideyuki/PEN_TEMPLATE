export function limitTxt() {
  
  $(function(){
    $(".limitTxtArea").each(function(){ //ターゲット(縮めるアイテム)
      var thisHeight = $(this).height(); //ターゲットの高さを取得
      var lineHeight = parseFloat($(this).css('line-height'));
      var lineNum = $(this).data('line');//data-lineの行数を取得
      var textNewHeight = lineHeight * lineNum;
      if (thisHeight > textNewHeight) {
        $(this).css({
            'height': textNewHeight
        });
      }
    });
  });

  if (window.matchMedia('(max-width: 767px)').matches) {
    //もっと見るボタン テキスト開閉 SP
    var itemHeightsSP = [];
    var returnHeightSP;
    var returnHeightsSP = [];
    $(function(){
      $(".limitTxtMoreSP").each(function(){ //ターゲット(縮めるアイテム)
        var thisHeightSP = $(this).height(); //ターゲットの高さを取得
        itemHeightsSP.push(thisHeightSP); //それぞれの高さを配列に入れる
        var lineHeightSP = parseFloat($(this).css('line-height'));
        var lineNumSP = $(this).data('line');//data-lineの行数を取得
        var textNewHeightSP = lineHeightSP * lineNumSP;
        if (thisHeightSP > textNewHeightSP) {
          $(this).css({
              'height': textNewHeightSP,
          });
          $(this).addClass("is-hidden");//'overflow':'hidden'用
          $(this).next().find('.js-txtMoreSP').css({'display': 'inline-flex'});
          returnHeightSP = $(this).height();//縮小時の高さを配列に入れる
          returnHeightsSP.push(returnHeightSP); //それぞれの高さを配列に入れる
        }else{
          $(this).next().find('.js-txtMoreSP').hide();
        }
      });
      //alert(itemHeightsSP);
      $(".js-txtMoreSP").click(function(){ //トリガーをクリックしたら
        if(!$(this).hasClass("is-show")) {
          var indexSP = $(this).index(".js-txtMoreSP"); //トリガーが何個目か
          var addHeightSP = itemHeightsSP[indexSP]; //個数に対応する高さを取得
          $(this).addClass("is-show");
          $(this).text('閉じる');
          $(this).parent().prev().animate({height: addHeightSP},200).removeClass("is-hidden"); //高さを元に戻す
        } else {
          var indexSP = $(this).index(".js-txtMoreSP"); //トリガーが何個目か
          var addreturnHeightSP = returnHeightsSP[indexSP];//個数に対応する高さを取得
          $(this).removeClass("is-show");
          $(this).text('もっと見る');
          $(this).parent().prev().animate({height: addreturnHeightSP},200).addClass("is-hidden"); //高さを制限する
        }
      });
    });
  }
}
