
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

ratingButton.addEventListener("click", function () {
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

fiveStar.addEventListener("click", function () {
    highlightStars(5);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

fourStar.addEventListener("click", function () {
    highlightStars(4);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

threeStar.addEventListener("click", function () {
    highlightStars(3);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

twoStar.addEventListener("click", function () {
    highlightStars(2);
    ratingButton.style.color = "rgb(233, 216, 67)";
});

oneStar.addEventListener("click", function () {
    highlightStars(1);
    ratingButton.style.color = "rgb(233, 216, 67)";
});


//Highlight stars from 1 to rating
function highlightStars(rating, isHigligted) {
    for (let i = rating; i < 5; i++) {
        ratings[i].style.color = " rgb(61, 61, 61)";
    }

    // Highlight stars
    for (let i = 0; i < rating; i++) {
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
    if (document.documentElement.scrollTop > 400) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}


let arr = ["deadpool", "americansniper", "gattaca", "nope", "thebatman"];


var search = document.getElementsByClassName("search-data")[0];
var selectedid = document.getElementById("selectedid");

function showList() {
    var res = searchByIndexOf(search.value, arr);
    for (var i = 0; i < res.length; i++) {
        var a = document.createElement("a");
        var images = document.createElement("img");
        var li = document.createElement("li");
        a.innerHTML = res[i];
        if (res[i] == "deadpool") {
            a.href = "moviePages/deadpool.html";
            images.src = "../images/deadpool.jpeg";
        } else if (res[i] == "americansniper") {
            a.href = "moviePages/main.html";
            images.src = "../images/americansniper.jpeg";
        } else if (res[i] == "gattaca") {
            a.href = "moviePages/main.html";
            images.src = "../images/gattaca.jpeg";

        } else if (res[i] == "nope") {
            a.href = "moviePages/main.html";
            images.src = "../images/nope.jpeg";
        } else {
            a.href = "moviePages/main.html";
            images.src = "../images/thebatman.jpeg";
        }
        a.appendChild(images);
        document.getElementById("drop").appendChild(li);
        li.appendChild(a);
    }
}

search.oninput = function getMoreContents() {
    var drop = document.getElementById("drop");
    selectedid.removeChild(drop);

    var originalUL = document.createElement("ul");
    originalUL.id = "drop";
    selectedid.appendChild(originalUL);
    showList();
}

search.onfocus = function () {
    var originalUL = document.createElement("ul");
    originalUL.id = "drop";
    selectedid.appendChild(originalUL);
    showList();
}



function searchByIndexOf(keyWord, list) {
    if (!(list instanceof Array)) {
        return;
    }
    if (keyWord == "") {
        return [];
    } else {
        var len = list.length;
        var arr = [];
        for (var i = 0; i < len; i++) {
            let temp = keyWord.toLowerCase();
            if (list[i].toLowerCase().indexOf(temp) >= 0) {
                arr.push(list[i]);
            }
        }
        return arr;
    }
}