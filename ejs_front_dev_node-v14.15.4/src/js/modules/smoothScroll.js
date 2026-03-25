export function smoothScroll() {
  $('a[href^="#"]').click(function () {
    var speed = 550;
    var href = $(this).attr("href");
    //var headerHight = $('.l-header_inner').outerHeight();
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
}
