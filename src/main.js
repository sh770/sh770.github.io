// main script for the web app
// window.location.assign ("/login/src/login.html")

function login() {
    // window.location.assign("/login/src/login.html")
    window.location.assign("/login/src/login.html")
  }
//   setTimeout(function(){document.location.href = "login/src/login.html"},500);

function checklog(){
    if (localStorage.login == true){
        console.log("login is true")
    }else{
        console.log("login is false")

    }
}

checklog();