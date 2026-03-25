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
}
