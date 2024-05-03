
//////Scroll/////
const navBar = document.querySelector(".navBar");
const heroContnt = document.querySelector(".hero-content").offsetTop;
const backBtn = document.querySelector(".back-btn");
//Nav scroll
window.addEventListener("scroll", () => {
    let scrollN = window.scrollY;
    if (scrollN < heroContnt + 100) {
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


////
const navTapBtns = document.querySelectorAll(".nav-tabs .nav-item button");
const BaseURL = 'http://localhost:3200';

navTapBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);
        const getType = btn.getAttribute('food-type');
        getMenuItems(getType);
        console.log(getType);
    });
});

//get data
async function getMenuItems(type) {
    const res = await fetch(`${BaseURL}/${type}?_start=5&_limit=8`, {
        method: "GET",
        headers: {
            Accpet: "application/json",
            "Content-Type": "application/json",
        },
    })
    const finalRes = await res.json()
    console.log(finalRes);
    displayItems(finalRes,type)
}
getMenuItems('pizzas')

//display data
function displayItems(data,type) {
    Type= type;
    temp = ``
    data.forEach((data) =>
    (temp += `<div class="card mb-1" style="max-width: 550px;">
    <div class="row g-0">
    <div class="col-md-2">
    <img src="${data.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-10">
            <div class="card-body">
                <div>
                    <h5 class="card-title">${data.name}</h5>
                    <h5>$ ${data.price}</h5>
                    </div>
                    <p class="card-text">${data.dsc}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    `),
    )
    getID()
}
const navData= document.querySelectorAll(".menu-data");
function getID(){
   navData.forEach((data)=>{
    if(data.getAttribute("id") == Type){
        data.innerHTML = temp;
    }
   }) 
}

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
