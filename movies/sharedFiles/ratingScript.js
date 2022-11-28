
const ratingButton = document.querySelector(".ratingButton");
const fiveStar = document.querySelector(".fiveStar");
const fourStar = document.querySelector(".fourStar");
const threeStar = document.querySelector(".threeStar");
const twoStar = document.querySelector(".twoStar");
const oneStar = document.querySelector(".oneStar");
const ratings = [oneStar, twoStar, threeStar, fourStar, fiveStar];
var ratingGiven = 0;

ratingButton.addEventListener("click", function()
{
    var options = document.querySelector(".ratingOptions");

    if (options.style.opacity == 1) // Ratings open, so close it
    {
        options.style.opacity = 0;
        setPointerEvent("none");
    }
    else    // Ratings closed, so open it
    {
        options.style.opacity = 1;
        setPointerEvent("auto");
    }
});

//  Hover events //
fiveStar.addEventListener("mouseenter", function()
{
    if (ratingGiven == 0)
        highlightStars(5);
});
fiveStar.addEventListener("mouseleave", function()
{   if (ratingGiven == 0)
        removeHighlight();
});

fourStar.addEventListener("mouseenter", function()
{
    if (ratingGiven == 0)
        highlightStars(4);
});
fourStar.addEventListener("mouseleave", function()
{
    if (ratingGiven == 0)
        removeHighlight();
});

threeStar.addEventListener("mouseenter", function()
{
    if (ratingGiven == 0)
        highlightStars(3);
});
threeStar.addEventListener("mouseleave", function()
{
    if (ratingGiven == 0)
        removeHighlight();
});

twoStar.addEventListener("mouseenter", function()
{
    if (ratingGiven == 0)
        highlightStars(2);
});
twoStar.addEventListener("mouseleave", function()
{
    if (ratingGiven == 0)
        removeHighlight();
});

oneStar.addEventListener("mouseenter", function()
{
    if (ratingGiven == 0)
        highlightStars(1);
});
oneStar.addEventListener("mouseleave", function()
{
    if (ratingGiven == 0)
        removeHighlight();
});
//  End of Hover events //


//  Click events    //
fiveStar.addEventListener("click", function()
{
    if (ratingGiven == 5)
    {
        undoRating();
    }
    else
    {
        highlightStars(5);
        giveRating(5);
    }
});

fourStar.addEventListener("click", function()
{
    if (ratingGiven == 4)
    {
        undoRating();
    }
    else
    {
        highlightStars(4);
        giveRating(4);
    }
});

threeStar.addEventListener("click", function()
{
    if (ratingGiven == 3)
    {
        undoRating();
    }
    else
    {
        highlightStars(3);
        giveRating(3);
    }
});

twoStar.addEventListener("click", function()
{
    if (ratingGiven == 2)
    {
        undoRating();
    }
    else
    {
        highlightStars(2);
        giveRating(2);
    }
});

oneStar.addEventListener("click", function()
{
    if (ratingGiven == 1)
    {
        undoRating();
    }
    else
    {
        highlightStars(1);
        giveRating(1);
    }
});
//  End of Click events //


//Highlight stars from 1 to rating
function highlightStars(rating)
{
    removeHighlight();

    // Highlight stars
    for (let i = 0; i < rating; i++)
    {
        ratings[i].style.color = "rgb(233, 216, 67)";
    }
}

//Remove Higlight from all stars
function removeHighlight()
{
    for (let i = 0; i < 5; i++)
    {
        ratings[i].style.color = "#2b3749";
    }
}

function giveRating(rating)
{
    ratingButton.style.color = "rgb(233, 216, 67)";
    ratingGiven = rating;
}

function undoRating()
{
    removeHighlight();
    ratingButton.style.color = "#2b3749";
    ratingGiven = false;
}

function setPointerEvent(setting)
{
    fiveStar.style.pointerEvents = setting;
    fourStar.style.pointerEvents = setting;
    threeStar.style.pointerEvents = setting;
    twoStar.style.pointerEvents = setting;
    oneStar.style.pointerEvents = setting;
}

var toTop = document.getElementById("get_top");
toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

window.onscroll = function () {
    display();
};

function display() {
    if (document.documentElement.scrollTop > 400) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}