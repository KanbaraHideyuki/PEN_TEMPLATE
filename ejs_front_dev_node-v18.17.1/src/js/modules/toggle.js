export function toggle() {

  const toggle = document.querySelector('.js-toggle');
  const toggle_header = document.querySelector('.l-header');
  const body = document.querySelector('body');

  const openMenu = () => {
    toggle.classList.add('is-active');
    toggle_header.classList.add('is-active');
    body.classList.add('is-fixed');
  }
  const closeMenu = () => {
    toggle.classList.remove('is-active');
    toggle_header.classList.remove('is-active');
    body.classList.remove('is-fixed');
  }

  toggle.addEventListener('click', function () {
    if(this.classList.contains('is-active')) {
      closeMenu();
    }else{
      openMenu();
    }
  });

  //aタグのクリックで閉じる
  if (toggle_header.classList.contains('is-active')) {
    var links = header.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
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