var swiper = new Swiper(".singleSwiper", 
{
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay:
    {
        delay: 2500,    //How long you have to wait till next slide
    },
    navigation: {   // Left and right buttons
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {   // Dots at the bottom
        el: ".swiper-pagination",   
        clickable: true,
    },
});

var fourSwiper = new Swiper(".fourColSwiper", 
{
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    breakpoints:
    {
        "@0.75": 
        {
            slidesPerView: 2
        },
        "@1.00": 
        {
            slidesPerView: 3
        },
        "@1.50": 
        {
            slidesPerView: 4
        },
    },
    navigation: {   // Left and right buttons
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var fiveSwiper = new Swiper(".fiveColSwiper",
{
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    breakpoints:
    {
        "@0.75": 
        {
            slidesPerView: 2
        },
        "@1.00": 
        {
            slidesPerView: 3
        },
        "@1.50": 
        {
            slidesPerView: 4
        },
        "@2.00":
        {
            slidesPerView: 5
        },
    },
    navigation: {   // Left and right buttons
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");

// If user hovers over swiper, autoplay will pause
swiperWrapper.addEventListener("mouseenter", function()
{
    swiper.autoplay.stop();
});

// If user stops hovering over swiper, autplay will resume
swiperWrapper.addEventListener("mouseleave", function()
{
    swiper.autoplay.start();
});

