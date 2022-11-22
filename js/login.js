function login() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("userpass").value;

    if (name == "admin", pass == "admin") {
<<<<<<< Updated upstream
        window.location.href = "index.html";
=======
        window.location.href = "newindex.html";
>>>>>>> Stashed changes
        return false;
    } else {
        alert("Incorrect Username/Password");
        window.location.href = "login.html";
        return false;
    }
}

var input = document.getElementById("userpass");
var button = document.getElementById("trigger")
button.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
        button.className = 'ri-eye-line';
    } else {
        input.type = 'password';
        button.className = 'ri-eye-off-line';
    }
})