async function get_data() {
    const response = await fetch("../../assets/static/users.json");
    const data = await response.json();
    console.log(data.users_page);
    let user_login ;
    let user_password ;
    for (let key in data.users_page){
        user_login = data.users_page[key].username55;
        user_password = data.users_page[key].password55;
    
        
    const user_val = document.getElementById("user").value;
    const password_val = document.getElementById("pass").value;
    // console.log(user_login);
    if (user_val == user_login && password_val == user_password){
        alert(`${user_login}`);
    }else{
        alert("try again");
    }
}
}
get_data();

let Data_Base1;


let json1 = fetch("../../assets/static/users.json")
    .then(r => r.json())
    .then(data1 => {
        Data_Base1 = data1;
    });

console.log(Data_Base1)









function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == Data_Base.user.username && password == Data_Base.user.password) {
        // document.getElementById("form").style.display = "none";
        // document.getElementById("admin").style.display = "block";
        // buildTable();
        alert(`${username}`);
        alert(`${user_login}`);
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("שם או סיסמה שגויים");
    }

}