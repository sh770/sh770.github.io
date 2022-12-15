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
