let userName;
let passWord;
// assets\static\users.json
async function get_users8(){
    const response =  await fetch("../../assets/static/users.json");
    const data = await response.json();
    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;

    for (let key in data.users) {
        if ((userName == data.users[key].username) && (passWord == data.users[key].password )){
            console.log(userName + "\n" + passWord)
            return true
        } 
        
    }
return false
}
async function get_users(){
    document.getElementById("lbl").textContent = ""
         let a = await get_users8()
        if (a == true) {
            localStorage.setItem("username", userName);
            localStorage.setItem("password", passWord);
            document.getElementById("lbl").textContent = "אתה מחובר"
            localStorage.setItem("user", "login")
            // console.log(999);

        }else{
            document.getElementById("lbl").textContent = "שם או סיסמה שגויים"
        // alert("שם או סיסמה שגויים");
        }
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
    }