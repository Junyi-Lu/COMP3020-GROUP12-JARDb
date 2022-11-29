class Movie {
    constructor(title, primaryCategory, secondaryCategory, rating, imgsrc, mainChar, actor2, actor3, href) {
        this.title = title;
        this.primaryCategory = primaryCategory;
        this.secondaryCategory = secondaryCategory;
        this.rating = rating;
        this.src = imgsrc;
        this.mainChar = mainChar;
        this.actor2 = actor2;
        this.actor3 = actor3;
        this.href = href;
    }
}

const deadpool = new Movie("Deadpool", "Action", "Comedy", 4.5, "images/deadpool.jpeg", "Ryan Reynolds", "Morena Baccarin", "Gina Carano", "movies/Deadpool/deadpool.html");
const americanSniper = new Movie("AmericanSniper", "Action", "Biography", 4.5, "images/americansniper.jpeg", "Bradley Cooper", "Sienna Miller", "Kyle Gallner", "movies/AmericanSniper/americansniper.html");
const gattaca = new Movie("Gattaca", "Sci-Fi", "Romance", 3.9, "images/gattaca.jpeg", "Ethan Hawke", "Uma Thurma", "Jude Law", "movies/template/template.html");
const nope = new Movie("Nope", "Horror", "Sci-Fi", 3.5, "images/nope.jpeg", "Daniel Kaluuya", "Keke Palmer", "Brandon Peresa","movies/template/template.html");
const theBatman = new Movie("TheBatman", "Action", "Crime", 4.0, "images/thebatman.jpeg", "Robert Pattinson", "Zoe Kravitz", "Jeffrey Wright", "movies/TheBatman/theBatman.html");
const dune = new Movie("Dune", "Sci-Fi", "Adventure", 4.0, "images/dune.jpeg", "Timothee Chalamet", "Zendaya", "Jason Momoa", "movies/template/template.html");
const interstellar = new Movie("Interstellar", "Sci-Fi", "Adventure", 4.5, "images/interstellar.jpeg", "Matthew McConaughey", "Jessica Chastain", "Anne Hathaway", "movies/template/template.html");
let MovieList = [deadpool, americanSniper, gattaca, nope, theBatman, dune, interstellar];
let arr = ["americansniper", "deadpool", "gattaca", "nope", "thebatman", "dune", "interstellar"];
let WatchList = [];
let length = 0;
let MAX_WATCH_LIST = 4;

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
            a.href = "../../movies/Deadpool/deadpool.html";
            images.src = "../../images/deadpool.jpeg";
        } else if (res[i] == "americansniper") {
            a.href = "../../movies/AmericanSniper/americansniper.html";
            images.src = "../../images/americansniper.jpeg";
        } else if (res[i] == "gattaca") {
            a.href = "../../movies/template/template.html";
            images.src = "../../images/gattaca.jpeg";
        } else if (res[i] == "nope") {
            a.href = "../../movies/template/template.html";
            images.src = "../../images/nope.jpeg";
        } else if (res[i] == "thebatman") {
            a.href = "../../movies/TheBatman/theBatman.html";
            images.src = "../../images/thebatman.jpeg";
        } else if (res[i] == "dune") {
            a.href = "../../movies/template/template.html";
            images.src = "../../images/dune.jpeg";
        } else if (res[i] == "interstellar") {
            a.href = "../../movies/template/template.html";
            images.src = "../../images/interstellar.jpeg"
        } else {
            a.href = "../../movies/template/template.html";
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

var toTop = document.getElementById("get_top");
toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

window.onscroll = function () {
    display();
};

function display() {
    if (document.documentElement.scrollTop > 300) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

function clickHeart(id) {
    button = document.getElementById(id);
    button.addEventListener('click', function () {
        if (button.className == "icon fa-regular fa-heart") {
            button.className = "icon fa-solid fa-heart";
        } else {
            button.className = "icon fa-regular fa-heart";
        }
    })
}

clickHeart("watch1");