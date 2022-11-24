
const ratingButton = document.querySelector(".ratingButton");
const fiveStar = document.querySelector(".fiveStar");
const fourStar = document.querySelector(".fourStar");
const threeStar = document.querySelector(".threeStar");
const twoStar = document.querySelector(".twoStar");
const oneStar = document.querySelector(".oneStar");
const ratings = [oneStar, twoStar, threeStar, fourStar, fiveStar];
const ratingFinalized = false;

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    loop: true,
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

ratingButton.addEventListener("click", function()
{
    var options = document.querySelector(".ratingOptions");

    if (options.style.opacity == 1) // Ratings open, so close it
    {
        options.style.opacity = 0;
    }
    else    // Ratings closed, so open it
    {
        options.style.opacity = 1;
    }
});

fiveStar.addEventListener("click", function()
{
    highlightStars(5);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

fourStar.addEventListener("click", function()
{
    highlightStars(4);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

threeStar.addEventListener("click", function()
{
    highlightStars(3);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

twoStar.addEventListener("click", function()
{
    highlightStars(2);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

oneStar.addEventListener("click", function()
{
    highlightStars(1);
    ratingButton.style.color = "rgb(233, 216, 67)";
});


//Highlight stars from 1 to rating
function highlightStars(rating, isHigligted)
{
    for (let i = rating; i < 5; i++)
    {
        ratings[i].style.color = " rgb(61, 61, 61)";
    }

    // Highlight stars
    for (let i = 0; i < rating; i++)
    {
        ratings[i].style.color = "rgb(233, 216, 67)";
    }
}

// 

var toTop = document.getElementById("get_top");
toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

window.onscroll = function () {
    display();
};

function display() {
    if (document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}