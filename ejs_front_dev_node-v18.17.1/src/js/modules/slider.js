export function slider() {
  //.js-slider01
  const slider01 = document.querySelector('.js-slider01');
  if(slider01) {
    const swiper = new Swiper(slider01, {
      slidesPerView: 1.704,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // クリック有効化
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true 
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false
        }
      }
    });
  }

  //.js-slider02
  const slider02 = document.querySelector('.js-slider02');
  if(slider02) {
    const swiper = new Swiper(slider02, {
      loop: true,
      slidesPerView: 1.4,
      spaceBetween: -40,
      speed: 5000,
      autoplay: {     //追記
        delay: 0,   //追記
      }, 
    });
  }

  //.js-slider03
  const slider03 = document.querySelector('.js-slider03');
  if(slider03) {
    const swiper = new Swiper(slider03, {
      loop: true,
      effect:'fade',
      allowTouchMove: false,
      speed: 600,
      autoplay: {
        delay: 5000
      }
    });
  }

  //.js-slider04
  const slider04 = document.querySelector('.js-slider04');
  if(slider04) {
    const el = slider04.querySelector('.swiper');
    const swiper = new Swiper(el, {
      slidesPerView: 1.704,
      spaceBetween: 30,
      loop: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      watchSlidesProgress: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: ".js-slider04 .swiper-button-next",
        prevEl: ".js-slider04 .swiper-button-prev",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true 
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
          initialSlide:1,
        }
      }
    });
  }

  //.js-slider05
  const slider05 = document.querySelector('.js-slider05');
  if(slider05) {
    const swiper = new Swiper(slider05, {
      loop: true,
      slidesPerView: 3,
      speed: 10000,
      spaceBetween: 20,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        }
      }
    });
  }

  //.js-slider06
  const slider06 = document.querySelector('.js-slider06');
  if(slider06) {
    const swiper = new Swiper(slider06, {
      loop: true,
      slidesPerView: 3,
      speed: 10000,
      spaceBetween: 10,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        }
      }
    });
  }

  //.js-slider06
  const slider06_reverse = document.querySelector('.js-slider06_reverse');
  if(slider06_reverse) {
    const swiper = new Swiper(slider06_reverse, {
      loop: true,
      slidesPerView: 3,
      speed: 10000,
      spaceBetween: 10,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        }
      }
    });
  }

  //.js-slideType06_modal
  const slider06_modal = document.querySelector('.js-slideType06_modal');
  if(slider06_modal) {

    // モーダルを取得
    const modal = document.getElementById("modal");
    // モーダルを開く
    const openModalBtns = document.querySelectorAll(".modalOpen");
    // モーダルを閉じる
    const closeModalBtns = document.querySelectorAll(".modalClose");

    const swiper = new Swiper(slider06_modal, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-Type06_modal",
        prevEl: ".swiper-button-prev-Type06_modal",
      },
      spaceBetween: 30, //任意のマージン
    });

    // モーダルのボタンクリック
    openModalBtns.forEach((openModalBtn) => {
      openModalBtn.addEventListener("click", () => {
        // data-modalで設定したスライド番号を取得
        const modalIndex = openModalBtn.getAttribute('data-modal');
        swiper.slideTo(modalIndex);
        modal.classList.add("is-active");
      });
    });
  
    // モーダルの閉じるボタンクリック
    closeModalBtns.forEach((closeModalBtn) => {
      closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("is-active");
      });
    });
  }

}