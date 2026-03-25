export function tabletViewport() {

    document.addEventListener('DOMContentLoaded', function() {
        const viewport = document.querySelector("meta[name=viewport]");
        
        function isTablet() {
            const ua = navigator.userAgent.toLowerCase();
            const isTouch = navigator.maxTouchPoints > 1;  // タッチ多点対応
            const width = window.outerWidth;
            const height = window.outerHeight;
            
            // iPad/Androidタブレット判定 (UA + サイズ + touch)
            return ( /ipad|tablet/i.test(ua) || 
                    ( /android/i.test(ua) && width >= 800 && width <= 1400 ) ||
                    (isTouch && width >= 768 && width <= 1400 && height >= 600) );
        }
        
        function updateViewport() {
            if (isTablet()) {
                viewport.setAttribute("content", "width=1180");
            } else {
                viewport.setAttribute("content", "width=device-width,initial-scale=1");
            }
        }
        
        updateViewport();
        window.addEventListener('resize', updateViewport);  // 向き変更対応
    });
}
