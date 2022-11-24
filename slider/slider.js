var swiper = new Swiper(".swiper", 
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

const swiperWrapper = document.querySelector(".swiper-wrapper");

// If user hovers over swiper, autoplay will pause
swiperWrapper.addEventListener("mouseenter", function()
{
    swiper.autoplay.pause();
});

// If user stops hovering over swiper, autplay will resume
swiperWrapper.addEventListener("mouseleave", function()
{
    swiper.autoplay.run();
});