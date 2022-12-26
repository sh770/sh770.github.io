let counter = 0;

let userName;
let passWord;

async function get_users8() {
    const response = await fetch("../../assets/static/users.json");
    const data = await response.json();
    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;

    for (let key in data.users) {
        if ((userName == data.users[key].username) && (passWord == data.users[key].password)) {
            console.log(userName + "\n" + passWord)
            return true
        }

    }
    return false
}
async function get_users() {
    document.getElementById("lbl").textContent = ""
    let a = await get_users8()
    if (a == true) {
        localStorage.setItem("username", userName);
        localStorage.setItem("password", passWord);
        document.getElementById("lbl").textContent = "אתה מחובר"
        localStorage.setItem("user", "login")
        window.location.assign("/../../website/src/index.html")
        // console.log(999);

    } else {
        document.getElementById("lbl").textContent = "שם או סיסמה שגויים"
        count();

        // alert("שם או סיסמה שגויים");
    }
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function count() {
    counter++
    // alert(0)
    if (counter == 1) {
        document.getElementById("lbl2").textContent = "  נותרו לך עוד 2 נסיונות "
    }
    else if (counter == 2) {
        document.getElementById("lbl2").textContent = "  נותר לך עוד נסיון אחד  "
    }
    else if (counter == 3) {
        document.getElementById("lbl2").textContent = "נגמרו לך הנסיונות"
        document.getElementById("lbl3").textContent = "תוכל לנסות שוב בעוד 3 דקות"
        resetCounter()
        console.log(5555)
    }
    localStorage.setItem("counter", counter)

}

const resetCounter = () => {
    document.getElementById("button").disabled = true;
    setTimeout(() => {
        counter = 0;
        document.getElementById("lbl").textContent = ""
        document.getElementById("lbl2").textContent = ""
        document.getElementById("lbl3").textContent = ""
        console.log(`Counter reset to ${counter}`);
        document.getElementById("button").disabled = false;
        localStorage.setItem("counter", 0)

    }, 10000)
}