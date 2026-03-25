export function ipadAdjustment() {

  window.addEventListener("load", function() {
    function isIpad() {
      return /iPad|Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;
    }
    if(isIpad()){
      var menuitembtns = document.querySelectorAll('.menu-item--btn > a');
      menuitembtns.forEach(function(menuitembtn) {
        menuitembtn.classList.add('is-ipadAdjustment');
      });
  
      var basebtns = document.querySelectorAll('.c-btn_base');
      basebtns.forEach(function(basebtn) {
        basebtn.classList.add('is-ipadAdjustment');
      });
    }
  });

}
