export function pageTop() {
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
  });
}
