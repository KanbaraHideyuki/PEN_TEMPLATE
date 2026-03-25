export function movileTelLink() {

  //Mobile判定
  var mobile = false;
  var ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    ua.indexOf("iPad") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    mobile = true;
  }
  if(mobile){
    document.querySelectorAll('.tel').forEach(function(element) {
      var str = element.innerHTML;
      var child = element.children[0];
      
      if (child && child.tagName.toLowerCase() === 'img') {
          var phoneNumber = child.alt.replace(/-/g, '');
          var a = document.createElement('a');
          a.href = 'tel:' + phoneNumber;
          a.innerHTML = str;
          element.innerHTML = '';
          element.appendChild(a);
      } else {
          var phoneNumber = element.textContent.replace(/-/g, '');
          var a = document.createElement('a');
          a.href = 'tel:' + phoneNumber;
          a.innerHTML = str;
          element.innerHTML = '';
          element.appendChild(a);
      }
    });
  }
  // // スマホtel link
  // if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  //   jQuery(function($) {
  //       $('.tel').each(function() {
  //           var str = $(this).html();
  //           if ($(this).children().is('img')) {
  //               $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
  //           } else {
  //               $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
  //           }
  //       });
  //   });
  // }
  
}
