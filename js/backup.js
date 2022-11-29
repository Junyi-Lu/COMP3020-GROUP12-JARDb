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

onloadstart = getWatchList();
onloadstart = defaultWatchList();

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
            a.href = "movies/Deadpool/deadpool.html";
            images.src = "images/deadpool.jpeg";
        } else if (res[i] == "americansniper") {
            a.href = "movies/AmericanSniper/americansniper.html";
            images.src = "images/americansniper.jpeg";
        } else if (res[i] == "gattaca") {
            a.href = "movies/template/template.html";
            images.src = "images/gattaca.jpeg";
        } else if (res[i] == "nope") {
            a.href = "movies/template/template.html";
            images.src = "images/nope.jpeg";
        } else if (res[i] == "thebatman") {
            a.href = "movies/TheBatman/theBatman.html";
            images.src = "images/thebatman.jpeg";
        } else if (res[i] == "dune") {
            a.href = "movies/template/template.html";
            images.src = "images/dune.jpeg";
        } else if (res[i] == "interstellar") {
            a.href = "movies/template/template.html";
            images.src = "images/interstellar.jpeg"
        } else {
            a.href = "movies/template/template.html";
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
    let currWatchList = document.getElementsByClassName("watchList");
    let watchIMG = document.getElementsByClassName("watchIMG");
    let icontop = document.getElementsByClassName("iconstop");
    let icons = document.getElementsByClassName("iconsrecom");
    let videotop = document.getElementsByClassName("icontop fa-solid fa-video");
    let video = document.getElementsByClassName("iconrecom fa-solid fa-video");
    let inWatchList = false;
    var heartButton = document.getElementById(id);
    let title = document.getElementById(id).getAttribute("movieTitle");
    title = title.toLowerCase();
    if (id.search("top") != -1) {
        heartButton.addEventListener('click', function () {
            title = document.getElementById(id).getAttribute("movieTitle");
            inWatchList = isInWatchList(title);
            if (heartButton.className == 'icontop fa-regular fa-heart') {
                for (i = 0; i < MovieList.length; i++) {
                    if (MovieList[i].title.toLowerCase().includes(title)) {
                        if (!inWatchList) {
                            length++;
                            heartButton.setAttribute("movieTitle", title);
                            WatchList.push(MovieList[i]);
                        }
                    }
                }
                heartButton.className = 'icontop fa-solid fa-heart';
                alert("Successfully added to watchlist!");
            } else {
                for (i = 0; i < WatchList.length; i++) {
                    if (WatchList[i].title.toLowerCase().includes(title)) {
                        if (WatchList[i].title.toLowerCase().includes(title)) {
                            length--;
                            if(i <MAX_WATCH_LIST){
                                currWatchList[i].setAttribute("href", "#");
                                videotop[i].setAttribute("href", "#");
                                currWatchList[i].setAttribute("width", 0);
                                icontop[i].style.display = "none";
                                videotop[i].style.display = "none";
                            }
                            WatchList.splice(i, 1);
                        }
                    }
                }
                heartButton.className = 'icontop fa-regular fa-heart';
                alert("Successfully removed from watchlist!");
            }
            displayWatchList();
        })
    } else {
        heartButton.addEventListener('click', function () {
            title = document.getElementById(id).getAttribute("movieTitle");
            inWatchList = isInWatchList(title);
            if (heartButton.className == 'iconrecom fa-regular fa-heart') {
                for (i = 0; i < MovieList.length; i++) {
                    if (MovieList[i].title.toLowerCase().includes(title)) {
                        if (!inWatchList) {
                            length++;
                            heartButton.setAttribute("movieTitle", title);
                            WatchList.push(MovieList[i]);
                        }
                    }
                }
                heartButton.className = 'iconrecom fa-solid fa-heart';
                alert("Successfully added to watchlist!");
            } else {
                for (i = 0; i < WatchList.length; i++) {
                    if (WatchList[i].title.toLowerCase().includes(title)) {
                        if (WatchList[i].title.toLowerCase().includes(title)) {
                            length--;
                            if(i <MAX_WATCH_LIST){
                                currWatchList[i].setAttribute("href", "#");
                                video[i].setAttribute("href", "#");
                                currWatchList[i].setAttribute("width", 0);
                            }
                            WatchList.splice(i, 1);
                        }
                    }
                }
                heartButton.className = 'iconrecom fa-regular fa-heart';
                alert("Successfully removed from watchlist!");
            }
            displayWatchList();
        })
    }
}

function defaultWatchList() {
    let onHover = document.getElementsByClassName("watch-content");
    let currWatchList = document.getElementsByClassName("watchList");
    let icons = document.getElementsByClassName("icons");
    let heart = document.getElementsByClassName("icon fa-solid fa-video");
    for (i = 0; i < currWatchList.length; i++) {
        onHover[i].style.display = "none";
        currWatchList[i].setAttribute("width", 0);
        icons[i].style.display = "none";
        heart[i].style.display = "none";
    }
    displayWatchList();
}

