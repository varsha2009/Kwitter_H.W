
function next_page(){
    var user_name = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    localStorage.setItem("user-name",user_name);
    localStorage.setItem("user_password",password);
    window.location = "screen2.html"
}

