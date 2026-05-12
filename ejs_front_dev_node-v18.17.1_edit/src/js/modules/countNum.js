export function countNum() {
    

    // function getDecimalPlaces(num) {
    //     const match = num.toString().match(/\.(\d+)$/);
    //     return match ? match[1].length : 0;  // match[1].length が正しい（過去版のmatch.lengthは誤り）
    // }

    // function formatNumber(num, decimals) {
    //     const parts = num.toFixed(decimals).split('.');
    //     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     return parts.join('.');
    // }

    // function animateCountUp(el) {
    //     const start = parseFloat(el.dataset.countStart) || 0;
    //     const end = parseFloat(el.dataset.countEnd) || 0;
    //     const duration = parseInt(el.dataset.countDuration, 10) || 2000;
    //     const decimals = getDecimalPlaces(end);
    //     let startTime = null;

    //     const step = (timestamp) => {
    //         if (!startTime) startTime = timestamp;
    //         const progress = Math.min((timestamp - startTime) / duration, 1);
    //         const current = start + (end - start) * progress;
    //         el.textContent = formatNumber(current, decimals);

    //         if (progress < 1) {
    //             requestAnimationFrame(step);
    //         } else {
    //             el.textContent = formatNumber(end, decimals);
    //         }
    //     };
    //     requestAnimationFrame(step);
    // }

    // // IntersectionObserverでビューポートインを検知（is-animated不要）
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             animateCountUp(entry.target);
    //             observer.unobserve(entry.target);  // 1回のみ
    //         }
    //     });
    // }, { threshold: 0.5 });  // 50%表示で開始（調整可）

    // document.querySelectorAll('.num').forEach(el => observer.observe(el));

    function getDecimalPlaces(num) {
        const match = num.toString().match(/\.(\d+)$/);
        return match ? match[1].length : 0;
    }

    function formatNumber(num, decimals) {
        const fixed = num.toFixed(decimals);
        const parts = fixed.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        // 小数点以下が存在する場合のみ<span class="few">で囲む
        if (parts[1]) {
            return `${parts[0]}.<span class="few">${parts[1]}</span>`;
        }
        return parts[0];
    }

    function animateCountUp(el) {
        const start = parseFloat(el.dataset.countStart) || 0;
        const end = parseFloat(el.dataset.countEnd) || 0;
        const duration = parseInt(el.dataset.countDuration, 10) || 2000;
        const decimals = getDecimalPlaces(end);
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = start + (end - start) * progress;
            el.innerHTML = formatNumber(current, decimals);  // textContent → innerHTML

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.innerHTML = formatNumber(end, decimals);  // 最終値もHTML
            }
        };
        requestAnimationFrame(step);
    }

    // Observer部分は変更なし
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.num').forEach(el => observer.observe(el));

}