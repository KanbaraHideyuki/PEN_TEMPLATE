export function gaspScrolltrigger() {

    // プラグインの登録
    gsap.registerPlugin(ScrollTrigger);

    //
    gsap.utils.toArray(".js-trigger").forEach((target) => {
        gsap.to(target, {
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: target,
                start: "top 90%",
                //markers: true,
                toggleClass: {
                    targets: target,
                    className: "show",
                },
            },
        });
    });

    //
    gsap.utils.toArray(".js-trigger-delay").forEach((target) => {
        gsap.to(target, {
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: target,
                start: "top 90%",
                //markers: true,
                toggleClass: {
                    targets: target,
                    className: "show",
                },
            },
        });
    });

    gsap.utils.toArray(".js-trigger-fadeIn").forEach((target) => {
        gsap.from(target, {
            autoAlpha: 0,
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: target,
                start: "top 90%",
                //markers: true,
                toggleClass: {
                    targets: target,
                    className: "show",
                },
            },
        });
    });

    gsap.utils.toArray(".js-trigger-fadeInUp").forEach((target) => {
        gsap.from(target, {
            y: 40,
            autoAlpha: 0,
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: target,
                start: "top 90%",
                //markers: true,
                toggleClass: {
                    targets: target,
                    className: "show",
                },
            },
        });
    });

    gsap.utils.toArray(".js-trigger-fadeInScale").forEach((target) => {
        gsap.from(target, {
            scale: .5,
            autoAlpha: 0,
            scrollTrigger: {
                toggleActions: "play none none reverse",
                trigger: target,
                start: "top 90%",
                //markers: true,
                toggleClass: {
                    targets: target,
                    className: "show",
                },
            },
        });
    });


    //pin + timeline アニメーション
    const indexAbout = document.querySelector('.p-indexAbout');
    if (indexAbout) {

        const childA = indexAbout.querySelector('.p-indexAbout_row_txt_cont--01');
        const childB = indexAbout.querySelector('.p-indexAbout_row_txt_cont--02');
        const childC = indexAbout.querySelector('.p-indexAbout_row_txt_cont--03');

        const child_imgA = indexAbout.querySelector('.p-indexAbout_row_img--01');
        const child_imgB = indexAbout.querySelector('.p-indexAbout_row_img--02');
        const child_imgC = indexAbout.querySelector('.p-indexAbout_row_img--03');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: indexAbout,
                start: "top top",
                end: "2000",
                pin: true,
                scrub: true,
                //markers: true,
                toggleClass: {targets: indexAbout, className: "is-active"},
                onEnter: () => indexAbout.classList.add("entered"),
                onLeave: () => indexAbout.classList.remove("entered"),
                onEnterBack: () => indexAbout.classList.add("entered"),
                onLeaveBack: () => indexAbout.classList.remove("entered")
            },
            defaults: {
                duration: 200 // すべての子アニメーションに1秒のdurationを設定
            }
        });
    
        tl
        .set([childB, childC], {opacity: 0})
        .set([child_imgB, child_imgC], {opacity: 0, rotation: -5, x: 50})
        .to(childA, {opacity: 0, delay:200 })
        .to(child_imgA, {opacity: 0, rotation: 5, x: -50, y: 50 }, "<")
        .to(childB, { opacity: 1 }, "<")
        .to(child_imgB, { opacity: 1, rotation: 0, x: 0 }, "<")
        .to(childB, { opacity: 0, delay:200 })
        .to(child_imgB, { opacity: 0, rotation: 5, x: -50, y: 50 }, "<")
        .to(childC, { opacity: 1 }, "<")
        .to(child_imgC, { opacity: 1, rotation: 0, x: 0 }, "<");
    }
    

}
