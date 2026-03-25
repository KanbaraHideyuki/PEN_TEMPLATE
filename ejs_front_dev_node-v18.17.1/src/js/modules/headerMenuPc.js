export function headerMenuPc() {

    // const header = document.querySelector('.l-header_inner');
    // const globalNav = document.querySelector('.l-headerGlobal');
    // const triggers = document.querySelectorAll('.js-globalMenu--trigger');
    // const targets = document.querySelectorAll('.js-globalMenu--target');
    // const closeBtn = document.querySelector('.js-globalMenu--close');

    //const header = document.querySelector('.l-header');
    //const globalNav = document.querySelector('.l-headerGlobal');
    const dropdowns = document.querySelectorAll('.js-dropdown');
    // const targets = document.querySelectorAll('.js-globalMenu--target');
    //const closeBtn = document.querySelector('.js-globalMenu--close');

    // triggers.forEach(trigger => {
    //     trigger.addEventListener('mouseover', function () {
    //     triggers.forEach(trigger => {
    //         trigger.classList.remove('is-active');
    //     });
    //     this.classList.add('is-active');

    //     const submenu = trigger.querySelector(".submenu");
    //     if (submenu) {
    //         submenu.classList.add("is-view");
    //         submenu.style.maxHeight = submenu.scrollHeight + 'px';
    //       }
    //     })
    // });

    // triggers.forEach(trigger => {
    //     trigger.addEventListener('mouseleave', function () {
    //         this.classList.remove('is-active');

    //         const submenu = trigger.querySelector(".submenu");
    //         if (submenu) {
    //             submenu.classList.remove('is-view');
    //         }
    //     })
    // });

    const showSubMenu = (event) => {
        const subMenu = event.target.querySelector(".submenu");
        subMenu.classList.add('is-view');
    };
    
    const hideSubMenu = (event) => {
        const subMenu = event.target.querySelector(".submenu");
        subMenu.classList.remove('is-view');
    };

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', showSubMenu);
        dropdown.addEventListener('mouseleave', hideSubMenu);
    });

    // const close = () => {
    //     //globalNav.classList.remove('is-open');
    //     targets.forEach(target => {
    //     target.classList.remove('is-view');
    //     });
    //     triggers.forEach(trigger => {
    //     trigger.classList.remove('is-active')
    //     });
    // }

    // header.addEventListener('mouseleave', function() {
    //     close();
    // })

    // closeBtn.addEventListener('mouseover', () => {
    //     close();
    // })

    // document.addEventListener('touchstart', (e) => {

    //     const dropdowns = document.querySelectorAll('.js-dropdown');
    //     dropdowns.forEach(dropdown => {
    //         if (!dropdown.classList.contains('is-active')) {
    //         return;
    //         }
    //         if (!e.target.closest('.js-dropdown')) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         dropdown.classList.remove('is-active');
    //         }
    //     });
    // }, { passive: false });


    setSubMenuHeightEventListeners();

    function setSubMenuHeightEventListeners() {
        //サブメニューの高さ設定
        var menuItems = document.querySelectorAll('.js-dropdown');
        menuItems.forEach(function(menuItem) {
            var subMenu = menuItem.querySelector('.submenu');
            if (subMenu) {
                var subMenuHeight = subMenu.scrollHeight;
                subMenu.style.maxHeight = subMenuHeight + 'px';
            }
        });
    }

    //ページ全体の読み込み完了時
    window.addEventListener("load", function() {
        setSubMenuHeightEventListeners();
    });

    //リサイズ時
    window.addEventListener("resize", function(){
        setSubMenuHeightEventListeners();
    });

}