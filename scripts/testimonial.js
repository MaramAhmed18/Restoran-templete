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

/////
const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 20,
    loop: true,
    //   width: auto,
    slidesPerView: 1,
    breakpoints: {
        500: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },


    },
    pagination: {
        el: ".swiper-pagination",
        enabled: true,
        bulletClass: "swiper-pagination-bullet",
        bulletElement: "span",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});