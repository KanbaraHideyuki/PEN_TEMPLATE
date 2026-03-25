export function scrollAnimation() {

    // document.addEventListener("DOMContentLoaded", function () {
    //     const fadeElements = document.querySelectorAll(".js-scrollAnimation");

    //     const observer = new IntersectionObserver((entries, observer) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("is-animated"); // クラスを追加してアニメーション開始
    //                 observer.unobserve(entry.target); // 一度表示されたら監視を解除
    //             }
    //         });
    //     }, { threshold: 0.2 }); // 20%表示されたら発火

    //     fadeElements.forEach((el) => observer.observe(el));
    // });

    document.addEventListener("DOMContentLoaded", function () {
        const fadeElements = document.querySelectorAll(".js-scrollAnimation");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-animated");
                    // 親子関係を考慮せず、すべての要素で個別にunobserve
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); // 20%表示されたら発火

        fadeElements.forEach((el) => observer.observe(el));
    });

}
