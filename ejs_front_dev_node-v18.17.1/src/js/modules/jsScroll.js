export function jsScroll() {

    // js-scroll
    var wH = window.innerHeight;
    var EffectH = wH / 8 * 1;

    window.addEventListener('scroll', function () {
        var scTop = window.scrollY || document.documentElement.scrollTop;
        var scBottom = scTop + window.innerHeight;
        var effectPos = scBottom - EffectH;
        var scrollElements = document.querySelectorAll('.js-scroll, .js-scroll-delay');
        
        scrollElements.forEach(function (element) {
            var thisPos = element.offsetTop;
            
            if (thisPos < effectPos) {
                element.classList.add('show');
                setTimeout(function () {
                    element.classList.add('done');
                }, 250);
            }
        });
    });

    window.addEventListener('load', function () {
        var scTop = window.scrollY || document.documentElement.scrollTop;
        var scBottom = scTop + window.innerHeight;
        var effectPos = scBottom - EffectH;
        var scrollElements = document.querySelectorAll('.js-scroll, .js-scroll-delay');
        
        scrollElements.forEach(function (element) {
            var thisPos = element.offsetTop;
            
            if (thisPos < effectPos) {
                element.classList.add('show');
                setTimeout(function () {
                    element.classList.add('done');
                }, 250);
            }
        });
    });
    
}
