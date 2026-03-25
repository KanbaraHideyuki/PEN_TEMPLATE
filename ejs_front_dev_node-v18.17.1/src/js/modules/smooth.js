import smoothscroll from "smoothscroll-polyfill";
import SmoothScroll from "smooth-scroll";

//npm i smoothscroll-polyfill
//npm i smooth-scroll
export function smooth() {
  smoothscroll.polyfill();

  const scroll = new SmoothScroll('a[href*="#"]', {
    header: "#header",
    speed: 300,
    updateURL: false,
  });
}
