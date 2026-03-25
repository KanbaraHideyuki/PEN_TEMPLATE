export function slider() {
  //.js-slider01
  const slider01 = document.querySelector('.js-slider01');
  if(slider01) {
    const swiper = new Swiper(slider01, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next--slider01",
        prevEl: ".swiper-button-prev--slider01",
      },
      pagination: {
        el: ".swiper-pagination--slider01",
        clickable: true, // クリック有効化
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
        }
      }
    });
  }


  //loop slide
  const brand_slide = document.querySelector('.loop_slide');
  if(brand_slide) {
    const swiper = new Swiper(brand_slide, {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
          //reverseDirection: true, // 逆回転にするオプション
      },
      on: {
        resize: function () {
          this.update();
          if (this.autoplay) this.autoplay.start();
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