function displayWatchList() {
    let onHover = document.getElementsByClassName("watch-content");
    let currWatchList = document.getElementsByClassName("watchList");
    let watchIMG = document.getElementsByClassName("watchIMG");
    let icons = document.getElementsByClassName("icons");
    let video = document.getElementsByClassName("icon fa-solid fa-video");
    let heartHollow = document.getElementsByClassName("icon fa-regular fa-heart");
    let heartFull = document.getElementsByClassName("icon fa-solid fa-heart");
    for (i = 0; i < currWatchList.length && i < watchIMG.length; i++) {
        if (WatchList[i] != undefined) {
            watchIMG[i].src = WatchList[i].src;
            let href = WatchList[i].href;
            currWatchList[i].setAttribute("href", href);
            video[i].setAttribute("href", href);
            icons[i].style.display = "flex";
            video[i].style.display = "flex";
            if (heartHollow[i] != undefined) {
                heartHollow[i].setAttribute("movieTitle", WatchList[i].title.toLowerCase());
                heartHollow[i].style.display = "inline-block";
            }
            if (heartFull[i] != undefined) {
                heartFull[i].setAttribute("movieTitle", WatchList[i].title.toLowerCase());
                heartFull[i].style.display = "block";
            }
            onHover[i].style.display = "flex";
        }
    }
    fixRecom();
    fixTop5();
    saveWatchList();
}

function saveWatchList() {
    for (i = 0; i < length; i++) {
        const jsonWatchList = JSON.stringify(WatchList[i]);
        console.log(jsonWatchList);
        // save to localStorage with watchList and the current length as key, 
        //and also saving the length of the array, with key length
        localStorage.setItem("watchList" + i, jsonWatchList);
    }
    localStorage.setItem("length", length);
    console.log(WatchList.length);
    console.log(localStorage.getItem("length"));
    makeClean();
}

function getWatchList() {
    let added = false;
    let inlength = localStorage.getItem("length");
    length = inlength;
    console.log(inlength);
    for (i = 0; i < inlength; i++) {
        console.log("geting");
        // get the JSON object string from localStorage
        const str = localStorage.getItem('watchList' + i);
        console.log("watchList" + i);
        // convert JSON string to relevant object if defined
        if (!(str == undefined)) {
            const parsedArray = JSON.parse(str);
            for (j = 0; j < WatchList.length; j++) {
                if (WatchList[j].title.toLowerCase().includes(parsedArray.title.toLowerCase())) {
                    added = true;
                }
            }
            if (!added) {
                WatchList.push(parsedArray);
            }
        }
    }

}

function makeClean() {
    let onHover = document.getElementsByClassName("watch-content");
    let currWatchList = document.getElementsByClassName("watchList");
    let watchIMG = document.getElementsByClassName("watchIMG");
    let icons = document.getElementsByClassName("icons");
    let video = document.getElementsByClassName("icon fa-solid fa-video");

    for (i = 0; i < MAX_WATCH_LIST; i++) {
        if (i >= WatchList.length) {
            onHover[i].style.display = "none";
            currWatchList[i].setAttribute("href", "#");
            video[i].setAttribute("href", "#");
            currWatchList[i].setAttribute("width", 0);
            icons[i].style.display = "none";
            video[i].style.display = "none";
        }
    }
}

function clearWatchList() {
    let importedLength = localStorage.getItem("length");
    for (i = 0; i < importedLength; i++) {
        localStorage.removeItem("watchList" + i);
    }
    localStorage.removeItem("length");
}

function isInWatchList(title) {
    let inWatchList = false;
    for (j = 0; j < WatchList.length; j++) {
        if (WatchList[j].title.toLowerCase().includes(title)) {
            inWatchList = true;
        }
    }
    return inWatchList;
}

function fixTop5() {
    let icons = document.getElementsByClassName("iconstop");
    let video = document.getElementsByClassName("icontop fa-solid fa-video");
    let heartHollow = document.getElementsByClassName("icontop fa-regular fa-heart");
    let heartFull = document.getElementsByClassName("icontop fa-solid fa-heart");
    for (i = 0; i < icons.length; i++) {
        icons[i].style.display = "flex";
        video[i].style.display = "flex";
        if (heartHollow[i] != undefined) {
            heartHollow[i].style.display = "block";
        }
        if (heartFull[i] != undefined) {
            heartFull[i].style.display = "block";
        }
    }
}

function fixRecom() {
    let icons = document.getElementsByClassName("iconsrecom");
    let video = document.getElementsByClassName("iconrecom fa-solid fa-video");
    let heartHollow = document.getElementsByClassName("iconrecom fa-regular fa-heart");
    let heartFull = document.getElementsByClassName("icon fa-solid fa-heart");
    for (i = 0; i < icons.length; i++) {
        icons[i].style.display = "flex";
        video[i].style.display = "flex";
        if (heartHollow[i] != undefined) {
            heartHollow[i].style.display = "block";
        }
        if (heartFull[i] != undefined) {
            heartFull[i].style.display = "block";
        }
    }
}

 


clickHeart("recom1");
clickHeart("recom2");
clickHeart("recom6");
clickHeart("recom7");
clickHeart("recom8");
clickHeart("recom9");
clickHeart("recom10");


var prevWatch = document.getElementById("previousWatch");

prevWatch.addEventListener('click', function (){
    console.log("clicked on Prev")
    if(WatchList.length > MAX_WATCH_LIST){
        let temp = WatchList[0];
        WatchList.shift();
        WatchList.push(temp);
    }
    displayWatchList();
})

var nextWatch = document.getElementById("nextWatch");
nextWatch.addEventListener('click', function (){
    if(WatchList.length > MAX_WATCH_LIST){
        WatchList.unshift(WatchList.pop());
    }
    displayWatchList();
})
