func_start()

function func_start() {
    loader();
    hamBurger()
    swiper();
    touchStart()
}

function touchStart() {
    var menu = document.querySelector(".ham-burger");
    var close = document.querySelector(".ham-burger .close-icon i")
    let touchstartX = 0;
    let touchEndX = 0;

    document.addEventListener("touchstart", (e) => {
        touchstartX = e.touches[0].clientX;
    })
    document.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX
        let swipeDist = touchEndX - touchstartX;

        if (swipeDist < -150) {
            menu.classList.add("open")
        } else if (swipeDist > 100) {
            menu.classList.remove("open")
        }
    

    })

    close.addEventListener("click", function () {
        menu.classList.remove("open")
    })
}

if (window.matchMedia("(max-width: 500px)").matches) {
    touchStart()
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    setTimeout(mobileAnimation, 3300)
}

if (window.matchMedia("(min-width: 1025px)").matches) {
    textImages();
    setTimeout(laptopAnimation, 3300)
}


function textImages() {
    var fixed = document.querySelector(".fixed")
    var wrapper = document.querySelector('.wrapper-container')
    wrapper.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    wrapper.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    let imageshow = document.querySelectorAll(".text-lines");
    imageshow.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })


}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}

function loader() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-120%"
    }, 3200)
}

function hamBurger() {
    var ham_burger = document.querySelector(".ham-burger")
    var menu = document.querySelector(".nav-main i")
    menu.addEventListener("click", function () {
        ham_burger.style.right = "0%"
    })

    var close = document.querySelector(".ham-burger .close-icon i").addEventListener("click", function () {
        ham_burger.style.right = "-100%"
    })

}

function laptopAnimation() {
    gsap.from("nav .left ", {
        y: -30,
        opacity: 0,
        delay: .4,
        stagger: .1
    })

    gsap.from("nav .right img", {
        y: -30,
        opacity: 0,
        duration: 0.5,
    })


    let words = document.querySelector(".section1 .text-area .left h4")
    let splitword = words.innerText.split(" ")
    words.innerHTML = splitword.map(word => `<span> ${word} </span>`).join(" ")

    gsap.from(".section1 .text-area .left h4 span", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: .1,
        scale: 0.7
    })

    gsap.from(".section1 .text-area .right h1", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 0.7,
        stagger: .1
    })

    gsap.from(".section1 video", {
        y: -40,
        opacity: 0,
        duration: .8,
        scale: 0.5,
    })

    let heading = document.querySelector(".section2 .text-area .left h3")
    heading.innerHTML = heading.textContent.split(" ").map(letter => `<span> ${letter} </span>`).join(" ")


    gsap.from(".section2 .text-area .left h3 span", {
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
            trigger: ".section2 .text-area .left h3",
            start: "top 90%",
        }
    })

    gsap.from(".section2 .text-area .right img", {
        opacity: 0,
        duration: 1,
        x: 10,
        scrollTrigger: {
            trigger: ".section2 .text-area .right",
            start: "top 70%",
        }
    })

    gsap.from(".section2 .text-area .right p", {
        opacity: 0,
        duration: 1,
        x: 10,
        delay: .4,
        scrollTrigger: {
            trigger: ".section2 .text-area .left h3",
            start: "top 70%",
        }
    })

    gsap.from(".section3 .text-lines h1", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".section3 .text-lines h1",
            start: "top 90%",
        }
    })

    gsap.from(".section4 .text-cont", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".section4 .swiper",
            start: "top 70%",
        }

    })
}

function mobileAnimation() {
    gsap.from("nav", {
        y: -60,
        opacity: 0,
        duration: 1
    })

    let words = document.querySelector(".section1 .text-area .left h4")
    let splitword = words.innerText.split(" ")
    words.innerHTML = splitword.map(word => `<span> ${word} </span>`).join(" ")

    gsap.from(".section1 .text-area .left h4 span", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: .1,
        scale: 0.7
    })

    gsap.from(".section1 .text-area .right h1", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        scale: 0.7,
        stagger: .1
    })

    gsap.from(".section1 video", {
        y: -40,
        opacity: 0,
        duration: .8,
    })

    let heading = document.querySelector(".section2 .text-area .left h3")
    heading.innerHTML = heading.textContent.split(" ").map(letter => `<span> ${letter} </span>`).join(" ")

    gsap.from(".section2 .text-area .left h3 span", {
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
            trigger: ".section2 .text-area .left h3",
            start: "top 90%",
        }
    })

    gsap.from(".section2 .text-area .right img", {
        opacity: 0,
        duration: 1,
        x: 10,
        scrollTrigger: {
            trigger: ".section2 .text-area .right",
            start: "top 70%",
        }
    })

    gsap.from(".section3 .text-lines h1", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".section3 .text-lines",
            start: "top 70%",
        }
    })

    gsap.from(".section3 .imges", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".section3 .text-lines",
            start: "top 70%",
        }
    })

    gsap.from(".section4 .text-cont", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".section4 .swiper",
            start: "top 70%",
        }
    })

    gsap.from(".imges", {
        y:-40,
        opacity: 0,
        scale: 0,
        duration: 0.6
    })
}