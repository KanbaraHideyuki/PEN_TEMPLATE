export function smoothScroll() {

    document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
        var headerHeight = document.querySelector('.l-header').offsetHeight; // ヘッダーの高さを取得
        
        function smoothScroll(targetElement) {
            if (!targetElement) return;
          
            var startY = window.scrollY;
            var targetY = targetElement.getBoundingClientRect().top + startY - headerHeight;
            var duration = 1000;
            var startTime = null;
          
            //easing設定
            // function easeInOutCubic(t) {
            //   return t < 0.5
            //     ? 4 * t * t * t
            //     : 1 - Math.pow(-2 * t + 2, 3) / 2;
            // }
            //easing設定
            function easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }
          
            function scroll(timestamp) {
              if (startTime === null) startTime = timestamp;
              var elapsed = timestamp - startTime;
              var progress = Math.min(elapsed / duration, 1);
              var easedProgress = easeOutQuart(progress);
              var nextScroll = startY + (targetY - startY) * easedProgress;
          
              window.scrollTo(0, nextScroll);
          
              if (progress < 1) {
                requestAnimationFrame(scroll);
              } else {
                window.scrollTo(0, targetY);
                setTimeout(function() {
                  history.replaceState(null, null, ' ');
                }, 0);
              }
            }
          
            requestAnimationFrame(scroll);
        }

        // ページロード時にハッシュが存在する場合の処理
        if (window.location.hash) {
            var initialTargetElement = document.getElementById(window.location.hash.substring(1));
            if (initialTargetElement) {
                setTimeout(function() {
                    window.scrollTo(0, window.scrollY - headerHeight);
                    smoothScroll(initialTargetElement);
                }, 0);
            }
        }
        
        var links = document.querySelectorAll('a[href^="#"], a[href*="#"]');
        
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(event) {
                // 現在のページ内リンクか確認
                if (this.pathname === window.location.pathname) {
                    event.preventDefault();
                    var targetId = this.getAttribute('href').split('#')[1];
                    var targetElement = document.getElementById(targetId);
                    
                    smoothScroll(targetElement);
                }
            });
        }
    }, 100));

}
