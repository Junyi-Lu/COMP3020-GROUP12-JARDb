function login() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("userpass").value;

    if (name == "admin", pass == "admin") {
        window.location.href = "newIndex.html";
        return false;
    } else {
        alert("Incorrect Username/Password");
        window.location.href = "login.html";
        return false;
    }
}
