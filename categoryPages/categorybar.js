
let arr = ["americansniper", "deadpool", "gattaca", "nope", "thebatman", "dune", "interstellar"];


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
            a.href = "../movies/Deadpool/deadpool.html";
            images.src = "../images/deadpool.jpeg";
        } else if (res[i] == "americansniper") {
            a.href = "../movies/AmericanSniper/americansniper.html";
            images.src = "../images/americansniper.jpeg";
        } else if (res[i] == "gattaca") {
            a.href = "../movies/template/template.html";
            images.src = "../images/gattaca.jpeg";
        } else if (res[i] == "nope") {
            a.href = "../movies/template/template.html";
            images.src = "../images/nope.jpeg";
        } else if (res[i] == "thebatman") {
            a.href = "../movies/TheBatman/theBatman.html";
            images.src = "../images/thebatman.jpeg";
        } else if (res[i] == "dune") {
            a.href = "../movies/template/template.html";
            images.src = "../images/dune.jpeg";
        } else if (res[i] == "interstellar") {
            a.href = "../movies/template/template.html";
            images.src = "../images/interstellar.jpeg"
        } else {
            a.href = "../movies/template/template.html";
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