// main script for the web app

function login() {
    // window.location.assign("/login/src/login.html")
    window.location.assign("/login/src/login.html")
}

function checklog() {
    if (localStorage.getItem("user", "login")) {
        console.log("login is true")
    } else {
        console.log("login is false")
        window.location.assign("/login/src/login.html")
    }
}

checklog();

function logout() {
    // alert(770)
    localStorage.removeItem("user");
    // localStorage.clear();
    window.location.assign("/login/src/login.html")
}