

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
            images.src = "images/deadpool.jpeg";
        } else if (res[i] == "americansniper") {
            a.href = "moviePages/main.html";
            images.src = "images/americansniper.jpeg";
        } else if (res[i] == "gattaca") {
            a.href = "moviePages/main.html";
            images.src = "images/gattaca.jpeg";

        } else if (res[i] == "nope") {
            a.href = "moviePages/main.html";
            images.src = "images/nope.jpeg";
        } else {
            a.href = "moviePages/main.html";
            images.src = "images/thebatman.jpeg";
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