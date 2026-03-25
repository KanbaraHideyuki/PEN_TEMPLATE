export function jsScroll() {

    // // js-scroll
    // var wH = window.innerHeight;
    // var EffectH = wH / 2 * 1;

    // window.addEventListener('scroll', function () {
    //     var scTop = window.scrollY || document.documentElement.scrollTop;
    //     var scBottom = scTop + window.innerHeight;
    //     var effectPos = scBottom - EffectH;
    //     var scrollElements = document.querySelectorAll('.js-inview-middle, .js-inview-middle-delay');

    //     scrollElements.forEach(function (element) {
    //         var thisPos = element.offsetTop;

    //         if (thisPos < effectPos) {
    //             element.classList.add('show');
    //             setTimeout(function () {
    //                 element.classList.add('done');
    //             }, 250);
    //         }
    //     });
    // });

    // window.addEventListener('load', function () {
    //     var scTop = window.scrollY || document.documentElement.scrollTop;
    //     var scBottom = scTop + window.innerHeight;
    //     var effectPos = scBottom - EffectH;
    //     var scrollElements = document.querySelectorAll('.js-inview-middle, .js-inview-middle-delay');

    //     scrollElements.forEach(function (element) {
    //         var thisPos = element.offsetTop;

    //         if (thisPos < effectPos) {
    //             element.classList.add('show');
    //             setTimeout(function () {
    //                 element.classList.add('done');
    //             }, 250);
    //         }
    //     });
    // });


    var wH = window.innerHeight;
    var EffectH = wH / 2.5;

    function updateEffectH() {
        wH = window.innerHeight;
        EffectH = wH / 2.5;
    }

    function checkInView() {
        var scrollElements = document.querySelectorAll('.js-inview-middle, .js-inview-middle-delay');

        scrollElements.forEach(function (element) {
            if (element.classList.contains('done')) return; // 一度doneが付いたらスキップ

            var rect = element.getBoundingClientRect();

            // ビューポートの下端は wH
            // 「画面下端からEffectH上まで」に要素上端が来たら発火
            if (rect.top < wH - EffectH) {
                element.classList.add('show');
                setTimeout(function () {
                    element.classList.add('done');
                }, 250);
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
    window.addEventListener('resize', function () {
        updateEffectH();
        checkInView();
    });

}
