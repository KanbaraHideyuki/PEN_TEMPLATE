export function smoothScroll() {

    document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
        var headerHeight = document.querySelector('.l-header').offsetHeight; // ヘッダーの高さを取得
        
        function smoothScroll(targetElement) {
            if (!targetElement) return;
            
            // 現在のスクロール位置とターゲットの位置を取得
            var startY = window.scrollY;
            var targetY = targetElement.getBoundingClientRect().top + startY - headerHeight;
            
            var duration = 500; // スクロールにかける時間（ミリ秒）
            var startTime = null;
            
            function scroll(timestamp) {
                if (startTime === null) startTime = timestamp;
                var elapsed = timestamp - startTime;
                var progress = Math.min(elapsed / duration, 1); // 0から1の間の進行率
                var nextScroll = startY + (targetY - startY) * progress;
                
                window.scrollTo(0, nextScroll);
                
                if (progress < 1) {
                    requestAnimationFrame(scroll);
                } else {
                    window.scrollTo(0, targetY); // 確実にターゲットに到達するため
                    // URLからハッシュを削除
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
