//////Scroll/////
const navBar = document.querySelector(".navBar");
const heroContnt = document.querySelector(".hero-content").offsetTop;
const backBtn = document.querySelector(".back-btn");
//Nav scroll
window.addEventListener("scroll", () => {
    let scrollN = window.scrollY;
    if (scrollN < heroContnt + 200) {
        navBar.style.background = 'transparent';
    } else {
        navBar.style.background = '#0F172B';
        navBar.style.paddingBlock = '.4rem';
    }
})
//backBtn scroll
window.addEventListener("scroll", () => {
    let scrollB = window.scrollY;
    if (scrollB < heroContnt - 10) {
        backBtn.style.opacity = "0";

    } else {
        backBtn.style.opacity = "1";
    }
})
///// To Top btn event/////
backBtn.addEventListener("click", () => {
    window.screenTop(0, 0);
})
/////About us counters/////
const firstCounter = document.querySelector(" .count-1 h5");
const secondCounter = document.querySelector(".count-2 h5");

const interval1 = setInterval(() => {
    firstCounter.textContent = +firstCounter.textContent + 1;
    if (+firstCounter.textContent >= 15) {
        clearInterval(interval1);
    }
}, 150)

const interval2 = setInterval(() => {
    secondCounter.textContent = +secondCounter.textContent + 1;
    if (+secondCounter.textContent >= 50) {
        clearInterval(interval2);
    }
}, 50)
