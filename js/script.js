
let featuredIndex = 1;

showFeatured(featuredIndex);

function plusFeatured(num) {
    showFeatured(featuredIndex += num);
}

function currentFeatured(num) {
    showFeatured(featuredIndex = num);
}

function showFeatured(num) {
    let index;
    let slides = document.getElementsByClassName("myFeatured");
    let circles = document.getElementsByClassName("circle");
    if (num > slides.length) { featuredIndex = 1; }
    if (num < 1) { featuredIndex = slides.length; }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    for (index = 0; index < circles.length; index++) {
        circles[index].className = circles[index].className.replace(" active", "");
    }
    slides[featuredIndex - 1].style.display = "block";
    circles[featuredIndex - 1].className += " active";
}

class Movie {
    constructor(title, primaryCategory, secondaryCategory, rating, imgsrc, mainChar, actor2, actor3) {
        this.title = title;
        this.primaryCategory = primaryCategory;
        this.secondaryCategory = secondaryCategory;
        this.rating = rating;
        this.img = new Image();
        this.img.src = imgsrc;
        this.mainChar = mainChar;
        this.actor2 = actor2;
        this.actor3 = actor3;
    }
}

const deadpool = new Movie("Deadpool", "Action", "Comedy", 4.5, "images/deadpool.jpeg", "Ryan Reynolds", "Morena Baccarin", "Gina Carano");
const americanSniper = new Movie("American Sniper", "Action", "Biography", 4.5, "images/americansniper.jpeg", "Bradley Cooper", "Sienna Miller", "Kyle Gallner");
const gattaca = new Movie("Gattaca", "Sci-Fi", "Romance", 3.9, "images/gattaca.jpeg", "Ethan Hawke", "Uma Thurma", "Jude Law");
const nope = new Movie("Nope", "Horror", "Sci-Fi", 3.5, "images/nope.jpeg", "Daniel Kaluuya", "Keke Palmer", "Brandon Peresa");
const theBatman = new Movie("The Batman", "Action", "Crime", 4.0, "images/thebatman.jpeg", "Robert Pattinson", "Zoe Kravitz", "Jeffrey Wright");

let MovieList = [deadpool, americanSniper, gattaca, nope, theBatman];



function displayDemo() {
    let demoList = document.getElementsByClassName("demo");
    for (let i = 0; i < MovieList.length && i < demoList.length; i++) {
        console.log(demoList[i]);
        demoList[i].src = MovieList[i].img.src;
        let href = MovieList[i].title;
        href += ".html"
        demoList[i].href = href;
    }
}

function search_movies() {
    let input = document.getElementById("searchID").value;
    input = input.toLowerCase();
    let movieList = document.getElementsByClassName("movies");
    console.log(input);
    for (i = 0; i < MovieList.length; i++) {
        if (!MovieList[i].title.toLowerCase().includes(input) || input == "" || input == " ") {
            // console.log(MovieList[i].title);
            // console.log("Cant find the item");
        } else {
            console.log(MovieList[i].title);
            console.log("Found the item");
            movieList[0].style.display = "block";
            movieList[0].src = MovieList[i].img.src;
            console.log(MovieList[i].img.src);
        }
    }
}


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

function clickHeart(id) {
    var heartButton = document.getElementById(id);
    if (id.search("top") != -1) {
        heartButton.addEventListener('click', function () {
            if (heartButton.className == 'icontop fa-regular fa-heart') {
                heartButton.className = 'icontop fa-solid fa-heart';
                alert("Successfully added to watchlist!");
            } else {
                heartButton.className = 'icontop fa-regular fa-heart'
                alert("Successfully removed from watchlist!");
            }
        })
    } else {
        heartButton.addEventListener('click', function () {
            if (heartButton.className == 'icon fa-regular fa-heart') {
                heartButton.className = 'icon fa-solid fa-heart';
                alert("Successfully added to watchlist!");
            } else {
                heartButton.className = 'icon fa-regular fa-heart';
                alert("Successfully removed from watchlist!");
            }
        })
    }
}

clickHeart("watch1");
clickHeart("watch2");
clickHeart("watch3");
clickHeart("watch4");

clickHeart("top#1");
clickHeart("top#2");
clickHeart("top#3");
clickHeart("top#4");
clickHeart("top#5");

clickHeart("recom1");
clickHeart("recom2");