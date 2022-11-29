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


















// Questions will be asked
const Questions = [{
	id: 0,
	q: "Welcome to ASK AI!\n You will be recommended a movie using artificical technology based on your answers.\n Please select a language for your movie to begin.",
	a: [{ text: "English" },
	{ text: " 中文維基百科" },
	{ text: "עִבְרִית" },
	{ text: "বাংলা" }
	]

},
{
	id: 1,
	q: "What genre do you want it to be?",
	a: [{ text: "Action" },
	{ text: "Horror" },
	{ text: "Comedy" },
	{ text: "Thriller" }
	]

},
{
	id: 2,
	q: "Who will be watching?",
	a: [{ text: "Kids" },
	{ text: "Family" },
	{ text: "Adults" },
	{ text: "Friends" }
	]

}



]
document.getElementById("question").style.fontSize = "x-large";


// Set start
var start = true;

// Iterate
function iterate(id) {


	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {

		op1.style.backgroundColor = " #fe921f";
		op2.style.backgroundColor = "transparent";
		op3.style.backgroundColor = "transparent";
		op4.style.backgroundColor = "transparent";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {

		op1.style.backgroundColor = "transparent";
		op2.style.backgroundColor = " #fe921f";
		op3.style.backgroundColor = "transparent";
		op4.style.backgroundColor = "transparent";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {

		op1.style.backgroundColor = "transparent";
		op2.style.backgroundColor = "transparent";
		op3.style.backgroundColor = " #fe921f";
		op4.style.backgroundColor = "transparent";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {

		op1.style.backgroundColor = "transparent";
		op2.style.backgroundColor = "transparent";
		op3.style.backgroundColor = "transparent";
		op4.style.backgroundColor = " #fe921f";
		selected = op4.value;
	})

	// Grabbing the evaluate button


}

if (start) {
	iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
var click = 0;
var selected = "";

next.addEventListener("click", () => {
	click++;
	start = false;
	if (click < 4) {
		op1.style.backgroundColor = "transparent";
		op2.style.backgroundColor = " transparent";
		op3.style.backgroundColor = "transparent";
		op4.style.backgroundColor = "transparent";


	}

	if (id < 2) {
		id++;
		iterate(id);
		console.log(id);
	}
	else if (click == 3) {
		next.textContent = 'Watch Now';
		const question = document.getElementById("question");


		const op1 = document.getElementById('op1');
		const op2 = document.getElementById('op2');
		const op3 = document.getElementById('op3');
		const op4 = document.getElementById('op4');


		op1.textContent = "Based on your answers, you have been suggested to watch the above! ";


		op2.remove()
		op3.remove()
		op4.remove()


		question.classList.remove("question-container")
		op1.classList.remove("option")
		question.textContent = ""


		document.getElementById("op1").style.fontSize = "x-large";
		document.getElementById("op1").style.color = "white";
		const img = document.createElement("img");
		img.src = "images/thebatman.jpeg";

		document.getElementById("question").appendChild(img);


		afterNext++;

	}
	else if (click >= 4) {
		href = "movies/TheBatman/theBatman.html"
		window.location.assign(href);
	}


})


