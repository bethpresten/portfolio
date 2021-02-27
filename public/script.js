const main = document.querySelector(".main");
const nav = document.querySelector(".navbar");
const translate = document.querySelectorAll(".translate");
const transloose = document.querySelectorAll(".transloose");
const graphicHeader = document.querySelector(".graphic-designer");
const webDevHeader = document.querySelector(".web-developer");
const iAm = document.querySelector(".i-am-a");
const iAmBeth = document.querySelector(".i-am-beth");
const header = document.querySelector("header");
let header_height = header.offsetHeight;

const offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
    if (window.pageYOffset > offset) {
        nav.classList.remove("bottom-nav");
        nav.classList.add("top-nav");
    } else {
        nav.classList.add("bottom-nav");
        nav.classList.remove("top-nav");
    }
};

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    console.log(scroll);
    console.log(header_height);
    translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
    webDevHeader.style.opacity = -scroll / (header_height / 10) + 2.6;
    graphicHeader.style.opacity = -scroll / (header_height / 2) + 1.1;
    if (scroll > 400) {
        iAm.style.opacity = -scroll / header_height + 0.6;
        iAmBeth.style.opacity = -scroll / header_height + 0.6;
    } else {
        iAm.style.opacity = 1;
        iAmBeth.style.opacity = 1;
    }
});